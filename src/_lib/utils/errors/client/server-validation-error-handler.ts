import { typeToFlattenedError } from "zod";
import { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";

export function handleServerValidationError<T extends FieldValues>(
  errors: typeToFlattenedError<T>,
  setError: UseFormSetError<T>,
) {
  errors.formErrors.forEach((error) => {
    setError("root", { type: "custom", message: error });
  });

  Object.entries(errors.fieldErrors).forEach(([field, errors]) => {
    setError(field as FieldPath<T>, {
      type: "custom",
      message: (errors as string[]).join(", "),
    });
  });
}
