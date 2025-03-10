import '@shopify/shopify-api/adapters/node'
import { shopifyApi } from '@shopify/shopify-api'

const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
  apiVersion: "2024-07",
  scopes: ['read_products','unauthenticated_write_checkouts','unauthenticated_read_customers','customer_read_customers','unauthenticated_read_customer_tags'],
  hostName: process.env.SHOPIFY_STORE_DOMAIN,
});

// Load the access token as per instructions above
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

// Shop from which we're fetching data
const shop = process.env.SHOPIFY_STORE_DOMAIN

// StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
const storefrontClient = new shopify.clients.Storefront({
  domain: shop,
  storefrontAccessToken
})

export default storefrontClient