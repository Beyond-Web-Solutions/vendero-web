import { z } from "zod";
import { authSchema } from "@vendero/app/[locale]/auth/_lib/definitions/auth";

export const signInSchema = authSchema.extend({});

export type SignInFormData = z.infer<typeof signInSchema>;
