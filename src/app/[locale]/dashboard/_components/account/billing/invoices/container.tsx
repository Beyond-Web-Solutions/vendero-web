import { DashboardPageSection } from "@vendero/app/[locale]/dashboard/_components/section/base";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { DashboardAccountBillingInvoicesAsync } from "@vendero/app/[locale]/dashboard/_components/account/billing/invoices/async";
import { DashboardAccountBillingInvoicesFallback } from "@vendero/app/[locale]/dashboard/_components/account/billing/invoices/fallback";

export function DashboardAccountBillingInvoices() {
  const t = useTranslations("dashboard.common.account.billing.invoices");

  return (
    <DashboardPageSection title={t("title")} description={t("description")}>
      <Suspense fallback={<DashboardAccountBillingInvoicesFallback />}>
        <DashboardAccountBillingInvoicesAsync />
      </Suspense>
    </DashboardPageSection>
  );
}
