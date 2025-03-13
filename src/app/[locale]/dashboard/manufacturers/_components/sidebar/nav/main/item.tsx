import { Href } from "@vendero/_lib/types/link";
import { LucideIcon } from "lucide-react";
import { SidebarMenuItem } from "@vendero/_components/ui/sidebar";
import { ClientLink } from "@vendero/_components/common/link/client";
import { ComponentProps, createElement } from "react";
import { ManufacturerDashboardSidebarMainNavItemWrapper } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/nav/main/item-wrapper";

interface Props extends ComponentProps<typeof SidebarMenuItem> {
  title: string;
  href: Href;
  icon: LucideIcon;
}

export function ManufacturerDashboardSidebarMainNavItem({
  href,
  title,
  icon,
  ...props
}: Props) {
  return (
    <SidebarMenuItem {...props}>
      <ManufacturerDashboardSidebarMainNavItemWrapper href={href} title={title}>
        <ClientLink href={href}>
          {createElement(icon)}
          <span>{title}</span>
        </ClientLink>
      </ManufacturerDashboardSidebarMainNavItemWrapper>
    </SidebarMenuItem>
  );
}
