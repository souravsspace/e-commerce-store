export default async function getCategory(id: string): Promise<CATEGORY> {
   const url = `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
   const res = await fetch(url)
   return res.json()
}
