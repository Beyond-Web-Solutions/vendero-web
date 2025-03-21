import { createClient } from "@vendero/_lib/utils/supabase/server";
import { getUserOrganization } from "@vendero/_data/organization-member/get";
import { unstable_cache } from "next/cache";
import Stripe from "stripe";

type Attrs = Stripe.Subscription & {
  plan: Stripe.Plan;
};

export async function getPlan() {
  const supabase = await createClient();

  const organization = await getUserOrganization();

  if (!organization) {
    return null;
  }

  return unstable_cache(
    async () => {
      const { data: subscription } = await supabase.rpc("get_subscription");

      if (!subscription) return null;

      const attrs = subscription.attrs as unknown as Attrs;
      console.log(attrs);

      if (organization.type === "shop") {
        const { data: plans } = await supabase.rpc("get_shop_pricing_plans");

        return plans?.find((plan) => plan.default_price === attrs.plan.id);
      }

      const { data: plans } = await supabase.rpc(
        "get_manufacturer_pricing_plans",
      );

      return plans?.find((plan) => plan.default_price === attrs.plan.id);
    },
    [organization.id],
    { tags: [`subscription:${organization.customer_id}`] },
  )();
}
