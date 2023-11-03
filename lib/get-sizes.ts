export default async function getSizes(): Promise<SIZE[]> {
   const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`
   const res = await fetch(url)
   return res.json()
}
