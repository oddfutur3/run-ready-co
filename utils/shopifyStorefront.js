export async function storefront(query, variables = {}) {
  try {
    const response = await fetch(
      'https://raya-sandbox.myshopify.com/api/2022-07/graphql.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token':
            process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
        },
        body: JSON.stringify({ query, variables }),
      }
    )
    return response.json()
  } catch (err) {
    console.log(err)
  }
}