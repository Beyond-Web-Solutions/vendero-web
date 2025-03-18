import { DashboardPageSection } from "@vendero/app/[locale]/dashboard/_components/section/base";
import { useTranslations } from "next-intl";
import { Card } from "@vendero/_components/ui/card";

export function DashboardAccountSettingsSecurityTwoFactor() {
  const t = useTranslations("dashboard.common.account.security.two-factor");

  return (
    <DashboardPageSection title={t("title")} description={t("description")}>
      <Card></Card>
    </DashboardPageSection>
  );
}
