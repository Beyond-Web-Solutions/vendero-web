import { CardContent, CardFooter } from "@vendero/_components/ui/card";
import { FormFieldSkeleton } from "@vendero/_components/common/form/skeleton";
import { Skeleton } from "@vendero/_components/ui/skeleton";

export function DashboardAccountSettingsSecurityPasswordFallback() {
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
