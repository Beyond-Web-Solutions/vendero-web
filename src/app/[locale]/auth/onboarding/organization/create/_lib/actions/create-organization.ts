"use server";

import { ServerActionResponse } from "@vendero/_lib/types/response";
import {
  CreateOrganizationFormData,
  createOrganizationSchema,
} from "@vendero/app/[locale]/auth/onboarding/organization/create/_lib/definitions/create-organization";
import { getUserServerAction } from "@vendero/_data/user/get";
import { createClient } from "@vendero/_lib/utils/supabase/server";
import { handleServerActionError } from "@vendero/_lib/utils/errors/server/handle-server-action-error";
import { handleSupabaseAuthError } from "@vendero/_lib/utils/errors/server/handle-supabase-auth-error";
import { revalidateOrganizationsForCurrentUserCache } from "@vendero/_data/organization/list";

export async function createOrganization(
  values: CreateOrganizationFormData,
): ServerActionResponse<CreateOrganizationFormData> {
  const parsed = createOrganizationSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten(),
    };
  }

  const getUserResponse =
    await getUserServerAction<CreateOrganizationFormData>();

  if (!getUserResponse.ok) {
    return getUserResponse;
  }

  const supabase = await createClient();

  const { error: createOrganizationError, data: organization } = await supabase
    .from("organizations")
    .insert(parsed.data)
    .select("id")
    .single();

  if (createOrganizationError) {
    return handleServerActionError<CreateOrganizationFormData>(
      "error-creating-organization",
      createOrganizationError,
    );
  }

  const { error: createEmployeeError } = await supabase
    .from("organization_members")
    .insert({
      organization_id: organization.id,
    });

  if (createEmployeeError) {
    return handleServerActionError<CreateOrganizationFormData>(
      "error-creating-organization-member",
      createEmployeeError,
    );
  }

  const { data: member } = await supabase
    .from("organization_members")
    .select("id")
    .eq("organization_id", organization.id)
    .eq("user_id", getUserResponse.data.id)
    .single();

  const { error: updateUserError } = await supabase.auth.updateUser({
    data: {
      organization_member_id: member?.id,
    },
  });

  if (updateUserError) {
    return handleSupabaseAuthError<CreateOrganizationFormData>(updateUserError);
  }

  revalidateOrganizationsForCurrentUserCache(getUserResponse.data.id);

  return { ok: true };
}
