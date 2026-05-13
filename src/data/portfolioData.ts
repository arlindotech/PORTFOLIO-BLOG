export const personalInfo = {
  name: "ArlindoTech",
  fullName: "Arlindo Mário João Mucamuene",
  title: "Information Systems Professional",
  subtitle: "B.Sc. Information Systems Management | ICT Technician",
  tagline: "Bridging technology and public service through innovation",
  bio: "I am an Information Systems Management graduate and ICT Technician with over 10 years of experience at the Municipal Council of Nampula City, Mozambique. I specialize in database management, systems analysis, network administration, and institutional digital transformation. With a strong foundation in Java, Python, JavaScript, SQL, and enterprise systems, I am passionate about leveraging technology to improve public administration and organizational efficiency.",
  location: "Nampula City, Mozambique",
  email: "arlindomario.mucamuene@gmail.com",
  phone: "+258 84 464 6874",
  website: "https://arlindotech.dev",
  github: "https://github.com/arlindotech",
  linkedin: "https://linkedin.com/in/arlindotech",
  twitter: "https://twitter.com/arlindotech",
  devto: "https://dev.to/arlindotech",
  available: true,
  yearsExperience: 10,
  avatar: "AM",
  profileImage: "/images/profile.jpg",
  dateOfBirth: "04/08/1989",
  languages: [
    { name: "Portuguese", level: "Fluent" },
    { name: "English", level: "Intermediate" },
    { name: "Makua", level: "Native" },
  ],
};

export interface SeekingItem {
  id: string;
  type: 'job' | 'scholarship';
  icon: string;
  gradient: string;
}

