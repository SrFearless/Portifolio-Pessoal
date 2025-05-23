'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion"
import { ThemeWrapper } from '@/components/ThemeWrapper';

interface Project {
  id: string;
  label: string;
  modalTitle: string;
  modalMessage: string;
  href: string;
  image: string;
}

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      label: "Trabalhos Escolares",
      modalTitle: "Vale Nota ;)",
      modalMessage: "Aqui você vai encontrar meus trabalhos que são requisitados para conclusão de módulos, eles são básicos apenas para os alunos entender a lógica.",
      href: "",
      image: "/images/1.png"
    },
    {
      id: '2',
      label: "Fichamer",
      modalTitle: "Aventura-se Agora!!",
      modalMessage: "Uma Ficha para Fãs de D&D Edição 5 onde você vai poder aumentar a imersão na sua Mesa.",
      href: "",
      image: "/images/2.png"
    },
    {
      id: '3',
      label: "Mundo Endorfina",
      modalTitle: "Hora de Correr!!",
      modalMessage: "Compartilhe suas corridas, acumule pontos e conquiste recompensas na melhor rede social para corredores",
      href: "",
      image: "/images/4.png"
    },
    {
      id: '4',
      label: "Minhas Pixelarts",
      modalTitle: "Venha conhecer Minhas Criações!!",
      modalMessage: "Aqui eu irei mostrar todas minhas ideia de jogo em GIF em formato pixelart, como MOBs, NPCs, Cenários e Decorações",
      href: "",
      image: "/images/3.png"
    },
    {
      id: '5',
      label: "Orçamento Esquadramer",
      modalTitle: "Organize seus Orçamentos!!",
      modalMessage: "Aqui você vai conseguir colocar suas mercadorias e manipular os preços, assim como registrar seus clientes com as informações necessárias.",
      href: "",
      image: "/images/login-bg.jpg"
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNavigate = () => {
    if (selectedProject?.href) {
      router.push(selectedProject.href);
    }
  };

  return (
    <ThemeWrapper>
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-red-800 dark:text-red-300 sm:text-5xl md:text-6xl">
              Bem-vindo aos meus Projetos
            </h1>
            
            <p className="max-w-xl text-xl text-black-200 dark:text-red-400">
              Veja os trabalhos no qual estou trabalhando e também os já feitos.
            </p>

            <div className="w-full max-w-4xl space-y-6">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="relative h-28 w-full overflow-hidden rounded-lg border border-red-900 dark:border-red-700 shadow-sm transition-all hover:shadow-md"
                  style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <Button
                    onClick={() => handleProjectClick(project)}
                    className="absolute inset-0 w-full h-full bg-red-200/40 dark:bg-red-900/40 text-red-800 dark:text-red-200 text-xl md:text-2xl font-pixel hover:bg-red-500/60 dark:hover:bg-red-700/60 hover:text-black dark:hover:text-white transition-all"
                  >
                    {project.label}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {selectedProject && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-red-100 dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-pixel text-center mb-4 text-red-800 dark:text-red-200">
                  {selectedProject.modalTitle}
                </h2>
                
                <p className="mb-6 text-gray-800 dark:text-gray-200">{selectedProject.modalMessage}</p>
                
                <div className="flex justify-end space-x-3">
                  <Button 
                    variant="outline" 
                    onClick={handleCloseModal}
                    className="border-red-800 dark:border-red-700 text-red-800 dark:text-red-200"
                  >
                    Cancelar
                  </Button>
                  
                  <Button 
                    onClick={handleNavigate}
                    disabled={!selectedProject.href}
                    className="bg-red-800 dark:bg-red-700 hover:bg-red-900 dark:hover:bg-red-600"
                  >
                    {selectedProject.href ? "Ir!" : "Em breve"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </ThemeWrapper>
  );
}