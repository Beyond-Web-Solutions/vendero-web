import { DashboardHeaderFallback } from "@vendero/app/[locale]/dashboard/_components/page-header/fallback";
import { DashboardPageSectionFallback } from "@vendero/app/[locale]/dashboard/_components/section/fallback";

export default function LoadingManufacturerDashboardAccountPage() {
  return (
    <>
      <DashboardHeaderFallback />
      <DashboardPageSectionFallback />
    </>
  );
}
