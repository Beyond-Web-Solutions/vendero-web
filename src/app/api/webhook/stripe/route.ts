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

  if (
    event.type.includes("customer.subscription") ||
    event.type.includes("invoice")
  ) {
    const subscription = event.data.object as Stripe.Subscription;
    revalidateTag(`subscription:${subscription.customer}`);

    console.log(
      `revalidate cache tag: \`subscription:${subscription.customer}\``,
    );
  }

  return NextResponse.json({ received: true });
}
