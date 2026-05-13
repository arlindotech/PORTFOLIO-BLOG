import { GraduationCap, Briefcase, MapPin, Mail, Calendar, BookOpen, Users, Globe, Heart, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { personalInfo, experiences } from '../data/portfolioData';

interface AboutProps { onNavigate: (page: string) => void; }

export default function About({ onNavigate }: AboutProps) {
  const { isDark } = useTheme();
  const { t, lang } = useLanguage();

  const highlights = [
    { icon: Briefcase, label: 'Public Service Experience', value: '10+ Years' },
    { icon: GraduationCap, label: 'Education', value: 'BSc. Information Systems Management' },
    { icon: BookOpen, label: 'Bootcamps', value: '8+' },
    { icon: Users, label: 'Systems', value: '4+' },
    { icon: Globe, label: t.home.languages, value: '3' },
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">{t.nav.about}</span>
            <h1 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t.about.hello} <span className="gradient-text">{personalInfo.fullName}</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.about.subtitle}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <AnimatedSection direction="left">
              <div className="glass-card rounded-2xl p-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                  <img src={personalInfo.profileImage} alt={personalInfo.fullName} className="w-full h-full object-cover" onError={(e) => { const el = e.target as HTMLImageElement; el.style.display = 'none'; if (el.parentElement) el.parentElement.innerHTML = `<span class="text-3xl font-bold text-white">${personalInfo.avatar}</span>`; }} />
                </div>
                <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.about.hello} {personalInfo.fullName} 👋</h2>
                <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{personalInfo.bio}</p>
                <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.about.bioExtended}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}><MapPin size={16} className="text-primary-400" /> {personalInfo.location}</span>
                  <span className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}><Mail size={16} className="text-primary-400" /> {personalInfo.email}</span>
                  <span className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}><Phone size={16} className="text-primary-400" /> {personalInfo.phone}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {personalInfo.languages.map(lang => (<span key={lang.name} className="tag-pill">{lang.name}: {lang.level}</span>))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4 h-full">
                {highlights.map((item) => (
                  <div key={item.label} className="glass-card rounded-xl p-5 text-center">
                    <item.icon size={24} className="text-primary-400 mx-auto mb-2" />
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mb-20">
            <h2 className={`text-3xl font-bold font-display text-center mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.about.whatIDo}</h2>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🗃️', title: 'Database & Systems', desc: lang === 'pt' ? 'Design e gestão de bases de dados relacionais usando SQL, MySQL e PostgreSQL. Desenvolvimento de sistemas de gestão institucional em Java com modelagem ERD completa.' : lang === 'es' ? 'Diseño y gestión de bases de datos relacionales usando SQL, MySQL y PostgreSQL. Desarrollo de sistemas de gestión institucional en Java con modelado ERD completo.' : 'Design and management of relational databases using SQL, MySQL, and PostgreSQL. Development of institutional management systems in Java with complete ERD modeling.' },
                { icon: '🔍', title: t.nav.skills, desc: lang === 'pt' ? 'Análise abrangente de sistemas incluindo recolha de requisitos, modelação de processos BPMN, documentação funcional e design de arquitetura de sistemas.' : lang === 'es' ? 'Análisis integral de sistemas incluyendo recopilación de requisitos, modelado de procesos BPMN, documentación funcional y diseño de arquitectura de sistemas.' : 'Comprehensive systems analysis including requirements gathering, BPMN process modeling, functional documentation, and system architecture design.' },
                { icon: '🏛️', title: 'Digital Transformation', desc: lang === 'pt' ? 'Liderar iniciativas de transformação digital na administração pública. Administração de sistemas institucionais como SVM e e-DOC, formação de pessoal e otimização de processos.' : lang === 'es' ? 'Liderar iniciativas de transformación digital en la administración pública. Administración de sistemas institucionales como SVM y e-DOC, capacitación de personal y optimización de procesos.' : 'Leading digital transformation initiatives in public administration. Administration of institutional systems like SVM and e-DOC, staff training, and process optimization.' },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <span className="text-4xl block mb-4">{item.icon}</span>
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedSection className="mb-10">
            <h2 className={`text-3xl font-bold font-display text-center mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.about.timeline}</h2>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px ${isDark ? 'bg-white/10' : 'bg-gray-200'} md:-translate-x-px`} />
            <StaggerContainer>
              {experiences.map((exp, index) => (
                <StaggerItem key={exp.id}>
                  <div className={`relative flex items-start gap-6 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10 ring-4 ring-dark-900" />
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="glass-card rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className={`p-1.5 rounded-lg ${exp.type === 'work' ? 'bg-primary-500/20' : 'bg-accent-500/20'}`}>
                            {exp.type === 'work' ? <Briefcase size={14} className="text-primary-400" /> : <GraduationCap size={14} className="text-accent-400" />}
                          </span>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${exp.type === 'work' ? 'bg-primary-500/10 text-primary-400' : 'bg-accent-500/10 text-accent-400'}`}>
                            {exp.type === 'work' ? t.common.work : t.common.education}
                          </span>
                          {exp.current && <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">{t.common.current}</span>}
                        </div>
                        <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                        <p className="text-sm text-primary-400 mb-1">{exp.company}</p>
                        <p className={`text-xs mb-3 flex items-center gap-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}><Calendar size={12} /> {exp.startDate} — {exp.endDate} • {exp.location}</p>
                        <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((a, i) => (<li key={i} className={`text-xs flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}><span className="text-primary-400 mt-0.5">▸</span>{a}</li>))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <AnimatedSection className="mt-16 mb-20">
            <div className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4"><GraduationCap size={24} className="text-accent-400" /><h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.about.thesis}</h2></div>
              <blockquote className={`text-lg italic mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t.about.thesisQuote}</blockquote>
              <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.about.thesisDesc}</p>
              <div className="flex flex-wrap gap-3">
                <span className="tag-pill">Written Work: 15/20</span>
                <span className="tag-pill">Defense: 14/20</span>
                <span className="tag-pill">Final Grade: 14/20</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center">
            <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
              <Heart size={32} className="text-red-400 mx-auto mb-4" />
              <h2 className={`text-2xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.about.ctaTitle}</h2>
              <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.about.ctaDesc}</p>
              <button onClick={() => onNavigate('contact')} className="btn-primary inline-flex items-center gap-2">{t.about.letsTalk}</button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
