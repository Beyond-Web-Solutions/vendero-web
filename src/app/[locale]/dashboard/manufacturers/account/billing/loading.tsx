import { DashboardHeaderFallback } from "@vendero/app/[locale]/dashboard/_components/page-header/fallback";
import { DashboardPageSectionFallback } from "@vendero/app/[locale]/dashboard/_components/section/fallback";
import { DashboardAccountBillingInvoicesFallback } from "@vendero/app/[locale]/dashboard/_components/account/billing/invoices/fallback";
import { Card, CardFooter } from "@vendero/_components/ui/card";
import { DashboardAccountManageBillingCardHeader } from "@vendero/app/[locale]/dashboard/_components/account/billing/manage/header/base";
import { Skeleton } from "@vendero/_components/ui/skeleton";

export default function LoadingManufacturerDashboardAccountBillingPage() {
  return (
    <>
      <DashboardHeaderFallback />
      <div className="grid gap-8 py-10">
        <DashboardPageSectionFallback>
          <Card>
            <DashboardAccountManageBillingCardHeader />
            <CardFooter className="justify-between border-t">
              <Skeleton className="h-9 w-[120px]" />
              <Skeleton className="h-9 w-[120px]" />
            </CardFooter>
          </Card>
        </DashboardPageSectionFallback>
        <DashboardPageSectionFallback>
          <DashboardAccountBillingInvoicesFallback />
        </DashboardPageSectionFallback>
      </div>
    </>
  );
}
