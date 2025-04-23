"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface ActionItem {
  label: string
  modalTitle: string
  modalMessage: string
  href: string
  image: string    // caminho para a imagem no public/
}

export default function Home() {
  const pathname = usePathname()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(true)

  // estado do modal
  const [openModal, setOpenModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ActionItem | null>(null)

  useEffect(() => {
    setIsVisible(!pathname.includes("/configuracoes"))
  }, [pathname])

  if (!isVisible) return null

  // aqui definimos cada botão com sua própria info
  const actions: ActionItem[] = [
    {
      label: "Trabalhos Escolares",
      modalTitle: "Vale Nota ;)",
      modalMessage:
        "Aqui você vai encontrar meus trabalhos que são requisitados para conclusão de módulos, eles são básicos apenas para os alunos entender a lógica.",
      href: "",
      image: "/images/1.png",
    },
    {
      label: "Fichamer",
      modalTitle: "Aventura-se Agora!!",
      modalMessage:
        "Uma Ficha para Fãs de D&D Edição 5 onde você vai poder aumentar a imersão na sua Mesa.",
      href: "",
      image: "/images/2.png",
    },
    {
      label: "Mundo Endorfina",
      modalTitle: "Hora de Correr!!",
      modalMessage:
        "Compartilhe suas corridas, acumule pontos e conquiste recompensas na melhor rede social para corredores",
      href: "",
      image: "/images/4.png",
    },
    {
      label: "Minhas Pixelarts",
      modalTitle: "Venha conhecer Minhas Criações!!",
      modalMessage:
        "Aqui eu irei mostrar todas minhas ideia de jogo em GIF em formato pixelart, como MOBs, NPCs, Cenários e Decorações",
      href: "",
      image: "/images/3.png",
    },
    {
      label: "Orçamento Esquadramer",
      modalTitle: "Organize seus Orçamentos!!",
      modalMessage:
        "Aqui você vai conseguir colocar suas mercadorias e manipular os preços, assim como registrar seus clientes com as informações necessárias.",
      href: "",
      image: "/images/login-bg.jpg",
    },
  ]

  function handleOpen(item: ActionItem) {
    setSelectedItem(item)
    setOpenModal(true)
  }

  function handleCancel() {
    setOpenModal(false)
    setSelectedItem(null)
  }

  function handleConfirm() {
    if (selectedItem) {
      setOpenModal(false)
      router.push(selectedItem.href)
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-red-800 sm:text-5xl md:text-6xl">
            Bem‑vindo aos meu Projetos
          </h1>
          <p className="max-w-1xl text-xl text-red-200 py-10">
            Veja os trabalhos no qual estou trabalhando e também os já feitos.
          </p>

          {actions.map((action, idx) => (
           <div key={`${action.href}-${idx}`}
          className="
            relative               /* permite o botão posicionar dentro */
            flex
            items-center
            justify-center         /* centraliza o conteúdo */
            border border-red-900
            shadow-sm
            font-pixel
            bg-cover bg-center     /* cobre todo o container */
            w-[800px]               /* largura fixa */
            h-[100px]               /* altura fixa */
          "
          style={{ backgroundImage: `url(${action.image})` }}
        >
          <Button
            onClick={() => handleOpen(action)}
            className="  
              bg-red-200/40          /* sem deixar o botão 100% opaco, pra vermos o bg */  
              text-red-800
              text-[50px]
              font-pixel
              w-full h-full          /* ocupa todo o container */
              hover:bg-red-500/60
              hover:text-black
            "
          >
            {action.label}
          </Button>
        </div>
      ))}
        </div>
      </div>

      {/* Modal dinâmico */}
      {openModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-red-100 rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-pixel text-center mb-4">
              {selectedItem.modalTitle}
            </h2>
            <p className="mb-6">{selectedItem.modalMessage}</p>
            <div className="flex justify-end space-x-3">
              <Button variant="ghost" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button onClick={handleConfirm}>
                Ir!
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
