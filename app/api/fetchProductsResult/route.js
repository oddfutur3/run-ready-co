import { getProducts } from "./getProducts";


export async function POST(req) {
  const { collection, subcollection, endCursor, searchParams} =
    await req.json();

    try {
    
      const products = await getProducts(collection, subcollection, endCursor, searchParams)

    // console.log(products.body.data.search.productFilters[4]);

    // const readFilters = (productFilters) => {
    //   productFilters.map(productFilter => )
    // }

    // console.log(products.body.data.collection.products.edges);
    let prodArray = products.body.data.collection.products.edges;

    console.log('this ran',prodArray)

    return Response.json({
      prodArray: prodArray,
      cursor: products.body.data.collection.products.pageInfo.endCursor,
      hasNextPage: products.body.data.collection.products.pageInfo.hasNextPage,
    });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong.", {
      status: 401,
    });
  }
}

