import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Clock, MessageCircle, Code2, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', type: 'general' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: '#' },
  ];

  const socialLinks = [
    { icon: Code2, label: 'GitHub', href: personalInfo.github, color: 'hover:bg-gray-600' },
    { icon: Briefcase, label: 'LinkedIn', href: personalInfo.linkedin, color: 'hover:bg-blue-600' },
    { icon: MessageCircle, label: 'Twitter', href: personalInfo.twitter, color: 'hover:bg-sky-500' },
    { icon: Mail, label: 'Dev.to', href: personalInfo.devto, color: 'hover:bg-emerald-600' },
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">Get in Touch</span>
            <h1 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t.common.contactMe}
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.contactPage.pageSubtitle}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <div className="space-y-4 mb-8">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="glass-card rounded-xl p-4 flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                        <Icon size={20} className="text-primary-400" />
                      </div>
                      <div>
                        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                        <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Connect with me
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, label, href, color }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                          isDark ? 'bg-white/5 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-600 hover:text-white'
                        } ${color}`}
                        aria-label={label}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Card */}
                <div className="mt-8 glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-semibold text-emerald-400">Currently Available</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    I'm open to freelance projects, full-time positions, and interesting collaborations. Let's create something amazing together!
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="glass-strong rounded-2xl p-6 md:p-8">
                  <h2 className={`text-2xl font-bold font-display mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Send a Message
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle size={64} className="text-emerald-400 mx-auto mb-4" />
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Type Selection */}
                      <div>
                        <label className={`text-sm font-medium mb-2 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          What's this about?
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { value: 'general', label: '💬 General' },
                            { value: 'project', label: '🚀 New Project' },
                            { value: 'hire', label: '💼 Job Opportunity' },
                            { value: 'collab', label: '🤝 Collaboration' },
                          ].map(({ value, label }) => (
                            <button
                              key={value}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, type: value }))}
                              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                formData.type === value
                                  ? 'bg-primary-500 text-white'
                                  : isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className={`text-sm font-medium mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="John Doe"
                            required
                            className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                              isDark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'
                            }`}
                          />
                        </div>
                        <div>
                          <label className={`text-sm font-medium mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="john@example.com"
                            required
                            className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                              isDark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'
                            }`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={`text-sm font-medium mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          placeholder="Project discussion"
                          required
                          className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                            isDark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'
                          }`}
                        />
                      </div>

                      <div>
                        <label className={`text-sm font-medium mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          placeholder="Tell me about your project..."
                          rows={5}
                          required
                          className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none transition-all ${
                            isDark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'
                          }`}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full flex items-center justify-center gap-2 text-base py-3"
                      >
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
