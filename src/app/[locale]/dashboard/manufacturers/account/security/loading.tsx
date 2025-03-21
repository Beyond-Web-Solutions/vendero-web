import { DashboardHeaderFallback } from "@vendero/app/[locale]/dashboard/_components/page-header/fallback";
import { DashboardPageSectionFallback } from "@vendero/app/[locale]/dashboard/_components/section/fallback";
import { DashboardAccountSettingsSecurityPasswordFallback } from "@vendero/app/[locale]/dashboard/_components/account/security/password/fallback";

export default function LoadingManufacturerDashboardAccountPage() {
  return (
    <>
      <DashboardHeaderFallback />
      <div className="grid gap-8 py-10">
        <DashboardPageSectionFallback>
          <DashboardAccountSettingsSecurityPasswordFallback />
        </DashboardPageSectionFallback>
      </div>
    </>
  );
}
