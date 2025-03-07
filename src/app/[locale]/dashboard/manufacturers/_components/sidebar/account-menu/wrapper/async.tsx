import { ManufacturerDashboardSidebarAccountMenuContent } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/account-menu/content";
import { ManufacturerDashboardSidebarAccountMenuProfile } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/account-menu/profile";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@vendero/_components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@vendero/_components/ui/dropdown-menu";
import { getUserProfile } from "@vendero/_data/profile/get";
import { ChevronsUpDownIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getName } from "@vendero/_lib/utils/ui/name";

export async function ManufacturerDashboardSidebarAccountMenuAsync() {
  const [t, profile] = await Promise.all([
    getTranslations("dashboard.common.profile"),
    getUserProfile(),
  ]);

  const name = getName(
    profile?.first_name,
    profile?.last_name,
    t("unknown-name"),
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <ManufacturerDashboardSidebarAccountMenuProfile
                name={name}
                email={profile?.email || t("unknown-email")}
              />
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <ManufacturerDashboardSidebarAccountMenuContent
            name={name}
            email={profile?.email || t("unknown-email")}
          />
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
