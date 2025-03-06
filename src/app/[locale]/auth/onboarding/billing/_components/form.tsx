"use client";

import { Database } from "@vendero/_lib/types/supabase";
import { useForm } from "react-hook-form";
import {
  ChoosePlanFormData,
  choosePlanSchema,
} from "@vendero/app/[locale]/auth/onboarding/billing/_lib/definitions/choose-plan";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@vendero/_components/ui/form";
import { FormErrorAlert } from "@vendero/_components/common/form/alert";
import { useTranslations } from "next-intl";
import {
  RadioGroup,
  RadioGroupItem,
} from "@vendero/_components/ui/radio-group";
import { cn } from "@vendero/_lib/utils/ui/cn";
import { SubmitButton } from "@vendero/_components/common/form/submit-button";
import { handleServerValidationError } from "@vendero/_lib/utils/errors/client/server-validation-error-handler";
import { subscribeToPlan } from "@vendero/app/[locale]/auth/onboarding/billing/_lib/actions/subscribe-to-plan";
import { redirect } from "next/navigation";

interface Props {
  plans: Array<Database["stripe"]["Tables"]["products"]["Row"]>;
}

export function OnboardingChoosePlanForm({ plans }: Props) {
  const t = useTranslations("onboarding.billing.form");

  const form = useForm<ChoosePlanFormData>({
    resolver: zodResolver(choosePlanSchema),
    defaultValues: {
      plan: "",
    },
  });

  async function onSubmit(values: ChoosePlanFormData) {
    const response = await subscribeToPlan(values);

    if (!response.ok) {
      return handleServerValidationError<ChoosePlanFormData>(
        response.errors,
        form.setError,
      );
    }

    redirect(response.data);
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormErrorAlert />

        <FormField
          control={form.control}
          name="plan"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {plans.map((plan) => (
                    <FormItem
                      key={plan.id}
                      className={cn(
                        "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
                        fieldState.error && "border-destructive",
                        field.value === plan.default_price && "border-primary",
                      )}
                    >
                      <div className="space-y-1">
                        <FormLabel>{plan.name}</FormLabel>
                        <FormDescription>{plan.description}</FormDescription>
                      </div>
                      <FormControl>
                        <RadioGroupItem value={plan.default_price!} />
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton label={t("submit")} />
      </form>
    </Form>
  );
}
