import { Skeleton } from "@vendero/_components/ui/skeleton";
import { cn } from "@vendero/_lib/utils/ui/cn";

interface Props {
  labelClassName?: string;
}

export function FormFieldSkeleton({ labelClassName }: Props) {
  return (
    <div className="grid gap-2">
      <Skeleton className={cn("h-4 w-[100px]", labelClassName)} />
      <Skeleton className="h-9 w-full" />
    </div>
  );
}
