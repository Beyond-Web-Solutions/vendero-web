import Stripe from "stripe";
import { useTranslations } from "next-intl";
import { Badge } from "@vendero/_components/ui/badge";
import {
  CheckCircleIcon,
  CircleDashedIcon,
  CircleIcon,
  CircleXIcon,
} from "lucide-react";

interface Props {
  status: Stripe.Invoice.Status;
}

export function DashboardAccountBillingInvoicesStatus({ status }: Props) {
  const t = useTranslations(
    "dashboard.common.account.billing.invoices.table.status.variants",
  );

  return (
    <Badge variant="outline">
      {status === "paid" && <CheckCircleIcon />}
      {(status === "uncollectible" || status === "void") && <CircleXIcon />}
      {status === "open" && <CircleIcon />}
      {status === "draft" && <CircleDashedIcon />}
      {t(status)}
    </Badge>
  );
}
