import { Suspense } from "react";
import { ManufacturerDashboardSidebarAccountMenuFallback } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/account-menu/button/fallback";
import { ManufacturerDashboardSidebarAccountMenuAsync } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/account-menu/button/async";

export function ManufacturerDashboardSidebarAccountMenu() {
  return (
    <Suspense fallback={<ManufacturerDashboardSidebarAccountMenuFallback />}>
      <ManufacturerDashboardSidebarAccountMenuAsync />
    </Suspense>
  );
}
