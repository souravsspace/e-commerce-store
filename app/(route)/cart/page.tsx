"use client"

import { useEffect, useState } from "react"

import CartItems from "./components/cart-items"

import Container from "@/components/ui/container"
import useCart from "@/hook/use-cart"
import Summary from "./components/summary"

export default function CartPage() {
   const [isMounted, setIsMounted] = useState(false)
   const { items } = useCart()

   useEffect(() => {
      setIsMounted(true)
   }, [])

   if (!isMounted) return null

   return (
      <div>
         <Container>
            <div className="px-4 sm:px-6 lg:px-8 py-14">
               <h1 className="text-3xl font-bold">Shoping cart</h1>
               <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
                  <div className="lg:col-span-7">
                     {items.length === 0 && (
                        <div className="flex items-center justify-center h-full w-full text-neutral-500">
                           No items added to cart.
                        </div>
                     )}
                     <ul>
                        {items.map((item) => (
                           <CartItems key={item.id} data={item} />
                        ))}
                     </ul>
                  </div>
                  <Summary />
               </div>
            </div>
         </Container>
      </div>
   )
}
