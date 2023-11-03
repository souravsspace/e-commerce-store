import { create } from "zustand"

interface PreviewModalStore {
   isOpen: boolean
   data?: PRODUCT
   onOpen: (data: PRODUCT) => void
   onClose: () => void
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
   isOpen: false,
   data: undefined,
   onOpen: (data: PRODUCT) => set({ isOpen: true, data }),
   onClose: () => set({ isOpen: false }),
}))

export default usePreviewModal
