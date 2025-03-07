import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@vendero/_components/ui/sidebar";
import { ManufacturerDashboardSidebarAccountMenu } from "./account-menu/wrapper/base";
import { ManufacturerDashboardSidebarHeader } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/header/wrapper/base";

export function ManufacturerDashboardSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <ManufacturerDashboardSidebarHeader />
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <ManufacturerDashboardSidebarAccountMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
