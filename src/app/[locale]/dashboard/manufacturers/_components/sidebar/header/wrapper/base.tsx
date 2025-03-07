import { Suspense } from "react";
import { ManufacturerDashboardSidebarHeaderAsync } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/wrapper/async";
import { ManufacturerDashboardSidebarHeaderFallback } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/wrapper/fallback";

export function ManufacturerDashboardSidebarHeader() {
  return (
    <Suspense fallback={<ManufacturerDashboardSidebarHeaderFallback />}>
      <ManufacturerDashboardSidebarHeaderAsync />
    </Suspense>
  );
}
