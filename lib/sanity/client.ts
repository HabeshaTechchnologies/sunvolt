import { createClient, SanityClient } from "next-sanity";

let _client: SanityClient | null = null;

export function getClient(): SanityClient {
  if (!_client) {
    _client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
      useCdn: true,
    });
  }
  return _client;
}

// Backwards-compatible named export (lazy proxy)
export const client = new Proxy({} as SanityClient, {
  get(_target, prop) {
    return (getClient() as any)[prop];
  },
});
