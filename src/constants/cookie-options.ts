const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;

export const COOKIE_OPTIONS = {
  sameSite: "none" as const,
  secure: true,
  path: "/",
  maxAge: threeDaysInMs,
  expires: new Date(Date.now() + threeDaysInMs),
};
