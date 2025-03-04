import { Skeleton } from "@vendero/_components/ui/skeleton";
import { FormFieldSkeleton } from "@vendero/_components/common/form/skeleton";

interface Props {
  inputs: number;
}

export function AuthFormFallback({ inputs }: Props) {
  return (
    <div className="grid gap-4">
      {Array.from({ length: inputs }).map((_, i) => (
        <FormFieldSkeleton key={i} />
      ))}
      <Skeleton className="h-9 w-full" />
    </div>
  );
}
