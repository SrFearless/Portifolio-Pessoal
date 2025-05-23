import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { NavBar } from "@/components/nav-bar"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portifólio ",
  icons: {
    icon: "/icons/Marca.png",},
  description: "Veja meu melhores trabalhos",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={cn(inter.className, "min-h-screen bd-background bg-black")}>
        <div className="font-pixel">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
        </div>
      </body>
    </html>
  )
}

import './globals.css'