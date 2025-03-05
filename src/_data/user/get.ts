import { cache } from "react";
import { User } from "@supabase/supabase-js";
import { getLocale, getTranslations } from "next-intl/server";
import { createClient } from "@vendero/_lib/utils/supabase/server";
import { ServerActionResponse } from "@vendero/_lib/types/response";

export const getUser = cache(async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
});

export async function getUserServerAction<Schema>(): ServerActionResponse<
  Schema,
  User
> {
  const user = await getUser();

  const locale = await getLocale();

  const t = await getTranslations({
    locale,
    namespace: "common.errors.server",
  });

  if (!user) {
    return {
      ok: false,
      errors: { fieldErrors: {}, formErrors: [t("no-user")] },
    };
  }

  return { ok: true, data: user };
}
