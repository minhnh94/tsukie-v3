import '@/styles/globals.css'
import BodyContainer from "@/app/body-container"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
    <body className="font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight">
    <BodyContainer>
      { children }
    </BodyContainer>
    </body>
    </html>
  )
}
