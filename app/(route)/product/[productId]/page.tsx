import Gallery from "@/components/gallery"
import Info from "@/components/info"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"
import getProduct from "@/lib/get-product"
import getProducts from "@/lib/get-products"

type Props = {
   params: {
      productId: string
   }
}

export const revalidate = 0

export async function generateMetadata({ params: { productId } }: Props) {
   const product = await getProduct(productId)
   return {
      title: "Product" + " - " + product?.name,
   }
}

export default async function Product({ params: { productId } }: Props) {
   const product = await getProduct(productId)
   const suggestedProducts = await getProducts({
      categoryId: product?.category?.id,
   })

   return (
      <div className="bg-white">
         <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
               <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                  <Gallery images={product.images} />
                  <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                     <Info data={product} />
                  </div>
               </div>
               <hr className="my-10" />
               <ProductList title="Related Items" items={suggestedProducts} />
            </div>
         </Container>
      </div>
   )
}
