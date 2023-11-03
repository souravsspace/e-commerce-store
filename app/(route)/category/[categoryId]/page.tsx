import Billboard from "@/components/ui/billboard"
import Container from "@/components/ui/container"
import NoResults from "@/components/ui/no-results"
import ProductCard from "@/components/ui/product-card"
import getCategory from "@/lib/get-category"
import getColors from "@/lib/get-colors"
import getProducts from "@/lib/get-products"
import getSizes from "@/lib/get-sizes"
import MobileFilters from "./components/mobile-filters"
import Filter from "./components/filter"

type Props = {
   params: {
      categoryId: string
   }
   searchParams: {
      colorId: string
      sizeId: string
   }
}

export const revalidate = 0

export async function generateMetadata({ params: { categoryId } }: Props) {
   const category = await getCategory(categoryId)
   return {
      title: category?.name + " - " + "Category",
   }
}

export default async function Category({
   params: { categoryId },
   searchParams: { sizeId, colorId },
}: Props) {
   const colors = await getColors()
   const sizes = await getSizes()
   const category = await getCategory(categoryId)

   const products = await getProducts({
      categoryId,
      sizeId,
      colorId,
   })

   return (
      <div className="bg-white">
         <Container>
            <Billboard data={category.billboard} />
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
               <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                  <MobileFilters sizes={sizes} colors={colors} />
                  <div className="hidden lg:block">
                     <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                     <Filter valueKey="colorId" name="Colors" data={colors} />
                  </div>
                  <div className="mt-6 lg:col-span-4 lg:mt-0">
                     {products.length === 0 && <NoResults />}
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((item) => (
                           <ProductCard key={item.id} data={item} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}
