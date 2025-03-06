import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { useTranslations } from "next-intl";
import { Button } from "@vendero/_components/ui/button";
import { Link } from "@vendero/_lib/i18n/routing";

export function BillingReturnFailed() {
  const t = useTranslations("onboarding.billing.error");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href="/auth/onboarding/billing">{t("cta")}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
