import { PageProps } from "@vendero/_lib/types/props";
import { Suspense, use } from "react";
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
import { Link } from "@vendero/_lib/i18n/routing";

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
      <CardContent className="grid gap-6">
        <OnboardingPricing locale={locale} />

        <div className="text-center text-sm">
          {t("links.prefix")}
          <Link
            href="/pricing"
            target="_blank"
            className="ms-1 underline underline-offset-4"
          >
            {t("links.cta")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
