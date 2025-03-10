require('@shopify/shopify-api/adapters/node');
const { shopifyApi, LATEST_API_VERSION } = require('@shopify/shopify-api')
require('dotenv').config()

const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: '62746c57bd8ebad9f4f926a097d7bef3',
  apiSecretKey: '74d26e03337a091f7352e9fc819729d5',
  scopes: ['read_products'],
  hostName: 'runasyouare.myshopify.com',
});


// Load the access token as per instructions above
const storefrontAccessToken = 'fa1a6332813690bde0feb554abd8253e'
// Shop from which we're fetching data
const shop = 'runasyouare.myshopify.com'

// StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
const storefrontClient = new shopify.clients.Storefront({
  domain: shop,
  storefrontAccessToken
})

// Use client.query and pass your query as `data`
async function shopifyAllQuery() {
  const productImages = await storefrontClient.query({
    data: `{
          products(first:20){
              edges{
                node{
                  id
                  featuredImage{url}
                }
              }
            }
        }`,
  })

  //Grab Id
  console.log(productImages.body.data.products.edges)
}


shopifyAllQuery()