import { Card } from "@vendero/_components/ui/card";
import { Skeleton } from "@vendero/_components/ui/skeleton";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function DashboardPageSectionFallback({ children }: Props) {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 pb-6 not-last:border-b sm:grid-cols-3">
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Card className="sm:col-span-2">{children}</Card>
    </div>
  );
}
