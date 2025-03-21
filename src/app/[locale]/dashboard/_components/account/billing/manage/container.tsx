import { DashboardPageSection } from "@vendero/app/[locale]/dashboard/_components/section/base";
import { useTranslations } from "next-intl";
import { Card, CardAction, CardFooter } from "@vendero/_components/ui/card";
import { DashboardAccountManageBillingCardHeader } from "@vendero/app/[locale]/dashboard/_components/account/billing/manage/header/base";
import { CancelSubscriptionButton } from "@vendero/app/[locale]/dashboard/_components/account/billing/manage/cancel-subscription/button";
import { UpdateSubscriptionButton } from "@vendero/app/[locale]/dashboard/_components/account/billing/manage/update-subscription-plan/button";

export function DashboardAccountManageBilling() {
  const t = useTranslations("dashboard.common.account.billing.manage");

  return (
    <DashboardPageSection title={t("title")} description={t("description")}>
      <Card>
        <DashboardAccountManageBillingCardHeader />
        <CardFooter className="justify-between border-t">
          <CardAction>
            <CancelSubscriptionButton />
          </CardAction>
          <CardAction>
            <UpdateSubscriptionButton />
          </CardAction>
        </CardFooter>
      </Card>
    </DashboardPageSection>
  );
}
