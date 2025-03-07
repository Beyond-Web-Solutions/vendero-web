import { unstable_cache } from "next/cache";
import { createClient } from "@vendero/_lib/utils/supabase/server";

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
