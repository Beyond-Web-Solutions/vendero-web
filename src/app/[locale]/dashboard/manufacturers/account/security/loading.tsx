import { DashboardHeaderFallback } from "@vendero/app/[locale]/dashboard/_components/page-header/fallback";
import { DashboardAccountSettingsSecurityPasswordFallback } from "@vendero/app/[locale]/dashboard/_components/account/security/password/fallback";

export default function LoadingManufacturerDashboardAccountPage() {
  return (
    <>
      <DashboardHeaderFallback />
      <DashboardAccountSettingsSecurityPasswordFallback />
    </>
  );
}
