"use client";

import { Tables } from "@vendero/_lib/types/supabase";
import { useIsMobile } from "@vendero/_hooks/use-mobile";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@vendero/_components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { FactoryIcon, PlusIcon, StoreIcon } from "lucide-react";

interface Props {
  organizations: Array<Tables<"organizations">>;
}

export function ManufacturerDashboardSidebarHeaderTeamSwitcher({
  organizations,
}: Props) {
  const t = useTranslations("dashboard.manufacturer.nav.header.team-switcher");

  const isMobile = useIsMobile();

  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      align="start"
      side={isMobile ? "bottom" : "right"}
      sideOffset={4}
    >
      <DropdownMenuLabel className="text-muted-foreground text-xs">
        {t("title")}
      </DropdownMenuLabel>
      {organizations.map((organization, index) => (
        <DropdownMenuItem
          key={organization.id}
          onClick={() => {}}
          className="gap-2 p-2"
        >
          <div className="flex size-6 items-center justify-center rounded-sm border">
            {organization.type === "manufacturer" ? (
              <FactoryIcon className="size-4 shrink-0" />
            ) : (
              <StoreIcon className="size-4 shrink-0" />
            )}
          </div>
          {organization.name}
          <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
        </DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      <DropdownMenuItem className="gap-2 p-2">
        <div className="bg-background flex size-6 items-center justify-center rounded-md border">
          <PlusIcon className="size-4" />
        </div>
        <div className="text-muted-foreground font-medium">{t("add")}</div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
