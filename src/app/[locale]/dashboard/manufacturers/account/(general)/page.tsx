import { PageProps } from "@vendero/_lib/types/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { DashboardHeader } from "@vendero/app/[locale]/dashboard/_components/page-header/base";
import { useTranslations } from "next-intl";
import { DashboardAccountSettingsProfileContainer } from "@vendero/app/[locale]/dashboard/_components/account/settings/profile/container";

export default function ManufacturerDashboardAccountPage({
  params,
}: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("dashboard.common.account.settings");

  return (
    <>
      <DashboardHeader label={t("title")} />
      <div className="grid gap-6 py-6">
        <DashboardAccountSettingsProfileContainer />
      </div>
    </>
  );
}
