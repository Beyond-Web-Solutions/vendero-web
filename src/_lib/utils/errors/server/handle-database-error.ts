import { PostgrestError } from "@supabase/supabase-js";
import { ServerActionResponse } from "@/_lib/types/response";
import { getLocale, getTranslations } from "next-intl/server";

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
