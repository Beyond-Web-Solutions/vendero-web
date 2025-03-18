import { createClient } from "@vendero/_lib/utils/supabase/server";
import { unstable_cache } from "next/cache";
import { getOrganization } from "@vendero/_data/organization/get";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@vendero/_lib/types/supabase";
import { getUserOrganization } from "@vendero/_data/organization-member/get";

export async function getUserOrganizationSubscription() {
  const supabase = await createClient();

  const organization = await getUserOrganization();

  if (!organization) {
    return null;
  }

  return unstable_cache(
    async () => {
      const { data } = await supabase.rpc("get_subscription");

      return data as Database["stripe"]["Tables"]["subscriptions"]["Row"];
    },
    [organization.id],
    { tags: [`subscription:${organization.customer_id}`] },
  )();
}

export async function getCachedSubscriptionForMiddleware(
  supabase: SupabaseClient<Database>,
  organizationId: string,
) {
  const organization = await getOrganization(organizationId);

  if (!organization) {
    return null;
  }

  return unstable_cache(
    async () => {
      const { data } = await supabase.rpc("get_subscription");

      return data as Database["stripe"]["Tables"]["subscriptions"]["Row"];
    },
    [organization.id],
    { tags: [`subscription:${organization.customer_id}`] },
  )();
}
