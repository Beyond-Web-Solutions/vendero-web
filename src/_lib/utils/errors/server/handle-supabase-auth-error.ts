import { AuthError } from "@supabase/supabase-js";
import { getTranslations } from "next-intl/server";
import { ServerActionResponse } from "@vendero/_lib/types/response";

export async function handleSupabaseAuthError<Schema, Response = undefined>(
  error: AuthError,
): ServerActionResponse<Schema, Response> {
  const t = await getTranslations("common.errors.auth");

  console.error(error);

  if (!error.code) {
    return {
      ok: false,
      errors: { fieldErrors: {}, formErrors: [t("unknown")] },
    };
  }

  return {
    ok: false,
    errors: { fieldErrors: {}, formErrors: [t(error.code as never)] },
  };
}
