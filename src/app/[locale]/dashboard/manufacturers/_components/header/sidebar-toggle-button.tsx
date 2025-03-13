"use client";

import { Button } from "@vendero/_components/ui/button";
import { SidebarIcon } from "lucide-react";
import { useSidebar } from "@vendero/_components/ui/sidebar";

export function ManufacturerDashboardHeaderSidebarToggleButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className="h-8 w-8"
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
    >
      <SidebarIcon />
    </Button>
  );
}
