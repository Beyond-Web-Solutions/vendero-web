import { createClient } from "@vendero/_lib/utils/supabase/server";
import { unstable_cache } from "next/cache";
import { getUserOrganization } from "@vendero/_data/organization-member/get";

export async function getInvoicesForUserOrganization() {
  const supabase = await createClient();

  const organization = await getUserOrganization();

  if (!organization) {
    return [];
  }

  return unstable_cache(
    async () => {
      const { data } = await supabase.rpc("get_invoices").select(`
        id, 
        total,
        currency,
        status,
        period_start,
        period_end,
        number: attrs->>number,
        hosted_invoice_url: attrs->>hosted_invoice_url
      `);

      return data;
    },
    [organization.id],
    {
      tags: [`subscription:${organization.customer_id}`],
    },
  )();
}
