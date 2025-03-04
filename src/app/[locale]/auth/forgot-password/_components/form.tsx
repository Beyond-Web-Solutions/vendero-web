"use client";

import { useTranslations } from "next-intl";
import Turnstile, { useTurnstile } from "react-turnstile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "@vendero/app/[locale]/auth/forgot-password/_lib/definitions/forgot-password";
import { FormErrorAlert } from "@vendero/_components/common/form/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@vendero/_components/ui/form";
import { SubmitButton } from "@vendero/_components/common/form/submit-button";
import { Input } from "@vendero/_components/ui/input";
import { handleServerValidationError } from "@vendero/_lib/utils/errors/client/server-validation-error-handler";
import { forgotPassword } from "@vendero/app/[locale]/auth/forgot-password/_lib/actions/forgot-password";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@vendero/_components/ui/alert";
import { MailCheckIcon } from "lucide-react";

export function ForgotPasswordForm() {
  const turnstile = useTurnstile();
  const router = useRouter();
  const params = useSearchParams();

  const t = useTranslations("auth.forgot-password.form");

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
      captcha: "",
    },
  });

  async function onSubmit(values: ForgotPasswordFormData) {
    const response = await forgotPassword(values);

    if (!response.ok) {
      turnstile.reset();

      return handleServerValidationError<ForgotPasswordFormData>(
        response.errors,
        form.setError,
      );
    }

    router.push("?success=true");
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormErrorAlert />

        {params.get("success") === "true" && (
          <Alert>
            <MailCheckIcon className="h-4 w-4" />
            <AlertTitle>{t("alert.title")}</AlertTitle>
            <AlertDescription>{t("alert.description")}</AlertDescription>
          </Alert>
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email.label")}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t("email.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Turnstile
          size="invisible"
          className="hidden"
          sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onVerify={(token) => form.setValue("captcha", token)}
        />

        <SubmitButton label={t("submit")} />
      </form>
    </Form>
  );
}
