import { ClientLink } from "@vendero/_components/common/link/client";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@vendero/_components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import { Href } from "@vendero/_lib/types/link";
import { ComponentProps, createElement } from "react";

interface Props extends ComponentProps<typeof SidebarMenuItem> {
  icon: LucideIcon;
  title: string;
  href: Href;
}

export function ManufacturerDashboardSidebarSecondaryNavItem({
  icon,
  title,
  href,
  ...props
}: Props) {
  return (
    <SidebarMenuItem {...props}>
      <SidebarMenuButton asChild size="sm">
        <ClientLink href={href}>
          {createElement(icon)}
          <span>{title}</span>
        </ClientLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
