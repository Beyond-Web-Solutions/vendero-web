import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@vendero/_components/ui/sidebar";
import { ManufacturerDashboardSidebarAccountMenu } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/account-menu/button/base";
import { ManufacturerDashboardSidebarHeader } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/base";
import { ManufacturerDashboardSidebarSecondaryNav } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/nav/secondary/list";
import { ManufacturerDashboardSidebarMainNav } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/nav/main/list";

export function ManufacturerDashboardSidebar() {
  return (
    <Sidebar variant="inset">
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
