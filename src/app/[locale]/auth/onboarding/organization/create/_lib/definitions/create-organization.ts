import { z } from "zod";

export const createOrganizationSchema = z.object({
  name: z.string().nonempty("company-name-too-short"),
  email: z.string().email("invalid-mail"),
  billing_email: z.string().email("invalid-mail"),

  type: z.enum(["manufacturer", "shop"]),
});

export type CreateOrganizationFormData = z.infer<
  typeof createOrganizationSchema
>;
