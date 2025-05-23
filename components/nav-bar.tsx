"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Início",
      active: pathname === "/",
    },
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

  // Alternar dark mode e aplicar classe ao body
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark', !darkMode)
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b",
      darkMode ? "bg-gray-900 border-gray-700" : "bg-gray-200 border-red-900/20"
    )}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo e nome */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/icons/Marca.png" 
            alt="Logo Esquadramer" 
            className="h-10 w-10"
          />
          <span className={cn(
            "text-lg font-pixel",
            darkMode ? "text-red-300" : "text-red-800"
          )}>
            Esquadramer
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Botão Dark Mode - visível em todas as telas */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className={cn(
              "hover:bg-transparent focus-visible:ring-0",
              darkMode ? "text-yellow-300" : "text-red-800"
            )}
            aria-label={darkMode ? "Desativar modo escuro" : "Ativar modo escuro"}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Menu desktop - escondido em mobile */}
          <nav className="hidden items-center space-x-6 md:flex">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "font-pixel text-sm transition-colors relative",
                  darkMode 
                    ? route.active 
                      ? "text-red-300 font-bold" 
                      : "text-red-400 hover:text-red-300"
                    : route.active 
                      ? "text-red-900 font-bold" 
                      : "text-red-800 hover:text-red-900"
                )}
              >
                {route.label}
                {route.active && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute left-0 top-full mt-1 h-0.5 w-full bg-red-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Menu mobile - aparece apenas em telas pequenas */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "hover:bg-transparent focus-visible:ring-0",
                    darkMode ? "text-red-300" : "text-red-800"
                  )}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu de navegação</span>
                </Button>
              </SheetTrigger>
              
              <SheetContent 
                side="left" 
                className={cn(
                  "w-[300px]",
                  darkMode ? "bg-gray-900" : "bg-black-100"
                )}
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full"
                >
                  {/* Cabeçalho do menu mobile */}
                  <div className={cn(
                    "flex items-center gap-2 pb-6 border-b",
                    darkMode ? "border-gray-700" : "border-red-900/20"
                  )}>
                    <img 
                      src="/icons/Marca.png" 
                      alt="Logo Esquadramer" 
                      className="h-10 w-10"
                    />
                    <span className={cn(
                      "text-lg font-pixel",
                      darkMode ? "text-red-300" : "text-red-800"
                    )}>
                      Esquadramer
                    </span>
                  </div>

                  {/* Links de navegação */}
                  <nav className="flex flex-col gap-2 mt-6">
                    {routes.map((route) => (
                      <motion.div
                        key={route.href}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={route.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "font-pixel py-3 px-4 rounded-md transition-colors flex items-center justify-between",
                            darkMode
                              ? route.active
                                ? "bg-red-900/30 text-red-300 font-bold"
                                : "text-red-400 hover:bg-gray-800"
                              : route.active
                                ? "bg-red-900/20 text-red-900 font-bold"
                                : "text-red-800 hover:bg-red-900/10"
                          )}
                        >
                          <span>{route.label}</span>
                          {route.active && (
                            <motion.div
                              layoutId="mobileActiveIndicator"
                              className="w-2 h-2 bg-red-600 rounded-full"
                              transition={{ type: "spring", bounce: 0.3 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Espaço vazio para empurrar o conteúdo para cima */}
                  <div className="flex-1" />

                  {/* Rodapé */}
                  <div className={cn(
                    "pt-6 border-t text-sm",
                    darkMode ? "border-gray-700 text-gray-400" : "border-red-900/20 text-red-800/80"
                  )}>
                    © {new Date().getFullYear()} Esquadramer
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}