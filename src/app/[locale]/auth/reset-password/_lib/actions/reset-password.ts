"use server";

import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@vendero/app/[locale]/auth/reset-password/_lib/definitions/reset-password";
import { ServerActionResponse } from "@vendero/_lib/types/response";
import { createClient } from "@vendero/_lib/utils/supabase/server";
import { handleSupabaseAuthError } from "@vendero/_lib/utils/errors/server/handle-supabase-auth-error";

export async function resetPassword(
  values: ResetPasswordFormData,
): ServerActionResponse<ResetPasswordFormData> {
  const parsed = resetPasswordSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten(),
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: parsed.data.password,
  });

  if (error) {
    return handleSupabaseAuthError(error);
  }

  return { ok: true };
}
