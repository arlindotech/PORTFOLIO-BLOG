/**
 * ============================================================================
 * LanguageContext.tsx — Contexto de Internacionalização (i18n)
 * ============================================================================
 * 
 * Este módulo implementa o sistema de multi-idiomas do portfólio.
 * 
 * COMO FUNCIONA:
 *   1. O LanguageProvider envolve toda a aplicação (ver App.tsx)
 *   2. Qualquer componente pode usar o hook useLanguage() para:
 *      - Obter o idioma atual (lang)
 *      - Alterar o idioma (setLang)
 *      - Aceder às traduções completas (t)
 *      - Obter a lista de idiomas disponíveis (languages)
 * 
 * IDIOMAS SUPORTADOS:
 *   - 🇲🇿 PT (Português) — Idioma padrão / nativo (Moçambique)
 *   - 🇬🇧 EN (English)   — Idioma internacional
 *   - 🇪🇸 ES (Español)   — Mercados da América Latina e Espanha
 * 
 * UTILIZAÇÃO:
 *   import { useLanguage } from '../context/LanguageContext';
 *   
 *   function MeuComponente() {
 *     const { lang, setLang, t } = useLanguage();
 *     return <h1>{t.home.greeting}</h1>;  // "Olá, eu sou" / "Hi, I'm" / "Hola, soy"
 *   }
 * 
 * ============================================================================
 */

import { createContext, useContext, useState, ReactNode } from 'react';

// ---- Importação das traduções completas ----
import translations, { Language, Translations } from '../data/translations';

// ---- Tipo do contexto de idioma ----
// Define tudo que fica disponível via useLanguage()
interface LanguageContextType {
  lang: Language;                    // Idioma ativo: 'pt' | 'en' | 'es'
  setLang: (lang: Language) => void; // Função para trocar idioma
  t: Translations;                   // Objeto com todas as strings traduzidas
  languages: {                       // Lista de idiomas para o seletor
    code: Language;
    label: string;                   // Abreviatura: "PT", "EN", "ES"
    flag: string;                    // Emoji da bandeira: "🇲🇿", "🇬🇧", "🇪🇸"
  }[];
}

// ---- Criação do contexto com valores padrão ----
const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  setLang: () => {},
  t: translations.pt,
  languages: [],
});

// ---- Provider que envolve a aplicação ----
// Deve ser colocado dentro de ThemeProvider mas fora de AppContent
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Estado do idioma ativo — PT é o padrão (Moçambique)
  const [lang, setLang] = useState<Language>('pt');

  // Lista de idiomas disponíveis no seletor (Navbar + Mobile Menu)
  const languages = [
    { code: 'pt' as Language, label: 'PT', flag: '🇲🇿' },
    { code: 'en' as Language, label: 'EN', flag: '🇬🇧' },
    { code: 'es' as Language, label: 'ES', flag: '🇪🇸' },
  ];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ---- Hook personalizado para usar o contexto de idioma ----
// Usar em qualquer componente: const { t, lang, setLang } = useLanguage();
export const useLanguage = () => useContext(LanguageContext);
