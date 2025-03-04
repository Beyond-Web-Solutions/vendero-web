import { z } from "zod";
import { authSchema } from "@vendero/app/[locale]/auth/_lib/definitions/auth";

export const forgotPasswordSchema = authSchema.omit({ password: true });

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
