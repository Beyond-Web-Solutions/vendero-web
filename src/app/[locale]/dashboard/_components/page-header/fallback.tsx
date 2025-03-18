import { Skeleton } from "@vendero/_components/ui/skeleton";

export function DashboardHeaderFallback() {
  return (
    <div className="border-b py-6">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Skeleton className="h-9 w-1/3" />
      </div>
    </div>
  );
}
