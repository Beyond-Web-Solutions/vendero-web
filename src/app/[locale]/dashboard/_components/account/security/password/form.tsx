"use client";

import { useForm } from "react-hook-form";
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@vendero/app/[locale]/auth/reset-password/_lib/definitions/reset-password";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { resetPassword } from "@vendero/app/[locale]/auth/reset-password/_lib/actions/reset-password";
import { handleServerValidationError } from "@vendero/_lib/utils/errors/client/server-validation-error-handler";

export function UpdatePasswordForm() {
  const t = useTranslations("dashboard.common.account.security.password.form");

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  async function onSubmit(values: ResetPasswordFormData) {
    const response = await resetPassword(values);

    if (!response.ok) {
      return handleServerValidationError<ResetPasswordFormData>(
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("password.label")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("password.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("confirm.label")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("confirm.placeholder")}
                      {...field}
                    />
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
