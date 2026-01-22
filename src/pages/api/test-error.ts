import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("Sentry Example API Route Error");
};
