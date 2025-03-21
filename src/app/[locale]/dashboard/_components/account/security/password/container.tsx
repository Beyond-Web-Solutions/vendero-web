import { DashboardPageSection } from "@vendero/app/[locale]/dashboard/_components/section/base";
import { useTranslations } from "next-intl";
import { UpdatePasswordForm } from "@vendero/app/[locale]/dashboard/_components/account/security/password/form";
import { Suspense } from "react";
import { DashboardAccountSettingsSecurityPasswordFallback } from "@vendero/app/[locale]/dashboard/_components/account/security/password/fallback";

export function DashboardAccountSettingsSecurityPassword() {
  const t = useTranslations("dashboard.common.account.security.password");

  return (
    <DashboardPageSection title={t("title")} description={t("description")}>
      <Suspense fallback={<DashboardAccountSettingsSecurityPasswordFallback />}>
        <UpdatePasswordForm />
      </Suspense>
    </DashboardPageSection>
  );
}
