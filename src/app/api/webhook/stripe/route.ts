import { NextRequest, NextResponse } from "next/server";
import { createStripeClient } from "@vendero/_lib/clients/stripe";
import Stripe from "stripe";
import { revalidateTag } from "next/cache";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const stripe = await createStripeClient();
  const payload = await request.text();
  const signature = request.headers.get("stripe-signature") as string;

  let event: Stripe.Event;
  // TODO:
  // listen for subscription webhook events and revalidate the `subscription:${organization.customer_id}` cache key

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed." },
      { status: 400 },
    );
  }

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
    case "customer.subscription.paused":
    case "customer.subscription.resumed":
    case "customer.subscription.trial_will_end":
    case "customer.subscription.pending_update_applied":
    case "customer.subscription.pending_update_expired":
      const subscription = event.data.object as Stripe.Subscription;
      revalidateTag(`subscription:${subscription.customer}`);

      console.log(
        `revalidate cache tag: \`subscription:${subscription.customer}\``,
      );
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
