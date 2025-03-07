export function getName(
  firstName: string | null | undefined,
  lastName: string | null | undefined,
  fallback: string,
) {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }

  if (firstName) {
    return firstName;
  }

  return fallback;
}
