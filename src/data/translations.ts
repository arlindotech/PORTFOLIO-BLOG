/**
 * ============================================================================
 * translations.ts — Sistema completo de traduções (EN, ES, PT)
 * ============================================================================
 * 
 * Este ficheiro contém TODAS as strings de texto do portfólio em 3 idiomas:
 *   - Inglês (EN) — idioma internacional
 *   - Espanhol (ES) — mercados da América Latina e Espanha
 *   - Português (PT) — idioma nativo (Moçambique)
 * 
 * Estrutura:
 *   nav          → Links e labels do menu de navegação
 *   common       → Textos reutilizados em todo o projeto
 *   home         → Página inicial (hero, stats, seeking, projetos, etc.)
 *   about        → Página "Sobre Mim" (bio, timeline, competências)
 *   skills       → Página de competências técnicas
 *   portfolio    → Página de portfólio/projetos
 *   blog         → Página do blog técnico
 *   certifications → Página de certificações e cursos
 *   services     → Página de serviços oferecidos
 *   contactPage  → Página de contacto e formulário
 *   footer       → Rodapé do site
 *   chatbot      → Assistente virtual AI
 *   admin        → Painel de administração
 * ============================================================================
 */

// ============================================================================
// Tipos e Interface
// ============================================================================

/** Idiomas suportados pelo sistema */
export type Language = 'en' | 'es' | 'pt';

/** Interface que define a estrutura de todas as traduções */
export interface Translations {
  nav: {
    home: string;
    about: string;
    blog: string;
    contact: string;
    more: string;
    less: string;
    portfolio: string;
    portfolioDesc: string;
    skills: string;
    skillsDesc: string;
    services: string;
    servicesDesc: string;
    certifications: string;
    certificationsDesc: string;
  };

  common: {
    available: string;
    readMore: string;
    viewAll: string;
    downloadCV: string;
    contactMe: string;
    hireMe: string;
    sendMessage: string;
    send: string;
    subscribe: string;
    subscribed: string;
    search: string;
    searchPlaceholder: string;
    showing: string;
    of: string;
    all: string;
    explore: string;
    backToArticles: string;
    share: string;
    shareArticle: string;
    comments: string;
    postComment: string;
    commentName: string;
    commentPlaceholder: string;
    minRead: string;
    featured: string;
    liveDemo: string;
    sourceCode: string;
    details: string;
    stayUpdated: string;
    newsletterDesc: string;
    newsletterEmail: string;
    noResults: string;
    noResultsDesc: string;
    contact: string;
    getStarted: string;
    saveChanges: string;
    viewProject: string;
    current: string;
    work: string;
    education: string;
    since: string;
    scrollToTop: string;
  };

  home: {
    greeting: string;
    bio: string;
    readyChallenges: string;
    scroll: string;
    stats: {
      yearsExp: string;
      academicProjects: string;
      systemsManaged: string;
      reportsDelivered: string;
      certifications: string;
      bootcampCourses: string;
    };
    techStackTitle: string;
    featuredProjects: string;
    testimonials: string;
    languages: string;
    languageProficiency: string;
    ctaTitle1: string;
    ctaTitle2: string;
    ctaDesc: string;
    trustedBy: string;
    seekingTitle: string;
    seekingSubtitle: string;
    seekingItems: {
      internship: string;
      workvisa: string;
      mscIs: string;
      mscPe: string;
    };
    seekingJob: string;
    seekingScholarship: string;
    seekingCTA: string;
    seekingAvailable: string;
  };

  about: {
    pageTitle: string;
    subtitle: string;
    hello: string;
    bioExtended: string;
    whatIDo: string;
    personalCompetencies: string;
    competencyItems: {
      analytical: string;
      fastLearning: string;
      communication: string;
      organization: string;
      proactivity: string;
      continuousLearning: string;
    };
    databaseTitle: string;
    systemsTitle: string;
    transformationTitle: string;
    timeline: string;
    thesis: string;
    thesisQuote: string;
    thesisDesc: string;
    writtenWork: string;
    defense: string;
    finalGrade: string;
    ctaTitle: string;
    ctaDesc: string;
    letsTalk: string;
  };

  skills: {
    pageTitle: string;
    pageSubtitle: string;
    techStackTitle: string;
    gitHubActivity: string;
    totalCommits: string;
    pullRequests: string;
    contributions: string;
    starsEarned: string;
  };

  portfolio: {
    pageTitle: string;
    pageSubtitle: string;
    resultsCount: string;
  };

  blog: {
    pageTitle: string;
    pageSubtitle: string;
    writtenBy: string;
  };

  gallery: {
    title: string;
    subtitle: string;
    viewAll: string;
    imageCount: string;
    relatedPost: string;
    filterAll: string;
    types: {
      screenshot: string;
      diagram: string;
      photo: string;
      infographic: string;
      code: string;
    };
    lightbox: {
      close: string;
      prev: string;
      next: string;
      of: string;
      image: string;
    };
    imageTitles: Record<string, string>;
  };

  certifications: {
    pageTitle: string;
    pageSubtitle: string;
    continuousLearning: string;
    learningDesc: string;
    alwaysLearning: string;
    goalOriented: string;
  };

  services: {
    pageTitle: string;
    pageSubtitle: string;
    process: string;
    faq: string;
    processSteps: {
      discovery: string;
      discoveryDesc: string;
      planning: string;
      planningDesc: string;
      development: string;
      developmentDesc: string;
      delivery: string;
      deliveryDesc: string;
    };
    faqItems: {
      timelineQ: string;
      timelineA: string;
      supportQ: string;
      supportA: string;
      institutionalQ: string;
      institutionalA: string;
      techQ: string;
      techA: string;
      paymentQ: string;
      paymentA: string;
    };
  };

  contactPage: {
    pageTitle: string;
    pageSubtitle: string;
    getInTouch: string;
    whatsThisAbout: string;
    general: string;
    newProject: string;
    jobOpportunity: string;
    collaboration: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    messageSent: string;
    messageSentDesc: string;
    phone: string;
    location: string;
    responseTime: string;
    within24h: string;
    connectWithMe: string;
    currentlyAvailable: string;
    availableDesc: string;
  };

  footer: {
    quickLinks: string;
    servicesTitle: string;
    services: string[];
    newsletter: string;
    newsletterShort: string;
    builtWith: string;
    rights: string;
    tagline: string;
  };

  chatbot: {
    title: string;
    status: string;
    placeholder: string;
    greeting: string;
    suggestions: {
      skills: string;
      projects: string;
      services: string;
      hire: string;
    };
    responses: {
      skills: string;
      projects: string;
      services: string;
      experience: string;
      hire: string;
      contact: string;
      certifications: string;
      education: string;
      hello: string;
      thanks: string;
      default: string;
    };
  };

  admin: {
    dashboardTitle: string;
    dashboardWelcome: string;
    tabs: {
      dashboard: string;
      posts: string;
      projects: string;
      messages: string;
      settings: string;
    };
    analytics: {
      pageViews: string;
      blogReads: string;
      messagesCount: string;
      followers: string;
    };
    recentActivity: string;
    activityItems: string[];
    visitorAnalytics: string;
    last12Months: string;
    newPost: string;
    newProject: string;
    settingsFields: {
      profileName: string;
      email: string;
      location: string;
      website: string;
      availableForHire: string;
      emailNotifications: string;
    };
  };
}

