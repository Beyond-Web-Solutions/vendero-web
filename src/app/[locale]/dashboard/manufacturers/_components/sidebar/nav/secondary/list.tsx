import { ComponentProps } from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@vendero/_components/ui/sidebar";
import { ManufacturerDashboardSidebarSecondaryNavItem } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/nav/secondary/item";
import { useTranslations } from "next-intl";
import { LifeBuoyIcon, Send } from "lucide-react";

export function ManufacturerDashboardSidebarSecondaryNav(
  props: ComponentProps<typeof SidebarGroup>,
) {
  const t = useTranslations("dashboard.manufacturer.nav.content.secondary");

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <ManufacturerDashboardSidebarSecondaryNavItem
            icon={LifeBuoyIcon}
            title={t("support")}
            href="/help"
          />
          <ManufacturerDashboardSidebarSecondaryNavItem
            icon={Send}
            title={t("feedback")}
            href="/feedback"
          />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
