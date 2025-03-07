import { getUser } from "@vendero/_data/user/get";
import { cache } from "react";
import { createClient } from "@vendero/_lib/utils/supabase/server";
import { unstable_cache } from "next/cache";

export async function getOrganizationId(): Promise<string | undefined | null> {
  const user = await getUser();

  return user?.user_metadata?.organization_member_id;
}

export const getUserOrganization = cache(async () => {
  const memberId = await getOrganizationId();
  const user = await getUser();

  if (!memberId || !user) {
    return null;
  }

  return getOrganizationMember(memberId, user.id);
});

export async function getOrganizationMember(id: string, userId: string) {
  const supabase = await createClient();

  return unstable_cache(
    async (_id: string, _userId: string) => {
      const { data } = await supabase
        .from("organization_members")
        .select("organizations(*)")
        .eq("id", _id)
        .eq("user_id", _userId)
        .maybeSingle();

      return data?.organizations;
    },
    [userId],
    {
      tags: [`organization-member:${id}`, `organization-member:user:${userId}`],
    },
  )(id, userId);
}
