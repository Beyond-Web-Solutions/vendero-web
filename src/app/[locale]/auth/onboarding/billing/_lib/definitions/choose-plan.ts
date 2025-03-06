import { z } from "zod";

export const choosePlanSchema = z.object({
  plan: z.string().nonempty("required"),
});

export type ChoosePlanFormData = z.infer<typeof choosePlanSchema>;
