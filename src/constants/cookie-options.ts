export const COOKIE_OPTIONS = {
  sameSite: "none" as const,
  secure: true,
  path: "/",
  // 3 days:
  maxAge: 3 * 24 * 60 * 60 * 1000,
};
