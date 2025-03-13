import { Suspense } from "react";
import { ManufacturerDashboardSidebarHeaderAsync } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/team-switcher/async";
import { ManufacturerDashboardSidebarHeaderFallback } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/team-switcher/fallback";

export function ManufacturerDashboardSidebarHeader() {
  return (
    <Suspense fallback={<ManufacturerDashboardSidebarHeaderFallback />}>
      <ManufacturerDashboardSidebarHeaderAsync />
    </Suspense>
  );
}
