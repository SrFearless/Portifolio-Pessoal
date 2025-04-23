export default function Home() {
  return (
    <div className="relative bg-cover py-16 bg-center bg-no-repeat">
      <div className="container flex flex-col items-center justify-center space-y-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl text-red-300">
          Mostrando minha Experiência em Programação. 
        </h1>
        <p className="max-w-4xl text-xl text-black-900 py-9 border bd-red-800 bg-red-500/80 p-2 shadow-sm">
          Somente um jovem de 23 anos que sempre foi fascinado pela tecnologia, e depois de ver diversos programas práticos, jogos complexos e sites cheios de funções resultou nesta curiosidade de se perguntar: Como funciona? Como foi criado?
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg border bd-red-800 bg-red-500/90 p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-black/20 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary"
              >
                <path d="M18 20a6 6 0 0 0-12 0"></path>
                <circle cx="12" cy="10" r="4"></circle>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <h2 className="mb-4 text-xl font-medium b-black text-red-100">Portfólio</h2>
            <p className="text-center text-[17px] text-black-800">
              Quer saber mais sobre minha pessoa? aqui mostro minhas especialidades, formação e o que espero encontrar como programador.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border bd-red-800 bg-red-500/90 p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-black/20 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary"
              >
                <path d="M19 6v5a2 2 0 0 1-2 2h-2"></path>
                <path d="M4 14v5a2 2 0 0 0 2 2h12"></path>
                <path d="M7 14v7"></path>
                <path d="M9 8v8"></path>
                <path d="M11 2v20"></path>
                <path d="M13 8v8"></path>
                <path d="M15 14v7"></path>
                <path d="M17 6v5"></path>
              </svg>
            </div>
            <h2 className="mb-4 text-xl font-medium b-black text-red-100">Projetos</h2>
            <p className="text-center text-[17px] text-black-800">
              Apresento os meus trabalhos, onde sempre irei atualizar os projetos em andamento.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border bd-red-800 bg-red-500/90 p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-black/20 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 26 30"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary"
              >
                <path d="M6 10h.01"></path>
                <path d="M22 10h.01"></path>
                <path d="M14 5h.01"></path>
                <path d="M14 15h.01"></path>
                <path d="M9 13c-1.34 0-4.2.26-5 1.5a3 3 0 0 0 0 3C5 19 9 19 10.5 19"></path>
                <path d="M17.5 19c1.5 0 5.5 0 6.5-1.5a3 3 0 0 0 0-3c-.8-1.24-3.66-1.5-5-1.5"></path>
              </svg>
            </div>
            <h2 className="mb-4 text-xl font-medium b-black text-red-100">Quer falar Comigo?</h2>
            <p className="text-center text-[17px] text-black-800">
              Na aba "Contato" você encontrará meu telefone, e-mail e minhas redes-sociais para me contatar ou deixar uma Mensagem para eu Ver.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}