export const seekingItems: SeekingItem[] = [
  {
    id: 'internship',
    type: 'job',
    icon: '💼',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'workvisa',
    type: 'job',
    icon: '🌍',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 'msc-is',
    type: 'scholarship',
    icon: '🎓',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'msc-pe',
    type: 'scholarship',
    icon: '🎓',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Academic Projects", value: 15, suffix: "+" },
  { label: "Systems Managed", value: 8, suffix: "+" },
  { label: "Reports Delivered", value: 200, suffix: "+" },
  { label: "Certifications", value: 12, suffix: "+" },
  { label: "Bootcamp Courses", value: 20, suffix: "+" },
];

export const techStack = [
  { name: "Java", category: "Programming", icon: "☕" },
  { name: "Python", category: "Programming", icon: "🐍" },
  { name: "JavaScript", category: "Programming", icon: "🟨" },
  { name: "HTML/CSS", category: "Web", icon: "🌐" },
  { name: "SQL", category: "Database", icon: "🗃️" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "BPMN", category: "Modeling", icon: "📊" },
  { name: "ERD", category: "Modeling", icon: "📐" },
  { name: "TCP/IP", category: "Networks", icon: "🔗" },
  { name: "DHCP/DNS", category: "Networks", icon: "🌍" },
  { name: "MS Excel", category: "Productivity", icon: "📈" },
  { name: "MS Word", category: "Productivity", icon: "📝" },
  { name: "PowerPoint", category: "Productivity", icon: "📊" },
  { name: "Git", category: "Tools", icon: "📦" },
  { name: "Linux", category: "Tools", icon: "🐧" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "clinic-management",
    title: "Clinic Management System",
    description: "Complete clinic management system built in Java with MySQL for patient records, appointments, and medical billing.",
    longDescription: "A comprehensive clinic management system developed as an academic project during the Bachelor's degree. The system handles patient registration, appointment scheduling, medical record management, billing, and report generation. Built with a focus on data integrity and user-friendly interfaces for healthcare staff.",
    image: "🏥",
    technologies: ["Java", "MySQL", "JDBC", "Swing", "ERD"],
    category: "Systems",
    liveUrl: "#",
    githubUrl: "https://github.com/arlindotech/clinic-system",
    featured: true,
    date: "2024-08",
  },
  {
    id: "accounting-system",
    title: "Accounting Management System",
    description: "Institutional accounting system developed in Java with PostgreSQL for financial tracking and reporting.",
    longDescription: "An accounting management system designed for institutional financial management. Features include transaction recording, budget tracking, financial report generation, and audit trail maintenance. Built with Java and PostgreSQL following proper systems analysis and design methodologies including BPMN process modeling.",
    image: "💰",
    technologies: ["Java", "PostgreSQL", "JDBC", "BPMN", "SQL"],
    category: "Systems",
    liveUrl: "#",
    githubUrl: "https://github.com/arlindotech/accounting-system",
    featured: true,
    date: "2024-05",
  },
  {
    id: "academic-database",
    title: "Academic Information Database",
    description: "Relational database for managing academic information using SQL with complex queries, views, and optimized schema.",
    longDescription: "A relational database system designed for managing academic information at a university level. Includes student records, course management, grade tracking, and academic reporting. Features complex SQL queries with joins, views, stored procedures, and an optimized normalized schema designed with Entity-Relationship Diagrams.",
    image: "🎓",
    technologies: ["SQL", "MySQL", "ERD", "Database Design"],
    category: "Database",
    liveUrl: "#",
    githubUrl: "https://github.com/arlindotech/academic-db",
    featured: true,
    date: "2023-10",
  },
  {
    id: "svm-administration",
    title: "Municipal Virtual Secretariat (SVM)",
    description: "Administration and management of the Municipal Virtual Secretariat platform for digital municipal services.",
    longDescription: "Responsible for the administration and management of the Municipal Virtual Secretariat (SVM) at the Municipal Council of Nampula City since 2025. The platform enables digital delivery of municipal services, document processing, and citizen interaction with the local government. Involves user management, system configuration, and data integrity maintenance.",
    image: "🏛️",
    technologies: ["SVM", "e-DOC", "ERP", "Administration"],
    category: "Institutional",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    date: "2025-01",
  },
  {
    id: "network-infrastructure",
    title: "Municipal Network Infrastructure",
    description: "Configuration and maintenance of computer networks at Municipal Council including TCP/IP, DHCP, and DNS services.",
    longDescription: "Hands-on experience in configuring and maintaining network infrastructure at the Municipal Council of Nampula City during curricular internship. Includes setting up TCP/IP networks, configuring DHCP and DNS services, basic network troubleshooting, and providing technical user support for network-related issues.",
    image: "🌐",
    technologies: ["TCP/IP", "DHCP", "DNS", "Networking"],
    category: "Infrastructure",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-06",
  },
  {
    id: "petitions-reporting",
    title: "Petitions Reporting System",
    description: "Consolidation and preparation of semi-annual petitions reports coordinating with Ministry of State Administration.",
    longDescription: "Since 2015, serving as the focal point for consolidating and preparing semi-annual petitions reports at the Municipal Council of Nampula City. This role involves coordinating with the Ministry of State Administration and Public Service, collecting data from various municipal departments, and producing comprehensive reports on citizen petitions and their resolutions.",
    image: "📋",
    technologies: ["MS Excel", "MS Word", "Reporting", "Data Analysis"],
    category: "Institutional",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2015-01",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Initiative",
    description: "Leading digital transformation efforts at the Municipal Council including document digitization and process automation.",
    longDescription: "Active participation in the digital transformation of the Municipal Council of Nampula City, including implementation of digital document management (e-DOC from SNGD), process optimization using BPMN modeling, and training staff on new digital tools and institutional systems.",
    image: "🚀",
    technologies: ["e-DOC", "BPMN", "ERP", "Digital Transformation"],
    category: "Institutional",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2024-01",
  },
  {
    id: "thesis-research",
    title: "IT Impact Research on Public Servants",
    description: "Bachelor's thesis on the impact of IT on training and professional development of municipal public servants.",
    longDescription: "End-of-course monograph entitled 'Impact of Information Technologies on the Training and Professional Development of Municipal Public Servants: A Case Study of the Municipal Council of Nampula City'. Applied data collection and analysis methods and presented practical recommendations. Achieved final grade of 14/20 (Written: 15, Defense: 13).",
    image: "📚",
    technologies: ["Research", "Data Analysis", "Surveys", "SPSS"],
    category: "Research",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2026-03",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readingTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "digital-transformation-local-government",
    title: "Digital Transformation in Local Government: Lessons from Nampula",
    excerpt: "Insights from implementing digital systems in municipal administration, including challenges, solutions, and the impact on public service delivery.",
    content: `<h2>Introduction</h2>
<p>Digital transformation in local government is not just about implementing new technology—it's about changing how public servants work and how citizens interact with their government. This article shares insights from my experience at the Municipal Council of Nampula City.</p>
<h2>The Starting Point</h2>
<p>When we began the digital transformation journey, most processes were entirely paper-based. Official dispatches, travel vouchers, and petitions reports were all managed manually, leading to delays, errors, and inefficiencies.</p>
<h2>Key Implementations</h2>
<ul>
<li>Migration to the Municipal Virtual Secretariat (SVM) platform</li>
<li>Implementation of e-DOC document management system from SNGD</li>
<li>Training staff on digital tools and new workflows</li>
<li>Digitizing historical records and documents</li>
</ul>
<h2>Challenges Faced</h2>
<p>Resistance to change was the biggest challenge. Many experienced staff members were comfortable with paper-based processes and needed extensive training and support to adapt to digital workflows.</p>
<h2>Results and Impact</h2>
<p>The digital transformation has significantly reduced processing times, improved document traceability, and enhanced the quality of municipal services delivered to citizens.</p>
<h2>Conclusion</h2>
<p>Digital transformation in public administration is an ongoing journey that requires patience, investment in training, and a focus on user needs. The experience in Nampula shows that even resource-constrained municipalities can make significant progress.</p>`,
    image: "🏛️",
    category: "Digital Transformation",
    tags: ["Digital Transformation", "Government", "Public Service", "Mozambique"],
    author: "Arlindo Mucamuene",
    date: "2025-01-15",
    readingTime: 8,
    featured: true,
  },
  {
    id: "database-design-academic-systems",
    title: "Database Design for Academic Information Systems",
    excerpt: "A practical guide to designing relational databases for academic institutions, from ERD modeling to complex SQL queries.",
    content: `<h2>Why Database Design Matters</h2>
<p>A well-designed database is the foundation of any information system. In academic settings, proper database design ensures data integrity, enables efficient reporting, and supports decision-making processes.</p>
<h2>Entity-Relationship Diagrams</h2>
<p>Starting with ERD modeling helps visualize the relationships between entities such as students, courses, instructors, and grades. This visual approach makes it easier to identify potential issues before writing any code.</p>
<h2>Normalization</h2>
<p>Applying normalization rules (1NF, 2NF, 3NF) helps eliminate data redundancy and ensures data integrity. For academic systems, this is crucial for maintaining accurate student records.</p>
<h2>Practical SQL Techniques</h2>
<p>Complex queries using JOINs, subqueries, views, and stored procedures are essential for generating academic reports, calculating GPAs, and tracking student progress over time.</p>`,
    image: "🗃️",
    category: "Database",
    tags: ["SQL", "MySQL", "Database Design", "ERD"],
    author: "Arlindo Mucamuene",
    date: "2025-01-10",
    readingTime: 10,
    featured: true,
  },
  {
    id: "systems-analysis-bpmn",
    title: "Systems Analysis with BPMN: A Practical Approach",
    excerpt: "How to use BPMN for process modeling in institutional settings, with real examples from public administration.",
    content: `<h2>What is BPMN?</h2>
<p>Business Process Model and Notation (BPMN) is a standard for modeling business processes. It provides a graphical notation that is understandable by all business stakeholders.</p>
<h2>Why BPMN in Public Administration?</h2>
<p>Government processes are often complex and involve multiple departments. BPMN helps map these processes, identify bottlenecks, and design more efficient workflows.</p>
<h2>Getting Started</h2>
<p>Begin by identifying the key processes in your organization. Map the current state (as-is), identify improvement opportunities, and design the future state (to-be).</p>`,
    image: "📊",
    category: "Systems Analysis",
    tags: ["BPMN", "Systems Analysis", "Process Modeling", "Methodology"],
    author: "Arlindo Mucamuene",
    date: "2024-12-20",
    readingTime: 12,
    featured: false,
  },
  {
    id: "java-mysql-clinic-system",
    title: "Building a Clinic Management System with Java and MySQL",
    excerpt: "Step-by-step walkthrough of developing a clinic management system, from requirements gathering to implementation.",
    content: `<h2>Project Overview</h2>
<p>This article documents the development of a clinic management system as an academic project during my Bachelor's degree. The system handles patient registration, appointments, and medical billing.</p>
<h2>Requirements Gathering</h2>
<p>The first step was understanding the needs of a typical clinic: patient management, appointment scheduling, medical records, and billing.</p>
<h2>Database Design</h2>
<p>Using ERD modeling, we designed a normalized database schema with tables for patients, doctors, appointments, treatments, and billing records.</p>
<h2>Implementation</h2>
<p>The system was built using Java Swing for the user interface and JDBC for database connectivity with MySQL. The layered architecture separates concerns between data access, business logic, and presentation.</p>`,
    image: "☕",
    category: "Development",
    tags: ["Java", "MySQL", "Clinic", "Systems Development"],
    author: "Arlindo Mucamuene",
    date: "2024-12-05",
    readingTime: 15,
    featured: false,
  },
  {
    id: "network-configuration-municipal",
    title: "Network Configuration in a Municipal Environment",
    excerpt: "Practical guide to setting up and maintaining computer networks in government institutions, based on real experience.",
    content: `<h2>Network Fundamentals</h2>
<p>Setting up a reliable network infrastructure is essential for modern government operations. This article shares practical experience from configuring networks at the Municipal Council.</p>
<h2>TCP/IP Configuration</h2>
<p>Proper TCP/IP configuration is the foundation of any network. This includes IP addressing schemes, subnet masks, and gateway configuration for different departments.</p>
<h2>DHCP and DNS Setup</h2>
<p>Configuring DHCP for automatic IP assignment and DNS for name resolution simplifies network management and reduces configuration errors.</p>
<h2>Troubleshooting</h2>
<p>Common network issues and their resolution, from connectivity problems to performance optimization.</p>`,
    image: "🌐",
    category: "Networking",
    tags: ["Networking", "TCP/IP", "DHCP", "DNS"],
    author: "Arlindo Mucamuene",
    date: "2024-11-18",
    readingTime: 9,
    featured: false,
  },
  {
    id: "excel-data-analysis",
    title: "Advanced Excel for Institutional Data Analysis",
    excerpt: "Leveraging advanced Excel features for data analysis, pivot tables, and reporting in institutional settings.",
    content: `<h2>Excel as a Data Analysis Tool</h2>
<p>Microsoft Excel remains one of the most powerful tools for data analysis in institutional settings. With advanced features, you can transform raw data into actionable insights.</p>
<h2>Pivot Tables</h2>
<p>Pivot tables allow you to quickly summarize large datasets, create cross-tabulations, and identify patterns in your data.</p>
<h2>Advanced Formulas</h2>
<p>Functions like VLOOKUP, INDEX-MATCH, and nested IF statements enable complex data manipulation and automated reporting.</p>`,
    image: "📈",
    category: "Productivity",
    tags: ["Excel", "Data Analysis", "Reporting", "Productivity"],
    author: "Arlindo Mucamuene",
    date: "2024-11-01",
    readingTime: 7,
    featured: false,
  },
];

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: "SQL (Queries, Joins, Views)", level: 90, category: "Database", icon: "🗃️" },
  { name: "MySQL", level: 88, category: "Database", icon: "🐬" },
  { name: "PostgreSQL", level: 85, category: "Database", icon: "🐘" },
  { name: "Database Design (ERD)", level: 87, category: "Database", icon: "📐" },
  { name: "Java", level: 82, category: "Programming", icon: "☕" },
  { name: "Python", level: 78, category: "Programming", icon: "🐍" },
  { name: "JavaScript", level: 75, category: "Programming", icon: "🟨" },
  { name: "HTML / CSS", level: 80, category: "Programming", icon: "🌐" },
  { name: "Systems Analysis & Design", level: 88, category: "Analysis", icon: "🔍" },
  { name: "BPMN Process Modeling", level: 85, category: "Analysis", icon: "📊" },
  { name: "Requirements Gathering", level: 90, category: "Analysis", icon: "📋" },
  { name: "TCP/IP Networking", level: 80, category: "Networks", icon: "🔗" },
  { name: "DHCP / DNS", level: 78, category: "Networks", icon: "🌍" },
  { name: "Network Troubleshooting", level: 82, category: "Networks", icon: "🔧" },
  { name: "Microsoft Excel (Advanced)", level: 92, category: "Productivity", icon: "📈" },
  { name: "Microsoft Word", level: 95, category: "Productivity", icon: "📝" },
  { name: "PowerPoint", level: 90, category: "Productivity", icon: "📊" },
  { name: "Data Analysis & Reporting", level: 88, category: "Productivity", icon: "📉" },
  { name: "SVM Administration", level: 85, category: "Institutional", icon: "🏛️" },
  { name: "e-DOC (SNGD)", level: 82, category: "Institutional", icon: "📄" },
  { name: "ERP (Public Management)", level: 78, category: "Institutional", icon: "🏢" },
  { name: "Document Management", level: 92, category: "Institutional", icon: "📁" },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  image: string;
  category: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: "bachelor-ism",
    title: "Bachelor's Degree in Information Systems Management",
    issuer: "Universidade Aberta ISCED",
    date: "2026-03",
    credentialId: "UA-ISM-2026",
    url: "#",
    image: "🎓",
    category: "Degree",
    skills: ["Information Systems", "Database", "Systems Analysis", "Java", "SQL"],
  },
  {
    id: "excel-mooc",
    title: "Excel Intermediate to Advanced Level",
    issuer: "Universidade Aberta ISCED",
    date: "2024-09",
    credentialId: "UA-EXCEL-2024",
    url: "#",
    image: "📈",
    category: "Training",
    skills: ["Excel", "Data Analysis", "Pivot Tables", "Charts"],
  },
  {
    id: "udemy-java",
    title: "Java Programming Masterclass",
    issuer: "Udemy",
    date: "2025-06",
    credentialId: "UD-JAVA-2025",
    url: "#",
    image: "🟣",
    category: "Udemy",
    skills: ["Java", "OOP", "JDBC", "Swing"],
  },
  {
    id: "udemy-python",
    title: "Python for Data Analysis",
    issuer: "Udemy",
    date: "2025-03",
    credentialId: "UD-PYTHON-2025",
    url: "#",
    image: "🟣",
    category: "Udemy",
    skills: ["Python", "Data Analysis", "Automation"],
  },
  {
    id: "udemy-sql",
    title: "SQL & Database Design Complete Course",
    issuer: "Udemy",
    date: "2024-11",
    credentialId: "UD-SQL-2024",
    url: "#",
    image: "🟣",
    category: "Udemy",
    skills: ["SQL", "MySQL", "PostgreSQL", "Database Design"],
  },
  {
    id: "udemy-web",
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024-08",
    credentialId: "UD-WEB-2024",
    url: "#",
    image: "🟣",
    category: "Udemy",
    skills: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
  {
    id: "sololearn-java",
    title: "Java Programming Course",
    issuer: "SoloLearn",
    date: "2025-01",
    credentialId: "SL-JAVA-2025",
    url: "#",
    image: "🟢",
    category: "SoloLearn",
    skills: ["Java", "OOP", "Algorithms"],
  },
  {
    id: "sololearn-sql",
    title: "SQL Fundamentals",
    issuer: "SoloLearn",
    date: "2024-10",
    credentialId: "SL-SQL-2024",
    url: "#",
    image: "🟢",
    category: "SoloLearn",
    skills: ["SQL", "Database Queries"],
  },
  {
    id: "sololearn-python",
    title: "Python for Beginners",
    issuer: "SoloLearn",
    date: "2024-07",
    credentialId: "SL-PY-2024",
    url: "#",
    image: "🟢",
    category: "SoloLearn",
    skills: ["Python", "Programming Basics"],
  },
  {
    id: "sololearn-html",
    title: "Responsive Web Design",
    issuer: "SoloLearn",
    date: "2024-05",
    credentialId: "SL-HTML-2024",
    url: "#",
    image: "🟢",
    category: "SoloLearn",
    skills: ["HTML", "CSS", "Responsive Design"],
  },
  {
    id: "secondary-education",
    title: "Upper Secondary Education (12th Grade)",
    issuer: "Nampula Secondary School",
    date: "2017-12",
    credentialId: "ENS-12-2017",
    url: "#",
    image: "🏫",
    category: "Education",
    skills: ["Group B", "Sciences"],
  },
  {
    id: "network-internship",
    title: "Computer Networks Internship",
    issuer: "Municipal Council of Nampula City",
    date: "2023-06",
    credentialId: "CMN-INT-2023",
    url: "#",
    image: "🏢",
    category: "Experience",
    skills: ["TCP/IP", "DHCP", "DNS", "Network Configuration"],
  },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "work" | "education";
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "work-current",
    title: "ICT Technician — Municipal Secretariat",
    company: "Municipal Council of Nampula City",
    location: "Nampula City, Mozambique",
    type: "work",
    startDate: "2015",
    endDate: "Present",
    current: true,
    description: "Responsible for ICT technical support, administrative systems management, and institutional digital transformation at the Municipal Secretariat.",
    achievements: [
      "Technical support and administrative task execution at the Municipal Secretariat",
      "Transcription and organization of official dispatches",
      "Issuance of travel vouchers for employees on official business",
      "Preparation of monthly sector reports",
      "Focal point for semi-annual petitions reports (since 2015), coordinating with Ministry of State Administration and Public Service",
      "Administration of the Municipal Virtual Secretariat (SVM), since 2025",
      "Management and organization of institutional and documentary information",
      "User support for IT tools and institutional systems",
    ],
  },
  {
    id: "work-earlier",
    title: "Administrative Support Staff",
    company: "Municipal Council of Nampula City",
    location: "Nampula City, Mozambique",
    type: "work",
    startDate: "2014",
    endDate: "2015",
    current: false,
    description: "Initial role providing administrative support services at the Municipal Council, transitioning into ICT responsibilities.",
    achievements: [
      "Provided administrative support to the Municipal Secretariat",
      "Assisted with document management and filing systems",
      "Gained foundational experience in institutional operations",
    ],
  },
  {
    id: "internship",
    title: "Curricular Internship — Computer Networks",
    company: "Municipal Council of Nampula City",
    location: "Nampula City, Mozambique",
    type: "work",
    startDate: "2022",
    endDate: "2023",
    current: false,
    description: "Completed a curricular internship in the area of Computer Networks as part of the Bachelor's Degree in Information Systems Management.",
    achievements: [
      "Basic network configuration and maintenance",
      "Technical user support and troubleshooting",
      "Configured TCP/IP, DHCP, and DNS services",
      "Documented network infrastructure and procedures",
    ],
  },
  {
    id: "edu-bachelor",
    title: "Bachelor's Degree in Information Systems Management",
    company: "Universidade Aberta ISCED",
    location: "Nampula Learning Center, Mozambique",
    type: "education",
    startDate: "02/2022",
    endDate: "03/2026",
    current: false,
    description: "Comprehensive study of information systems management, covering databases, programming, systems analysis, networks, and IT project management.",
    achievements: [
      "Completed with Final Grade: 14/20",
      "Thesis: 'Impact of Information Technologies on the Training and Professional Development of Municipal Public Servants'",
      "Developed academic projects: Clinic Management System (Java/MySQL), Accounting System (Java/PostgreSQL), Academic Database (SQL)",
      "Curricular internship in Computer Networks",
      "MOOC training in Advanced Excel",
    ],
  },
  {
    id: "edu-secondary",
    title: "Upper Secondary Education (12th Grade, Group B)",
    company: "Nampula Secondary School",
    location: "Nampula City, Mozambique",
    type: "education",
    startDate: "2015",
    endDate: "2017",
    current: false,
    description: "Completed Upper Secondary Education with focus on sciences (Group B), providing the foundation for further studies in Information Systems.",
    achievements: [
      "Successfully completed 12th grade examinations",
      "Built foundation in mathematics and sciences",
      "Prepared for university-level studies",
    ],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Francisco M.",
    role: "Director of Administration",
    company: "Municipal Council of Nampula",
    image: "FM",
    content: "Arlindo has been an invaluable member of our team. His dedication to improving our digital infrastructure and his ability to train staff on new systems has transformed how we deliver services to citizens.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Prof. Ana R.",
    role: "Academic Supervisor",
    company: "Universidade Aberta ISCED",
    image: "AR",
    content: "Arlindo demonstrated exceptional analytical skills during his thesis research. His work on the impact of IT on public servant training showed both academic rigor and practical relevance to Mozambique's digital transformation.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Carlos N.",
    role: "ICT Colleague",
    company: "Municipal Council of Nampula",
    image: "CN",
    content: "Working alongside Arlindo has been a pleasure. His problem-solving abilities and proactive approach to learning new technologies make him stand out. He's always willing to help colleagues with technical challenges.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Maria T.",
    role: "Department Head",
    company: "Municipal Secretariat",
    image: "MT",
    content: "Arlindo's reports and document management skills are impeccable. His work on the semi-annual petitions reports has been praised by the Ministry. He combines technical knowledge with strong organizational skills.",
    rating: 5,
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  popular: boolean;
}

