import { create } from "zustand"

type ThemeMode = "light" | "dark" | "system"

interface ThemeState {
  mode: ThemeMode
  isDark: boolean // biar gampang cek di komponen
  setMode: (value: ThemeMode) => void
  toggleDarkMode: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "system",
  isDark: false,

  toggleDarkMode: () =>
    set((state) => {
      const newMode = state.isDark ? "light" : "dark"
      localStorage.setItem("theme", newMode)
      document.documentElement.classList.toggle("dark", newMode === "dark")
      return { mode: newMode, isDark: newMode === "dark" }
    }),

  setMode: (value) =>
    set(() => {
      if (typeof window !== "undefined") {
        if (value === "system") {
          localStorage.removeItem("theme")
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
          document.documentElement.classList.toggle("dark", prefersDark)
          return { mode: "system", isDark: prefersDark }
        } else {
          localStorage.setItem("theme", value)
          document.documentElement.classList.toggle("dark", value === "dark")
          return { mode: value, isDark: value === "dark" }
        }
      }
      return { mode: value, isDark: value === "dark" }
    }),
}))
