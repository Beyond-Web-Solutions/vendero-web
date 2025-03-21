"use client";

import { useTranslations } from "next-intl";
import { Button } from "@vendero/_components/ui/button";
import { useCallback, useTransition } from "react";
import { redirect } from "next/navigation";
import { Spinner } from "@vendero/_components/common/spinner";
import { updateSubscriptionPlan } from "@vendero/app/[locale]/dashboard/_lib/actions/update-subscription-plan";

export function UpdateSubscriptionButton() {
  const t = useTranslations("dashboard.common.account.billing.manage.actions");

  const [isPending, startTransition] = useTransition();

  const handleOnClick = useCallback(() => {
    startTransition(async () => {
      const response = await updateSubscriptionPlan();

      if (response.ok) {
        redirect(response.data);
      }
    });
  }, []);

  return (
    <Button variant="outline" onClick={handleOnClick} disabled={isPending}>
      {t("update")}
      {isPending && <Spinner />}
    </Button>
  );
}
