import { createClient } from "@vendero/_lib/utils/supabase/server";
import { unstable_cache } from "next/cache";

export async function getShopPricingPlans() {
  const supabase = await createClient();

  return unstable_cache(
    async () => {
      const { data } = await supabase.rpc("get_shop_pricing_plans");

      return data ?? [];
    },
    [],
    { revalidate: 86_400 },
  )();
}
