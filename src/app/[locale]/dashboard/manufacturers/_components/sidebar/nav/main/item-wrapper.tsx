"use client";

import { usePathname } from "@vendero/_lib/i18n/routing";
import { ReactNode } from "react";
import { Href } from "@vendero/_lib/types/link";
import { SidebarMenuButton } from "@vendero/_components/ui/sidebar";

interface Props {
  title: string;
  href: Href;
  children: ReactNode;
}

export function ManufacturerDashboardSidebarMainNavItemWrapper({
  title,
  href,
  children,
}: Props) {
  const path = usePathname();

  return (
    <SidebarMenuButton asChild isActive={path === href} tooltip={title}>
      {children}
    </SidebarMenuButton>
  );
}
