import { getUserOrganization } from "@vendero/_data/organization-member/get";
import { SidebarMenuButton } from "@vendero/_components/ui/sidebar";
import { FactoryIcon } from "lucide-react";
import { ClientLink } from "@vendero/_components/common/link/client";
import { getTranslations } from "next-intl/server";

export async function ManufacturerDashboardSidebarHeaderTeamSwitcherTrigger_Async() {
  const [organization, t] = await Promise.all([
    getUserOrganization(),
    getTranslations("dashboard.common"),
  ]);

  return (
    <SidebarMenuButton size="lg" asChild>
      <ClientLink href="/dashboard/manufacturers">
        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
          <FactoryIcon className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">
            {organization?.name || t("unknown-organization-name")}
          </span>
          <span className="truncate text-xs">{t("types.manufacturer")}</span>
        </div>
      </ClientLink>
    </SidebarMenuButton>
  );
}
