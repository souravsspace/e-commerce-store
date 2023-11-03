import { ReactNode } from "react"

type Props = {
   children: ReactNode
}

export default function Container({ children }: Props) {
   return <main className="mx-auto max-w-7xl">{children}</main>
}
