import { z } from "zod";

export const updateProfileSchema = z.object({
  first_name: z.string().nonempty("name-too-short"),
  last_name: z.string().nonempty("name-too-short"),
});

export type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;
