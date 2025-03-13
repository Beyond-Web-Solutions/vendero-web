"use client";

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@vendero/_components/ui/dropdown-menu";
import { useIsMobile } from "@vendero/_hooks/use-mobile";
import { ManufacturerDashboardSidebarAccountMenuProfile } from "@vendero/app/[locale]/dashboard/manufacturers/_components/sidebar/footer/user-profile";
import { CreditCardIcon, LockIcon, LogOutIcon, UserIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@vendero/_lib/i18n/routing";

interface Props {
  name: string | null;
  email: string;
}

export function ManufacturerDashboardSidebarAccountMenuContent({
  name,
  email,
}: Props) {
  const isMobile = useIsMobile();
  const t = useTranslations("dashboard.common.footer");

  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align="end"
      sideOffset={4}
    >
      <DropdownMenuLabel className="p-0 font-normal">
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <ManufacturerDashboardSidebarAccountMenuProfile
            name={name}
            email={email}
          />
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/manufacturers/account">
            <UserIcon />
            {t("account")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/manufacturers/account/security">
            <LockIcon />
            {t("security")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/manufacturers/account/billing">
            <CreditCardIcon />
            {t("billing")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOutIcon />
        {t("logout")}
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
