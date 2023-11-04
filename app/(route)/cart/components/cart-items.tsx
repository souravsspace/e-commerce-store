import Currency from "@/components/ui/currency"
import IconButton from "@/components/ui/icon-button"
import useCart from "@/hook/use-cart"
import { X } from "lucide-react"
import Image from "next/image"

type Props = {
   data: PRODUCT
}

export default function CartItems({ data }: Props) {
   const { removeItem } = useCart()

   return (
      <li className="flex border-b py-6">
         <div className="relative w-24 sm:w-48 h-24 sm:h-48 overflow-hidden rounded-md">
            <Image
               fill
               src={data.images[0].imageUrl}
               alt=""
               className="object-cover object-center"
            />
         </div>
         <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="absolute z-10 right-0 top-0">
               <IconButton
                  onClick={() => removeItem(data.id)}
                  icon={<X size={15} />}
               />
            </div>
            <div className="relative pr-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
               <div className="flex justify-between">
                  <p className="text-lg font-semibold">{data.name}</p>
               </div>
               <div className="mt-1 flex text-sm">
                  <p className="text-gray-500">{data.color.name}</p>
                  <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                     {data.size.name}
                  </p>
               </div>
               <Currency value={data.price} />
            </div>
         </div>
      </li>
   )
}
