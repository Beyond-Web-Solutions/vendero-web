import { cache } from "react";
import { unstable_cache } from "next/cache";
import { getUser } from "@vendero/_data/user/get";
import { createClient } from "@vendero/_lib/utils/supabase/server";

export async function getOrganizationId(): Promise<string | undefined | null> {
  const user = await getUser();

  return user?.user_metadata?.organization_id;
}

export const getUserOrganization = cache(async () => {
  const organizationId = await getOrganizationId();

  if (!organizationId) {
    return null;
  }

  return getOrganization(organizationId);
});

export async function getOrganization(id: string) {
  const supabase = await createClient();

  return unstable_cache(
    async (_id: string) => {
      const { data } = await supabase
        .from("organizations")
        .select()
        .eq("id", _id)
        .maybeSingle();

      return data;
    },
    [],
    { tags: [`organization:${id}`] },
  )(id);
}
