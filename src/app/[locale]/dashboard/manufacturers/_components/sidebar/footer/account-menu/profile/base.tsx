import { Suspense } from "react";
import { ManufacturerDashboardSidebarFooterAccountMenuProfile_Fallback } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/profile/fallback";
import { ManufacturerDashboardSidebarFooterAccountMenuProfile_Async } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/profile/async";

export function ManufacturerDashboardSidebarFooterAccountMenuProfile() {
  return (
    <Suspense
      fallback={
        <ManufacturerDashboardSidebarFooterAccountMenuProfile_Fallback />
      }
    >
      <ManufacturerDashboardSidebarFooterAccountMenuProfile_Async />
    </Suspense>
  );
}
