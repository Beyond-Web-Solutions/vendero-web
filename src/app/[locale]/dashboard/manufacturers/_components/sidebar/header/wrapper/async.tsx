import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@vendero/_components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@vendero/_components/ui/dropdown-menu";
import { getUserOrganization } from "@vendero/_data/organization-member/get";
import { ChevronsUpDownIcon, FactoryIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function ManufacturerDashboardSidebarHeaderAsync() {
  const [t, organization] = await Promise.all([
    getTranslations("dashboard.manufacturer.nav.header"),
    getUserOrganization(),
  ]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <FactoryIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {organization?.name || t("unknown-org-name")}
                </span>
                <span className="truncate text-xs">{t("type")}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
