"use server";

import {
  ChoosePlanFormData,
  choosePlanSchema,
} from "@vendero/app/[locale]/auth/onboarding/billing/_lib/definitions/choose-plan";
import { ServerActionResponse } from "@vendero/_lib/types/response";
import { createStripeClient } from "@vendero/_lib/clients/stripe";
import { handleServerActionError } from "@vendero/_lib/utils/errors/server/handle-server-action-error";
import { getUrl } from "@vendero/_lib/utils/routing/url";
import { getPathname } from "@vendero/_lib/i18n/routing";
import { getLocale } from "next-intl/server";
import { getUserOrganization } from "@vendero/_data/organization-member/get";

export async function subscribeToPlan(
  values: ChoosePlanFormData,
): ServerActionResponse<ChoosePlanFormData, string> {
  const parsed = choosePlanSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten(),
    };
  }

  const stripe = createStripeClient();

  const locale = await getLocale();
  const organization = await getUserOrganization();

  if (!organization?.customer_id) {
    return handleServerActionError("no-customer-id");
  }

  const url = getUrl();

  url.pathname = getPathname({
    href: "/auth/onboarding/billing/return",
    locale,
  });

  const session = await stripe.checkout.sessions.create({
    customer: organization?.customer_id,
    line_items: [{ price: parsed.data.plan, quantity: 1 }],
    customer_update: { name: "auto", address: "auto", shipping: "auto" },
    tax_id_collection: { enabled: true, required: "if_supported" },
    payment_method_collection: "if_required",
    allow_promotion_codes: true,
    mode: "subscription",
    success_url: `${url.toString()}?status=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url.toString()}?status=error`,
  });

  if (!session.url) {
    return handleServerActionError("no-checkout-url");
  }

  return { ok: true, data: session.url };
}
