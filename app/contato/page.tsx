import { Button } from "@/components/ui/button"
import { ThemeWrapper } from '@/components/ThemeWrapper';

export default function ContactPage() {
  return (
    <ThemeWrapper>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-red-500 dark:text-red-400">
            Contato
          </h1>
          <p className="max-w-2xl text-xl text-black-600 dark:text-red-400">
            Informações para me contatar 
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6">
            <div className="flex flex-col items-center rounded-lg border bg-red-100 dark:bg-gray-800 p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-pixel text-red-800 dark:text-red-300 text-[30px]">Opções</h2>
              <p className="text-center text-black dark:text-gray-200 text-[20px]">
                E-mail: tiagofreitasmachado@hotmail.com <br />
                ------------------------------------------------------ <br />
                WhatsApp: +55 (41) 98506-1032 <br />
                ------------------------------------------------------ <br />
                Quer conversar? Mande uma Mensagem para meu E-mail <br />
                ou WhatsApp, se quiser saber um pouco mais sobre <br />
                minha Pessoa acesse meu perfil em algumas plataformas <br />
                que estão aqui embaixo. <br />
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-800 dark:border-red-700 text-red-900 dark:text-red-200 hover:bg-red-900/90 dark:hover:bg-red-800/80"
            >
              <a
                href="https://www.linkedin.com/in/tiago-machado-9a15a8305/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-800 dark:border-red-700 text-red-900 dark:text-red-200 hover:bg-red-900/90 dark:hover:bg-red-800/80"
            >
              <a
                href="https://www.instagram.com/__freitasmachado.index__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-800 dark:border-red-700 text-red-900 dark:text-red-200 hover:bg-red-900/90 dark:hover:bg-red-800/80"
            >
              <a
                href="https://github.com/SrFearless"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </ThemeWrapper>
  )
}