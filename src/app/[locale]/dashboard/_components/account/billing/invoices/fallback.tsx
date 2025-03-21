import { Card } from "@vendero/_components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@vendero/_components/ui/table";
import { Skeleton } from "@vendero/_components/ui/skeleton";

export function DashboardAccountBillingInvoicesFallback() {
  const ROWS = 3;

  return (
    <Card className="p-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Skeleton className="h-4 w-[75px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-[50px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-[50px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-[65px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-[65px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-[70px]" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(ROWS)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-4 w-[115px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[85px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[85px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-[80px] rounded-md" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[65px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-[105px]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
