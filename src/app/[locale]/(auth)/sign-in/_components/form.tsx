"use client";

import { useForm } from "react-hook-form";
import {
  SignInFormData,
  signInSchema,
} from "@vendero/app/[locale]/(auth)/sign-in/_lib/definitions/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";

export function SignInForm() {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {},
  });

  return null;
}
