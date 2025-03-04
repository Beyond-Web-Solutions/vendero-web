import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("invalid-mail"),
  password: z.string().min(8, { message: "password-too-short" }),
  captcha: z.string().nonempty(),
});
