export default async function getCategories(): Promise<CATEGORY[]> {
   const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`
   const res = await fetch(url)
   return res.json()
}
