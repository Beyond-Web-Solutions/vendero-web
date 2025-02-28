import { AuthError } from "@supabase/supabase-js";
import { ServerActionResponse } from "@/_lib/types/response";
import { getTranslations } from "next-intl/server";

export async function handleSupabaseAuthError<Schema, Response = undefined>(
  error: AuthError,
): ServerActionResponse<Schema, Response> {
  const t = await getTranslations("auth.errors");

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
