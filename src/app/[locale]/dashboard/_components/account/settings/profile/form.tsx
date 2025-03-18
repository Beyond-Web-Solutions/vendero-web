"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdateProfileFormData,
  updateProfileSchema,
} from "@vendero/app/[locale]/dashboard/_lib/definitions/profile";
import { Tables } from "@vendero/_lib/types/supabase";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@vendero/_components/ui/form";
import { Card, CardContent, CardFooter } from "@vendero/_components/ui/card";
import { SubmitButton } from "@vendero/_components/common/form/submit-button";
import { useTranslations } from "next-intl";
import { FormErrorAlert } from "@vendero/_components/common/form/alert";
import { Input } from "@vendero/_components/ui/input";
import { handleServerValidationError } from "@vendero/_lib/utils/errors/client/server-validation-error-handler";
import { updateProfile } from "@vendero/app/[locale]/dashboard/_lib/actions/profile";

interface Props {
  profile: Tables<"profiles"> | null;
}

export function DashboardAccountSettingsProfileForm({ profile }: Props) {
  const t = useTranslations("dashboard.common.account.settings.profile.form");

  const form = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      first_name: profile?.first_name ?? "",
      last_name: profile?.last_name ?? "",
    },
  });

  async function onSubmit(values: UpdateProfileFormData) {
    const response = await updateProfile(values);

    if (!response.ok) {
      return handleServerValidationError<UpdateProfileFormData>(
        response.errors,
        form.setError,
      );
    }
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4 pb-6">
            <FormErrorAlert />

            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("first_name.label")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("last_name.label")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="justify-end border-t pt-6">
            <SubmitButton label={t("submit")} />
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
