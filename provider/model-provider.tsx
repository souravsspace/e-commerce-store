"use client"

import PreviewModal from "@/components/preview-modal"
import { useEffect, useState } from "react"

export default function ModelProvider() {
   const [isMounted, setIsMounted] = useState(false)

   useEffect(() => {
      setIsMounted(true)
      return () => setIsMounted(false)
   }, [])

   if (!isMounted) return null

   return <PreviewModal />
}
