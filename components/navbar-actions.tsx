"use client"

import Button from "@/components/ui/button"
import useCart from "@/hook/use-cart"
import { ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavbarActions() {
   const [isMounted, setIsMounted] = useState(false)

   const { items } = useCart()
   const router = useRouter()

   useEffect(() => {
      setIsMounted(true)
   }, [])

   if (!isMounted) return null

   return (
      <div className="ml-auto flex items-center gap-x-4">
         <Button
            onClick={() => router.push("/cart")}
            className="flex items-center rounded-full bg-black px-4 py-2"
         >
            <ShoppingBag size={20} color="white" />
            <span className="ml-2 text-sm font-medium text-white">
               {items.length}
            </span>
         </Button>
      </div>
   )
}
