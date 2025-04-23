"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/curriculo",
      label: "Currículo",
      active: pathname === "/curriculo",
    },
    {
      href: "/projetos",
      label: "Projetos",
      active: pathname === "/projetos",
    },
    {
      href: "/contato",
      label: "Contato",
      active: pathname === "/contato",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black-100 text-red-800">
      <div className="container flex h-16 items-center ">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-pixel">
              <Link href="/" className="flex items-center gap-2 text-lg font-pixel" onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                </svg>
                <span className="font-pixel">Esquadramer</span>
              </Link>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn("flex items-center gap-2 text-muted-foreground", route.active && "text-foreground")}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 text-lg font-pixel ">
          <div className="mb-4 rounded-full">
            <img src="/icons/Marca.png" alt="Gráfico" className="h-10 w-10" />
          </div>
          <span className="font-pixel">Esquadramer</span>
        </Link>

        <nav className="mx-6 hidden items-center space-x-4 md:flex lg:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "font-pixel transition-colors hover:text-red-100",
                route.active ? "text-red-900" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}