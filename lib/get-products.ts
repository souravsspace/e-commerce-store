import qs from "query-string"

interface Query {
   categoryId?: string
   colorId?: string
   sizeId?: string
   isFeatured?: boolean
}

export default async function getProducts(query: Query): Promise<PRODUCT[]> {
   const url = `${process.env.NEXT_PUBLIC_API_URL}/products/`

   const newUrl = qs.stringifyUrl({
      url,
      query: {
         categoryid: query.categoryId,
         isFeatured: query.isFeatured,
         colorid: query.colorId,
         sizeid: query.sizeId,
      },
   })

   const res = await fetch(newUrl)
   return res.json()
}
