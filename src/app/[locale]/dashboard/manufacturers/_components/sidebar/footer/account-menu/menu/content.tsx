"use client";

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@vendero/_components/ui/dropdown-menu";
import { useSidebar } from "@vendero/_components/ui/sidebar";
import { CreditCardIcon, LockIcon, UserCogIcon } from "lucide-react";
import { ReactNode } from "react";
import { ManufacturerDashboardSidebarFooterAccountMenuSignOut } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/menu/items/sign-out/button";
import { useTranslations } from "next-intl";
import { ManufacturerDashboardSidebarFooterAccountMenuItem } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/account-menu/menu/item";

interface Props {
  label: ReactNode;
}

export function ManufacturerDashboardSidebarFooterAccountMenuContent({
  label,
}: Props) {
  const { isMobile } = useSidebar();
  const t = useTranslations("dashboard.common.account-menu");

  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align="end"
      sideOffset={4}
    >
      <DropdownMenuLabel className="p-0 font-normal">
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          {label}
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <ManufacturerDashboardSidebarFooterAccountMenuItem href="/dashboard/manufacturers/account">
          <UserCogIcon />
          {t("settings")}
        </ManufacturerDashboardSidebarFooterAccountMenuItem>
        <ManufacturerDashboardSidebarFooterAccountMenuItem href="/dashboard/manufacturers/account/security">
          <LockIcon />
          {t("security")}
        </ManufacturerDashboardSidebarFooterAccountMenuItem>
        <ManufacturerDashboardSidebarFooterAccountMenuItem href="/dashboard/manufacturers/account/billing">
          <CreditCardIcon />
          {t("billing")}
        </ManufacturerDashboardSidebarFooterAccountMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <ManufacturerDashboardSidebarFooterAccountMenuSignOut />
    </DropdownMenuContent>
  );
}