export const services: Service[] = [
  {
    id: "database-design",
    title: "Database Design & Management",
    description: "Professional database design using ERD modeling, SQL development, and database administration for MySQL and PostgreSQL.",
    icon: "🗃️",
    features: [
      "ERD modeling and normalization",
      "Complex SQL queries and views",
      "MySQL & PostgreSQL setup",
      "Data migration services",
      "Performance optimization",
      "Documentation",
    ],
    price: "Contact for Quote",
    popular: true,
  },
  {
    id: "systems-analysis",
    title: "Systems Analysis & Design",
    description: "Complete systems analysis including requirements gathering, process modeling, and functional documentation.",
    icon: "🔍",
    features: [
      "Requirements gathering",
      "BPMN process modeling",
      "Functional documentation",
      "System architecture design",
      "Feasibility studies",
      "Stakeholder workshops",
    ],
    price: "Contact for Quote",
    popular: false,
  },
  {
    id: "software-dev",
    title: "Software Development",
    description: "Custom software development for institutional management using Java, Python, and web technologies.",
    icon: "💻",
    features: [
      "Desktop applications (Java)",
      "Web applications (HTML/CSS/JS)",
      "Python automation scripts",
      "System integration",
      "Testing and deployment",
      "User training",
    ],
    price: "Contact for Quote",
    popular: false,
  },
  {
    id: "network-setup",
    title: "Network Configuration & Support",
    description: "Setup, configuration, and maintenance of computer networks including TCP/IP, DHCP, and DNS services.",
    icon: "🌐",
    features: [
      "Network planning and setup",
      "TCP/IP configuration",
      "DHCP and DNS setup",
      "Troubleshooting",
      "Network documentation",
      "User support",
    ],
    price: "Contact for Quote",
    popular: false,
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Reporting",
    description: "Advanced data analysis using Microsoft Excel, pivot tables, charts, and automated reporting solutions.",
    icon: "📊",
    features: [
      "Data cleaning and preparation",
      "Pivot tables and analysis",
      "Automated report generation",
      "Dashboard creation",
      "Statistical analysis",
      "Visual presentations",
    ],
    price: "Contact for Quote",
    popular: false,
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Training",
    description: "Consulting services for digital transformation, institutional systems, and staff IT training.",
    icon: "💡",
    features: [
      "Digital transformation strategy",
      "Institutional systems (SVM, e-DOC)",
      "Staff training programs",
      "IT audit and assessment",
      "Process optimization",
      "Ongoing support",
    ],
    price: "Contact for Quote",
    popular: false,
  },
];

