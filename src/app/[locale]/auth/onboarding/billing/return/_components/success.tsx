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
import { ChevronRightIcon } from "lucide-react";
import { BillingPlatformButton } from "@vendero/app/[locale]/auth/onboarding/billing/return/_components/billing-platform/base";

interface Props {
  sessionId: string;
}

export function BillingReturnSuccess({ sessionId }: Props) {
  const t = useTranslations("onboarding.billing.success");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Button asChild>
          <Link href="/dashboard">
            {t("cta")}
            <ChevronRightIcon className="ms-2" />
          </Link>
        </Button>
        <BillingPlatformButton sessionId={sessionId} />
      </CardContent>
    </Card>
  );
}
