'use client'
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "next-themes"

export default function BodyContainer({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      { children }
      <Analytics/>
    </ThemeProvider>
  )
}
