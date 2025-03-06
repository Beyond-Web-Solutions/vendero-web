import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { useTranslations } from "next-intl";
import { OnboardingPricing } from "@vendero/app/[locale]/auth/onboarding/billing/_components/base";

export default function SelectOrganizationPage({ params }: PageProps) {
  const { locale } = use(params);

  // enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("onboarding.billing");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <OnboardingPricing locale={locale} />
      </CardContent>
    </Card>
  );
}
