export default async function getProduct(id: string): Promise<PRODUCT> {
   const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
   const res = await fetch(url)
   return res.json()
}
