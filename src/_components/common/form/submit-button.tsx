"use client";

import { useFormState } from "react-hook-form";
import { LucideIcon } from "lucide-react";
import { Button } from "@vendero/_components/ui/button";
import { ComponentProps } from "react";
import { Spinner } from "@vendero/_components/common/spinner";

interface Props {
  label: string;
  icon?: LucideIcon;
  disabled?: boolean;
  variant?: ComponentProps<typeof Button>["variant"];
}

export function SubmitButton(props: Props) {
  const { isSubmitting } = useFormState();

  return (
    <Button variant={props.variant} disabled={isSubmitting || props.disabled}>
      {props.label}
      {isSubmitting ? (
        <Spinner className="ml-2" />
      ) : (
        props.icon && <props.icon className="ml-2 size-4" />
      )}
    </Button>
  );
}
