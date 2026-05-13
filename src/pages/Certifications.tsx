import { useState } from 'react';
import { ExternalLink, Award, Filter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { certifications, certCategories } from '../data/portfolioData';

export default function Certifications() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeCategory);

  const groupedCerts = filteredCerts.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = [];
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  return (
    <div className="pt-24 pb-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">Credentials</span>
            <h1 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t.nav.certifications} & <span className="gradient-text">Courses</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.certifications.pageSubtitle}
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection className="mb-12" delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'IBM', count: certifications.filter(c => c.category === 'IBM').length, color: 'from-blue-500 to-blue-600' },
                { label: 'Coursera', count: certifications.filter(c => c.category === 'Coursera').length, color: 'from-blue-400 to-indigo-500' },
                { label: 'Udemy', count: certifications.filter(c => c.category === 'Udemy').length, color: 'from-purple-500 to-pink-500' },
                { label: 'Others', count: certifications.filter(c => !['IBM', 'Coursera', 'Udemy'].includes(c.category)).length, color: 'from-emerald-500 to-teal-500' },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-4 text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.count}</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10" delay={0.2}>
            <Filter size={16} className={`self-center mr-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Certifications Grid */}
          {Object.entries(groupedCerts).map(([category, certs]) => (
            <div key={category} className="mb-12">
              <AnimatedSection className="mb-6">
                <h2 className={`text-2xl font-bold font-display flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Award size={22} className="text-primary-400" />
                  {category}
                </h2>
              </AnimatedSection>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certs.map((cert) => (
                  <StaggerItem key={cert.id}>
                    <div className="glass-card rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                          isDark ? 'bg-white/5' : 'bg-gray-100'
                        }`}>
                          {cert.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h3>
                          <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
                          <div className={`flex items-center gap-3 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            <span>Issued: {cert.date}</span>
                            <span>ID: {cert.credentialId.slice(-8)}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {cert.skills.map((skill) => (
                              <span key={skill} className={`text-xs px-2 py-0.5 rounded-md ${
                                isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'
                              }`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:text-primary-300 transition-colors flex-shrink-0"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}

          {/* CTA */}
          <AnimatedSection className="mt-16">
            <div className="glass-strong rounded-2xl p-8 text-center">
              <h2 className={`text-2xl font-bold font-display mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Continuous Learning 📚
              </h2>
              <p className={`text-sm max-w-lg mx-auto mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm constantly expanding my skill set through courses, certifications, and hands-on projects. Currently pursuing AWS Solutions Architect certification.
              </p>
              <div className="flex justify-center gap-4">
                <span className="tag-pill">🚀 Always Learning</span>
                <span className="tag-pill">🎯 Goal Oriented</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
