export default async function getColors(): Promise<COLOR[]> {
   const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`
   const res = await fetch(url)
   return res.json()
}
