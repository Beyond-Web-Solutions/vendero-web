import { authSchema } from "@vendero/app/[locale]/auth/_lib/definitions/auth";
import { z } from "zod";

export const signUpSchema = authSchema
  .extend({
    confirm: z.string().min(8, { message: "password-too-short" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "passwords-dont-match",
    path: ["confirm_password"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
