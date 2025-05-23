import { FeatureCard } from '@/components/FeatureCard';
import { ThemeWrapper } from '@/components/ThemeWrapper';

export default function Home() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20a6 6 0 0 0-12 0"></path>
          <circle cx="12" cy="10" r="4"></circle>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ),
      title: "Portfólio",
      description: "Quer saber mais sobre minha pessoa? Aqui mostro minhas especialidades, formação e o que espero encontrar como programador."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 6v5a2 2 0 0 1-2 2h-2"></path>
          <path d="M4 14v5a2 2 0 0 0 2 2h12"></path>
          <path d="M7 14v7"></path>
          <path d="M9 8v8"></path>
          <path d="M11 2v20"></path>
          <path d="M13 8v8"></path>
          <path d="M15 14v7"></path>
          <path d="M17 6v5"></path>
        </svg>
      ),
      title: "Projetos",
      description: "Apresento os meus trabalhos, onde sempre irei atualizar os projetos em andamento."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 30" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 10h.01"></path>
          <path d="M22 10h.01"></path>
          <path d="M14 5h.01"></path>
          <path d="M14 15h.01"></path>
          <path d="M9 13c-1.34 0-4.2.26-5 1.5a3 3 0 0 0 0 3C5 19 9 19 10.5 19"></path>
          <path d="M17.5 19c1.5 0 5.5 0 6.5-1.5a3 3 0 0 0 0-3c-.8-1.24-3.66-1.5-5-1.5"></path>
        </svg>
      ),
      title: "Quer falar Comigo?",
      description: "Na aba 'Contato' você encontrará meu telefone, e-mail e minhas redes-sociais para me contatar ou deixar uma Mensagem para eu Ver."
    }
  ];

  return (
    <ThemeWrapper>
      <div className="relative bg-cover py-16 bg-center bg-no-repeat">
        <div className="container flex flex-col items-center justify-center space-y-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-light dark:text-primary-dark sm:text-5xl md:text-6xl">
            Mostrando minha Experiência em Programação
          </h1>
          
          <p className="max-w-4xl text-xl text-black dark:text-white py-9 border border-red-800 dark:border-red-900 bg-secondary-light dark:bg-secondary-dark p-2 shadow-sm">
            Somente um jovem de 23 anos que sempre foi fascinado pela tecnologia, e depois de ver diversos programas práticos, 
            jogos complexos e sites cheios de funções resultou nesta curiosidade de se perguntar: Como funciona? Como foi criado?
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
}