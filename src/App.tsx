/**
 * ============================================================================
 * App.tsx — Componente Raiz da Aplicação ArlindoTech Portfolio
 * ============================================================================
 * 
 * Este é o ponto de entrada principal do portfólio. Responsabilidades:
 * 
 * 1. FORNECEDORES DE CONTEXTO (Providers):
 *    - ThemeProvider → Gerencia o tema dark/light
 *    - LanguageProvider → Gerencia o idioma (PT/EN/ES)
 * 
 * 2. ROTEAMENTO BASEADO EM HASH:
 *    - Usa window.location.hash para navegação (#home, #about, etc.)
 *    - Atualiza a URL quando a página muda
 *    - Escuta mudanças manuais na URL (botão voltar/avançar)
 * 
 * 3. ANIMAÇÕES DE TRANSIÇÃO:
 *    - AnimatePresence do Framer Motion para transições suaves entre páginas
 *    - Cada página recebe uma chave única (key={currentPage})
 * 
 * 4. LAYOUT GLOBAL:
 *    - Navbar fixa no topo (z-50)
 *    - Conteúdo principal com z-10
 *    - Footer em todas as páginas exceto Admin
 *    - Chatbot AI flutuante no canto inferior direito
 *    - Efeitos de fundo (noise, gradient orbs)
 * 
 * ESTRUTURA DE PÁGINAS:
 *    home          → Página inicial com hero, stats, seeking, projetos
 *    about         → Biografia, timeline, competências, tese
 *    skills        → Competências técnicas com progress bars
 *    portfolio     → Projetos com filtros e pesquisa
 *    blog          → Blog técnico com artigos e comentários
 *    certifications→ Certificações e cursos
 *    services      → Serviços oferecidos com preços
 *    contact       → Formulário de contacto
 *    admin         → Painel de administração
 * 
 * ============================================================================
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// ---- Contextos (Providers) ----
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// ---- Componentes globais ----
import Navbar from './components/Navbar';       // Barra de navegação fixa
import Footer from './components/Footer';       // Rodapé do site
import Chatbot from './components/Chatbot';     // Assistente AI flutuante

// ---- Páginas do portfólio ----
import Home from './pages/Home';                // Página inicial
import About from './pages/About';              // Sobre mim
import Skills from './pages/Skills';            // Competências
import Portfolio from './pages/Portfolio';       // Projetos
import Blog from './pages/Blog';                // Blog técnico
import Certifications from './pages/Certifications'; // Certificações
import Services from './pages/Services';         // Serviços
import Contact from './pages/Contact';           // Contacto
import Admin from './pages/Admin';               // Painel admin

/**
 * AppContent — Componente interno que renderiza o conteúdo da aplicação.
 * Deve estar DENTRO dos Providers (ThemeProvider + LanguageProvider).
 */
function AppContent() {
  // ---- Estado da página atual (roteamento via hash) ----
  // Lê o hash inicial da URL: se vazio, vai para 'home'
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  const { isDark } = useTheme();

  // ---- Sincronizar hash da URL com o estado ----
  // Quando a página muda, atualiza a URL
  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  // ---- Escutar mudanças manuais no hash (botão voltar/avançar) ----
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) setCurrentPage(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  /**
   * renderPage — Renderiza o componente da página com base no estado atual.
   * Cada página recebe props necessárias (ex: onNavigate para navegação interna).
   */
  const renderPage = () => {
    switch (currentPage) {
      case 'home':           return <Home onNavigate={setCurrentPage} />;
      case 'about':          return <About onNavigate={setCurrentPage} />;
      case 'skills':         return <Skills />;
      case 'portfolio':      return <Portfolio />;
      case 'blog':           return <Blog />;
      case 'certifications': return <Certifications />;
      case 'services':       return <Services onNavigate={setCurrentPage} />;
      case 'contact':        return <Contact />;
      case 'admin':          return <Admin />;
      default:               return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    // Container raiz com classes condicionais baseadas no tema
    <div className={`min-h-screen ${isDark ? 'bg-dark-950 text-gray-100' : 'bg-dark-50 text-gray-900'}`}>
      
      {/* Textura de ruído sutil (apenas no modo escuro) */}
      {isDark && <div className="noise-bg" />}

      {/* Orbs de gradiente decorativos no fundo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-[128px] ${isDark ? 'bg-primary-500/[0.03]' : 'bg-primary-500/[0.05]'}`} />
        <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-[128px] ${isDark ? 'bg-accent-500/[0.03]' : 'bg-accent-500/[0.05]'}`} />
      </div>

      {/* Barra de navegação fixa no topo */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Conteúdo principal com transições animadas entre páginas */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Rodapé — oculto na página Admin */}
      {currentPage !== 'admin' && <Footer onNavigate={setCurrentPage} />}

      {/* Chatbot AI flutuante */}
      <Chatbot />
    </div>
  );
}

/**
 * App — Componente exportado como entry point.
 * Envolve tudo nos Providers de Tema e Idioma.
 * 
 * Hierarquia de Providers:
 *   ThemeProvider (mais externo)
 *     └── LanguageProvider
 *           └── AppContent (conteúdo real)
 */
export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
