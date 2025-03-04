"use client";

import { useLocale, useTranslations } from "next-intl";
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
import { FormErrorAlert } from "@vendero/_components/common/form/alert";
import { Input } from "@vendero/_components/ui/input";
import { SubmitButton } from "@vendero/_components/common/form/submit-button";
import { resetPassword } from "@vendero/app/[locale]/auth/reset-password/_lib/actions/reset-password";
import { handleServerValidationError } from "@vendero/_lib/utils/errors/client/server-validation-error-handler";
import { redirect } from "@vendero/_lib/i18n/routing";

export function ResetPasswordForm() {
  const t = useTranslations("auth.reset-password.form");
  const locale = useLocale();

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

    redirect({ href: "/app", locale });
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
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

        {/*        <Turnstile
          size="invisible"
          className="hidden"
          sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onVerify={(token) => form.setValue("captcha", token)}
        />*/}

        <SubmitButton label={t("submit")} />
      </form>
    </Form>
  );
}