export const projectCategories = ["All", "Systems", "Database", "Institutional", "Infrastructure", "Research"];
export const blogCategories = ["All", "Digital Transformation", "Database", "Systems Analysis", "Development", "Networking", "Productivity"];
export const skillCategories = ["All", "Database", "Programming", "Analysis", "Networks", "Productivity", "Institutional"];
export const certCategories = ["All", "Degree", "Training", "Udemy", "SoloLearn", "Education", "Experience"];

// ============================================================================
// Galeria Pessoal — Fotos pessoais, realizações, participações,
//                   capacitações, reuniões e viagens
// ============================================================================
//
// Categorias:
//   Realizações    → Formatura, defesa de tese, prémios, marcos profissionais
//   Participações  → Eventos, hackathons, seminários, conferências
//   Capacitações   → Cursos, bootcamps, workshops, treinamentos
//   Reuniões       → Reuniões de trabalho, encontros profissionais, equipas
//   Viagens        → Viagens profissionais, visitas, deslocações de serviço
//   Pessoais       → Fotos de perfil, pessoais, dia-a-dia
//
// NOTA: Substituir o campo 'src' (emoji) por caminhos reais, ex:
//   src: '/images/gallery/foto-graduacao.jpg'
// ============================================================================

export interface GalleryImage {
  id: string;
  src: string;            // Caminho da imagem (substituir por foto real)
  titleKey: string;       // Chave para tradução trilíngue
  category: string;       // Categoria da galeria
  date: string;           // Data aproximada do evento
  location: string;       // Local do evento (trilíngue)
  locationKey: string;    // Chave para tradução do local
  description: string;    // Descrição curta (trilíngue via translations)
  descriptionKey: string; // Chave para tradução da descrição
}

