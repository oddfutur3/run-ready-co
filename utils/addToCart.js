'use server'

import { cookies } from "next/headers"
import storefrontClient from "@/components/fetchProductImages"

export async function addToCart(productVarID, cartID) {

  if (cartID && productVarID) {

    
    
  let cartUpdate = await storefrontClient.query({
    data: `mutation MyMutation {
      cartLinesAdd(
        cartId: "${cartID?.value}"
        lines: {attributes: {key: "type", value: "Single Product"}, quantity: 1, merchandiseId: "${productVarID}"}
      ) {
        userErrors {
          field
          message
          code
        }
        cart {
          id
        }
      }
    }`,
  }).then((res) =>
  {
  /* @next-codemod-error Manually await this call and refactor the function to be async */
  cookies().set("cart", res.body.data.cartLinesAdd.cart.id)
  }
  )
  } else {
    let newCart = await storefrontClient.query({
      data: `mutation MyMutation {
        cartCreate(
          input: {buyerIdentity: {
            email: "stanley@runasyouare.co",
          }, lines: {merchandiseId: "${productVarID}", attributes: {key: "type", value: "Single Product"}, quantity: 1}, attributes: {key: "testKey", value: "testValue"}, 
          , metafields: {key: "raya_cart_id", value: "5564213", type: "number_integer"}}
          ) {
            userErrors {
              field
              message
              code
            }
            cart {
              id
            }
          }
        }`,
    }).then((res) =>
{ console.log(res.body.data.cartCreate)
    /* @next-codemod-error Manually await this call and refactor the function to be async */
    cookies().set("cart", res.body.data.cartCreate.cart.id)
}
    )
  }
  
}