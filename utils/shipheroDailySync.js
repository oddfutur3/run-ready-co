export async function shipheroDailySync () {

  //   const inventory = await fetch("https://public-api.shiphero.com/auth/token", {
//     method : "POST",
//     headers : { 'Content-Type' : "application/json"},
//     body: '{ "username": "${SHIPHERO_USERNAME}", "password": "${SHIPHERO_PASSWORD}" }'
//  })


const shipheroClient = await fetch("https://public-api.shiphero.com/auth/refresh", {
  method : "POST",
  headers : { 'Content-Type' : "application/json"},
  body: `{ "refresh_token": "${process.env.SHIPHERO_USER_REFRESH_TOKEN}" }`
})

// customer / store id: 69052

const { "access_token" : accessToken , "expires_in" : expiresIn } = await shipheroClient.json()

console.log(accessToken, expiresIn)

//  const inventory = await fetch("https://public-api.shiphero.com/graphql", {
//   method: "POST",
//   headers : { Authorization : "Bearer " + accessToken, "Content-Type": "application/json"},
//   body : JSON.stringify({query : `{ 
//     products (customer_account_id : "69052", sku: "IG3328-9.5" ) { 
//         complexity 
//         request_id 
//         data (first:10) { 
//             edges { 
//                 node { 
//                     id 
//                     sku 
//                     name 
//                     warehouse_products { 
//                         id 
//                         warehouse_id 
//                         on_hand
//                     }
//                 }
//             }
//         }
//     }
// }`
// })})

//  const result = await inventory.json()
//  console.log(result)
//  console.log(result?.data?.products?.data?.edges?.[0]?.node?.warehouse_products)

//  const warehouses = await fetch("https://public-api.shiphero.com/graphql", {
//     method: "POST",
//   headers : { Authorization : "Bearer " + accessToken, "Content-Type": "application/json"},
//   body: JSON.stringify({query : `{
//     account {
//       request_id
//       complexity
//       data {
//             id
//             legacy_id
//             email
//             warehouses{
//                          id
//                          legacy_id
//                          account_id
//                          identifier
//                          profile
//                       }
//                  }
//            }
//   }`})
//  })

//  const warehouseResult = await warehouses.json()
//  console.log(warehouseResult.data.account.data)


const warehouseProducts = await fetch("https://public-api.shiphero.com/graphql", {
  method: "POST",
headers : { Authorization : "Bearer " + accessToken, "Content-Type": "application/json"},
body: JSON.stringify({query : `{
  warehouse_products(warehouse_id: "V2FyZWhvdXNlOjk4ODM4") {
    request_id
    complexity
    data (first:2) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          account_id
          on_hand
          available
          inventory_bin
          reserve_inventory
          reorder_amount
          reorder_level
          custom
          warehouse {
            id
            dynamic_slotting
            profile
          }
          product {
            id
            name
            sku
          }
        }
        cursor
      }
    }
  }
}`})
})

const warehouseProductResult = await warehouseProducts.json()

const products = warehouseProductResult.data["warehouse_products"].data.edges

products.map(async product => {
// console.log(product)
const productData = product.node
const cleanProduct = { available : productData.available, id : productData.product.id, name : productData.product.name, sku : productData.product.sku }

})

console.log(warehouseProductResult)
//  console.log(warehouseProductResult.data["warehouse_products"].data.pageInfo.hasNextPage)
console.log(warehouseProductResult.data["warehouse_products"].data.edges[1])
//  console.log(warehouseProductResult.data["warehouse_products"].data.edges[1].cursor)
//  console.log(warehouseProductResult.data["warehouse_products"].data.edges[11].node.product)
//  console.log(warehouseProductResult.data["warehouse_products"].data.edges[21].node.product)
//  console.log(warehouseProductResult.data["warehouse_products"].data.edges[31].node.product)
//  console.log(warehouseProductResult.data["warehouse_products"].data.edges[41].node.product)
//  console.log(warehouseProductResult.data["warehouse_products"].data.edges[91].node.product)
//  console.log(warehouseProductResult.data["warehouse_products"].data.edges[101]?.node?.product)
//  console.log(warehouseProductResult.data["warehouse_products"].data.edges[111]?.node?.product)

  return (
    <div></div>
  )
}