"use client";

import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import {
  SignInFormData,
  signInSchema,
} from "@vendero/app/[locale]/auth/sign-in/_lib/definitions/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import Turnstile, { useTurnstile } from "react-turnstile";
import { handleServerValidationError } from "@vendero/_lib/utils/errors/client/server-validation-error-handler";
import { Link, redirect } from "@vendero/_lib/i18n/routing";
import { FormErrorAlert } from "@vendero/_components/common/form/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@vendero/_components/ui/form";
import { Input } from "@vendero/_components/ui/input";
import { SubmitButton } from "@vendero/_components/common/form/submit-button";
import { signIn } from "@vendero/app/[locale]/auth/sign-in/_lib/actions/sign-in";

export function SignInForm() {
  const turnstile = useTurnstile();

  const t = useTranslations("auth.sign-in.form");
  const locale = useLocale();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      captcha: "",
    },
  });

  async function onSubmit(values: SignInFormData) {
    const response = await signIn(values);

    if (!response.ok) {
      turnstile.reset();

      return handleServerValidationError<SignInFormData>(
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
              <div className="flex items-center">
                <FormLabel>{t("password.label")}</FormLabel>
                <Link
                  href="/auth/forgot-password"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  {t("password.forgot")}
                </Link>
              </div>
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
