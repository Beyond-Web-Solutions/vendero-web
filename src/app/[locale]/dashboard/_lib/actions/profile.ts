"use server";

import { ServerActionResponse } from "@vendero/_lib/types/response";
import {
  UpdateProfileFormData,
  updateProfileSchema,
} from "@vendero/app/[locale]/dashboard/_lib/definitions/profile";
import { createClient } from "@vendero/_lib/utils/supabase/server";
import { getUserServerAction } from "@vendero/_data/user/get";
import { handleServerActionError } from "@vendero/_lib/utils/errors/server/handle-server-action-error";
import { revalidateGetUserProfile } from "@vendero/_data/profile/get";

export async function updateProfile(
  values: UpdateProfileFormData,
): ServerActionResponse<UpdateProfileFormData> {
  const parsed = updateProfileSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten(),
    };
  }

  const getUserResponse = await getUserServerAction<UpdateProfileFormData>();

  if (!getUserResponse.ok) {
    return getUserResponse;
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update({
      ...parsed.data,
    })
    .eq("id", getUserResponse.data.id);

  if (error) {
    return handleServerActionError<UpdateProfileFormData>(
      "error-updating-profile",
      error,
    );
  }

  revalidateGetUserProfile(getUserResponse.data.id);

  return { ok: true };
}
