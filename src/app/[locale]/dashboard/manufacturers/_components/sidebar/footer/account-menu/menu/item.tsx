"use client";

import { DropdownMenuItem } from "@vendero/_components/ui/dropdown-menu";
import { Link, usePathname } from "@vendero/_lib/i18n/routing";
import { Href } from "@vendero/_lib/types/link";
import { ReactNode } from "react";
import { cn } from "@vendero/_lib/utils/ui/cn";

interface Props {
  href: Href;
  children: ReactNode;
}

export function ManufacturerDashboardSidebarFooterAccountMenuItem({
  href,
  children,
}: Props) {
  const path = usePathname();

  return (
    <DropdownMenuItem
      aria-current={path === href ? "page" : undefined}
      className={cn(path === href && "bg-accent")}
      asChild
    >
      <Link href={href}>{children}</Link>
    </DropdownMenuItem>
  );
}
