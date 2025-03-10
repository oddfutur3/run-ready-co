"use server";

import storefrontClient from "@/components/fetchProductImages";

export async function getCart(cartID) {
  const cart = await storefrontClient.query({
    data: `{
          cart(id: "${cartID}") {
            lines(first: 10) {
              edges {
                node {
                  id
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      product {
                        title
                        id
                      }
                      image {url}
                    }
                  }
                  quantity
                }
              }
            }
            id
          }
        }`,
  });

  return cart.body.data.cart.lines.edges;
}
