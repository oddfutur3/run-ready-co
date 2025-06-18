import storefrontClient from "@/components/shopifyStorefrontAPI";
import { firebaseAdmin } from "@/firebaseAdmin";
import { subcollTitle } from "./subcollData";

export async function getProducts(tags = [], endCursor, searchParams, limit) {
  console.log('search', searchParams);
  
  const sortKeyList = {
    "PRICE": "PRICE",
    "CREATED": "CREATED_AT",
    "BEST_SELLING": "BEST_SELLING",
    "TITLE": "TITLE",
    "UPDATED": "UPDATED_AT",
  };
  
  const sortKey = sortKeyList[searchParams?.sortKey?.toUpperCase()] || "CREATED_AT";
  const reverse = searchParams?.reverse?.toLowerCase() === "true" ? "false" : "true";

  const singleQuote = (term) => `'${term}'`;

  // Use subcollTitle structure to determine productType and vendor
  const productTypeQuery = searchParams?.productType && subcollTitle[searchParams.productType]?.type === 'type'
    ? `product_type:${singleQuote(subcollTitle[searchParams.productType]?.value)}`
    : "";

  const vendorQuery = searchParams?.vendor && subcollTitle[searchParams?.vendor]?.type === 'brand'
    ? `vendor:${singleQuote(subcollTitle[searchParams?.vendor]?.value)}`
    : "";

  // Price filtering queries
  const minPriceQuery = searchParams?.minPrice
    ? `variants.price:>=${searchParams.minPrice}`
    : "";

  const maxPriceQuery = searchParams?.maxPrice
    ? `variants.price:<=${searchParams.maxPrice}`
    : "";

  // Constructing the combined query
  const combinedQuery = [
    ...(tags.length > 0 ? [`tag:${tags.map(tag => singleQuote(tag)).join(" AND ")}`] : []),
    productTypeQuery,
    vendorQuery,
    minPriceQuery,
    maxPriceQuery,
  ].filter(Boolean).join(" AND ");

  // console.log('combinedQuery', combinedQuery);
  
  const appendCursor = endCursor ? `after:"${endCursor}", ` : "";

  let products = await storefrontClient.query({
    data: `query MultipleVariantOptionsWithInStock {
      products(${appendCursor}first:${limit}, query: "${combinedQuery}", sortKey: ${sortKey}, reverse: ${reverse}) {
        edges {
          node {
            availableForSale
            tags
            id
            handle
            title
            description
            vendor
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
            variants(first: 100) {
              edges {
                node {
                  id
                  availableForSale
                  quantityAvailable
                  title
                  price {
                    amount}
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }`,
  });

  // Identify footwear product IDs for which we need performance data
  const footwearIds = products.body.data.products.edges
    .filter(edge => (edge.node.tags || []).some(tag =>
      ["shoe", "shoes"].includes(tag.toLowerCase())
    ))
    .map(edge => edge.node.id.replace("gid://shopify/Product/", ""));

  let perfMap = {};
  if (footwearIds.length > 0) {
    const chunkSize = 30;
    for (let i = 0; i < footwearIds.length; i += chunkSize) {
      const chunk = footwearIds.slice(i, i + chunkSize);
      const perfSnapshot = await firebaseAdmin
        .firestore()
        .collection("shoes")
        .where("status", "==", "Active")
        .where("productIDs", "array-contains-any", chunk)
        .get();
      await Promise.all(perfSnapshot.docs.map(async doc => {
        let { load: absorb, launch: bounce, stability, productIDs, gradingCount = 0 } = doc.data();

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


        productIDs.forEach(pid => {
          perfMap[`gid://shopify/Product/${pid}`] = { absorb, bounce, stability };
        });
      }))
    }
  }

  // Attach performance data to footwear products only (tagged "shoe" or "shoes")
  products.body.data.products.edges = products.body.data.products.edges.map((edge) => {
    const tags = edge.node.tags || [];
    const isFootwear = tags.some(tag =>
      ["shoe", "shoes"].includes(tag.toLowerCase())
    );
    if (!isFootwear) {
      // Return non-footwear products unchanged
      return edge;
    }
    const perf = perfMap[edge.node.id] || {};
    const barsAbsorb = Math.round((perf.absorb / 10) * 9);
    const barsBounce = Math.round((perf.bounce / 10) * 9);
    const barsStability = Math.round((perf.stability / 10) * 9);
    return {
      ...edge,
      node: {
        ...edge.node,
        absorbCat: perf.absorb != null ? `${(barsAbsorb * (100/9)).toFixed(2)}%` : null,
        bounceCat: perf.bounce != null ? `${(barsBounce * (100/9)).toFixed(2)}%` : null,
        stabilityCat: perf.stability != null ? `${(barsStability * (100/9)).toFixed(2)}%` : null,
        barsAbsorb,
        barsBounce,
        barsStability,
      },
    };
  });

  return products;
}