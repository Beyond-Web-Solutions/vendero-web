import { getPlan } from "@vendero/_data/pricing/plan";
import {
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { getLocale, getTranslations } from "next-intl/server";
import { getUserOrganizationSubscription } from "@vendero/_data/subscription/get";
import { formatBillingCycleDate } from "@vendero/_lib/utils/ui/date";
import { UpdatePaymentMethodButton } from "@vendero/app/[locale]/dashboard/_components/account/billing/manage/update-payment-method/button";

export async function DashboardAccountManageBillingCardHeaderAsync() {
  const [plan, subscription, t, locale] = await Promise.all([
    getPlan(),
    getUserOrganizationSubscription(),
    getTranslations("dashboard.common.account.billing.manage.header"),
    getLocale(),
  ]);

  return (
    <CardHeader className="items-center">
      <CardTitle>
        {plan?.name ? t("plan", { plan: plan.name }) : t("unknown-plan")}
      </CardTitle>
      <CardDescription>
        {t("current-billing-cycle", {
          start: formatBillingCycleDate(
            subscription?.current_period_start,
            locale,
          ),
          end: formatBillingCycleDate(subscription?.current_period_end, locale),
        })}
      </CardDescription>
      <CardAction>
        <UpdatePaymentMethodButton />
      </CardAction>
    </CardHeader>
  );
}