export const galleryImages: GalleryImage[] = [
  // ================================================================
  // REALIZAÇÕES — Formatura, defesa, prémios
  // ================================================================
  { id: 'g1', src: '🎓', titleKey: 'graduationDay', category: 'Realizações', date: '2026-03', location: 'Nampula', locationKey: 'locNampula', description: 'Cerimónia de formatura — Licenciatura em Gestão de Sistemas de Informação', descriptionKey: 'descGraduation' },
  { id: 'g2', src: '📜', titleKey: 'thesisDefense', category: 'Realizações', date: '2026-02', location: 'Nampula', locationKey: 'locNampula', description: 'Defesa da tese: Impacto das TI nos Servidores Públicos Municipais — Nota 14/20', descriptionKey: 'descThesis' },
  { id: 'g3', src: '🏆', titleKey: 'awardHackathon', category: 'Realizações', date: '2020-11', location: 'Maputo', locationKey: 'locMaputo', description: '1º lugar no Hackathon Nacional 2020 com solução de gestão municipal', descriptionKey: 'descHackathon' },
  { id: 'g4', src: '🤝', titleKey: 'council10years', category: 'Realizações', date: '2024-06', location: 'Nampula', locationKey: 'locNampula', description: 'Comemoração de 10 anos de serviço no Conselho Municipal de Nampula', descriptionKey: 'desc10years' },
  { id: 'g5', src: '📊', titleKey: 'reportDelivery', category: 'Realizações', date: '2024-12', location: 'Nampula', locationKey: 'locNampula', description: 'Entrega do relatório semestral de petições ao Ministério', descriptionKey: 'descReport' },

  // ================================================================
  // PARTICIPAÇÕES — Eventos, seminários, hackathons
  // ================================================================
  { id: 'g6', src: '🎤', titleKey: 'techTalk', category: 'Participações', date: '2024-09', location: 'Nampula', locationKey: 'locNampula', description: 'Palestra sobre Transformação Digital na Administração Pública', descriptionKey: 'descTechTalk' },
  { id: 'g7', src: '💡', titleKey: 'seminarIS', category: 'Participações', date: '2025-01', location: 'Nampula', locationKey: 'locNampula', description: 'Seminário de Sistemas de Informação — Universidade Aberta ISCED', descriptionKey: 'descSeminar' },
  { id: 'g8', src: '🖥️', titleKey: 'devConference', category: 'Participações', date: '2024-06', location: 'Maputo', locationKey: 'locMaputo', description: 'Conferência de Desenvolvedores Moçambicanos 2024', descriptionKey: 'descDevConf' },
  { id: 'g9', src: '🤖', titleKey: 'aiWorkshop', category: 'Participações', date: '2024-11', location: 'Online', locationKey: 'locOnline', description: 'Workshop Internacional sobre IA na Administração Pública', descriptionKey: 'descAIWorkshop' },
  { id: 'g10', src: '🌐', titleKey: 'egovForum', category: 'Participações', date: '2023-10', location: 'Maputo', locationKey: 'locMaputo', description: 'Fórum Nacional de E-Governo e Modernização do Estado', descriptionKey: 'descEgov' },

  // ================================================================
  // CAPACITAÇÕES — Cursos, formações, bootcamps
  // ================================================================
  { id: 'g11', src: '📘', titleKey: 'javaBootcamp', category: 'Capacitações', date: '2025-06', location: 'Online', locationKey: 'locOnline', description: 'Java Programming Masterclass — Udemy (80h)', descriptionKey: 'descJavaBoot' },
  { id: 'g12', src: '🐍', titleKey: 'pythonCourse', category: 'Capacitações', date: '2025-03', location: 'Online', locationKey: 'locOnline', description: 'Python para Análise de Dados — Udemy', descriptionKey: 'descPython' },
  { id: 'g13', src: '🗃️', titleKey: 'sqlTraining', category: 'Capacitações', date: '2024-11', location: 'Online', locationKey: 'locOnline', description: 'SQL & Database Design Complete — SoloLearn + Udemy', descriptionKey: 'descSQL' },
  { id: 'g14', src: '📈', titleKey: 'excelAdvanced', category: 'Capacitações', date: '2024-09', location: 'Nampula', locationKey: 'locNampula', description: 'Excel Avançado — MOOC Universidade Aberta ISCED (15 dias)', descriptionKey: 'descExcel' },
  { id: 'g15', src: '🌐', titleKey: 'webDevBoot', category: 'Capacitações', date: '2024-08', location: 'Online', locationKey: 'locOnline', description: 'Web Development Bootcamp — HTML, CSS, JavaScript', descriptionKey: 'descWebDev' },
  { id: 'g16', src: '🎓', titleKey: 'degreeISM', category: 'Capacitações', date: '2022-02', location: 'Nampula', locationKey: 'locNampula', description: 'Início da Licenciatura em Gestão de Sistemas de Informação — UA ISCED', descriptionKey: 'descDegree' },

  // ================================================================
  // REUNIÕES — Encontros profissionais, equipas
  // ================================================================
  { id: 'g17', src: '🏢', titleKey: 'municipalTeam', category: 'Reuniões', date: '2024-05', location: 'Nampula', locationKey: 'locNampula', description: 'Reunião da equipa de TIC do Conselho Municipal', descriptionKey: 'descMunicipal' },
  { id: 'g18', src: '📋', titleKey: 'ministryMeeting', category: 'Reuniões', date: '2024-03', location: 'Maputo', locationKey: 'locMaputo', description: 'Encontro com Ministério da Função Pública — Sistema de Petições', descriptionKey: 'descMinistry' },
  { id: 'g19', src: '👥', titleKey: 'teamPlanning', category: 'Reuniões', date: '2025-01', location: 'Nampula', locationKey: 'locNampula', description: 'Planeamento anual — Secretariado Municipal 2025', descriptionKey: 'descPlanning' },
  { id: 'g20', src: '💼', titleKey: 'directorMeeting', category: 'Reuniões', date: '2024-11', location: 'Nampula', locationKey: 'locNampula', description: 'Reunião com Director de Administração — Digitalização SVM', descriptionKey: 'descDirector' },

  // ================================================================
  // VIAGENS — Deslocações profissionais e visitas
  // ================================================================
  { id: 'g21', src: '✈️', titleKey: 'tripMaputo', category: 'Viagens', date: '2024-06', location: 'Maputo', locationKey: 'locMaputo', description: 'Viagem para Conferência de Desenvolvedores em Maputo', descriptionKey: 'descTripMaputo' },
  { id: 'g22', src: '🚗', titleKey: 'visitDistrict', category: 'Viagens', date: '2024-09', location: 'Nampula', locationKey: 'locNampula', description: 'Visita aos Postos Administrativos — Levantamento de necessidades TIC', descriptionKey: 'descVisit' },
  { id: 'g23', src: '🏛️', titleKey: 'govVisit', category: 'Viagens', date: '2023-10', location: 'Maputo', locationKey: 'locMaputo', description: 'Participação no Fórum de E-Governo — Maputo', descriptionKey: 'descGovVisit' },

  // ================================================================
  // PESSOAIS — Retratos, dia-a-dia, hobbies
  // ================================================================
  { id: 'g24', src: '👨‍💻', titleKey: 'profileWork', category: 'Pessoais', date: '2025-01', location: 'Nampula', locationKey: 'locNampula', description: 'No escritório — dia normal de trabalho no Conselho Municipal', descriptionKey: 'descProfile' },
  { id: 'g25', src: '📚', titleKey: 'studying', category: 'Pessoais', date: '2024-12', location: 'Nampula', locationKey: 'locNampula', description: 'Preparação para defesa da tese de licenciatura', descriptionKey: 'descStudying' },
  { id: 'g26', src: '🌅', titleKey: 'nampulaCity', category: 'Pessoais', date: '2024-08', location: 'Nampula', locationKey: 'locNampula', description: 'Vista da cidade de Nampula — minha cidade natal', descriptionKey: 'descCity' },
  { id: 'g27', src: '☕', titleKey: 'coffeeCoding', category: 'Pessoais', date: '2025-01', location: 'Nampula', locationKey: 'locNampula', description: 'Café e código — aprendendo Java no fim-de-semana', descriptionKey: 'descCoffee' },
];