// ============================================================================
// TRADUÇÕES EM INGLÊS (EN)
// ============================================================================

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    more: 'More',
    less: 'Less',
    portfolio: 'Portfolio',
    portfolioDesc: 'Projects & Case Studies',
    skills: 'Skills',
    skillsDesc: 'Technical Competencies',
    services: 'Services',
    servicesDesc: 'What I Offer',
    certifications: 'Certifications',
    certificationsDesc: 'Credentials & Courses',
  },

  common: {
    available: 'Available',
    readMore: 'Read more',
    viewAll: 'View All',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
    hireMe: 'Hire Me',
    sendMessage: 'Send Message',
    send: 'Send',
    subscribe: 'Subscribe',
    subscribed: '✓ Subscribed!',
    search: 'Search',
    searchPlaceholder: 'Search projects...',
    showing: 'Showing',
    of: 'of',
    all: 'All',
    explore: 'Explore',
    backToArticles: 'Back to all articles',
    share: 'Share',
    shareArticle: 'Share this article',
    comments: 'Comments',
    postComment: 'Post Comment',
    commentName: 'Your name',
    commentPlaceholder: 'Write a comment...',
    minRead: 'min read',
    featured: 'Featured',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    details: 'Details',
    stayUpdated: 'Stay Updated',
    newsletterDesc: 'Subscribe to my newsletter and never miss a new article.',
    newsletterEmail: 'your@email.com',
    noResults: 'No results found',
    noResultsDesc: 'Try adjusting your search or filter',
    contact: 'Contact',
    getStarted: 'Get Started',
    saveChanges: 'Save Changes',
    viewProject: 'View Project',
    current: 'Current',
    work: 'Work',
    education: 'Education',
    since: 'since',
    scrollToTop: 'Scroll to top',
  },

  home: {
    greeting: "Hi, I'm",
    bio: 'Bridging technology and public service through innovation',
    readyChallenges: 'Ready for new challenges',
    scroll: 'Scroll',
    stats: {
      yearsExp: 'Years Experience',
      academicProjects: 'Academic Projects',
      systemsManaged: 'Systems Managed',
      reportsDelivered: 'Reports Delivered',
      certifications: 'Certifications',
      bootcampCourses: 'Bootcamp Courses',
    },
    techStackTitle: 'Technical Skills',
    featuredProjects: 'Featured Projects',
    testimonials: 'What People Say',
    languages: 'Languages',
    languageProficiency: 'Language Proficiency',
    ctaTitle1: "Let's Build Something",
    ctaTitle2: 'Together',
    ctaDesc: 'Whether you need database design, systems analysis, network setup, or digital transformation consulting — let\'s discuss your needs.',
    trustedBy: '10+ years of dedicated public service',
    seekingTitle: 'Actively Seeking',
    seekingSubtitle: 'Currently open to the following opportunities worldwide',
    seekingItems: {
      internship: 'Internship / Job Offer in Information Systems / Administrative Assistant / Entry-Level Software Development',
      workvisa: 'Job Offer with Work Visa Sponsorship',
      mscIs: 'MSc Scholarship — Information Systems (funded)',
      mscPe: 'MSc Scholarship — Production Engineering (funded)',
    },
    seekingJob: 'Opportunity',
    seekingScholarship: 'Scholarship',
    seekingCTA: 'Get in Touch',
    seekingAvailable: 'Available to start immediately',
  },

  about: {
    pageTitle: 'About Me',
    subtitle: 'ICT Professional & Information Systems Management Graduate',
    hello: "Hello, I'm",
    bioExtended: "With a Bachelor's degree in Information Systems Management from Universidade Aberta ISCED and over 10 years of hands-on experience at the Municipal Council of Nampula City, I combine academic knowledge with practical expertise in ICT, database management, systems analysis, and institutional digital transformation.",
    whatIDo: 'What I Specialize In',
    personalCompetencies: 'Personal Competencies',
    competencyItems: {
      analytical: 'Analytical Thinking',
      fastLearning: 'Fast Learning Ability',
      communication: 'Communication & Teamwork',
      organization: 'Organization & Time Management',
      proactivity: 'Proactivity & Responsibility',
      continuousLearning: 'Continuous Learning',
    },
    databaseTitle: 'Database & Systems',
    systemsTitle: 'Systems Analysis',
    transformationTitle: 'Digital Transformation',
    timeline: 'Professional Timeline',
    thesis: "Bachelor's Thesis",
    thesisQuote: '"Impact of Information Technologies on the Training and Professional Development of Municipal Public Servants: A Case Study of the Municipal Council of Nampula City"',
    thesisDesc: 'Applied data collection and analysis methods, presenting practical recommendations for improving public service through technology adoption.',
    writtenWork: 'Written Work: 15/20',
    defense: 'Defense: 13/20',
    finalGrade: 'Final Grade: 14/20',
    ctaTitle: 'Interested in working together?',
    ctaDesc: "I'm always open to discussing new opportunities, consulting projects, or ways to contribute to digital transformation initiatives.",
    letsTalk: "Let's Talk →",
  },

  skills: {
    pageTitle: 'Skills & Technologies',
    pageSubtitle: 'A comprehensive overview of my technical skills and proficiency levels',
    techStackTitle: 'Full Tech Stack',
    gitHubActivity: 'GitHub Activity',
    totalCommits: 'Total Commits',
    pullRequests: 'Pull Requests',
    contributions: 'Contributions',
    starsEarned: 'Stars Earned',
  },

  portfolio: {
    pageTitle: 'My Projects',
    pageSubtitle: 'Explore my latest work and creative projects',
    resultsCount: 'projects',
  },

  blog: {
    pageTitle: 'Technical Blog',
    pageSubtitle: 'Insights, tutorials, and thoughts on modern web development',
    writtenBy: 'Written by',
  },

  gallery: {
    title: 'Gallery',
    subtitle: 'Visual documentation of projects, diagrams, and system architectures',
    viewAll: 'View All',
    imageCount: 'images',
    relatedPost: 'Related article',
    filterAll: 'All',
    types: { screenshot: 'Screenshot', diagram: 'Diagram', photo: 'Photo', infographic: 'Infographic', code: 'Code' },
    lightbox: { close: 'Close', prev: 'Previous', next: 'Next', of: 'of', image: 'Image' },
    imageTitles: {
      svmDashboard: 'Municipal Virtual Secretariat Dashboard',
      edocSystem: 'e-DOC Document Management System',
      bpmnPetitions: 'BPMN Process Flow — Petitions Workflow',
      svmAdmin: 'SVM Admin Panel — User Management',
      erdAcademic: 'ERD — Academic Information System',
      sqlOptimization: 'SQL Query Optimization Results',
      dbSchema: 'Database Schema — Normalized Structure',
      queryPerf: 'Query Performance Benchmarks',
      bpmnModel: 'BPMN 2.0 Process Model',
      reqTemplate: 'Requirements Document Template',
      sdlcDiagram: 'System Development Lifecycle',
      clinicUI: 'Clinic System — Java Swing UI',
      accountingDash: 'Accounting System — Dashboard',
      mysqlWorkbench: 'MySQL Workbench — Schema Design',
      gitBranching: 'Git Branching Strategy',
      networkTopology: 'Network Topology — Municipal Setup',
      dhcpConfig: 'DHCP Configuration Panel',
      dnsConfig: 'DNS Zone Configuration',
      pivotTable: 'Advanced Excel — Pivot Table Analysis',
      powerBI: 'Power BI Integration Dashboard',
      reportTemplate: 'Monthly Report Template',
    },
  },

  certifications: {
    pageTitle: 'Certifications & Courses',
    pageSubtitle: 'Professional certifications from educational platforms and institutions',
    continuousLearning: 'Continuous Learning',
    learningDesc: "I'm constantly expanding my skill set through courses, certifications, and hands-on projects. Currently pursuing AWS Solutions Architect certification.",
    alwaysLearning: '🚀 Always Learning',
    goalOriented: '🎯 Goal Oriented',
  },

  services: {
    pageTitle: 'My Services',
    pageSubtitle: 'Professional development services tailored to your needs',
    process: 'My Process',
    faq: 'Frequently Asked Questions',
    processSteps: {
      discovery: 'Discovery',
      discoveryDesc: 'Understanding your requirements, goals, and vision for the project.',
      planning: 'Planning',
      planningDesc: 'Creating detailed architecture, wireframes, and project roadmap.',
      development: 'Development',
      developmentDesc: 'Building your solution with clean code, best practices, and regular updates.',
      delivery: 'Delivery',
      deliveryDesc: 'Testing, deploying, and providing ongoing support and maintenance.',
    },
    faqItems: {
      timelineQ: 'What is your typical project timeline?',
      timelineA: 'Project timelines depend on scope and complexity. A database design project typically takes 2-4 weeks, while a complete management system can take 6-12 weeks. I always provide a detailed timeline upfront.',
      supportQ: 'Do you offer ongoing support?',
      supportA: 'Yes! All projects include post-delivery support. I also offer ongoing maintenance plans for database management, system updates, and user support.',
      institutionalQ: 'Can you work with institutional systems?',
      institutionalA: 'Absolutely. I have extensive experience with institutional systems including SVM, e-DOC (SNGD), ERP for public management, and municipal digital transformation initiatives.',
      techQ: 'What technologies do you specialize in?',
      techA: 'My core competencies include Java, Python, JavaScript, SQL (MySQL, PostgreSQL), BPMN process modeling, database design (ERD), and Microsoft Office (Advanced Excel). I also have experience with TCP/IP networking, institutional systems (SVM, e-DOC), and ERP systems.',
      paymentQ: 'How do payments work?',
      paymentA: 'For consulting and freelance projects, pricing and payment terms are discussed on a case-by-case basis. Contact me for a personalized quote based on your requirements.',
    },
  },

  contactPage: {
    pageTitle: "Let's Connect",
    pageSubtitle: 'Have a project in mind? Let\'s discuss how we can work together',
    getInTouch: 'Get in Touch',
    whatsThisAbout: "What's this about?",
    general: '💬 General',
    newProject: '🚀 New Project',
    jobOpportunity: '💼 Job Opportunity',
    collaboration: '🤝 Collaboration',
    nameLabel: 'Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Email',
    emailPlaceholder: 'john@example.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Project discussion',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    messageSent: 'Message Sent!',
    messageSentDesc: "Thank you for reaching out. I'll get back to you within 24 hours.",
    phone: 'Phone',
    location: 'Location',
    responseTime: 'Response Time',
    within24h: 'Within 24 hours',
    connectWithMe: 'Connect with me',
    currentlyAvailable: 'Currently Available',
    availableDesc: "I'm open to freelance projects, full-time positions, and interesting collaborations. Let's create something amazing together!",
  },

  footer: {
    quickLinks: 'Quick Links',
    servicesTitle: 'Services',
    services: ['Database Design', 'Systems Analysis', 'Software Development', 'Network Setup', 'IT Consulting', 'Data Analysis'],
    newsletter: 'Newsletter',
    newsletterShort: 'Get the latest articles and updates delivered to your inbox.',
    builtWith: 'Built with ♥ using React & Tailwind CSS',
    rights: 'All rights reserved.',
    tagline: 'Bridging technology and public service through innovation.',
  },

  chatbot: {
    title: 'ArlindoTech AI',
    status: 'Always online • Ready to help',
    placeholder: 'Ask me anything...',
    greeting: "Hi! 👋 I'm ArlindoTech's AI assistant. Ask me about skills, projects, services, or anything else!",
    suggestions: { skills: 'Skills', projects: 'Projects', services: 'Services', hire: 'Hire' },
    responses: {
      skills: "Arlindo specializes in Database Design (SQL, MySQL, PostgreSQL), Programming (Java, Python, JavaScript), Systems Analysis (BPMN, ERD), Networking (TCP/IP, DHCP, DNS), and Microsoft Office tools. He has 10+ years of ICT experience.",
      projects: "Arlindo has developed several projects including a Clinic Management System (Java/MySQL), Accounting System (Java/PostgreSQL), Academic Database (SQL), and administers the Municipal Virtual Secretariat (SVM). Check out the Portfolio section!",
      services: "Arlindo offers Database Design & Management, Systems Analysis & Design, Software Development, Network Configuration, Data Analysis & Reporting, and IT Consulting & Training.",
      experience: "Arlindo has 10+ years of experience as an ICT Technician at the Municipal Council of Nampula City. He holds a B.Sc. in Information Systems Management from Universidade Aberta ISCED (2022-2026).",
      hire: "Great news! Arlindo is currently available for consulting, freelance, and collaboration opportunities. Head to the Contact section to get in touch!",
      contact: "You can reach Arlindo at arlindomario.mucamuene@gmail.com or by phone at +258 84 464 6874. He's based in Nampula City, Mozambique.",
      certifications: "Arlindo holds a Bachelor's Degree in Information Systems Management, completed multiple BootCamp courses on Udemy and SoloLearn (Java, Python, SQL, Web Dev), and has advanced Excel training.",
      education: "Arlindo completed his Bachelor's Degree in Information Systems Management (2022-2026) at Universidade Aberta ISCED. His thesis focused on the impact of IT on public servant training (Grade: 14/20).",
      hello: "Hello! 👋 I'm ArlindoTech's AI assistant. I can tell you about skills, projects, services, experience, certifications, and availability. What interests you?",
      thanks: "You're welcome! Feel free to ask anything else or use the contact form to get in touch directly. 😊",
      default: "I'm ArlindoTech's AI assistant! I can help you learn about skills, projects, services, and experience. What would you like to know?",
    },
  },

  admin: {
    dashboardTitle: 'Admin Dashboard',
    dashboardWelcome: "Welcome back, ArlindoTech! Here's your overview.",
    tabs: { dashboard: 'Dashboard', posts: 'Blog Posts', projects: 'Projects', messages: 'Messages', settings: 'Settings' },
    analytics: { pageViews: 'Page Views', blogReads: 'Blog Reads', messagesCount: 'Messages', followers: 'Followers' },
    recentActivity: 'Recent Activity',
    activityItems: [
      'New comment on "Building Scalable React"',
      'Portfolio viewed by recruiter from Google',
      'New blog post published',
      'Project "E-Commerce Platform" updated',
      'New certification added: AWS Cloud Practitioner',
      'Message from a visitor',
    ],
    visitorAnalytics: 'Visitor Analytics',
    last12Months: 'Last 12 months',
    newPost: '+ New Post',
    newProject: '+ New Project',
    settingsFields: {
      profileName: 'Profile Name',
      email: 'Email',
      location: 'Location',
      website: 'Website',
      availableForHire: 'Available for Hire',
      emailNotifications: 'Email Notifications',
    },
  },
};

