"use server";

import { ServerActionResponse } from "@vendero/_lib/types/response";
import { SignInFormData, signInSchema } from "../definitions/sign-in";
import { createClient } from "@vendero/_lib/utils/supabase/server";
import { handleSupabaseAuthError } from "@vendero/_lib/utils/errors/server/handle-supabase-auth-error";

export async function signIn(
  values: SignInFormData,
): ServerActionResponse<SignInFormData> {
  const parsed = signInSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten(),
    };
  }

  const supabase = await createClient();
  const { email, password, captcha } = parsed.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      captchaToken: captcha,
    },
  });

  if (error) {
    return handleSupabaseAuthError(error);
  }

  return { ok: true };
}
