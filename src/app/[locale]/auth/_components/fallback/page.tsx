import { Card, CardContent, CardHeader } from "@vendero/_components/ui/card";
import { Skeleton } from "@vendero/_components/ui/skeleton";
import { AuthFormFallback } from "@vendero/app/[locale]/auth/_components/fallback/form";

interface Props {
  inputs: number;
}

export function AuthPageFallback({ inputs }: Props) {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="mx-auto h-7 w-1/3" />
        <Skeleton className="mx-auto h-4 w-full" />
      </CardHeader>
      <CardContent className="grid gap-6">
        <AuthFormFallback inputs={inputs} />
        <Skeleton className="mx-auto h-4 w-2/3" />
      </CardContent>
    </Card>
  );
}
