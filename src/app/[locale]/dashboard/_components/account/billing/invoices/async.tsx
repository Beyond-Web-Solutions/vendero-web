import { getInvoicesForUserOrganization } from "@vendero/app/[locale]/dashboard/_data/invoices/list";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@vendero/_components/ui/table";
import { getLocale, getTranslations } from "next-intl/server";
import { formatCurrency } from "@vendero/_lib/utils/ui/currency";
import { formatDateStringToMediumDate } from "@vendero/_lib/utils/ui/date";
import { Button } from "@vendero/_components/ui/button";
import { DownloadIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@vendero/_components/ui/card";
import { DashboardAccountBillingInvoicesStatus } from "@vendero/app/[locale]/dashboard/_components/account/billing/invoices/badge";

export async function DashboardAccountBillingInvoicesAsync() {
  const [invoices, locale, t] = await Promise.all([
    getInvoicesForUserOrganization(),
    getLocale(),
    getTranslations("dashboard.common.account.billing.invoices.table"),
  ]);

  return (
    <Card className="overflow-hidden p-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("number")}</TableHead>
            <TableHead>{t("period_start")}</TableHead>
            <TableHead>{t("period_end")}</TableHead>
            <TableHead>{t("status.title")}</TableHead>
            <TableHead>{t("total")}</TableHead>
            <TableHead>{t("invoice")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="max-w-full overflow-x-auto">
          {invoices?.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.number}</TableCell>
              <TableCell>
                {formatDateStringToMediumDate(invoice.period_start, locale)}
              </TableCell>
              <TableCell>
                {formatDateStringToMediumDate(invoice.period_end, locale)}
              </TableCell>
              <TableCell>
                <DashboardAccountBillingInvoicesStatus
                  status={invoice.status}
                />
              </TableCell>
              <TableCell>
                {formatCurrency(invoice.total, invoice.currency, locale)}
              </TableCell>

              <TableCell>
                {invoice.hosted_invoice_url ? (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={invoice?.hosted_invoice_url} target="_blank">
                      {t("invoice")}
                      <DownloadIcon className="ml-2 size-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" disabled>
                    {t("invoice")}
                    <ExternalLinkIcon className="ml-2 size-4" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
