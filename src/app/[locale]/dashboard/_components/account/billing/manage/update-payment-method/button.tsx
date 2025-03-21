"use client";

import { useTranslations } from "next-intl";
import { Button } from "@vendero/_components/ui/button";
import { useCallback, useTransition } from "react";
import { Spinner } from "@vendero/_components/common/spinner";
import { updatePaymentMethod } from "@vendero/app/[locale]/dashboard/_lib/actions/update-payment-method";
import { redirect } from "next/navigation";

export function UpdatePaymentMethodButton() {
  const t = useTranslations("dashboard.common.account.billing.manage.header");
  const [isPending, startTransition] = useTransition();

  const handleOnClick = useCallback(() => {
    startTransition(async () => {
      const response = await updatePaymentMethod();

      if (response.ok) {
        redirect(response.data);
      }
    });
  }, []);

  return (
    <Button onClick={handleOnClick} variant="outline" disabled={isPending}>
      {t("update-payment-method")}
      {isPending && <Spinner />}
    </Button>
  );
}
