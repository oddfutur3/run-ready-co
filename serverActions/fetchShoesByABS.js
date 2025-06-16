'use server';

import storefrontClient from "@/components/shopifyStorefrontAPI";

import { firebaseAdmin } from "@/firebaseAdmin";

async function fetchShoesByCriteria(criteriaFn) {
  const shoeCollRef = firebaseAdmin.firestore().collection("shoes").where("status", "==", "Active");
  const shoeCollResult = await shoeCollRef.get();

  const filteredShoes = [];

  await Promise.all(
    shoeCollResult.docs.map(async (doc) => {
      let { load: absorb, launch: bounce, stability, productIDs, gender, gradingCount = 0 } = doc.data();

      // -----  06/11/25 PATCH: Women's models with < 10 reviews will use Men's ABS scores --------
        console.log(`${doc.id} has ${gradingCount} reviews`)

        const isWomens = doc.id.endsWith("| W")

        if (isWomens && gradingCount < 10) {
          try {
          let mShoeID = doc.id.replace("| W", "| M")
          
          // clean string due to clerical error: extra space in model name
          mShoeID = mShoeID.split(" | ").map(val => val.trim()).join(" | ")

          const mShoeRef = firebaseAdmin.firestore().doc(`shoes/${mShoeID}`)
          const mShoeDoc = await mShoeRef.get()

          const mShoeData = mShoeDoc.data()

          if (mShoeData.load && mShoeData.launch && mShoeData.stability) {
            absorb = mShoeData.load
            bounce = mShoeData.launch
            stability = mShoeData.stability
            console.log(`${doc.id} W -> M: absorb ${absorb}, bounce ${bounce}, stability ${stability}`)
          }

          } catch (err) {
            console.log(err)
          }

        }
      // -------------------------------------------------------------------------------------------



      // Raw scores matching getShoeRecs
      // Compute display categories as 9-bar increments (11.11% per bar)
      const barsAbsorb = Math.round((absorb / 10) * 9);
      const absorbCat = `${(barsAbsorb * (100/9)).toFixed(2)}%`;
      const barsBounce = Math.round((bounce / 10) * 9);
      const bounceCat = `${(barsBounce * (100/9)).toFixed(2)}%`;
      const barsStability = Math.round((stability / 10) * 9);
      const stabilityCat = `${(barsStability * (100/9)).toFixed(2)}%`;

      if (!productIDs?.[0]) return;

      if (!criteriaFn(absorb, bounce, stability)) return;

      let validProduct = null;

      for (const prodID of productIDs) {
        const product = await storefrontClient.query({
          data: `{
            product(id: "gid://shopify/Product/${prodID}") {
              id
              handle
              title
              availableForSale
              vendor
              productType
              featuredImage {
                url
              }
              images(first: 2) {
                edges {
                  node {
                    altText
                    url
                  }
                }
              }
              onlineStoreUrl
              compareAtPriceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                  maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 50) {
                edges {
                  node {
                    availableForSale
                    title
                  }
                }
              }
            }
          }`,
        });

        if (product?.body?.data?.product?.featuredImage?.url) {
          validProduct = product?.body?.data?.product;
          break;
        }
      }

      if (validProduct) {
        filteredShoes.push({
          ...validProduct,
          gender,
  
          barsAbsorb,
          barsBounce,
          barsStability
        });
      }
    })
  );

  return filteredShoes;
}

// Function to get high absorb shoes (normalized absorb > 6.7)
export async function getHighAbsorbShoes() {
  return fetchShoesByCriteria((absorb) => absorb > 6.7);
}

// Function to get high bounce shoes (normalized bounce > 6.7)
export async function getHighBounceShoes() {
  return fetchShoesByCriteria((_, bounce) => bounce > 6.7);
}

// Function to get stability shoes (stability > stabilityThreshold)
export async function getStabilityShoes() {
  return fetchShoesByCriteria((_, __, stability) => stability > 6.66);
}