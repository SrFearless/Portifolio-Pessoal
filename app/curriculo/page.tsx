'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion"
import { ThemeWrapper } from '@/components/ThemeWrapper';

const educationItems = [
  "Ensino Superior - ADS: Concluindo na Uninter, Centro - São José dos Pinhais / PR",
  "Ensino Médio: Concluído no Colégio Chico Mendes, São José dos Pinhais / PR",
  "Informática Profissional: Concluído na Cedaspy, Curitiba Pinheirinho / PR",
  "Office Profissional: Concluído na Datamix, Centro - São José dos Pinhais / PR",
  "Mecânica Industrial: Concluído na Cebrac, Centro - São José dos Pinhais / PR",
  "Bombeiro Civil Classe III: Concluído no Padilha Treinamentos, Guatupê - São José dos Pinhais / PR",
  "Operador de Empilhadeira: Concluído no ASM Treinamentos, Pinheirinho - Curitiba / PR",
  "Ajuste e Processo de Injetoras: Concluído na Feltan, São Marcos - São José dos Pinhais / PR"
];

const skills = [
  "Word, Excel e PowerPoint: Avançado",
  "Informática em Geral: Avançado",
  "Sistemas Operacionais: Windows XP/7/8/10/11 e Linux",
  "Marketing Pessoal e Profissional",
  "Ambiente Web",
  "Administração Financeira",
  "Photoshop",
  "Design Gráfico",
  "Desenvolvimento de Sites",
  "Computação em Nuvem",
  "Produção de Documentos Profissionais",
  "Manutenção e Configuração de Micros",
  "Desenvolvimento de Jogos",
  "Operador de Empilhadeira, Rebocador e Transpaleteira",
  "NR 11 e NR-12",
  "Bombeiro Civil Profissional Classe 3",
  "Prevenção e combate a incêndio",
  "Análise de riscos",
  "Resgate Técnico",
  "Primeiros Socorros",
  "SCI e Áreas Remotas",
  "NR-20 e NR-23",
  "Treinamento de Trocador de Molde",
  "Análise e Desenvolvimento de Sistemas",
  "Linguagem de Programação: CSS, HTML, Javascript, PlantUML e Python",
  "Banco de Dados: MySQL, DBdesigner, Node.js",
  "React (Next.js) e TypeScript",
  "Tailwind CSS e arquitetura de componentes",
  "Desenvolvimento de APIs RESTful",
  "Testes e práticas de Clean Code"
];

export default function ResumePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeWrapper>
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-red-900 dark:text-red-300 sm:text-5xl md:text-6xl">
              Formação
            </h1>
            
            <p className="max-w-2xl text-xl text-black-100 dark:text-red-400">
              Nascido e criado em São José dos Pinhais/Paraná, busco algum dia 
              conseguir me profissionalizar na programação, me tornando um sênior fullstack.
            </p>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center rounded-lg border border-red-900 dark:border-red-700 bg-black-100 dark:bg-gray-800 p-6 shadow-sm">
              <div>
                <h2 className="mb-4 text-2xl font-medium text-black-100 dark:text-red-300">
                  Muito Prazer, Sou Tiago de Freitas Machado
                </h2>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <Button
                  onClick={() => setShowModal(true)}
                  className="bg-red-100 dark:bg-red-900/50 border border-red-800 dark:border-red-700 text-red-900 dark:text-red-200 hover:bg-red-400/90 dark:hover:bg-red-800/80"
                >
                  Especialidades
                </Button>
                
                <img
                  src="/icons/Eu.png"
                  alt="Tiago de Freitas Machado"
                  className="h-64 w-64 rounded-full object-cover border-4 border-red-800 dark:border-red-700 shadow-lg"
                />
              </div>
            </div>

            <div className="w-full max-w-4xl rounded-lg bg-red-100 dark:bg-gray-800 p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-pixel text-red-900 dark:text-red-300 text-center border-b-2 border-red-800 dark:border-red-700 pb-2">
                Formação Acadêmica e Cursos
              </h2>
              
              <ul className="space-y-4 text-left text-black-900 dark:text-gray-200 font-pixel">
                {educationItems.map((item, index) => (
                  <li key={index} className="pb-4 border-b border-red-300 dark:border-gray-700 last:border-b-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
              <div className="bg-red-200/90 dark:bg-gray-700/95 rounded-lg shadow-lg max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl">
                  ✕
                </button>

                <h2 className="text-2xl text-red-800 dark:text-red-200 font-semibold mb-6 text-center">Minhas Especialidades</h2>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <li key={index} className="bg-white/50 dark:bg-gray-600/50 p-3 rounded-md shadow-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </ThemeWrapper>
  );
}