export const galleryCategories = ["All", "Realizações", "Participações", "Capacitações", "Reuniões", "Viagens", "Pessoais"];

export const chatbotResponses: Record<string, string> = {
  default: "I'm ArlindoTech's AI assistant! I can help you learn about his skills, projects, services, education, and experience. What would you like to know?",
  skills: "Arlindo specializes in Database Design (SQL, MySQL, PostgreSQL), Programming (Java, Python, JavaScript), Systems Analysis (BPMN, ERD), Networking (TCP/IP, DHCP, DNS), and Microsoft Office tools. He has 10+ years of ICT experience.",
  projects: "Arlindo has developed several projects including a Clinic Management System (Java/MySQL), Accounting System (Java/PostgreSQL), Academic Database (SQL), and administers the Municipal Virtual Secretariat (SVM). Check out the Portfolio section!",
  services: "Arlindo offers Database Design & Management, Systems Analysis & Design, Software Development, Network Configuration, Data Analysis & Reporting, and IT Consulting & Training. Visit the Services page for details.",
  experience: "Arlindo has 10+ years of experience as an ICT Technician at the Municipal Council of Nampula City. He holds a B.Sc. in Information Systems Management from Universidade Aberta ISCED (2022-2026).",
  hire: "Great news! Arlindo is currently available for consulting, freelance, and collaboration opportunities. Head to the Contact section to get in touch!",
  contact: "You can reach Arlindo at arlindomario.mucamuene@gmail.com or by phone at +258 84 464 6874. He's based in Nampula City, Mozambique and typically responds within 24 hours.",
  certifications: "Arlindo holds a Bachelor's Degree in Information Systems Management, completed multiple BootCamp courses on Udemy and SoloLearn (Java, Python, SQL, Web Development), and has advanced Excel training from Universidade Aberta ISCED.",
  education: "Arlindo completed his Bachelor's Degree in Information Systems Management (2022-2026) at Universidade Aberta ISCED, Nampula Learning Center. His thesis focused on the impact of IT on public servant training at the Municipal Council of Nampula City (Final grade: 14/20).",
};
