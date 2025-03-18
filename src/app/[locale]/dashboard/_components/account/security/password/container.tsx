import { DashboardPageSection } from "@vendero/app/[locale]/dashboard/_components/section/base";
import { useTranslations } from "next-intl";
import { UpdatePasswordForm } from "@vendero/app/[locale]/dashboard/_components/account/security/password/form";

export function DashboardAccountSettingsSecurityPassword() {
  const t = useTranslations("dashboard.common.account.security.password");

  return (
    <DashboardPageSection title={t("title")} description={t("description")}>
      <UpdatePasswordForm />
    </DashboardPageSection>
  );
}
