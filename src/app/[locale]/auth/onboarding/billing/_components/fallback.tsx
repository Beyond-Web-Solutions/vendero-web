import { Skeleton } from "@vendero/_components/ui/skeleton";

export function OnboardingPricingFallback() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <div className="flex flex-row items-center justify-between gap-2 rounded-lg border p-3 shadow-sm">
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-[60px]" />
            <div className="grid gap-1">
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-1/3" />
            </div>
          </div>
          <Skeleton className="size-4 rounded-full" />
        </div>
        <div className="flex flex-row items-center justify-between gap-2 rounded-lg border p-3 shadow-sm">
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-[60px]" />
            <div className="grid gap-1">
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-1/3" />
            </div>
          </div>
          <Skeleton className="size-4 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-9 w-full" />
    </div>
  );
}
