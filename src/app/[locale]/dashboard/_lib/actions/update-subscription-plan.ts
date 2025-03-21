"use server";

import { ServerActionResponse } from "@vendero/_lib/types/response";
import { getUserOrganization } from "@vendero/_data/organization-member/get";
import { createStripeClient } from "@vendero/_lib/clients/stripe";
import { getUrl } from "@vendero/_lib/utils/routing/url";
import { getLocale } from "next-intl/server";
import { getPathname } from "@vendero/_lib/i18n/routing";
import { handleServerActionError } from "@vendero/_lib/utils/errors/server/handle-server-action-error";
import { getUserOrganizationSubscription } from "@vendero/_data/subscription/get";

export async function updateSubscriptionPlan(): ServerActionResponse<
  object,
  string
> {
  const [locale, organization, subscription] = await Promise.all([
    getLocale(),
    getUserOrganization(),
    getUserOrganizationSubscription(),
  ]);

  if (!organization?.customer_id) {
    return handleServerActionError("no-customer-id");
  }

  if (!subscription?.id) {
    return handleServerActionError("no-subscription");
  }

  const stripe = createStripeClient();
  const url = getUrl();
  url.pathname = getPathname({
    href: "/dashboard/manufacturers/account/billing",
    locale,
  });

  const session = await stripe.billingPortal.sessions.create({
    customer: organization.customer_id,
    return_url: url.toString(),
    flow_data: {
      type: "subscription_update",
      subscription_update: {
        subscription: subscription.id,
      },
    },
  });

  return {
    ok: true,
    data: session.url,
  };
}
