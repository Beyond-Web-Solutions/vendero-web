import { Skeleton } from "@vendero/_components/ui/skeleton";
import { ChevronsUpDownIcon } from "lucide-react";

export function ManufacturerDashboardSidebarAccountMenuFallback() {
  return (
    <div className="flex items-center gap-2 p-2">
      <Skeleton className="size-8 rounded-lg" />
      <div className="grid flex-1 gap-0.5">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-full" />
      </div>
      <ChevronsUpDownIcon className="ml-auto size-4" />
    </div>
  );
}
