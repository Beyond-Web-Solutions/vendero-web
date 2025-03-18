import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { DashboardHeader } from "@vendero/app/[locale]/dashboard/_components/page-header/base";
import { DashboardAccountBillingInvoices } from "@vendero/app/[locale]/dashboard/_components/account/billing/invoices/container";

export default function ManufacturerDashboardAccountBillingPage({
  params,
}: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("dashboard.common.account.billing");

  return (
    <>
      <DashboardHeader label={t("title")} />
      <div className="grid gap-6 py-6">
        <DashboardAccountBillingInvoices />
      </div>
    </>
  );
}
