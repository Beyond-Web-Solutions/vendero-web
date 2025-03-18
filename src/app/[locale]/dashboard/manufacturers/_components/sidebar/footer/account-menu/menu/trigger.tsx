import { ManufacturerDashboardSidebarFooterAccountMenuProfile } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/profile/base";
import { ManufacturerDashboardSidebarFooterAccountMenuContent } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/menu/content";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@vendero/_components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@vendero/_components/ui/dropdown-menu";
import { ChevronsUpDownIcon } from "lucide-react";

export function ManufacturerDashboardSidebarFooterAccountMenu() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <ManufacturerDashboardSidebarFooterAccountMenuProfile />
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <ManufacturerDashboardSidebarFooterAccountMenuContent
            label={<ManufacturerDashboardSidebarFooterAccountMenuProfile />}
          />
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
