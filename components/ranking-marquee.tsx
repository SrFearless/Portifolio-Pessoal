"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const topRunners = [
  {name: "Somente um jovem de 23 anos que sempre foi fascinado pela tecnologia, e depois de ver diversos programas práticos, jogos complexos e sites cheios de funções resultou nesta curiosidade de se perguntar: Como funciona? Como foi criado?"},
]

export default function RankingMarquee() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Não mostrar em páginas de configurações
    setIsVisible(!pathname.includes("/configuracoes"))
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className="bg-primary/10 py-2 bg-red-900 text-red-100">
      <div className="flex w-full items-center space-x-6 overflow-hidden ">
        <div className="flex min-w-full animate-[marquee_15s_linear_infinite] items-center space-x-6 ">
          {topRunners.map((runner, index) => (
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-primary">#{index + 1}</span>
              <span className="whitespace-nowrap font-medium">{runner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

