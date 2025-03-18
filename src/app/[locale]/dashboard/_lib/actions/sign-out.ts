"use server";

import { createClient } from "@vendero/_lib/utils/supabase/server";
import { redirect } from "@vendero/_lib/i18n/routing";
import { getLocale } from "next-intl/server";

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut({ scope: "local" });

  const locale = await getLocale();

  redirect({ href: "/", locale });
}
