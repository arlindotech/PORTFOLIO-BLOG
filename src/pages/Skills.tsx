import { useState } from 'react';
import { Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { skills, skillCategories, techStack } from '../data/portfolioData';

export default function Skills() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">Expertise</span>
            <h1 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t.nav.skills} & <span className="gradient-text">Technologies</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.skills.pageSubtitle}
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : isDark
                      ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Skills Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            {filteredSkills.map((skill) => (
              <StaggerItem key={skill.name}>
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary-400">{skill.level}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${isDark ? 'bg-white/5' : 'bg-gray-200'}`}>
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className={`text-xs mt-1 inline-block ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {skill.category}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Tech Stack Grid */}
          <AnimatedSection className="mb-10">
            <h2 className={`text-3xl font-bold font-display text-center mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Zap size={28} className="inline mr-2 text-primary-400" />
              Full Tech <span className="gradient-text">Stack</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <div className="glass-card rounded-xl p-5 text-center group cursor-pointer">
                  <span className="text-3xl block mb-2 group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                  <h3 className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{tech.name}</h3>
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{tech.category}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* GitHub Activity */}
          <AnimatedSection className="mt-20">
            <h2 className={`text-3xl font-bold font-display text-center mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              GitHub <span className="gradient-text">Activity</span>
            </h2>
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Total Commits', value: '1,234+' },
                  { label: 'Pull Requests', value: '456+' },
                  { label: 'Contributions', value: '2,500+' },
                  { label: 'Stars Earned', value: '150+' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{item.value}</div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
                  </div>
                ))}
              </div>
              {/* Contribution Graph Mock */}
              <div className="grid grid-cols-[repeat(52,1fr)] gap-1">
                {Array.from({ length: 182 }).map((_, i) => {
                  const intensity = Math.random();
                  const color = intensity < 0.3 ? (isDark ? 'bg-white/5' : 'bg-gray-100') :
                    intensity < 0.5 ? 'bg-primary-500/20' :
                    intensity < 0.7 ? 'bg-primary-500/40' :
                    intensity < 0.85 ? 'bg-primary-500/60' : 'bg-primary-500/80';
                  return <div key={i} className={`aspect-square rounded-sm ${color}`} />;
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
