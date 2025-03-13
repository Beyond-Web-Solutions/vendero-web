import { ComponentProps } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@vendero/_components/ui/sidebar";
import { ManufacturerDashboardSidebarHeaderTeamSwitcherTrigger } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/team-switcher/trigger/trigger.base";

export function ManufacturerDashboardSidebar(
  props: ComponentProps<typeof Sidebar>,
) {
  return (
    <Sidebar
      className="top-[var(--header-height)] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <ManufacturerDashboardSidebarHeaderTeamSwitcherTrigger />
      </SidebarHeader>
      <SidebarContent>
        {/*<NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />*/}
      </SidebarContent>
      <SidebarFooter>{/*<NavUser user={data.user} />*/}</SidebarFooter>
    </Sidebar>
  );
}
