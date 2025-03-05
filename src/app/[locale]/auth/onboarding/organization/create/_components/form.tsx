"use client";

import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateOrganizationFormData,
  createOrganizationSchema,
} from "@vendero/app/[locale]/auth/onboarding/organization/create/_lib/definitions/create-organization";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@vendero/_components/ui/form";
import { FormErrorAlert } from "@vendero/_components/common/form/alert";
import { Input } from "@vendero/_components/ui/input";
import { SubmitButton } from "@vendero/_components/common/form/submit-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@vendero/_components/ui/select";
import { FactoryIcon, StoreIcon } from "lucide-react";
import { createOrganization } from "@vendero/app/[locale]/auth/onboarding/organization/create/_lib/actions/create-organization";
import { handleServerValidationError } from "@vendero/_lib/utils/errors/client/server-validation-error-handler";
import { redirect } from "@vendero/_lib/i18n/routing";

export function CreateOrganizationForm() {
  const t = useTranslations("onboarding.organization.create.form");
  const locale = useLocale();

  const form = useForm<CreateOrganizationFormData>({
    resolver: zodResolver(createOrganizationSchema),
    defaultValues: {
      name: "",
      email: "",
      billing_email: "",
      type: "shop",
    },
  });

  async function onSubmit(values: CreateOrganizationFormData) {
    const response = await createOrganization(values);

    if (!response.ok) {
      return handleServerValidationError<CreateOrganizationFormData>(
        response.errors,
        form.setError,
      );
    }

    redirect({ href: "/auth/onboarding/billing", locale });
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormErrorAlert />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("name.label")}</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email.label")}</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormDescription>{t("email.description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="billing_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("billing_email.label")}</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("type.label")}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("type.placeholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="manufacturer">
                    <span className="flex items-center gap-2">
                      <FactoryIcon />
                      {t("type.values.manufacturer")}
                    </span>
                  </SelectItem>
                  <SelectItem value="shop">
                    <span className="flex items-center gap-2">
                      <StoreIcon />
                      {t("type.values.shop")}
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton label={t("submit")} />
      </form>
    </Form>
  );
}
