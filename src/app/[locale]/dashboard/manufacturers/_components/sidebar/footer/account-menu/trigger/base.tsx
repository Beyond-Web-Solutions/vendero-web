import { Suspense } from "react";
import { ManufacturerDashboardSidebarAccountMenuFallback } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/trigger/fallback";
import { ManufacturerDashboardSidebarAccountMenuAsync } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/trigger/async";

export function ManufacturerDashboardSidebarAccountMenu() {
  return (
    <Suspense fallback={<ManufacturerDashboardSidebarAccountMenuFallback />}>
      <ManufacturerDashboardSidebarAccountMenuAsync />
    </Suspense>
  );
}
