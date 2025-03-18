import { CardContent, CardFooter } from "@vendero/_components/ui/card";
import { Skeleton } from "@vendero/_components/ui/skeleton";
import { FormFieldSkeleton } from "@vendero/_components/common/form/skeleton";

export function DashboardAccountSettingsProfileFallback() {
  return (
    <>
      <CardContent className="grid gap-4 pb-6">
        <FormFieldSkeleton />
        <FormFieldSkeleton />
      </CardContent>
      <CardFooter className="justify-end border-t pt-6">
        <Skeleton className="h-9 w-[100px]" />
      </CardFooter>
    </>
  );
}
