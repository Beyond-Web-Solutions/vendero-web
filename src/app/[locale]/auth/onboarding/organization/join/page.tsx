import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { Link } from "@vendero/_lib/i18n/routing";
import { Button } from "@vendero/_components/ui/button";
import { Separator } from "@vendero/_components/ui/separator";

export default function OnboardingJoinOrganizationPage({ params }: PageProps) {
  const { locale } = use(params);

  // enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("onboarding.organization.join");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
        <Button variant="link" className="w-full" asChild>
          <Link href="/auth/onboarding/organization">{t("links.back")}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
