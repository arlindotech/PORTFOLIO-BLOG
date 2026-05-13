import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, Briefcase, Award, Layers, FolderOpen, Home, User, BookOpen, Mail, Globe, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang, t, languages } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setExpanded(false); setLangOpen(false); }, [currentPage]);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    setExpanded(false);
    setLangOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainLinks = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'about', label: t.nav.about, icon: User },
    { id: 'blog', label: t.nav.blog, icon: BookOpen },
    { id: 'contact', label: t.nav.contact, icon: Mail },
  ];

  const expandLinks = [
    { id: 'portfolio', label: t.nav.portfolio, desc: t.nav.portfolioDesc, icon: FolderOpen, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'skills', label: t.nav.skills, desc: t.nav.skillsDesc, icon: Layers, gradient: 'from-violet-500 to-purple-500' },
    { id: 'services', label: t.nav.services, desc: t.nav.servicesDesc, icon: Briefcase, gradient: 'from-amber-500 to-orange-500' },
    { id: 'certifications', label: t.nav.certifications, desc: t.nav.certificationsDesc, icon: Award, gradient: 'from-emerald-500 to-teal-500' },
  ];

  const isExpandActive = expandLinks.some(l => l.id === currentPage);
  const currentLang = languages.find(l => l.code === lang)!;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || expanded
            ? isDark
              ? 'bg-[#0a0f1a]/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)] shadow-lg shadow-black/20'
              : 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)] shadow-lg shadow-black/5'
            : isDark
              ? 'bg-gradient-to-b from-[#0a0f1a]/60 to-transparent backdrop-blur-sm'
              : 'bg-gradient-to-b from-white/40 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] md:h-[76px]">

            {/* ===== LEFT: Logo ===== */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 via-accent-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm font-display transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl group-hover:shadow-xl group-hover:shadow-primary-500/25">
                  {personalInfo.avatar}
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary-500 via-accent-500 to-cyan-400 opacity-0 group-hover:opacity-20 blur-md transition-all duration-500" />
              </div>
              <div className="hidden sm:block">
                <span className="text-[17px] font-extrabold font-display tracking-tight">
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>Arlindo</span>
                  <span className="gradient-text">Tech</span>
                </span>
                <div className="flex items-center gap-1 -mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-semibold text-emerald-400 uppercase tracking-widest">Available</span>
                </div>
              </div>
            </button>

            {/* Seeking badge - desktop */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNav('home'); setTimeout(() => { const el = document.getElementById('seeking-section'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className={`hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isDark
                  ? 'bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-primary-400 hover:border-primary-400/40 hover:from-primary-500/15 hover:to-accent-500/15'
                  : 'bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 text-primary-600 hover:border-primary-300 hover:shadow-sm'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
              </span>
              {t.home.seekingTitle}
            </motion.a>

            {/* ===== CENTER: Nav Links ===== */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {mainLinks.map((link) => {
                const Icon = link.icon;
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-300 group ${
                      isActive
                        ? 'text-primary-400'
                        : isDark ? 'text-gray-500 hover:text-gray-200' : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 rounded-lg bg-primary-500/[0.08]"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                      />
                    )}
                    <Icon size={13} className="relative z-10 opacity-70" />
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}

              {/* Divider */}
              <div className={`w-px h-5 mx-2 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />

              {/* Expand Toggle */}
              <button
                onClick={() => setExpanded(!expanded)}
                className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                  isExpandActive
                    ? 'text-primary-400'
                    : isDark ? 'text-gray-500 hover:text-gray-200' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {(isExpandActive || expanded) && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 rounded-lg bg-primary-500/[0.08]"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <Monitor size={13} className="relative z-10 opacity-70" />
                <span className="relative z-10">{expanded ? t.nav.less : t.nav.more}</span>
                <motion.span
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <ChevronDown size={13} />
                </motion.span>
              </button>
            </nav>

            {/* ===== RIGHT: Actions ===== */}
            <div className="flex items-center gap-1.5 md:gap-2">

              {/* Language */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isDark
                      ? 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]'
                      : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Globe size={13} />
                  <span className="hidden sm:inline">{currentLang.label}</span>
                  <span className="sm:hidden">{currentLang.flag}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute right-0 top-full mt-2 w-40 rounded-2xl overflow-hidden py-1.5 ${
                        isDark
                          ? 'bg-[#111827]/95 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/50'
                          : 'bg-white/95 backdrop-blur-2xl border border-gray-200 shadow-2xl shadow-black/10'
                      }`}
                    >
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-all ${
                            lang === l.code
                              ? isDark ? 'bg-primary-500/10 text-primary-400 font-semibold' : 'bg-primary-50 text-primary-600 font-semibold'
                              : isDark ? 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-base">{l.flag}</span>
                          <span className="font-medium">{l.label}</span>
                          {lang === l.code && (
                            <motion.span
                              layoutId="langDot"
                              className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400"
                            />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDark ? 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* Profile Photo */}
              <button
                onClick={() => handleNav('about')}
                onMouseEnter={() => setProfileHover(true)}
                onMouseLeave={() => setProfileHover(false)}
                className="hidden md:flex items-center gap-2.5 pl-2.5 group relative"
              >
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full overflow-hidden transition-all duration-500 ${
                    profileHover ? 'ring-2 ring-primary-400/60 ring-offset-2 ring-offset-transparent shadow-lg shadow-primary-500/20' : 'ring-1 ring-white/10'
                  }`}>
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.fullName}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = 'none';
                        if (el.parentElement) el.parentElement.innerHTML = `<span class="w-full h-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br from-primary-500 to-accent-500">${personalInfo.avatar}</span>`;
                      }}
                    />
                  </div>
                  {/* Pulse ring */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-dark-900" />
                  </span>
                </div>
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => { setMobileOpen(!mobileOpen); }}
                className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                  isDark ? 'text-gray-400 hover:text-white hover:bg-white/[0.04]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* ===== EXPANDING BAR ===== */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden lg:block overflow-hidden"
            >
              <div className={`${isDark ? 'border-t border-white/[0.04] bg-[#080c16]/60' : 'border-t border-gray-100 bg-white/40'} backdrop-blur-2xl`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <div className="grid grid-cols-4 gap-3">
                    {expandLinks.map((link, i) => {
                      const Icon = link.icon;
                      const isActive = currentPage === link.id;
                      return (
                        <motion.button
                          key={link.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.3 }}
                          onClick={() => handleNav(link.id)}
                          className={`relative flex items-center gap-3.5 px-5 py-4 rounded-2xl text-left transition-all duration-300 overflow-hidden group ${
                            isActive
                              ? isDark ? 'bg-primary-500/[0.08] ring-1 ring-primary-500/20' : 'bg-primary-50 ring-1 ring-primary-200'
                              : isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-gray-50'
                          }`}
                        >
                          {/* Gradient glow on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                          <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? `bg-gradient-to-br ${link.gradient} text-white shadow-lg`
                              : isDark ? 'bg-white/[0.05] text-gray-400 group-hover:text-white group-hover:bg-white/[0.08]' : 'bg-gray-100 text-gray-500 group-hover:text-gray-800 group-hover:bg-gray-200'
                          }`}>
                            <Icon size={18} />
                          </div>
                          <div className="relative">
                            <p className={`text-sm font-semibold ${isActive ? (isDark ? 'text-primary-400' : 'text-primary-600') : (isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900')}`}>
                              {link.label}
                            </p>
                            <p className={`text-[11px] mt-0.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{link.desc}</p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className={`absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] ${
                isDark ? 'bg-[#0a0f1a]/98' : 'bg-white/98'
              } backdrop-blur-2xl border-l ${isDark ? 'border-white/[0.06]' : 'border-gray-200'}`}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className={`p-5 flex items-center gap-3 border-b ${isDark ? 'border-white/[0.06]' : 'border-gray-100'}`}>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary-500/30">
                      <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.fullName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = 'none';
                          if (el.parentElement) el.parentElement.innerHTML = `<span class="w-full h-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-primary-500 to-accent-500">${personalInfo.avatar}</span>`;
                        }}
                      />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-dark-900" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{personalInfo.fullName}</p>
                    <p className="text-[11px] text-primary-400 font-medium">{personalInfo.title}</p>
                  </div>
                </div>

                {/* Mobile Nav */}
                <div className="flex-1 overflow-y-auto p-4 space-y-1">
                  {mainLinks.map((link, i) => {
                    const Icon = link.icon;
                    return (
                      <motion.button
                        key={link.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onClick={() => handleNav(link.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                          currentPage === link.id
                            ? 'text-primary-400 bg-primary-500/10'
                            : isDark ? 'text-gray-400 hover:text-white hover:bg-white/[0.04]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon size={16} />
                        {link.label}
                      </motion.button>
                    );
                  })}

                  <div className={`pt-3 mt-2 border-t ${isDark ? 'border-white/[0.06]' : 'border-gray-100'}`}>
                    <p className={`px-4 pb-2 text-[9px] font-bold uppercase tracking-[0.15em] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                      {t.common.explore}
                    </p>
                    {expandLinks.map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <motion.button
                          key={link.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (4 + i) * 0.04 }}
                          onClick={() => handleNav(link.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                            currentPage === link.id
                              ? 'text-primary-400 bg-primary-500/10'
                              : isDark ? 'text-gray-400 hover:text-white hover:bg-white/[0.04]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${link.gradient} bg-opacity-20`}
                            style={{ background: currentPage === link.id ? undefined : (isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)') }}
                          >
                            <Icon size={14} className={currentPage === link.id ? 'text-white' : (isDark ? 'text-gray-500' : 'text-gray-400')} />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{link.label}</p>
                            <p className={`text-[11px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{link.desc}</p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Footer: Language */}
                <div className={`p-4 border-t ${isDark ? 'border-white/[0.06]' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-1.5">
                    <Globe size={12} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                          lang === l.code
                            ? 'bg-primary-500/10 text-primary-400 ring-1 ring-primary-500/20'
                            : isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        <span className="text-xs">{l.flag}</span> {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click-away layer */}
      {langOpen && <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />}
    </>
  );
}
