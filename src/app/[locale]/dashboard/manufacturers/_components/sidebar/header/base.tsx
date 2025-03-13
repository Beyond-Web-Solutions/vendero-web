import { Suspense } from "react";
import { ManufacturerDashboardSidebarHeaderAsync } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/async";
import { ManufacturerDashboardSidebarHeaderFallback } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/fallback";

export function ManufacturerDashboardSidebarHeader() {
  return (
    <Suspense fallback={<ManufacturerDashboardSidebarHeaderFallback />}>
      <ManufacturerDashboardSidebarHeaderAsync />
    </Suspense>
  );
}
