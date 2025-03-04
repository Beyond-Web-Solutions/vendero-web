export function getUrl() {
  if (process.env.VERCEL_ENV === "production") {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  if (process.env.VERCEL_ENV === "preview") {
    return new URL(`https://${process.env.VERCEL_BRANCH_URL}`);
  }

  return new URL(`http://localhost:3000`);
}
