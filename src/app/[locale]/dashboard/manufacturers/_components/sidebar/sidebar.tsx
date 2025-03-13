import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@vendero/_components/ui/sidebar";
import { ManufacturerDashboardSidebarAccountMenu } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/trigger/base";
import { ManufacturerDashboardSidebarHeader } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/team-switcher/base";
import { ManufacturerDashboardSidebarSecondaryNav } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/nav/secondary/list";
import { ManufacturerDashboardSidebarMainNav } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/nav/main/list";
import { ComponentProps } from "react";

export function ManufacturerDashboardSidebar(
  props: ComponentProps<typeof Sidebar>,
) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <ManufacturerDashboardSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <ManufacturerDashboardSidebarMainNav />
        <ManufacturerDashboardSidebarSecondaryNav className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <ManufacturerDashboardSidebarAccountMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
