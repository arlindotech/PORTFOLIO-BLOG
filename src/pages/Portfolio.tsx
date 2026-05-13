import { useState } from 'react';
import { Search, ExternalLink, Code2, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { projects, projectCategories } from '../data/portfolioData';

export default function Portfolio() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">{t.nav.portfolio}</span>
            <h1 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My <span className="gradient-text">{t.nav.portfolio}</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.portfolio.pageSubtitle}
            </p>
          </AnimatedSection>

          {/* Filters & Search */}
          <AnimatedSection className="mb-10" delay={0.2}>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all ${
                    isDark
                      ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50'
                      : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'
                  }`}
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                        : isDark
                          ? 'bg-white/5 text-gray-400 hover:bg-white/10'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </AnimatedSection>

          {/* Projects Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div
                  className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image/Icon */}
                  <div className={`relative h-48 flex items-center justify-center text-6xl overflow-hidden ${
                    isDark ? 'bg-gradient-to-br from-primary-500/10 to-accent-500/10' : 'bg-gradient-to-br from-primary-50 to-accent-50'
                  }`}>
                    <span className={`transition-transform duration-500 ${hoveredProject === project.id ? 'scale-125' : ''}`}>
                      {project.image}
                    </span>
                    {/* Overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-4 gap-3 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1 px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
                      >
                        <Eye size={14} /> Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-white text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        <Code2 size={14} /> Code
                      </a>
                    </div>
                    {/* Featured badge */}
                    {project.featured && (
                      <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-yellow-400/20 text-yellow-400 font-medium border border-yellow-400/30">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="tag-pill">{project.category}</span>
                      <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{project.date}</span>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                    <p className={`text-sm mb-4 line-clamp-3 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={`text-xs px-2 py-1 rounded-md ${
                          isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                      <a href={project.liveUrl} className="text-sm font-medium text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      <a href={project.githubUrl} className={`text-sm font-medium flex items-center gap-1 ${
                        isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      } transition-colors`}>
                        <Code2 size={14} /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>No projects found</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
