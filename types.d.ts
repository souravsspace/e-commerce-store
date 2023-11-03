type BILLBOARD = {
   id: string
   label: string
   imageUrl: string
}

type CATEGORY = {
   id: string
   name: string
   billboard: BILLBOARD
}

type PRODUCT = {
   id: string
   name: string
   price: number
   isFeatured: boolean
   isArchived: boolean
   category: CATEGORY
   size: SIZE
   color: COLOR
   images: IMAGE[]
}

type SIZE = {
   id: string
   name: string
   value: string
}

type COLOR = {
   id: string
   name: string
   value: string
}

type IMAGE = {
   id: string
   imageUrl: string
}
