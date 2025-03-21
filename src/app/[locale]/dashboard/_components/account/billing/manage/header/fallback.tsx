import {
  CardAction,
  CardHeader,
  CardTitle,
} from "@vendero/_components/ui/card";
import { Skeleton } from "@vendero/_components/ui/skeleton";

export async function DashboardAccountManageBillingCardHeaderFallback() {
  return (
    <CardHeader>
      <CardTitle>
        <Skeleton className="h-5 w-[150px]" />
      </CardTitle>
      <Skeleton className="h-3 w-2/3" />
      <CardAction>
        <Skeleton className="h-9 w-[220px]" />
      </CardAction>
    </CardHeader>
  );
}
