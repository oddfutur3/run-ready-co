import { createAdminApiClient } from "@shopify/admin-api-client";

export const adminClient = createAdminApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  apiVersion: "2024-07",
  accessToken: process.env.SHOPIFY_ADMIN_ACCESSTOKEN,
  // retries: 3
});