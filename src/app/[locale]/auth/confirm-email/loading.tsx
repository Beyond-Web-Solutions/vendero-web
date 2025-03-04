import { Card, CardHeader } from "@vendero/_components/ui/card";
import { Skeleton } from "@vendero/_components/ui/skeleton";

export default function LoadingConfirmEmailPage() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="mx-auto h-7 w-2/3" />
        <div className="grid gap-1">
          <Skeleton className="mx-auto h-3 w-10/12" />
          <Skeleton className="mx-auto h-3 w-full" />
          <Skeleton className="mx-auto h-3 w-2/3" />
        </div>
      </CardHeader>
    </Card>
  );
}
