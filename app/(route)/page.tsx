import ProductList from "@/components/product-list"
import Billboard from "@/components/ui/billboard"
import Container from "@/components/ui/container"
import getBillboard from "@/lib/get-billboard"
import getProducts from "@/lib/get-products"

export const revalidate = 0

export default async function Home() {
    const products = await getProducts({ isFeatured: true })
   const billboard = await getBillboard("clobyexp10001vfi1xnaq0wj3")

   return (
      <Container>
         <div className="space-y-10 pb-10">
            <Billboard data={billboard} />
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
               <ProductList title="Featured Products" items={products} />
            </div>
         </div>
      </Container>
   )
}
