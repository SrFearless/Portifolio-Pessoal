import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center space-y-12 text-center">
        <h1 className="text-[80px] font-bold tracking-tight text-red-500">
          Contato
        </h1>
        <p className="max-w-2xl text-xl text-red-100">
          Informações para me contatar 
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6">
          <div className="flex flex-col items-center rounded-lg border bg-red-100 p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-pixel text-red-800 text-[30px]">Opções</h2>
            <p className="text-center text-black text-[20px]">
              E-mail: tiagofreitasmachado@hotmail.com <br></br>
              ------------------------------------------------------ <br></br>
              WhatsApp: +55 (41) 98506-1032 <br></br>
              ------------------------------------------------------ <br></br>
              Quer conversar? Mande uma Mensagem para meu E-mail <br></br>
              ou WhatsApp, se quiser saber um pouco mais sobre <br></br>
              minha Pessoa acesse meu perfil em algumas plataformas <br></br>
              que estão aqui embaixo. <br></br>
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button
            asChild
            size="lg"
            variant="outline"
            className="border-red-800 text-red-900 hover:bg-red-900/90"
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
            className="border-red-800 text-red-900 hover:bg-red-900/90"
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
            className="border-red-800 text-red-900 hover:bg-red-900/90"
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
  )
}
