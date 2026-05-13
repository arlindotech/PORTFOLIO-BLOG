/**
 * ============================================================================
 * ThemeContext.tsx — Contexto de Tema (Dark/Light Mode)
 * ============================================================================
 * 
 * Este módulo gere o tema visual do portfólio (modo escuro/claro).
 * 
 * COMO FUNCIONA:
 *   1. O ThemeProvider envolve toda a aplicação (ver App.tsx)
 *   2. Qualquer componente pode usar useTheme() para:
 *      - Saber se está em modo escuro (isDark)
 *      - Alternar entre modos (toggleTheme)
 * 
 * EFEITOS VISUAIS:
 *   - isDark=true  → Fundo escuro (#030712), texto claro, glassmorphism escuro
 *   - isDark=false → Fundo claro (#f8fafc), texto escuro, glassmorphism claro
 *   - Toggle aplica classes CSS no <html> e ajusta cores do <body>
 * 
 * UTILIZAÇÃO:
 *   import { useTheme } from '../context/ThemeContext';
 *   
 *   function MeuComponente() {
 *     const { isDark, toggleTheme } = useTheme();
 *     return (
 *       <div className={isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
 *         <button onClick={toggleTheme}>Alternar Tema</button>
 *       </div>
 *     );
 *   }
 * 
 * ============================================================================
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ---- Tipo do contexto de tema ----
interface ThemeContextType {
  isDark: boolean;               // true = modo escuro, false = modo claro
  toggleTheme: () => void;       // Função para alternar entre temas
}

// ---- Criação do contexto com valor padrão (modo escuro) ----
const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

// ---- Provider que envolve a aplicação ----
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Estado do tema — escuro por padrão (dark premium theme)
  const [isDark, setIsDark] = useState(true);

  // Efeito colateral: atualizar classes e estilos do body quando o tema muda
  useEffect(() => {
    // Adiciona/remove classe 'light' no <html> para CSS condicional
    document.documentElement.classList.toggle('light', !isDark);
    
    // Atualiza as cores de fundo e texto do <body> diretamente
    document.body.style.background = isDark ? '#030712' : '#f8fafc';
    document.body.style.color = isDark ? '#f1f5f9' : '#0f172a';
    
    // Atualiza a cor da barra de estado mobile (meta theme-color)
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#030712' : '#f8fafc');
    }
  }, [isDark]);

  // Função para alternar entre temas claro e escuro
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ---- Hook personalizado para usar o contexto de tema ----
// Usar em qualquer componente: const { isDark, toggleTheme } = useTheme();
export const useTheme = () => useContext(ThemeContext);
