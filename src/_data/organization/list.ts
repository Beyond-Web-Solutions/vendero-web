import { revalidateTag, unstable_cache } from "next/cache";
import { createClient } from "@vendero/_lib/utils/supabase/server";
import { getUser } from "../user/get";

export function revalidateOrganizationsForCurrentUserCache(userId: string) {
  revalidateTag(`organizations:${userId}`);
}

export async function getOrganizationsForCurrentUser() {
  const supabase = await createClient();

  const user = await getUser();

  if (!user) {
    return [];
  }

  return unstable_cache(
    async (_userId: string) => {
      const { data: organizationIds } = await supabase
        .from("organization_members")
        .select("organization_id")
        .eq("user_id", _userId);

      const ids =
        organizationIds?.map(({ organization_id }) => organization_id) ?? [];

      const { data } = await supabase
        .from("organizations")
        .select()
        .in("id", ids);

      return data ?? [];
    },
    [user.id],
    {
      tags: [`organizations:${user.id}`],
    },
  )(user.id);
}

export async function getOrganizationCountForCurrentUser() {
  const supabase = await createClient();

  const user = await getUser();

  if (!user) {
    return 0;
  }

  return unstable_cache(
    async () => {
      const { data } = await supabase.rpc("count_org_members");

      return data ?? 0;
    },
    [user.id],
    {
      tags: [`organizations:${user.id}`],
    },
  )();
}
