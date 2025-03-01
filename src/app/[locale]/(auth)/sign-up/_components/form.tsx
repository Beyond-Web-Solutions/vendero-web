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
} from "@vendero/app/[locale]/(auth)/sign-up/_lib/definitions/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorAlert } from "@vendero/_components/common/form-error-alert";
import { useTranslations } from "next-intl";
import { Input } from "@vendero/_components/ui/input";
import { SubmitButton } from "@vendero/_components/common/submit-button";

export function SignUpForm() {
  const t = useTranslations("auth.sign-up.form");

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
    console.log(values);
  }

  console.log(form.formState.errors);

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

        <SubmitButton label={t("submit")} />
      </form>
    </Form>
  );
}
