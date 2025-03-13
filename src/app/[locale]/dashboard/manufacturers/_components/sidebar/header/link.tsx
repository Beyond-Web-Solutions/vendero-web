"use client";

import { ComponentProps } from "react";
import { Link } from "@vendero/_lib/i18n/routing";

export function ManufacturerDashboardSidebarHeaderLink({
  children,
  ...props
}: Omit<ComponentProps<"a">, "href">) {
  return (
    <Link href="/dashboard/manufacturers" {...props}>
      {children}
    </Link>
  );
}
