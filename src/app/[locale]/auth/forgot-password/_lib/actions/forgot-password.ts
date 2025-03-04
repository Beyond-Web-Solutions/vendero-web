"use server";

import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "@vendero/app/[locale]/auth/forgot-password/_lib/definitions/forgot-password";
import { ServerActionResponse } from "@vendero/_lib/types/response";
import { createClient } from "@vendero/_lib/utils/supabase/server";
import { getLocale } from "next-intl/server";
import { getUrl } from "@vendero/_lib/utils/routing/url";
import { getPathname } from "@vendero/_lib/i18n/routing";
import { handleSupabaseAuthError } from "@vendero/_lib/utils/errors/server/handle-supabase-auth-error";

export async function forgotPassword(
  values: ForgotPasswordFormData,
): ServerActionResponse<ForgotPasswordFormData> {
  const parsed = forgotPasswordSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten(),
    };
  }
  const [supabase, locale] = await Promise.all([createClient(), getLocale()]);

  const url = getUrl();
  url.pathname = getPathname({ href: "/auth/reset-password", locale });

  const { email, captcha } = parsed.data;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    captchaToken: captcha,
    redirectTo: url.toString(),
  });

  if (error) {
    return handleSupabaseAuthError(error);
  }

  return { ok: true };
}
