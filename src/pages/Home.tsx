import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, Star, Quote, ArrowRight, MapPin, Calendar, Sparkles, Globe, Download, Code2, Briefcase, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { personalInfo, stats, techStack, projects, testimonials, seekingItems } from '../data/portfolioData';

interface HomeProps { onNavigate: (page: string) => void; }

function TypingText({ texts, speed = 70 }: { texts: string[]; speed?: number }) {
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const text = texts[ti];
    const t = setTimeout(() => {
      if (!del) {
        if (ci < text.length) setCi(p => p + 1);
        else setTimeout(() => setDel(true), 2500);
      } else {
        if (ci > 0) setCi(p => p - 1);
        else { setDel(false); setTi(p => (p + 1) % texts.length); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [ci, del, ti, texts, speed]);

  return <span>{texts[ti].substring(0, ci)}<span className="animate-pulse text-primary-400">|</span></span>;
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref[0]) obs.observe(ref[0]);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const inc = target / 60; let cur = 0;
    const t = setInterval(() => { cur += inc; if (cur >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(cur)); }, 33);
    return () => clearInterval(t);
  }, [started, target]);

  return <div ref={(el) => { (ref as any)[0] = el; }}>{count}{suffix}</div>;
}

// Floating particles
function Particles() {
  const { isDark } = useTheme();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${isDark ? 'bg-primary-500/20' : 'bg-primary-500/10'}`}
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  const { isDark } = useTheme();
  const { t, lang } = useLanguage();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  const roles = {
    en: ['Information Systems Professional', 'ICT Technician', 'Database Specialist', 'Systems Analyst', 'Digital Transformation Advocate'],
    es: ['Profesional de Sistemas de Información', 'Técnico de TIC', 'Especialista en Bases de Datos', 'Analista de Sistemas', 'Defensor de la Transformación Digital'],
    pt: ['Profissional de Sistemas de Informação', 'Técnico de TIC', 'Especialista em Bases de Dados', 'Analista de Sistemas', 'Defensor da Transformação Digital'],
  };

  const statLabels = [t.home.stats.yearsExp, t.home.stats.academicProjects, t.home.stats.systemsManaged, t.home.stats.reportsDelivered, t.home.stats.certifications, t.home.stats.bootcampCourses];

  const socialLinks = [
    { icon: Code2, label: 'GitHub', color: 'hover:bg-gray-600' },
    { icon: Briefcase, label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: MessageCircle, label: 'Twitter', color: 'hover:bg-sky-500' },
  ];

  const orbitIcons = [
    { emoji: '☕', angle: 0 },
    { emoji: '🐍', angle: 90 },
    { emoji: '🗃️', angle: 180 },
    { emoji: '🏛️', angle: 270 },
    { emoji: '📊', angle: 45 },
    { emoji: '🌐', angle: 225 },
  ];

  return (
    <div className="overflow-hidden">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center px-4 pt-24 pb-12">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/[0.07] rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/[0.07] rounded-full blur-[120px] animate-float-delay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.03] rounded-full blur-[150px]" />
          <Particles />
          <div className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`} style={{
            backgroundImage: `radial-gradient(rgba(59,130,246,0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ===== LEFT: Photo Composition ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-1"
            >
              <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
                {/* Outer glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-400 shadow-lg shadow-primary-400/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-400 shadow-lg shadow-accent-400/50" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                </motion.div>

                {/* Gradient ring */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-cyan-400 p-[3px] animate-pulse-glow">
                  <div className={`w-full h-full rounded-full ${isDark ? 'bg-[#0a0f1a]' : 'bg-white'}`} />
                </div>

                {/* Photo */}
                <div className="absolute inset-5 rounded-full overflow-hidden">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = 'none';
                      if (el.parentElement) el.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-accent-500/20"><span class="text-6xl font-bold gradient-text font-display">${personalInfo.avatar}</span></div>`;
                    }}
                  />
                </div>

                {/* Orbiting tech icons */}
                {orbitIcons.map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25 + i * 3, repeat: Infinity, ease: 'linear' }}
                    style={{
                      top: '50%',
                      left: '50%',
                      width: 0,
                      height: 0,
                    }}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        top: -(140 + i * 8),
                        left: -16,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25 + i * 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${isDark ? 'bg-[#0a0f1a]/80' : 'bg-white/80'} backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-200'} flex items-center justify-center text-lg md:text-xl shadow-lg`}>
                        {item.emoji}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating badge: Available */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                >
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-[#0a0f1a]/90' : 'bg-white/90'} backdrop-blur-xl border ${isDark ? 'border-emerald-500/20' : 'border-emerald-400/30'} shadow-xl`}>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">{t.common.available}</span>
                  </div>
                </motion.div>

                {/* Floating badge: Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className={`absolute -left-4 md:-left-8 top-1/4 hidden md:block`}
                >
                  <div className={`px-4 py-3 rounded-2xl ${isDark ? 'bg-[#0a0f1a]/80' : 'bg-white/80'} backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-200'} shadow-xl`}>
                    <div className="text-2xl font-extrabold gradient-text">10+</div>
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t.home.stats.yearsExp}</p>
                  </div>
                </motion.div>

                {/* Floating badge: Degree */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className={`absolute -right-4 md:-right-8 top-1/3 hidden md:block`}
                >
                  <div className={`px-4 py-3 rounded-2xl ${isDark ? 'bg-[#0a0f1a]/80' : 'bg-white/80'} backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-200'} shadow-xl`}>
                    <div className="text-2xl">🎓</div>
                    <p className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>B.Sc. ISM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* ===== RIGHT: Content ===== */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              {/* Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6"
              >
                <Sparkles size={13} className="text-yellow-400" />
                <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {lang === 'pt' ? 'Pronto para novos desafios' : lang === 'es' ? 'Listo para nuevos desafíos' : 'Ready for new challenges'}
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-display leading-[1.1] mb-5">
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>{t.home.greeting}</span>
                  <br />
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
              </motion.div>

              {/* Typing roles */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-5">
                <div className="text-xl md:text-2xl xl:text-3xl font-semibold">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-gray-300 to-gray-500' : 'from-gray-600 to-gray-500'}`}>
                    <TypingText texts={roles[lang]} />
                  </span>
                </div>
              </motion.div>

              {/* Meta info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className={`flex flex-wrap gap-x-5 gap-y-2 text-sm mb-6 justify-center lg:justify-start ${isDark ? 'text-gray-500' : 'text-gray-500'}`}
              >
                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary-400" /> {personalInfo.location}</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary-400" /> {personalInfo.yearsExperience}+ {t.home.stats.yearsExp}</span>
                <span className="flex items-center gap-1.5"><Globe size={14} className="text-primary-400" /> B.Sc. Information Systems</span>
              </motion.div>

              {/* Bio */}
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                className={`text-base md:text-[17px] leading-relaxed mb-8 max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} ${lang === 'pt' ? 'mx-auto lg:mx-0' : 'mx-auto lg:mx-0'}`}
              >
                {personalInfo.bio}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8"
              >
                <button onClick={() => onNavigate('contact')} className="group relative overflow-hidden px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    {t.common.contactMe}
                    <ExternalLink size={15} />
                  </span>
                </button>

                <a href="#" className="group flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 border-2 border-primary-500/30 text-primary-400 hover:border-primary-400/60 hover:bg-primary-500/5">
                  <Download size={15} />
                  {t.common.downloadCV}
                </a>
              </motion.div>

              {/* Social Links + Social Proof */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="flex items-center gap-6 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ icon: Icon, label, color }) => (
                    <a
                      key={label}
                      href="#"
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${isDark ? 'bg-white/[0.04] text-gray-500 hover:text-white' : 'bg-gray-100 text-gray-500 hover:text-white'} ${color}`}
                      aria-label={label}
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
                <div className={`h-8 w-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['FM', 'AR', 'CN', 'MT'].map((init, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-dark-900 flex items-center justify-center text-[9px] text-white font-bold">{init}</div>
                    ))}
                  </div>
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t.home.trustedBy}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            {lang === 'pt' ? 'Scroll' : lang === 'es' ? 'Desplazar' : 'Scroll'}
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={16} className="text-primary-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════ SEEKING ═══════════════════ */}
      <section id="seeking-section" className="relative py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className={`relative rounded-3xl overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-primary-500/[0.06] via-[#0a0f1a]/80 to-accent-500/[0.06] border border-primary-500/[0.12]'
                : 'bg-gradient-to-br from-primary-50 via-white to-accent-50 border border-primary-100 shadow-2xl shadow-primary-500/5'
            }`}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/[0.04] rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/[0.04] rounded-full blur-[80px]" />

              <div className="relative p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-primary-500/10 border border-primary-500/20' : 'bg-primary-100'
                    }`}
                  >
                    <span className="text-2xl">🔍</span>
                  </motion.div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-extrabold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t.home.seekingTitle}
                    </h2>
                    <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t.home.seekingSubtitle}
                    </p>
                  </div>
                </div>

                {/* Seeking Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {seekingItems.map((item, i) => {
                    const labels: Record<string, string> = {
                      internship: t.home.seekingItems.internship,
                      workvisa: t.home.seekingItems.workvisa,
                      'msc-is': t.home.seekingItems.mscIs,
                      'msc-pe': t.home.seekingItems.mscPe,
                    };
                    const tagLabel = item.type === 'job' ? t.home.seekingJob : t.home.seekingScholarship;
                    const tagColor = item.type === 'job'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                        className={`group relative rounded-2xl p-5 transition-all duration-300 overflow-hidden ${
                          isDark
                            ? 'bg-white/[0.03] border border-white/[0.06] hover:border-primary-500/20 hover:bg-white/[0.05]'
                            : 'bg-white/80 border border-gray-100 hover:border-primary-200 hover:shadow-lg'
                        }`}
                      >
                        {/* Gradient accent top line */}
                        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient} opacity-40 group-hover:opacity-80 transition-opacity`} />

                        <div className="flex items-start gap-4">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                            isDark ? 'bg-white/[0.04]' : 'bg-gray-50'
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${tagColor} mb-2`}>
                              {tagLabel}
                            </span>
                            <p className={`text-sm font-semibold leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                              {labels[item.id]}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                    </span>
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {lang === 'pt' ? 'Disponível para começar imediatamente' : lang === 'es' ? 'Disponible para comenzar inmediatamente' : 'Available to start immediately'}
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group relative overflow-hidden px-7 py-3 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      {t.home.seekingCTA}
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {stats.map((stat, i) => (
              <StaggerItem key={stat.label}>
                <div className={`relative group rounded-2xl p-6 text-center transition-all duration-500 overflow-hidden ${
                  isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/20 hover:bg-white/[0.04]' : 'bg-white border border-gray-100 hover:border-primary-200 hover:shadow-lg'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] to-accent-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1"><CountUp target={stat.value} suffix={stat.suffix} /></div>
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{statLabels[i]}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ TECH STACK ═══════════════════ */}
      <section className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[11px] font-bold text-primary-400 uppercase tracking-[0.2em]">Technologies</span>
            <h2 className={`text-3xl md:text-4xl font-extrabold font-display mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.home.techStackTitle}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <div className={`relative group rounded-xl p-3 md:p-4 text-center transition-all duration-300 overflow-hidden ${
                  isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/20' : 'bg-white border border-gray-100 hover:border-primary-200 hover:shadow-md'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-2xl md:text-3xl block mb-1.5 group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                  <span className={`relative text-[10px] md:text-xs font-semibold ${isDark ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-800'} transition-colors`}>{tech.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PROJECTS ═══════════════════ */}
      <section className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[11px] font-bold text-primary-400 uppercase tracking-[0.2em]">{t.nav.portfolio}</span>
            <h2 className={`text-3xl md:text-4xl font-extrabold font-display mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.home.featuredProjects}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/20' : 'bg-white border border-gray-100 hover:border-primary-200 hover:shadow-xl'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] to-accent-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col sm:flex-row">
                    <div className={`sm:w-44 h-40 sm:h-auto flex items-center justify-center text-5xl flex-shrink-0 ${
                      isDark ? 'bg-gradient-to-br from-primary-500/10 to-accent-500/10' : 'bg-gradient-to-br from-primary-50 to-accent-50'
                    } group-hover:scale-105 transition-transform duration-700`}>
                      {project.image}
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="tag-pill text-[10px]">{project.category}</span>
                        <span className={`text-[11px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{project.date}</span>
                      </div>
                      <h3 className={`text-lg font-bold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                      <p className={`text-sm mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${isDark ? 'bg-white/[0.04] text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{tech}</span>
                        ))}
                      </div>
                      <button onClick={() => onNavigate('portfolio')} className="text-[12px] font-bold text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors self-start">
                        {t.common.readMore} <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <button onClick={() => onNavigate('portfolio')} className="group flex items-center gap-2 mx-auto px-6 py-3 rounded-xl text-sm font-bold border-2 border-primary-500/30 text-primary-400 hover:border-primary-400/60 hover:bg-primary-500/5 transition-all">
              {t.common.viewAll} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[11px] font-bold text-primary-400 uppercase tracking-[0.2em]">Testimonials</span>
            <h2 className={`text-3xl md:text-4xl font-extrabold font-display mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.home.testimonials}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <div className={`relative rounded-2xl p-6 transition-all duration-500 ${
                  isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/20' : 'bg-white border border-gray-100 hover:border-primary-200 hover:shadow-lg'
                }`}>
                  <Quote size={28} className="absolute top-4 right-4 text-primary-500/10" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-xs">{testimonial.image}</div>
                    <div>
                      <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}}`}>"{testimonial.content}"</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (<Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ LANGUAGES ═══════════════════ */}
      <section className="section-padding py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <span className="text-[11px] font-bold text-primary-400 uppercase tracking-[0.2em]">{t.home.languages}</span>
            <h2 className={`text-3xl md:text-4xl font-extrabold font-display mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.home.languageProficiency}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {personalInfo.languages.map((l) => (
              <StaggerItem key={l.name}>
                <div className={`relative rounded-2xl p-6 text-center overflow-hidden transition-all duration-500 ${
                  isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/20' : 'bg-white border border-gray-100 hover:border-primary-200 hover:shadow-lg'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] to-accent-500/[0.03] opacity-0 hover:opacity-100 transition-opacity" />
                  <Globe size={22} className="text-primary-400 mx-auto mb-2 relative" />
                  <h3 className={`text-lg font-bold relative ${isDark ? 'text-white' : 'text-gray-900'}`}>{l.name}</h3>
                  <p className={`text-sm relative ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{l.level}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="section-padding py-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className={`relative rounded-3xl p-10 md:p-14 text-center overflow-hidden ${
              isDark ? 'bg-gradient-to-br from-primary-500/[0.08] via-accent-500/[0.06] to-cyan-500/[0.08] border border-white/[0.08]' : 'bg-gradient-to-br from-primary-50 via-accent-50 to-cyan-50 border border-primary-100 shadow-xl'
            }`}>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <h2 className={`text-3xl md:text-4xl font-extrabold font-display mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t.home.ctaTitle1} <span className="gradient-text">{t.home.ctaTitle2}</span>
                </h2>
                <p className={`text-base md:text-lg mb-8 max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.home.ctaDesc}</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button onClick={() => onNavigate('contact')} className="group relative overflow-hidden px-8 py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500" />
                    <span className="relative flex items-center gap-2">{t.common.contactMe} <ExternalLink size={15} /></span>
                  </button>
                  <a href="#" className="flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold border-2 border-primary-500/30 text-primary-400 hover:border-primary-400/60 hover:bg-primary-500/5 transition-all">
                    <Download size={15} /> {t.common.downloadCV}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
