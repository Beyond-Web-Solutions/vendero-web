"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@vendero/_components/ui/form";
import { useForm } from "react-hook-form";
import {
  SignUpFormData,
  signUpSchema,
} from "@vendero/app/[locale]/auth/sign-up/_lib/definitions/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorAlert } from "@vendero/_components/common/form/alert";
import { useLocale, useTranslations } from "next-intl";
import { Input } from "@vendero/_components/ui/input";
import { SubmitButton } from "@vendero/_components/common/form/submit-button";
import Turnstile, { useTurnstile } from "react-turnstile";
import { signUp } from "../_lib/actions/sign-up";
import { handleServerValidationError } from "@vendero/_lib/utils/errors/client/server-validation-error-handler";
import { redirect } from "@vendero/_lib/i18n/routing";

export function SignUpForm() {
  const turnstile = useTurnstile();

  const t = useTranslations("auth.sign-up.form");
  const locale = useLocale();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      captcha: "",
    },
  });

  async function onSubmit(values: SignUpFormData) {
    const response = await signUp(values);

    if (!response.ok) {
      turnstile.reset();

      return handleServerValidationError<SignUpFormData>(
        response.errors,
        form.setError,
      );
    }

    redirect({
      href: {
        pathname: "/auth/confirm-email",
        query: { email: response.data },
      },
      locale,
    });
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormErrorAlert />

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
