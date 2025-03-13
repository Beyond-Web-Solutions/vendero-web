import { FactoryIcon } from "lucide-react";
import { Skeleton } from "@vendero/_components/ui/skeleton";

export function ManufacturerDashboardSidebarHeaderFallback() {
  return (
    <div className="flex items-center gap-2 p-2">
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <FactoryIcon className="size-4" />
      </div>
      <div className="grid w-full gap-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
  );
}
