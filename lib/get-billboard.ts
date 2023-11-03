export default async function getBillboard(id: string): Promise<BILLBOARD> {
   const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards/${id}`
   const res = await fetch(url)
   return res.json()
}
