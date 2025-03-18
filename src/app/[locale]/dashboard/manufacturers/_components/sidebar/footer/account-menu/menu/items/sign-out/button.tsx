"use client";

import { LogOutIcon } from "lucide-react";
import { DropdownMenuItem } from "@vendero/_components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { MouseEventHandler, useCallback, useTransition } from "react";
import { Spinner } from "@vendero/_components/common/spinner";
import { signOut } from "@vendero/app/[locale]/dashboard/_lib/actions/sign-out";

export function ManufacturerDashboardSidebarFooterAccountMenuSignOut() {
  const t = useTranslations("dashboard.common.account-menu");

  const [isPending, startTransition] = useTransition();

  const handleSignOut: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    e.preventDefault();

    startTransition(signOut);
  }, []);

  return (
    <DropdownMenuItem onClick={handleSignOut} disabled={isPending}>
      {isPending ? <Spinner /> : <LogOutIcon />}
      {t("sign-out")}
    </DropdownMenuItem>
  );
}
