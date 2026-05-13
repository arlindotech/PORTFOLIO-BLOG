import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { services } from '../data/portfolioData';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">What I Offer</span>
            <h1 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My <span className="gradient-text">{t.nav.services}</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.services.pageSubtitle}
            </p>
          </AnimatedSection>

          {/* Services Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <div className={`glass-card rounded-2xl p-6 h-full flex flex-col relative ${
                  service.popular ? 'ring-2 ring-primary-500/50' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold flex items-center gap-1">
                        <Sparkles size={12} /> Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/5">
                    <p className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.price}
                    </p>
                    <button
                      onClick={() => onNavigate('contact')}
                      className={`w-full py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                        service.popular
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25'
                          : isDark
                            ? 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Started <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Process Section */}
          <AnimatedSection className="mb-20">
            <h2 className={`text-3xl font-bold font-display text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My <span className="gradient-text">Process</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your requirements, goals, and vision for the project.', icon: '🔍' },
              { step: '02', title: 'Planning', desc: 'Creating detailed architecture, wireframes, and project roadmap.', icon: '📋' },
              { step: '03', title: 'Development', desc: 'Building your solution with clean code, best practices, and regular updates.', icon: '💻' },
              { step: '04', title: 'Delivery', desc: 'Testing, deploying, and providing ongoing support and maintenance.', icon: '🚀' },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="glass-card rounded-2xl p-6 text-center relative">
                  <span className="text-xs font-bold text-primary-400">{item.step}</span>
                  <span className="text-4xl block my-3">{item.icon}</span>
                  <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* FAQ */}
          <AnimatedSection>
            <h2 className={`text-3xl font-bold font-display text-center mb-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-3">
              {[
                { q: 'What is your typical project timeline?', a: 'Project timelines depend on scope and complexity. A database design project typically takes 2-4 weeks, while a complete management system can take 6-12 weeks. I always provide a detailed timeline upfront.' },
                { q: 'Do you offer ongoing support?', a: 'Yes! All projects include post-delivery support. I also offer ongoing maintenance plans for database management, system updates, and user support.' },
                { q: 'Can you work with institutional systems?', a: 'Absolutely. I have extensive experience with institutional systems including SVM, e-DOC (SNGD), ERP for public management, and municipal digital transformation initiatives.' },
                { q: 'What technologies do you specialize in?', a: 'My core competencies include Java, Python, JavaScript, SQL (MySQL, PostgreSQL), BPMN process modeling, database design (ERD), and Microsoft Office (Advanced Excel). I also have experience with TCP/IP networking, institutional systems (SVM, e-DOC), and ERP systems.' },
                { q: 'How do payments work?', a: 'For consulting and freelance projects, pricing and payment terms are discussed on a case-by-case basis. Contact me for a personalized quote based on your requirements.' },
              ].map((faq, i) => (
                <div key={i} className="glass-card rounded-xl p-5">
                  <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{faq.q}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{faq.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
