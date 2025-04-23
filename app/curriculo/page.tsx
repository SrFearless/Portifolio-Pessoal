"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* ─── Conteúdo principal ─────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-red-900 sm:text-5xl md:text-6xl">
            Formação
          </h1>
          <p className="max-w-2xl text-xl text-red-100">
            Nascido e criado em São José dos Pinhais/Paraná, busco algum dia 
            conseguir me profissionalizar na programação, me tornando um sênior fullstack.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 items-center rounded-lg border border-red-900 bg-black-100 p-2 shadow-sm">
              <h2 className="mb-2 text-xl font-medium text-red-100">
                Muito Prazer, Sou Tiago de Freitas Machado
              </h2>
              
              <div className="mb-0 rounded-full flex flex-col items-center">
                <Button
                  onClick={() => setShowModal(true)}
                  className="bg-red-100 border border-red-800 text-red-900 hover:bg-red-400/90"
                >
                  Especialidades
                </Button>
                <img
                  src="/icons/Eu.png"
                  alt="Minha Foto"
                  className="h-80 w-80 mt-4"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center rounded-lg border bg-red-100 p-1 shadow-sm ">
            <h2 className="mb-1 text-[30px] font-pixel text-red-900"> --------------------------- Formação --------------------------- </h2>
            <p className="text-start text-[17px] text-black-900 font-pixel">
            • Ensino Superior - ADS: Concluindo na Uninter, Centro - São José dos Pinhais / PR<br />
            ---------------------------------------------------------------------------------------------------<br />
            • Ensino Médio: Concluído no Colégio Chico Mendes, São José dos Pinhais / PR<br />
            ---------------------------------------------------------------------------------------------------<br />
            • Informática Profissional: Concluído na Cedaspy, Curitiba Pinheirinho / PR<br />
            ---------------------------------------------------------------------------------------------------<br />
            • Office Profissional: Concluído na Datamix, Centro - São José dos Pinhais / PR<br />
            ---------------------------------------------------------------------------------------------------<br />
            • Mecânica Industrial: Concluído na Cebrac, Centro - São José dos Pinhais / PR<br />
            ---------------------------------------------------------------------------------------------------<br />
            • Bombeiro Civil Classe III: Concluído no Padilha Treinamentos, Guatupê - São José dos Pinhais / PR<br />
            ---------------------------------------------------------------------------------------------------<br />
            • Operador de Empilhadeira: Concluído no ASM Treinamentos, Pinheirinho - Curitiba / PR<br />
            ---------------------------------------------------------------------------------------------------<br />
            • Ajuste e Processo de Injetoras: Concluído na Feltan, São Marcos - São José dos Pinhais / PR<br />
            <span className="text-[30px] text-red-900">----------------------------------------------------------------</span>
            </p>
          </div>
        </div>
      </div>
      {/* ─── Fim do conteúdo principal ───────────────────────────────────────── */}

      {/* ─── Modal ─────────────────────────────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)} // fecha ao clicar fora
        >
          <div
            className="bg-red-200/90 rounded-lg shadow-lg max-w-lg w-full p-6 relative"
            onClick={e => e.stopPropagation()} // evita fechar ao clicar dentro
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Conteúdo do modal */}
            <h2 className="text-2xl text-red-800 font-semibold mb-4">Minhas Especialidades</h2>
            <p className="text-base text-black-700 font-semibold leading-relaxed ">
              • Word, Excel e PowerPoint: Avançado;<br/>
              • Informática em Geral: Avançado;<br/>
              • Sistemas Operacionais: Windows XP/7/8/10/11 e Linux;<br/>
              • Marketing Pessoal e Profissional;<br/>
              • Ambiente Web;<br/>
              • Administração Financeira;<br/>
              • Photoshop;<br/>
              • Design Gráfico;<br/>
              • Desenvolvimento de Sites;<br/>
              • Computação em Nuvem;<br/>
              • Produção de Documentos Profissionais;<br/>
              • Manutenção e Configuração de Micros;<br/>
              • Desenvolvimento de Jogos;<br/>
              • Operador de Empilhadeira, Rebocador e Transpaleteira;<br/>
              • NR 11 e NR-12;<br/>
              • Bombeiro Civil Profissional Classe 3;<br/>
              • Prevenção e combate a incêndio;<br/>
              • Análise de riscos;<br/>
              • Resgate Técnico;<br/>
              • Primeiros Socorros;<br/>
              • SCI e Áreas Remotas;<br/> 
              • NR-20 e NR-23;<br/>
              • Treinamento de Trocador de Molde;<br/>
              • Análise e Desenvolvimento de Sistemas;<br/>
              • Linguagem de Programação: CSS, HTML, Javascript, PlantUML e Python;<br/>
              • Banco de Dados: MySQL, DBdesigner, Node.js;<br/>
              • React (Next.js) e TypeScript<br/>
              • Tailwind CSS e arquitetura de componentes<br/>
              • Desenvolvimento de APIs RESTful<br/>
              • Testes e práticas de Clean Code<br/>
            </p>
          </div>
        </div>
      )}
      {/* ─── Fim do modal ──────────────────────────────────────────────────────── */}
    </>
  )
}