// ============================================================================
// TRADUÇÕES EM ESPANHOL (ES)
// ============================================================================

const es: Translations = {
  nav: {
    home: 'Inicio',
    about: 'Sobre Mí',
    blog: 'Blog',
    contact: 'Contacto',
    more: 'Más',
    less: 'Menos',
    portfolio: 'Portafolio',
    portfolioDesc: 'Proyectos y Casos de Estudio',
    skills: 'Competencias',
    skillsDesc: 'Competencias Técnicas',
    services: 'Servicios',
    servicesDesc: 'Lo Que Ofrezco',
    certifications: 'Certificaciones',
    certificationsDesc: 'Credenciales y Cursos',
  },

  common: {
    available: 'Disponible',
    readMore: 'Leer más',
    viewAll: 'Ver Todo',
    downloadCV: 'Descargar CV',
    contactMe: 'Contáctame',
    hireMe: 'Contrátame',
    sendMessage: 'Enviar Mensaje',
    send: 'Enviar',
    subscribe: 'Suscribirse',
    subscribed: '✓ ¡Suscrito!',
    search: 'Buscar',
    searchPlaceholder: 'Buscar proyectos...',
    showing: 'Mostrando',
    of: 'de',
    all: 'Todos',
    explore: 'Explorar',
    backToArticles: 'Volver a todos los artículos',
    share: 'Compartir',
    shareArticle: 'Compartir este artículo',
    comments: 'Comentarios',
    postComment: 'Publicar Comentario',
    commentName: 'Tu nombre',
    commentPlaceholder: 'Escribe un comentario...',
    minRead: 'min de lectura',
    featured: 'Destacado',
    liveDemo: 'Demo en Vivo',
    sourceCode: 'Código Fuente',
    details: 'Detalles',
    stayUpdated: 'Mantente Actualizado',
    newsletterDesc: 'Suscríbete a mi newsletter y no te pierdas ningún artículo nuevo.',
    newsletterEmail: 'tu@email.com',
    noResults: 'No se encontraron resultados',
    noResultsDesc: 'Intenta ajustar tu búsqueda o filtro',
    contact: 'Contacto',
    getStarted: 'Comenzar',
    saveChanges: 'Guardar Cambios',
    viewProject: 'Ver Proyecto',
    current: 'Actual',
    work: 'Trabajo',
    education: 'Educación',
    since: 'desde',
    scrollToTop: 'Volver arriba',
  },

  home: {
    greeting: 'Hola, soy',
    bio: 'Conectando la tecnología y el servicio público a través de la innovación',
    readyChallenges: 'Listo para nuevos desafíos',
    scroll: 'Desplazar',
    stats: {
      yearsExp: 'Años de Experiencia',
      academicProjects: 'Proyectos Académicos',
      systemsManaged: 'Sistemas Gestionados',
      reportsDelivered: 'Informes Entregados',
      certifications: 'Certificaciones',
      bootcampCourses: 'Cursos Bootcamp',
    },
    techStackTitle: 'Competencias Técnicas',
    featuredProjects: 'Proyectos Destacados',
    testimonials: 'Lo Que Dicen',
    languages: 'Idiomas',
    languageProficiency: 'Dominio de Idiomas',
    ctaTitle1: 'Construyamos Algo',
    ctaTitle2: 'Juntos',
    ctaDesc: 'Ya sea que necesites diseño de bases de datos, análisis de sistemas, configuración de red o consultoría de transformación digital — hablemos de tus necesidades.',
    trustedBy: 'Más de 10 años de servicio público dedicado',
    seekingTitle: 'Buscando Activamente',
    seekingSubtitle: 'Actualmente abierto a las siguientes oportunidades a nivel mundial',
    seekingItems: {
      internship: 'Pasantía / Oferta de Empleo en Sistemas de Información / Asistente Administrativo / Desarrollo de Software Nivel Inicial',
      workvisa: 'Oferta de Empleo con Patrocinio de Visa de Trabajo',
      mscIs: 'Beca de Maestría — Sistemas de Información (financiada)',
      mscPe: 'Beca de Maestría — Ingeniería de Producción (financiada)',
    },
    seekingJob: 'Oportunidad',
    seekingScholarship: 'Beca',
    seekingCTA: 'Contáctame',
    seekingAvailable: 'Disponible para comenzar inmediatamente',
  },

  about: {
    pageTitle: 'Sobre Mí',
    subtitle: 'Profesional de TIC y Graduado en Gestión de Sistemas de Información',
    hello: 'Hola, soy',
    bioExtended: 'Con una Licenciatura en Gestión de Sistemas de Información por la Universidade Aberta ISCED y más de 10 años de experiencia en el Concejo Municipal de Nampula, combino conocimiento académico con experiencia práctica en TIC, gestión de bases de datos, análisis de sistemas y transformación digital institucional.',
    whatIDo: 'En Qué Me Especializo',
    personalCompetencies: 'Competencias Personales',
    competencyItems: {
      analytical: 'Pensamiento Analítico',
      fastLearning: 'Aprendizaje Rápido',
      communication: 'Comunicación y Trabajo en Equipo',
      organization: 'Organización y Gestión del Tiempo',
      proactivity: 'Proactividad y Responsabilidad',
      continuousLearning: 'Aprendizaje Continuo',
    },
    databaseTitle: 'Bases de Datos y Sistemas',
    systemsTitle: 'Análisis de Sistemas',
    transformationTitle: 'Transformación Digital',
    timeline: 'Línea Temporal Profesional',
    thesis: 'Tesis de Licenciatura',
    thesisQuote: '"Impacto de las Tecnologías de la Información en la Formación y Desarrollo Profesional de los Servidores Públicos Municipales: Un Estudio de Caso del Concejo Municipal de Nampula"',
    thesisDesc: 'Aplicación de métodos de recopilación y análisis de datos, presentando recomendaciones prácticas para mejorar el servicio público.',
    writtenWork: 'Trabajo Escrito: 15/20',
    defense: 'Defensa: 13/20',
    finalGrade: 'Nota Final: 14/20',
    ctaTitle: '¿Interesado en trabajar juntos?',
    ctaDesc: 'Siempre estoy abierto a discutir nuevas oportunidades, proyectos de consultoría o formas de contribuir a iniciativas de transformación digital.',
    letsTalk: 'Hablemos →',
  },

  skills: {
    pageTitle: 'Competencias y Tecnologías',
    pageSubtitle: 'Una visión completa de mis competencias técnicas y niveles de dominio',
    techStackTitle: 'Stack Tecnológico Completo',
    gitHubActivity: 'Actividad en GitHub',
    totalCommits: 'Commits Totales',
    pullRequests: 'Pull Requests',
    contributions: 'Contribuciones',
    starsEarned: 'Estrellas Obtenidas',
  },

  portfolio: {
    pageTitle: 'Mis Proyectos',
    pageSubtitle: 'Explora mi trabajo más reciente y proyectos creativos',
    resultsCount: 'proyectos',
  },

  blog: {
    pageTitle: 'Blog Técnico',
    pageSubtitle: 'Perspectivas, tutoriales y pensamientos sobre desarrollo web moderno',
    writtenBy: 'Escrito por',
  },

  gallery: {
    title: 'Galería',
    subtitle: 'Documentación visual de proyectos, diagramas y arquitecturas de sistemas',
    viewAll: 'Ver Todo',
    imageCount: 'imágenes',
    relatedPost: 'Artículo relacionado',
    filterAll: 'Todos',
    types: { screenshot: 'Captura', diagram: 'Diagrama', photo: 'Foto', infographic: 'Infografía', code: 'Código' },
    lightbox: { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente', of: 'de', image: 'Imagen' },
    imageTitles: {
      svmDashboard: 'Panel de la Secretaría Virtual Municipal',
      edocSystem: 'Sistema de Gestión Documental e-DOC',
      bpmnPetitions: 'Flujo BPMN — Proceso de Peticiones',
      svmAdmin: 'Panel Admin SVM — Gestión de Usuarios',
      erdAcademic: 'ERD — Sistema de Información Académica',
      sqlOptimization: 'Resultados de Optimización SQL',
      dbSchema: 'Esquema de BD — Estructura Normalizada',
      queryPerf: 'Benchmark de Rendimiento de Consultas',
      bpmnModel: 'Modelo de Proceso BPMN 2.0',
      reqTemplate: 'Plantilla de Documento de Requisitos',
      sdlcDiagram: 'Ciclo de Vida del Desarrollo de Software',
      clinicUI: 'Sistema de Clínica — Interfaz Java Swing',
      accountingDash: 'Sistema de Contabilidad — Panel',
      mysqlWorkbench: 'MySQL Workbench — Diseño de Esquema',
      gitBranching: 'Estrategia de Ramas Git',
      networkTopology: 'Topología de Red — Configuración Municipal',
      dhcpConfig: 'Panel de Configuración DHCP',
      dnsConfig: 'Configuración de Zona DNS',
      pivotTable: 'Excel Avanzado — Análisis con Tablas Dinámicas',
      powerBI: 'Panel de Integración Power BI',
      reportTemplate: 'Plantilla de Informe Mensual',
    },
  },

  certifications: {
    pageTitle: 'Certificaciones y Cursos',
    pageSubtitle: 'Certificaciones profesionales de plataformas educativas e instituciones',
    continuousLearning: 'Aprendizaje Continuo',
    learningDesc: 'Estoy constantemente ampliando mis habilidades a través de cursos, certificaciones y proyectos prácticos.',
    alwaysLearning: '🚀 Siempre Aprendiendo',
    goalOriented: '🎯 Orientado a Objetivos',
  },

  services: {
    pageTitle: 'Mis Servicios',
    pageSubtitle: 'Servicios profesionales adaptados a tus necesidades',
    process: 'Mi Proceso',
    faq: 'Preguntas Frecuentes',
    processSteps: {
      discovery: 'Descubrimiento',
      discoveryDesc: 'Comprensión de tus requisitos, objetivos y visión para el proyecto.',
      planning: 'Planificación',
      planningDesc: 'Creación de arquitectura detallada, wireframes y hoja de ruta del proyecto.',
      development: 'Desarrollo',
      developmentDesc: 'Construcción de tu solución con código limpio, mejores prácticas y actualizaciones regulares.',
      delivery: 'Entrega',
      deliveryDesc: 'Pruebas, despliegue y soporte y mantenimiento continuos.',
    },
    faqItems: {
      timelineQ: '¿Cuál es el plazo típico de un proyecto?',
      timelineA: 'Los plazos dependen del alcance y complejidad. Un diseño de base de datos toma 2-4 semanas, mientras que un sistema completo puede tomar 6-12 semanas.',
      supportQ: '¿Ofreces soporte continuo?',
      supportA: '¡Sí! Todos los proyectos incluyen soporte post-entrega. También ofrezco planes de mantenimiento para gestión de bases de datos, actualizaciones y soporte.',
      institutionalQ: '¿Puedes trabajar con sistemas institucionales?',
      institutionalA: 'Absolutamente. Tengo amplia experiencia con sistemas institucionales incluyendo SVM, e-DOC (SNGD), ERP para gestión pública e iniciativas de transformación digital.',
      techQ: '¿En qué tecnologías te especializas?',
      techA: 'Mis competencias principales incluyen Java, Python, JavaScript, SQL (MySQL, PostgreSQL), modelado BPMN, diseño de bases de datos (ERD) y Microsoft Office (Excel Avanzado).',
      paymentQ: '¿Cómo funcionan los pagos?',
      paymentA: 'Para proyectos de consultoría y freelance, el precio y términos de pago se discuten caso por caso. Contáctame para un presupuesto personalizado.',
    },
  },

  contactPage: {
    pageTitle: 'Contáctame',
    pageSubtitle: '¿Tienes un proyecto en mente? Hablemos sobre cómo podemos trabajar juntos',
    getInTouch: 'Comunícate',
    whatsThisAbout: '¿De qué se trata?',
    general: '💬 General',
    newProject: '🚀 Nuevo Proyecto',
    jobOpportunity: '💼 Oportunidad Laboral',
    collaboration: '🤝 Colaboración',
    nameLabel: 'Nombre',
    namePlaceholder: 'Juan Pérez',
    emailLabel: 'Correo Electrónico',
    emailPlaceholder: 'juan@ejemplo.com',
    subjectLabel: 'Asunto',
    subjectPlaceholder: 'Discusión de proyecto',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre tu proyecto...',
    messageSent: '¡Mensaje Enviado!',
    messageSentDesc: 'Gracias por comunicarte. Te responderé dentro de 24 horas.',
    phone: 'Teléfono',
    location: 'Ubicación',
    responseTime: 'Tiempo de Respuesta',
    within24h: 'Dentro de 24 horas',
    connectWithMe: 'Conéctate conmigo',
    currentlyAvailable: 'Actualmente Disponible',
    availableDesc: 'Estoy abierto a proyectos freelance, posiciones de tiempo completo y colaboraciones interesantes.',
  },

  footer: {
    quickLinks: 'Enlaces Rápidos',
    servicesTitle: 'Servicios',
    services: ['Diseño de BD', 'Análisis de Sistemas', 'Desarrollo de Software', 'Configuración de Red', 'Consultoría IT', 'Análisis de Datos'],
    newsletter: 'Boletín',
    newsletterShort: 'Recibe los últimos artículos y actualizaciones en tu correo.',
    builtWith: 'Construido con ♥ usando React y Tailwind CSS',
    rights: 'Todos los derechos reservados.',
    tagline: 'Conectando la tecnología y el servicio público a través de la innovación.',
  },

  chatbot: {
    title: 'ArlindoTech IA',
    status: 'Siempre en línea • Listo para ayudar',
    placeholder: 'Pregúntame lo que quieras...',
    greeting: '¡Hola! 👋 Soy el asistente IA de ArlindoTech. ¡Pregúntame sobre competencias, proyectos, servicios o cualquier otra cosa!',
    suggestions: { skills: 'Competencias', projects: 'Proyectos', services: 'Servicios', hire: 'Contratar' },
    responses: {
      skills: 'Arlindo se especializa en Diseño de BD (SQL, MySQL, PostgreSQL), Programación (Java, Python, JavaScript), Análisis de Sistemas (BPMN, ERD), Redes (TCP/IP, DHCP, DNS) y herramientas Microsoft Office.',
      projects: 'Arlindo ha desarrollado varios proyectos incluyendo un Sistema de Gestión de Clínica (Java/MySQL), Sistema de Contabilidad (Java/PostgreSQL), Base de Datos Académica (SQL) y administra la Secretaría Virtual Municipal (SVM).',
      services: 'Arlindo ofrece Diseño y Gestión de BD, Análisis y Diseño de Sistemas, Desarrollo de Software, Configuración de Redes, Análisis de Datos y Consultoría IT.',
      experience: 'Arlindo tiene más de 10 años de experiencia como Técnico de TIC en el Concejo Municipal de Nampula. Es Licenciado en Gestión de Sistemas de Información por la Universidade Aberta ISCED.',
      hire: '¡Buenas noticias! Arlindo está disponible para consultoría, freelance y colaboraciones. ¡Visita la sección de Contacto!',
      contact: 'Puedes contactar a Arlindo en arlindomario.mucamuene@gmail.com o al +258 84 464 6874. Está en Nampula, Mozambique.',
      certifications: 'Arlindo tiene una Licenciatura en Gestión de Sistemas de Información, múltiples cursos en Udemy y SoloLearn (Java, Python, SQL, Web) y formación avanzada en Excel.',
      education: 'Arlindo completó su Licenciatura en Gestión de Sistemas de Información (2022-2026) en la Universidade Aberta ISCED. Su tesis se enfocó en el impacto de las TIC en la formación de servidores públicos.',
      hello: '¡Hola! 👋 Soy el asistente IA de ArlindoTech. Puedo contarte sobre competencias, proyectos, servicios, experiencia y disponibilidad.',
      thanks: '¡De nada! No dudes en preguntar cualquier otra cosa o usa el formulario de contacto para comunicarte directamente. 😊',
      default: '¡Soy el asistente IA de ArlindoTech! Puedo ayudarte a conocer sus competencias, proyectos, servicios y experiencia. ¿Qué te gustaría saber?',
    },
  },

  admin: {
    dashboardTitle: 'Panel de Administración',
    dashboardWelcome: '¡Bienvenido, ArlindoTech! Aquí está tu resumen.',
    tabs: { dashboard: 'Panel', posts: 'Artículos', projects: 'Proyectos', messages: 'Mensajes', settings: 'Configuración' },
    analytics: { pageViews: 'Visitas', blogReads: 'Lecturas', messagesCount: 'Mensajes', followers: 'Seguidores' },
    recentActivity: 'Actividad Reciente',
    activityItems: ['Nuevo comentario en "Building Scalable React"', 'Portafolio visto por reclutador de Google', 'Nuevo artículo publicado', 'Proyecto actualizado', 'Nueva certificación añadida', 'Mensaje de un visitante'],
    visitorAnalytics: 'Analítica de Visitantes',
    last12Months: 'Últimos 12 meses',
    newPost: '+ Nuevo Artículo',
    newProject: '+ Nuevo Proyecto',
    settingsFields: { profileName: 'Nombre del Perfil', email: 'Correo', location: 'Ubicación', website: 'Sitio Web', availableForHire: 'Disponible para Contratar', emailNotifications: 'Notificaciones por Correo' },
  },
};

// ============================================================================
// TRADUÇÕES EM PORTUGUÊS (PT) — Idioma Nativo (Moçambique)
// ============================================================================

const pt: Translations = {
  nav: {
    home: 'Início',
    about: 'Sobre Mim',
    blog: 'Blog',
    contact: 'Contacto',
    more: 'Mais',
    less: 'Menos',
    portfolio: 'Portfólio',
    portfolioDesc: 'Projetos e Estudos de Caso',
    skills: 'Competências',
    skillsDesc: 'Competências Técnicas',
    services: 'Serviços',
    servicesDesc: 'O Que Ofereço',
    certifications: 'Certificações',
    certificationsDesc: 'Credenciais e Cursos',
  },

  common: {
    available: 'Disponível',
    readMore: 'Ler mais',
    viewAll: 'Ver Tudo',
    downloadCV: 'Descarregar CV',
    contactMe: 'Contacte-me',
    hireMe: 'Contrate-me',
    sendMessage: 'Enviar Mensagem',
    send: 'Enviar',
    subscribe: 'Subscrever',
    subscribed: '✓ Subscrito!',
    search: 'Pesquisar',
    searchPlaceholder: 'Pesquisar projetos...',
    showing: 'A mostrar',
    of: 'de',
    all: 'Todos',
    explore: 'Explorar',
    backToArticles: 'Voltar a todos os artigos',
    share: 'Partilhar',
    shareArticle: 'Partilhar este artigo',
    comments: 'Comentários',
    postComment: 'Publicar Comentário',
    commentName: 'O seu nome',
    commentPlaceholder: 'Escreva um comentário...',
    minRead: 'min de leitura',
    featured: 'Destacado',
    liveDemo: 'Demo ao Vivo',
    sourceCode: 'Código Fonte',
    details: 'Detalhes',
    stayUpdated: 'Mantenha-se Atualizado',
    newsletterDesc: 'Subscreva a minha newsletter e não perca nenhum artigo novo.',
    newsletterEmail: 'seu@email.com',
    noResults: 'Nenhum resultado encontrado',
    noResultsDesc: 'Tente ajustar a sua pesquisa ou filtro',
    contact: 'Contacto',
    getStarted: 'Começar',
    saveChanges: 'Guardar Alterações',
    viewProject: 'Ver Projeto',
    current: 'Atual',
    work: 'Trabalho',
    education: 'Educação',
    since: 'desde',
    scrollToTop: 'Voltar ao topo',
  },

  home: {
    greeting: 'Olá, eu sou',
    bio: 'Ligando a tecnologia e o serviço público através da inovação',
    readyChallenges: 'Pronto para novos desafios',
    scroll: 'Scroll',
    stats: {
      yearsExp: 'Anos de Experiência',
      academicProjects: 'Projetos Académicos',
      systemsManaged: 'Sistemas Geridos',
      reportsDelivered: 'Relatórios Entregues',
      certifications: 'Certificações',
      bootcampCourses: 'Cursos Bootcamp',
    },
    techStackTitle: 'Competências Técnicas',
    featuredProjects: 'Projetos em Destaque',
    testimonials: 'O Que Dizem',
    languages: 'Idiomas',
    languageProficiency: 'Proficiência Linguística',
    ctaTitle1: 'Vamos Construir Algo',
    ctaTitle2: 'Juntos',
    ctaDesc: 'Se precisa de design de bases de dados, análise de sistemas, configuração de rede ou consultoria de transformação digital — vamos discutir as suas necessidades.',
    trustedBy: 'Mais de 10 anos de serviço público dedicado',
    seekingTitle: 'Ativamente à Procura',
    seekingSubtitle: 'Atualmente aberto às seguintes oportunidades a nível mundial',
    seekingItems: {
      internship: 'Estágio / Oferta de Emprego em Sistemas de Informação / Assistente Administrativo / Desenvolvimento de Software Nível Inicial',
      workvisa: 'Oferta de Emprego com Visto de Trabalho',
      mscIs: 'Bolsa de Mestrado — Sistemas de Informação (financiada)',
      mscPe: 'Bolsa de Mestrado — Engenharia de Produção (financiada)',
    },
    seekingJob: 'Oportunidade',
    seekingScholarship: 'Bolsa',
    seekingCTA: 'Contacte-me',
    seekingAvailable: 'Disponível para começar imediatamente',
  },

  about: {
    pageTitle: 'Sobre Mim',
    subtitle: 'Profissional de TIC e Licenciado em Gestão de Sistemas de Informação',
    hello: 'Olá, eu sou',
    bioExtended: 'Com uma Licenciatura em Gestão de Sistemas de Informação pela Universidade Aberta ISCED e mais de 10 anos de experiência prática no Conselho Municipal da Cidade de Nampula, combino conhecimento académico com experiência prática em TIC, gestão de bases de dados, análise de sistemas e transformação digital institucional.',
    whatIDo: 'Em Que Me Especializo',
    personalCompetencies: 'Competências Pessoais',
    competencyItems: {
      analytical: 'Pensamento Analítico',
      fastLearning: 'Aprendizagem Rápida',
      communication: 'Comunicação e Trabalho em Equipa',
      organization: 'Organização e Gestão de Tempo',
      proactivity: 'Proatividade e Responsabilidade',
      continuousLearning: 'Aprendizagem Contínua',
    },
    databaseTitle: 'Bases de Dados e Sistemas',
    systemsTitle: 'Análise de Sistemas',
    transformationTitle: 'Transformação Digital',
    timeline: 'Percurso Profissional',
    thesis: 'Tese de Licenciatura',
    thesisQuote: '"Impacto das Tecnologias de Informação na Formação e Desenvolvimento Profissional dos Servidores Públicos Municipais: Um Estudo de Caso do Conselho Municipal da Cidade de Nampula"',
    thesisDesc: 'Aplicação de métodos de recolha e análise de dados, apresentando recomendações práticas para melhorar o serviço público através da adoção tecnológica.',
    writtenWork: 'Trabalho Escrito: 15/20',
    defense: 'Defesa: 13/20',
    finalGrade: 'Nota Final: 14/20',
    ctaTitle: 'Interessado em trabalhar juntos?',
    ctaDesc: 'Estou sempre aberto a discutir novas oportunidades, projetos de consultoria ou formas de contribuir para iniciativas de transformação digital.',
    letsTalk: 'Vamos Conversar →',
  },

  skills: {
    pageTitle: 'Competências e Tecnologias',
    pageSubtitle: 'Uma visão completa das minhas competências técnicas e níveis de proficiência',
    techStackTitle: 'Stack Tecnológica Completa',
    gitHubActivity: 'Atividade no GitHub',
    totalCommits: 'Commits Totais',
    pullRequests: 'Pull Requests',
    contributions: 'Contribuições',
    starsEarned: 'Estrellas Obtidas',
  },

  portfolio: {
    pageTitle: 'Meus Projetos',
    pageSubtitle: 'Explore o meu trabalho mais recente e projetos criativos',
    resultsCount: 'projetos',
  },

  blog: {
    pageTitle: 'Blog Técnico',
    pageSubtitle: 'Perspetivas, tutoriais e pensamentos sobre desenvolvimento web moderno',
    writtenBy: 'Escrito por',
  },

  gallery: {
    title: 'Galeria',
    subtitle: 'Documentação visual de projetos, diagramas e arquiteturas de sistemas',
    viewAll: 'Ver Tudo',
    imageCount: 'imagens',
    relatedPost: 'Artigo relacionado',
    filterAll: 'Todas',
    types: { screenshot: 'Captura', diagram: 'Diagrama', photo: 'Foto', infographic: 'Infografia', code: 'Código' },
    lightbox: { close: 'Fechar', prev: 'Anterior', next: 'Próxima', of: 'de', image: 'Imagem' },
    imageTitles: {
      svmDashboard: 'Painel da Secretaria Virtual Municipal',
      edocSystem: 'Sistema de Gestão Documental e-DOC',
      bpmnPetitions: 'Fluxo BPMN — Processo de Petições',
      svmAdmin: 'Painel Admin SVM — Gestão de Utilizadores',
      erdAcademic: 'ERD — Sistema de Informação Académica',
      sqlOptimization: 'Resultados de Otimização SQL',
      dbSchema: 'Esquema de BD — Estrutura Normalizada',
      queryPerf: 'Benchmark de Desempenho de Consultas',
      bpmnModel: 'Modelo de Processo BPMN 2.0',
      reqTemplate: 'Modelo de Documento de Requisitos',
      sdlcDiagram: 'Ciclo de Vida do Desenvolvimento de Sistemas',
      clinicUI: 'Sistema de Clínica — Interface Java Swing',
      accountingDash: 'Sistema de Contabilidade — Painel',
      mysqlWorkbench: 'MySQL Workbench — Design de Esquema',
      gitBranching: 'Estratégia de Ramos Git',
      networkTopology: 'Topologia de Rede — Configuração Municipal',
      dhcpConfig: 'Painel de Configuração DHCP',
      dnsConfig: 'Configuração de Zona DNS',
      pivotTable: 'Excel Avançado — Análise com Tabelas Dinâmicas',
      powerBI: 'Painel de Integração Power BI',
      reportTemplate: 'Modelo de Relatório Mensal',
    },
  },

  certifications: {
    pageTitle: 'Certificações e Cursos',
    pageSubtitle: 'Certificações profissionais de plataformas educativas e instituições',
    continuousLearning: 'Aprendizagem Contínua',
    learningDesc: 'Estou constantemente a expandir as minhas competências através de cursos, certificações e projetos práticos.',
    alwaysLearning: '🚀 Sempre a Aprender',
    goalOriented: '🎯 Orientado a Objetivos',
  },

  services: {
    pageTitle: 'Meus Serviços',
    pageSubtitle: 'Serviços de desenvolvimento profissional adaptados às suas necessidades',
    process: 'O Meu Processo',
    faq: 'Perguntas Frequentes',
    processSteps: {
      discovery: 'Descoberta',
      discoveryDesc: 'Compreensão dos seus requisitos, objetivos e visão para o projeto.',
      planning: 'Planeamento',
      planningDesc: 'Criação de arquitetura detalhada, wireframes e roteiro do projeto.',
      development: 'Desenvolvimento',
      developmentDesc: 'Construção da sua solução com código limpo, melhores práticas e atualizações regulares.',
      delivery: 'Entrega',
      deliveryDesc: 'Testes, implementação e suporte e manutenção contínuos.',
    },
    faqItems: {
      timelineQ: 'Qual é o prazo típico de um projeto?',
      timelineA: 'Os prazos dependem do alcance e complexidade. Um design de base de dados leva 2-4 semanas, enquanto um sistema completo pode levar 6-12 semanas.',
      supportQ: 'Oferece suporte contínuo?',
      supportA: 'Sim! Todos os projetos incluem suporte pós-entrega. Também ofereço planos de manutenção para gestão de bases de dados, atualizações e suporte ao utilizador.',
      institutionalQ: 'Pode trabalhar com sistemas institucionais?',
      institutionalA: 'Com certeza. Tenho vasta experiência com sistemas institucionais incluindo SVM, e-DOC (SNGD), ERP para gestão pública e iniciativas de transformação digital municipal.',
      techQ: 'Em que tecnologias se especializa?',
      techA: 'As minhas competências principais incluem Java, Python, JavaScript, SQL (MySQL, PostgreSQL), modelação BPMN, design de bases de dados (ERD) e Microsoft Office (Excel Avançado).',
      paymentQ: 'Como funcionam os pagamentos?',
      paymentA: 'Para projetos de consultoria e freelance, o preço e termos de pagamento são discutidos caso a caso. Contacte-me para um orçamento personalizado.',
    },
  },

  contactPage: {
    pageTitle: 'Contacte-me',
    pageSubtitle: 'Tem um projeto em mente? Vamos discutir como podemos trabalhar juntos',
    getInTouch: 'Entre em Contacto',
    whatsThisAbout: 'Sobre o que se trata?',
    general: '💬 Geral',
    newProject: '🚀 Novo Projeto',
    jobOpportunity: '💼 Oportunidade de Emprego',
    collaboration: '🤝 Colaboração',
    nameLabel: 'Nome',
    namePlaceholder: 'João Silva',
    emailLabel: 'Email',
    emailPlaceholder: 'joao@exemplo.com',
    subjectLabel: 'Assunto',
    subjectPlaceholder: 'Discussão de projeto',
    messageLabel: 'Mensagem',
    messagePlaceholder: 'Conte-me sobre o seu projeto...',
    messageSent: 'Mensagem Enviada!',
    messageSentDesc: 'Obrigado pelo seu contacto. Responderei dentro de 24 horas.',
    phone: 'Telefone',
    location: 'Localização',
    responseTime: 'Tempo de Resposta',
    within24h: 'Dentro de 24 horas',
    connectWithMe: 'Ligue-se a mim',
    currentlyAvailable: 'Atualmente Disponível',
    availableDesc: 'Estou aberto a projetos freelance, posições de tempo inteiro e colaborações interessantes.',
  },

  footer: {
    quickLinks: 'Links Rápidos',
    servicesTitle: 'Serviços',
    services: ['Design de BD', 'Análise de Sistemas', 'Desenvolvimento de Software', 'Configuração de Rede', 'Consultoria IT', 'Análise de Dados'],
    newsletter: 'Newsletter',
    newsletterShort: 'Receba os últimos artigos e atualizações no seu email.',
    builtWith: 'Construído com ♥ usando React e Tailwind CSS',
    rights: 'Todos os direitos reservados.',
    tagline: 'Ligando a tecnologia e o serviço público através da inovação.',
  },

  chatbot: {
    title: 'ArlindoTech IA',
    status: 'Sempre online • Pronto para ajudar',
    placeholder: 'Pergunte-me qualquer coisa...',
    greeting: 'Olá! 👋 Sou o assistente IA do ArlindoTech. Pergunte-me sobre competências, projetos, serviços ou qualquer outra coisa!',
    suggestions: { skills: 'Competências', projects: 'Projetos', services: 'Serviços', hire: 'Contratar' },
    responses: {
      skills: 'O Arlindo especializa-se em Design de BD (SQL, MySQL, PostgreSQL), Programação (Java, Python, JavaScript), Análise de Sistemas (BPMN, ERD), Redes (TCP/IP, DHCP, DNS) e ferramentas Microsoft Office.',
      projects: 'O Arlindo desenvolveu vários projetos incluindo um Sistema de Gestão de Clínica (Java/MySQL), Sistema de Contabilidade (Java/PostgreSQL), Base de Dados Académica (SQL) e administra a Secretaria Virtual Municipal (SVM).',
      services: 'O Arlindo oferece Design e Gestão de BD, Análise e Design de Sistemas, Desenvolvimento de Software, Configuração de Redes, Análise de Dados e Consultoria IT.',
      experience: 'O Arlindo tem mais de 10 anos de experiência como Técnico de TIC no Conselho Municipal de Nampula. É Licenciado em Gestão de Sistemas de Informação pela Universidade Aberta ISCED.',
      hire: 'Boas notícias! O Arlindo está disponível para consultoria, freelance e colaborações. Visite a secção de Contacto!',
      contact: 'Pode contactar o Arlindo em arlindomario.mucamuene@gmail.com ou pelo +258 84 464 6874. Está em Nampula, Moçambique.',
      certifications: 'O Arlindo tem uma Licenciatura em Gestão de Sistemas de Informação, múltiplos cursos na Udemy e SoloLearn (Java, Python, SQL, Web) e formação avançada em Excel.',
      education: 'O Arlindo completou a Licenciatura em Gestão de Sistemas de Informação (2022-2026) na Universidade Aberta ISCED. A sua tese focou no impacto das TI na formação de servidores públicos.',
      hello: 'Olá! 👋 Sou o assistente IA do ArlindoTech. Posso falar sobre competências, projetos, serviços, experiência e disponibilidade.',
      thanks: 'De nada! Não hesite em perguntar qualquer outra coisa ou use o formulário de contacto para falar diretamente. 😊',
      default: 'Sou o assistente IA do ArlindoTech! Posso ajudar a conhecer as suas competências, projetos, serviços e experiência. O que gostaria de saber?',
    },
  },

  admin: {
    dashboardTitle: 'Painel de Administração',
    dashboardWelcome: 'Bem-vindo, ArlindoTech! Aqui está o seu resumo.',
    tabs: { dashboard: 'Painel', posts: 'Artigos', projects: 'Projetos', messages: 'Mensagens', settings: 'Configurações' },
    analytics: { pageViews: 'Visualizações', blogReads: 'Leituras', messagesCount: 'Mensagens', followers: 'Seguidores' },
    recentActivity: 'Atividade Recente',
    activityItems: ['Novo comentário em artigo', 'Portfólio visto por recrutador', 'Novo artigo publicado', 'Projeto atualizado', 'Nova certificação adicionada', 'Mensagem de um visitante'],
    visitorAnalytics: 'Análise de Visitantes',
    last12Months: 'Últimos 12 meses',
    newPost: '+ Novo Artigo',
    newProject: '+ Novo Projeto',
    settingsFields: { profileName: 'Nome do Perfil', email: 'Email', location: 'Localização', website: 'Site Web', availableForHire: 'Disponível para Contratar', emailNotifications: 'Notificações por Email' },
  },
};

// ============================================================================
// Exportação do objeto de traduções (indexado por idioma)
// ============================================================================

const translations: Record<Language, Translations> = { en, es, pt };
export default translations;
