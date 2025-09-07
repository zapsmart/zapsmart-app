import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ChevronRight } from 'lucide-react';

function App() {
  const assistants = [
    {
      name: 'ZapSmart Finanças',
      description: 'Cotações, análise técnica, Bitcoin, B3, calculadoras',
      status: 'PREMIUM',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Finan%C3%A7as!',
    },
    {
      name: 'ZapSmart Futebol',
      description: 'Brasileirão ao vivo, Champions, transferências, estatísticas',
      status: 'PREMIUM',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Futebol!',
    },
    {
      name: 'ZapSmart Bets',
      description: 'Tips profissionais, odds, gestão de banca',
      status: 'PREMIUM',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Bets!',
    },
    {
      name: 'Corrida & Atletismo',
      description: 'Treinos, pace, provas',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Corrida+e+Atletismo!',
    },
    {
      name: 'Dieta & Nutrição',
      description: 'Receitas, IMC, planos de emagrecimento',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Dieta+e+Nutri%C3%A7%C3%A3o!',
    },
    {
      name: 'Horóscopo & Astrologia',
      description: 'Previsões, signos, mapa astral',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Hor%C3%B3scopo+e+Astrologia!',
    },
    {
      name: 'Saúde Mental',
      description: 'Meditação guiada, bem-estar',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Sa%C3%BAde+Mental!',
    },
    {
      name: 'Games & eSports',
      description: 'Lançamentos, reviews, eSports',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Games+e+eSports!',
    },
    {
      name: 'Filmes & Séries',
      description: 'Cinema, streaming, recomendações',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Filmes+e+S%C3%A9ries!',
    },
    {
      name: 'Educação',
      description: 'ENEM, vestibulares, cursos online',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Educa%C3%A7%C3%A3o!',
    },
    {
      name: 'Viagens & Turismo',
      description: 'Passagens, roteiros, hotéis',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Viagens+e+Turismo!',
    },
    {
      name: 'Promoções & Ofertas',
      description: 'Cupons, cashback, comparação',
      status: 'ATIVO',
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%2C+ZapSmart+Promo%C3%A7%C3%B5es+e+Ofertas!',
    },
  ];

  const blogPosts = [
    {
      title: 'O que é um PWA?',
      description: 'Descubra como os Progressive Web Apps podem revolucionar sua experiência online.',
      link: '#',
    },
    {
      title: 'A Importância da IA no Dia a Dia',
      description: 'Como a inteligência artificial está moldando o futuro e facilitando tarefas.',
      link: '#',
    },
    {
      title: 'Dicas de Produtividade com Assistentes Virtuais',
      description: 'Aproveite ao máximo seus assistentes para otimizar seu tempo e tarefas.',
      link: '#',
    },
    {
      title: 'Segurança Digital: Proteja Seus Dados',
      description: 'Entenda os riscos e as melhores práticas para manter suas informações seguras.',
      link: '#',
    },
    {
      title: 'O Futuro dos Aplicativos Móveis',
      description: 'Uma análise das tendências e inovações que estão por vir no mundo mobile.',
      link: '#',
    },
    {
      title: 'Como Escolher o Melhor Assistente para Você',
      description: 'Guia completo para identificar e selecionar o assistente ideal para suas necessidades.',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold">ZapSmart</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#assistentes" className="hover:text-purple-300 transition-colors">Assistentes</a></li>
            <li><a href="#blog" className="hover:text-purple-300 transition-colors">Blog</a></li>
            <li><a href="#contato" className="hover:text-purple-300 transition-colors">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4 leading-tight">12 Assistentes Especializados para Todas as Suas Necessidades</h2>
        <p className="text-xl mb-8 opacity-90">Seu dia a dia mais fácil, inteligente e conectado. Descubra o poder da inteligência artificial ao seu alcance.</p>
        <Button className="bg-white text-purple-700 hover:bg-purple-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
          Comece Agora <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Assistants Section */}
      <section id="assistentes" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Assistentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assistants.map((assistant, index ) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex justify-between items-center">
                  {assistant.name}
                  <Badge variant={assistant.status === 'PREMIUM' ? 'default' : 'secondary'} className={assistant.status === 'PREMIUM' ? 'bg-yellow-500 text-yellow-900' : 'bg-green-500 text-green-900'}>
                    {assistant.status}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-gray-300">{assistant.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={assistant.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-500 text-white hover:bg-green-600 transition-colors">
                    Falar com {assistant.name.split(' ')[0]}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Nosso Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
                <CardDescription className="text-gray-300">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                    Ler Agora <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Fale Conosco</h2>
        <p className="text-xl mb-8 opacity-90">Tem alguma dúvida ou sugestão? Entre em contato conosco!</p>
        <Button className="bg-white text-purple-700 hover:bg-purple-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
          Enviar Mensagem <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} ZapSmart. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
