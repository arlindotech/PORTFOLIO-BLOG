/**
 * ============================================================================
 * Blog.tsx — Página do Blog Técnico com Galeria de Imagens
 * ============================================================================
 * 
 * Funcionalidades:
 *   - 2 separadores: Blog (artigos) e Galeria (imagens)
 *   - Blog: lista de artigos, artigo individual, comentários, pesquisa, filtros
 *   - Galeria: grelha masonry, lightbox modal, filtros por categoria e tipo
 *   - Totalmente trilíngue (PT/EN/ES)
 *   - Modo escuro/claro compatível
 * 
 * ============================================================================
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Clock, Tag, Share2, BookOpen, ChevronLeft, Calendar, User, ArrowRight,
  ImageIcon, X, ChevronRight, Grid3x3, LayoutList, ZoomIn,
  Monitor, PenTool, Code2, BarChart3
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { blogPosts, blogCategories, galleryImages, galleryCategories } from '../data/portfolioData';
import type { BlogPost, GalleryImage } from '../data/portfolioData';

// ---- Tipo do separador activo ----
type Tab = 'blog' | 'gallery';

// ---- Ícones por tipo de imagem ----
const typeIcons: Record<string, typeof Monitor> = {
  screenshot: Monitor,
  diagram: PenTool,
  photo: ImageIcon,
  infographic: BarChart3,
  code: Code2,
};

export default function Blog() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  // ---- Estado partilhado ----
  const [activeTab, setActiveTab] = useState<Tab>('blog');

  // ---- Estado do Blog ----
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<{ name: string; text: string; date: string }[]>([]);
  const [showComments, setShowComments] = useState(false);

  // ---- Estado da Galeria ----
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [galleryType, setGalleryType] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // ==========================================================================
  // LÓGICA DO BLOG
  // ==========================================================================

  /** Filtrar artigos por categoria e texto de pesquisa */
  const filteredPosts = blogPosts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  /** Adicionar comentário a um artigo */
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentName && commentText) {
      setComments(prev => [...prev, { name: commentName, text: commentText, date: new Date().toLocaleDateString() }]);
      setCommentName('');
      setCommentText('');
    }
  };

  /** Partilhar artigo */
  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // ==========================================================================
  // LÓGICA DA GALERIA
  // ==========================================================================

  /** Imagens filtradas por categoria e tipo */
  const filteredGallery = galleryImages.filter(img => {
    const matchesCat = galleryCategory === 'All' || img.category === galleryCategory;
    const matchesType = galleryType === 'all' || img.type === galleryType;
    return matchesCat && matchesType;
  });

  /** Abrir lightbox numa posição específica */
  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);

  /** Fechar lightbox */
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  /** Navegar no lightbox: prev=-1, next=+1 */
  const navigateLightbox = useCallback((dir: number) => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return filteredGallery.length - 1;
      if (next >= filteredGallery.length) return 0;
      return next;
    });
  }, [filteredGallery.length]);

  /** Tipos únicos presentes nas imagens filtradas */
  const availableTypes = galleryCategory === 'All'
    ? [...new Set(galleryImages.map(i => i.type))]
    : [...new Set(galleryImages.filter(i => i.category === galleryCategory).map(i => i.type))];

  // ==========================================================================
  // RENDER: Artigo Individual
  // ==========================================================================

  if (selectedPost) {
    // Encontrar imagens da galeria relacionadas com este post
    const postGallery = galleryImages.filter(i => i.blogPostId === selectedPost.id);

    return (
      <div className="pt-24 pb-16">
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setSelectedPost(null)} className={`flex items-center gap-2 mb-8 text-sm font-medium transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              <ChevronLeft size={16} /> {t.common.backToArticles}
            </button>

            <article>
              {/* Cabeçalho do artigo */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag-pill">{selectedPost.category}</span>
                  <span className={`text-xs flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    <Clock size={12} /> {selectedPost.readingTime} {t.common.minRead}
                  </span>
                </div>
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedPost.title}</h1>
                <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="flex items-center gap-1"><User size={14} /> {selectedPost.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {selectedPost.date}</span>
                </div>
              </div>

              {/* Imagem de destaque */}
              <div className={`rounded-2xl p-12 mb-8 flex items-center justify-center text-8xl ${isDark ? 'bg-gradient-to-br from-primary-500/10 to-accent-500/10' : 'bg-gradient-to-br from-primary-50 to-accent-50'}`}>
                {selectedPost.image}
              </div>

              {/* Conteúdo do artigo */}
              <div className={`blog-content mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`} dangerouslySetInnerHTML={{ __html: selectedPost.content }} />

              {/* Galeria do artigo */}
              {postGallery.length > 0 && (
                <div className="mb-8">
                  <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <ImageIcon size={18} className="text-primary-400" />
                    {t.gallery.title} ({postGallery.length})
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {postGallery.map((img, i) => (
                      <button
                        key={img.id}
                        onClick={() => {
                          const globalIndex = filteredGallery.length > 0
                            ? galleryImages.findIndex(g => g.id === img.id)
                            : i;
                          setLightboxIndex(globalIndex >= 0 ? globalIndex : i);
                        }}
                        className={`group relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                          isDark ? 'bg-white/[0.03] border border-white/[0.06] hover:border-primary-500/30' : 'bg-gray-50 border border-gray-100 hover:border-primary-200 hover:shadow-lg'
                        }`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">{img.src}</div>
                        {/* Overlay com zoom icon */}
                        <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100`}>
                          <ZoomIn size={20} className="text-white" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <Tag size={14} className="text-primary-400" />
                {selectedPost.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
              </div>

              {/* Partilhar */}
              <div className={`flex items-center gap-4 pb-8 mb-8 border-b ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
                <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.common.shareArticle}:</span>
                <button onClick={() => handleShare(selectedPost)} className="flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors">
                  <Share2 size={14} /> {t.common.share}
                </button>
              </div>

              {/* Comentários */}
              <div>
                <button onClick={() => setShowComments(!showComments)} className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <BookOpen size={20} className="text-primary-400" />
                  {t.common.comments} ({comments.length})
                </button>
                {showComments && (
                  <>
                    {comments.length > 0 && (
                      <div className="space-y-4 mb-6">
                        {comments.map((c, i) => (
                          <div key={i} className={`rounded-xl p-4 ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{c.name}</span>
                              <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{c.date}</span>
                            </div>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{c.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <form onSubmit={handleAddComment} className="space-y-3">
                      <input type="text" placeholder={t.common.commentName} value={commentName} onChange={(e) => setCommentName(e.target.value)}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none ${isDark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'}`} />
                      <textarea placeholder={t.common.commentPlaceholder} value={commentText} onChange={(e) => setCommentText(e.target.value)} rows={3}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none ${isDark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'}`} />
                      <button type="submit" className="btn-primary text-sm">{t.common.postComment}</button>
                    </form>
                  </>
                )}
              </div>
            </article>
          </div>
        </section>

        {/* Lightbox (se aberto a partir do artigo) */}
        {lightboxIndex !== null && (
          <GalleryLightbox
            images={postGallery}
            index={lightboxIndex % postGallery.length}
            onClose={closeLightbox}
            onNavigate={(d) => {
              const next = (lightboxIndex + d) % postGallery.length;
              setLightboxIndex(next < 0 ? postGallery.length - 1 : next);
            }}
            isDark={isDark}
            t={t}
          />
        )}
      </div>
    );
  }

  // ==========================================================================
  // RENDER: Vista Principal (Blog + Galeria com tabs)
  // ==========================================================================

  return (
    <div className="pt-24 pb-16">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">

          {/* Cabeçalho */}
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">{t.nav.blog}</span>
            <h1 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Technical <span className="gradient-text">{t.nav.blog}</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.blog.pageSubtitle}
            </p>
          </AnimatedSection>

          {/* Tabs: Blog / Galeria */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveTab('blog')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                  : isDark ? 'bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <LayoutList size={16} /> {t.nav.blog}
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'gallery'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                  : isDark ? 'bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid3x3 size={16} /> {t.gallery.title}
            </button>
          </div>

          {/* ============================================================ */}
          {/* TAB: BLOG                                                    */}
          {/* ============================================================ */}
          <AnimatePresence mode="wait">
            {activeTab === 'blog' && (
              <motion.div key="blog" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                {/* Pesquisa e Filtros */}
                <div className="mb-10">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <div className="relative w-full md:w-80">
                      <Search size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={t.common.searchPlaceholder}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all ${isDark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500'}`} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blogCategories.map((cat) => (
                        <button key={cat} onClick={() => setActiveCategory(cat)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25' : isDark ? 'bg-white/5 text-gray-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Artigo em destaque */}
                {filteredPosts.find(p => p.featured) && !searchQuery && activeCategory === 'All' && (
                  <div className="mb-10">
                    {(() => {
                      const post = filteredPosts.find(p => p.featured)!;
                      return (
                        <button onClick={() => setSelectedPost(post)} className="w-full text-left glass-card rounded-2xl overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className={`h-64 md:h-auto flex items-center justify-center text-7xl ${isDark ? 'bg-gradient-to-br from-primary-500/10 to-accent-500/10' : 'bg-gradient-to-br from-primary-50 to-accent-50'}`}>{post.image}</div>
                            <div className="p-6 md:p-8 flex flex-col justify-center">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs px-2 py-1 rounded-full bg-yellow-400/20 text-yellow-400 font-medium">⭐ {t.common.featured}</span>
                                <span className="tag-pill">{post.category}</span>
                              </div>
                              <h2 className={`text-2xl md:text-3xl font-bold font-display mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{post.title}</h2>
                              <p className={`text-sm mb-4 line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{post.excerpt}</p>
                              <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                <span className="flex items-center gap-1"><Clock size={14} /> {post.readingTime} {t.common.minRead}</span>
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })()}
                  </div>
                )}

                {/* Grelha de artigos */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.filter(p => !(p.featured && !searchQuery && activeCategory === 'All')).map((post) => (
                    <StaggerItem key={post.id}>
                      <button onClick={() => setSelectedPost(post)} className="w-full text-left glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                        <div className={`h-40 flex items-center justify-center text-5xl ${isDark ? 'bg-gradient-to-br from-primary-500/10 to-accent-500/10' : 'bg-gradient-to-br from-primary-50 to-accent-50'}`}>{post.image}</div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="tag-pill">{post.category}</span>
                            <span className={`text-xs flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}><Clock size={10} /> {post.readingTime} {t.common.minRead}</span>
                          </div>
                          <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{post.title}</h3>
                          <p className={`text-sm mb-4 line-clamp-3 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{post.date}</span>
                            <span className="text-sm text-primary-400 flex items-center gap-1">{t.common.readMore} <ArrowRight size={12} /></span>
                          </div>
                        </div>
                      </button>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-20">
                    <span className="text-6xl mb-4 block">📝</span>
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.common.noResults}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.common.noResultsDesc}</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* ============================================================ */}
            {/* TAB: GALERIA                                                 */}
            {/* ============================================================ */}
            {activeTab === 'gallery' && (
              <motion.div key="gallery" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                {/* Subtítulo */}
                <p className={`text-center text-sm mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.gallery.subtitle}</p>

                {/* Filtros da galeria: categoria + tipo */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                  {/* Filtro por categoria */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {galleryCategories.map((cat) => (
                      <button key={cat} onClick={() => { setGalleryCategory(cat); setGalleryType('all'); }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                          galleryCategory === cat
                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                            : isDark ? 'bg-white/[0.03] text-gray-500 hover:text-gray-300 border border-white/[0.06]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}>
                        {cat === 'All' ? t.gallery.filterAll : cat}
                      </button>
                    ))}
                  </div>

                  {/* Filtro por tipo */}
                  <div className="flex flex-wrap justify-center gap-1.5">
                    <button onClick={() => setGalleryType('all')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all ${
                        galleryType === 'all' ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30' : isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'
                      }`}>
                      {t.gallery.filterAll}
                    </button>
                    {availableTypes.map((type) => {
                      const Icon = typeIcons[type] || ImageIcon;
                      const label = t.gallery.types[type as keyof typeof t.gallery.types] || type;
                      return (
                        <button key={type} onClick={() => setGalleryType(type)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all ${
                            galleryType === type ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30' : isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'
                          }`}>
                          <Icon size={10} /> {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contagem de resultados */}
                <p className={`text-xs mb-6 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  {t.common.showing} {filteredGallery.length} {t.gallery.imageCount}
                </p>

                {/* Grelha Masonry */}
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
                  {filteredGallery.map((img, i) => {
                    // Variar a altura das cartas para efeito masonry
                    const heights = ['aspect-square', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-[1/1]', 'aspect-[3/5]'];
                    const h = heights[i % heights.length];
                    const title = t.gallery.imageTitles[img.titleKey as keyof typeof t.gallery.imageTitles] || img.title;
                    const TypeIcon = typeIcons[img.type] || ImageIcon;

                    return (
                      <motion.button
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                        onClick={() => openLightbox(i)}
                        className={`group relative w-full ${h} rounded-xl overflow-hidden break-inside-avoid mb-3 transition-all duration-300 ${
                          isDark ? 'bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/30' : 'bg-gray-50 border border-gray-100 hover:border-primary-200 hover:shadow-xl'
                        }`}
                      >
                        {/* Ícone/imagem placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-500">{img.src}</div>

                        {/* Overlay ao passar o rato */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                          <div className="flex items-center gap-1.5 mb-1">
                            <TypeIcon size={10} className="text-primary-300" />
                            <span className="text-[10px] font-bold text-primary-300 uppercase tracking-wider">
                              {t.gallery.types[img.type as keyof typeof t.gallery.types]}
                            </span>
                          </div>
                          <p className="text-white text-xs font-semibold leading-tight line-clamp-2">{title}</p>
                        </div>

                        {/* Ícone de zoom no canto */}
                        <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-black/40 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn size={12} className="text-white" />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {filteredGallery.length === 0 && (
                  <div className="text-center py-20">
                    <span className="text-6xl mb-4 block">🖼️</span>
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.common.noResults}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.common.noResultsDesc}</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Newsletter CTA */}
          <AnimatedSection className="mt-20">
            <div className={`relative rounded-3xl overflow-hidden ${isDark ? 'bg-gradient-to-br from-primary-500/[0.06] via-transparent to-accent-500/[0.06] border border-white/[0.08]' : 'bg-gradient-to-br from-primary-50 via-white to-accent-50 border border-primary-100 shadow-xl'}`}>
              <div className="relative p-8 md:p-12 text-center">
                <BookOpen size={32} className="text-primary-400 mx-auto mb-4" />
                <h2 className={`text-2xl font-bold font-display mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.common.stayUpdated}</h2>
                <p className={`text-sm mb-6 max-w-md mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.common.newsletterDesc}</p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input type="email" placeholder={t.common.newsletterEmail}
                    className={`flex-1 px-4 py-2.5 rounded-xl text-sm outline-none ${isDark ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'}`} />
                  <button type="submit" className="btn-primary text-sm">{t.common.subscribe}</button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filteredGallery}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
          isDark={isDark}
          t={t}
        />
      )}
    </div>
  );
}

// ==========================================================================
// GalleryLightbox — Modal de visualização em ecrã completo
// ==========================================================================

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (dir: number) => void;
  isDark: boolean;
  t: any;
}

function GalleryLightbox({ images, index, onClose, onNavigate, isDark, t }: LightboxProps) {
  const img = images[index];
  if (!img) return null;

  const title = t.gallery.imageTitles[img.titleKey as keyof typeof t.gallery.imageTitles] || img.title;
  const TypeIcon = typeIcons[img.type] || ImageIcon;
  const typeLabel = t.gallery.types[img.type as keyof typeof t.gallery.types] || img.type;
  const relatedPost = blogPosts.find(p => p.id === img.blogPostId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Fundo escuro */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

      {/* Conteúdo do lightbox */}
      <div className="relative z-10 w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Barra superior */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex items-center gap-3">
            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${isDark ? 'bg-white/10 text-gray-300' : 'bg-white/20 text-white'}`}>
              {t.gallery.lightbox.image} {index + 1} {t.gallery.lightbox.of} {images.length}
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-primary-500/20 text-primary-300">
              <TypeIcon size={10} /> {typeLabel}
            </span>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all">
            <X size={18} />
          </button>
        </div>

        {/* Área principal */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-16 relative">
          {/* Botão anterior */}
          <button onClick={() => onNavigate(-1)}
            className="absolute left-2 md:left-6 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10">
            <ChevronLeft size={20} />
          </button>

          {/* Imagem */}
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-6 max-w-4xl w-full"
          >
            {/* Container da imagem */}
            <div className={`w-full max-w-lg aspect-[4/3] rounded-2xl flex items-center justify-center text-[120px] md:text-[160px] ${
              isDark ? 'bg-gradient-to-br from-primary-500/10 to-accent-500/10' : 'bg-gradient-to-br from-primary-50 to-accent-50'
            }`}>
              {img.src}
            </div>

            {/* Info da imagem */}
            <div className="text-center max-w-lg">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">{title}</h3>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-medium">{img.category}</span>
                {relatedPost && (
                  <span className="flex items-center gap-1 text-xs text-primary-400">
                    <BookOpen size={10} /> {t.gallery.relatedPost}: {relatedPost.title}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Botão seguinte */}
          <button onClick={() => onNavigate(1)}
            className="absolute right-2 md:right-6 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
