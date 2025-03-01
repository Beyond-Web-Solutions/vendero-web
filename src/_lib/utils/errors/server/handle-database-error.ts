import { PostgrestError } from "@supabase/supabase-js";
import { getLocale, getTranslations } from "next-intl/server";
import { ServerActionResponse } from "@vendero/_lib/types/response";

export async function handleDatabaseError<Schema, Response = undefined>(
  key: string,
  error: PostgrestError,
): ServerActionResponse<Schema, Response> {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: "common.errors.server",
  });

  console.error(error);

  return {
    ok: false,
    errors: {
      fieldErrors: {},
      formErrors: [t(key as never)],
    },
  };
}
