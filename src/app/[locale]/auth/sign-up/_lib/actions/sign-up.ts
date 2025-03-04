"use server";

import {
  SignUpFormData,
  signUpSchema,
} from "@vendero/app/[locale]/auth/sign-up/_lib/definitions/sign-up";

import { createClient } from "@vendero/_lib/utils/supabase/server";
import { ServerActionResponse } from "@vendero/_lib/types/response";
import { handleSupabaseAuthError } from "@vendero/_lib/utils/errors/server/handle-supabase-auth-error";
import { getUrl } from "@vendero/_lib/utils/routing/url";
import { getLocale } from "next-intl/server";
import { getPathname } from "@vendero/_lib/i18n/routing";

export async function signUp(
  values: SignUpFormData,
): ServerActionResponse<SignUpFormData, string> {
  const parsed = signUpSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten(),
    };
  }
  const [supabase, locale] = await Promise.all([createClient(), getLocale()]);

  const url = getUrl();
  url.pathname = getPathname({ href: "/auth/confirm-email/success", locale });

  const { email, password, captcha } = parsed.data;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      captchaToken: captcha,
      emailRedirectTo: url.toString(),
    },
  });

  if (error) {
    return handleSupabaseAuthError<SignUpFormData, string>(error);
  }

  return { ok: true, data: parsed.data.email };
}
