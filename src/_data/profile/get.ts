import { getUser } from "@vendero/_data/user/get";
import { unstable_cache } from "next/cache";
import { createClient } from "@vendero/_lib/utils/supabase/server";

export async function getUserProfile() {
  const supabase = await createClient();
  const user = await getUser();

  if (!user) {
    return null;
  }

  return unstable_cache(
    async (id: string) => {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      return data;
    },
    [user.id],
  )(user.id);
}
