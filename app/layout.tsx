import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ModelProvider from "@/provider/model-provider"
import ToastProvider from "@/provider/toast-provider"

const urbanist = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Store",
   description: "A store for all your needs",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={urbanist.className}>
            <ToastProvider />
            <ModelProvider />
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   )
}
