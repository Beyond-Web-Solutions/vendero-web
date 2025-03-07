import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { useTranslations } from "next-intl";
import { Button } from "@vendero/_components/ui/button";
import { Link } from "@vendero/_lib/i18n/routing";
import { ChevronRightIcon } from "lucide-react";

export default function OnboardingWelcomePage({ params }: PageProps) {
  const { locale } = use(params);

  // enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("onboarding.welcome");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardFooter className="border-t">
        <Button className="w-full" asChild>
          <Link href="/auth/onboarding/organization">
            {t("cta")}
            <ChevronRightIcon className="ms-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
