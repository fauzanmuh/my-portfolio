import { create } from "zustand"

interface UIState {
  isNavOpen: boolean
  toggleNav: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}))
