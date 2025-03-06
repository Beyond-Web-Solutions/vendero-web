import { createClient } from "@vendero/_lib/utils/supabase/server";
import { unstable_cache } from "next/cache";
import { getUser } from "@vendero/_data/user/get";

export async function getUserOrganizationSubscription() {
  const supabase = await createClient();

  const user = await getUser();

  if (!user) {
    return null;
  }

  return unstable_cache(async () => {
    const { data } = await supabase.rpc("get_subscription");

    return data;
  }, [user.id])();
}
