import { Suspense } from "react";
import { ManufacturerDashboardSidebarHeaderTeamSwitcherTrigger_Async } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/team-switcher/trigger/trigger.async";
import { ManufacturerDashboardSidebarHeaderTeamSwitcherTrigger_Fallback } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/team-switcher/trigger/trigger.fallback";
import { SidebarMenu, SidebarMenuItem } from "@vendero/_components/ui/sidebar";

export function ManufacturerDashboardSidebarHeaderTeamSwitcherTrigger() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Suspense
          fallback={
            <ManufacturerDashboardSidebarHeaderTeamSwitcherTrigger_Fallback />
          }
        >
          <ManufacturerDashboardSidebarHeaderTeamSwitcherTrigger_Async />
        </Suspense>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
