import { Suspense } from "react";
import { DashboardAccountManageBillingCardHeaderAsync } from "@vendero/app/[locale]/dashboard/_components/account/billing/manage/header/async";
import { DashboardAccountManageBillingCardHeaderFallback } from "@vendero/app/[locale]/dashboard/_components/account/billing/manage/header/fallback";

export function DashboardAccountManageBillingCardHeader() {
  return (
    <Suspense fallback={<DashboardAccountManageBillingCardHeaderFallback />}>
      <DashboardAccountManageBillingCardHeaderAsync />
    </Suspense>
  );
}
