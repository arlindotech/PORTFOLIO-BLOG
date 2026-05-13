import { Code2, Briefcase, MessageCircle, Mail, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { useState } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { icon: Code2, href: personalInfo.github, label: 'GitHub' },
    { icon: Briefcase, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: MessageCircle, href: personalInfo.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Blog', page: 'blog' },
    { label: 'Services', page: 'services' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <footer className={`relative ${isDark ? 'bg-dark-950' : 'bg-gray-50'} border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
      {/* Back to Top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-1"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                {personalInfo.avatar}
              </div>
              <span className="text-lg font-bold font-display gradient-text">{personalInfo.name}</span>
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
              {personalInfo.tagline}. ICT Professional driving digital transformation with expertise and dedication.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    isDark ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-primary-500/20' : 'bg-gray-100 text-gray-600 hover:text-primary-500 hover:bg-primary-50'
                  }`}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => { onNavigate(page); scrollToTop(); }}
                    className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400 hover:text-primary-400' : 'text-gray-600 hover:text-primary-500'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Services
            </h3>
            <ul className="space-y-2">
              {['Web Development', 'Frontend Development', 'Backend APIs', 'Mobile Apps', 'DevOps', 'Consulting'].map((s) => (
                <li key={s}>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Newsletter
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
              Get the latest articles and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`w-full px-3 py-2 rounded-lg text-sm outline-none transition-all ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50'
                    : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'
                }`}
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all flex items-center justify-center gap-1"
              >
                {subscribed ? '✓ Subscribed!' : <>Subscribe <ExternalLink size={12} /></>}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className={`pt-8 border-t ${isDark ? 'border-white/5' : 'border-gray-200'} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} flex items-center gap-1`}>
            Built with <Heart size={12} className="text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
