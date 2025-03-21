import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { DashboardHeader } from "@vendero/app/[locale]/dashboard/_components/page-header/base";
import { DashboardAccountSettingsSecurityPassword } from "@vendero/app/[locale]/dashboard/_components/account/security/password/container";

export default function ManufacturerDashboardAccountSecurityPage({
  params,
}: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("dashboard.common.account.security");

  return (
    <>
      <DashboardHeader label={t("title")} />
      <div className="grid gap-8 py-10">
        <DashboardAccountSettingsSecurityPassword />
        {/*<DashboardAccountSettingsSecurityTwoFactor />*/}
      </div>
    </>
  );
}
