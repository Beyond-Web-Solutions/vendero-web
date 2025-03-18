import { DashboardPageSection } from "@vendero/app/[locale]/dashboard/_components/section/base";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { DashboardAccountSettingsProfileFallback } from "@vendero/app/[locale]/dashboard/_components/account/settings/profile/fallback";
import { DashboardAccountSettingsProfileAsync } from "@vendero/app/[locale]/dashboard/_components/account/settings/profile/async";

export function DashboardAccountSettingsProfileContainer() {
  const t = useTranslations("dashboard.common.account.settings.profile");

  return (
    <DashboardPageSection title={t("title")} description={t("description")}>
      <Suspense fallback={<DashboardAccountSettingsProfileFallback />}>
        <DashboardAccountSettingsProfileAsync />
      </Suspense>
    </DashboardPageSection>
  );
}
