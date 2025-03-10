"use server";

import storefrontClient from "@/components/shopifyStorefrontAPI";
import {
  calcNormalAbsorb,
  calcNormalBounce,
  matchBuffer,
  stabilityThreshold,
  superAbsorbThreshold,
  superBounceThreshold,
} from "@/data/constants";
import { firebaseAdmin } from "@/firebaseAdmin";

export async function getShoeRecs(scores) {
  const shoeCollRef = firebaseAdmin
    .firestore()
    .collection("shoes")
    .where("status", "==", "Active");
  const shoeCollResult = await shoeCollRef.get();

  const lowerScoreType = scores.absorb <= scores.bounce ? "absorb" : "bounce";
  const higherScoreType = scores.absorb <= scores.bounce ? "bounce" : "absorb";

  const minScores = {
    absorb: (1 - scores.absorb) * 10,
    bounce: (1 - scores.bounce) * 10,
    stability: (1 - scores.stability) * 10,
  };

  const minScoresBuffered = {
    absorb: (1 - scores.absorb) * 10 - matchBuffer,
    bounce: (1 - scores.bounce) * 10 - matchBuffer,
    stability: (1 - scores.stability) * 10 - matchBuffer,
  };

  const shoeRecs = {
    superShoe: [],
    highlyRecommended: [],
    recommended: [],
  };

  function shoeRecSort(shoeScores, shoeData) {
    if (
      shoeScores.absorb >= superAbsorbThreshold &&
      shoeScores.bounce >= superBounceThreshold
    ) {
      // if (normalAbsorb == 10 && normalBounce == 10) {    // <-- IF USING NORMALIZED SCORES
      shoeRecs.superShoe.push(shoeData);
    } else {
      if (shoeScores[lowerScoreType] >= minScores[lowerScoreType]) {
        if (shoeScores[higherScoreType] >= minScores[higherScoreType]) {
          if (shoeScores.stability >= minScores.stability) {
            // over, over, over
            shoeRecs.highlyRecommended.push(shoeData);
            return;
          } else {
            // over, over, under
            shoeRecs.highlyRecommended.push(shoeData);
            return;
          }
        } else {
          if (shoeScores.stability >= minScores.stability) {
            // over, under, over
          } else {
            // over, under, under
          }
        }
      } else {
        if (shoeScores[higherScoreType] >= minScores[higherScoreType]) {
          if (shoeScores.stability >= minScores.stability) {
            // under, over, over
            shoeRecs.highlyRecommended.push(shoeData);
            return;
          } else {
            // under, over, under
          }
        } else {
          if (shoeScores.stability >= minScores.stability) {
            // under, under, over
          } else {
            // under, under, under
          }
        }
      }

      if (shoeScores[lowerScoreType] >= minScoresBuffered[lowerScoreType]) {
        if (shoeScores[higherScoreType] >= minScoresBuffered[higherScoreType]) {
          if (shoeScores.stability >= minScoresBuffered.stability) {
            // over, over, over
            shoeRecs.recommended.push(shoeData);
            return;
          } else {
            // over, over, under
            shoeRecs.recommended.push(shoeData);
            return;
          }
        } else {
          if (shoeScores.stability >= minScoresBuffered.stability) {
            // over, under, over
          } else {
            // over, under, under
          }
        }
      } else {
        if (shoeScores[higherScoreType] >= minScoresBuffered[higherScoreType]) {
          if (shoeScores.stability >= minScoresBuffered.stability) {
            // under, over, over
            shoeRecs.recommended.push(shoeData);
            return;
          } else {
            // under, over, under
          }
        } else {
          if (shoeScores.stability >= minScoresBuffered.stability) {
            // under, under, over
          } else {
            // under, under, under
          }
        }
      }
    }
  }

  await Promise.all(
    shoeCollResult.docs.map(async (doc) => {
      const { load: absorb, launch: bounce, stability } = doc.data();

      const shoeScores = {
        absorb: absorb,
        bounce: bounce,
      };
      // const normalAbsorb = calcNormalAbsorb(absorb)  <--- IF USING NORMALIZED SCORES
      // const normalBounce = calcNormalBounce(bounce)  <--- IF USING NORMALIZED SCORES

      // const sortStability = (data, recCategory) => {
      //   if (stability >= stabilityThreshold) {
      //     shoeRecs[recCategory].stability.push(data);
      //   } else {
      //     shoeRecs[recCategory].notStability.push(data);
      //   }
      // };

      // console.log(absorb, bounce, stability)

      if (
        shoeScores.absorb &&
        shoeScores.bounce &&
        (shoeScores.absorb >= minScoresBuffered.absorb ||
          shoeScores.bounce >= minScoresBuffered.bounce)
      ) {
        const shoeData = doc.data();
        // shoeData.normalAbsorb = shoeScores.absorb;
        // shoeData.normalBounce = shoeScores.bounce;

        shoeData.absorbCat = absorb >= 6.66 ? "Max" : absorb >= 3.33 ? "Mod" : "Min"
        shoeData.bounceCat = bounce >= 6.66 ? "Max" : bounce >= 3.33 ? "Mod" : "Min"
        shoeData.stabilityCat = stability >= 6.66 ? "Max" : stability >= 3.33 ? "Mod" : "Min"


        if (!shoeData["productIDs"]?.[0]) {
          return;
        }

        shoeData.products = {};

        for (const prodID of shoeData[`productIDs`]) {
          shoeData.products[prodID] = {};

          const productResult = await storefrontClient.query({
            data: `{
            product(id: "gid://shopify/Product/${prodID}"){
              availableForSale
              featuredImage{url}
              productType
              tags
              variants (first: 50) {
                nodes {
                  availableForSale
                  title
                }
              }
            }
            }`,
          });

          shoeData.products[prodID].availableForSale =
            productResult?.body?.data?.product?.availableForSale;
          shoeData.products[prodID].featuredImageUrl =
            productResult?.body?.data?.product?.featuredImage?.url;
          shoeData.products[prodID].availability =
            productResult?.body?.data?.product?.variants?.nodes;
          shoeData.products[prodID].tags =
            productResult?.body?.data?.product?.tags;
          shoeData.products[prodID].productType =
            productResult?.body?.data?.product?.productType;

          // console.log(shoeData.products[prodID].availability)

          // available if at least one sku is available
          if (shoeData.products[prodID].availableForSale) {
            shoeData.availableForSale = true;
          }

          // default & fallback featured sku
          if (shoeData.products[prodID].featuredImageUrl) {
            shoeData.featuredProdID = prodID;
          }
        }

        // if availability is undefined, set to false
        if (shoeData.availableForSale === undefined) {
          shoeData.availableForSale = false;
        }
        // console.log("flag 1231", shoeData.featuredProdID)

        // console.log("flag 1526:", product?.body?.data?.product)

        // if (shoeData["shoe-name"] == "adizero Boston 12") {
        //   console.log("read")
        //   console.log(absorb, minAbsorb, bounce, minBounce)
        //   console.log(shoeData.featuredImageUrl)
        // }

        shoeRecSort(shoeScores, shoeData);
      }
    })
  );

  // console.log(shoeRecs)

  return shoeRecs;
}
