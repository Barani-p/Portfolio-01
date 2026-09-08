import { Project, Service, SkillCategory, Experience, Testimonial, Stat } from './types';

export const personalInfo = {
  name: "Baranidharan P",
  title: "Full-Stack Developer",
  subTitle: "Specialized in AI-powered web applications & creative frontends",
  email: "bharani20605@gmail.com",
  phone: "+91 9363055985",
  location: "Ariyalur, Tamil Nadu",
  linkedin: "https://linkedin.com/in/baraniii",
  github: "https://github.com/Barani-p",
  bio: "Full-Stack Developer (MERN Stack) and B.Tech Information Technology graduate with hands-on experience building AI-powered web applications, real-time platforms, and responsive interfaces. Highly skilled in crafting premium user experiences that combine deep technical performance with elegant creative design.",
};

export const stats: Stat[] = [
  {
    label: "YEARS EXPERIENCES",
    value: "01+",
    sublabel: "Active Freelancing & Intern"
  },
  {
    label: "SUCCESSFUL PROJECTS",
    value: "10+",
    sublabel: "MERN & Full-Stack Apps"
  },
  {
    label: "COMMUNITY ENGAGED",
    value: "80+",
    sublabel: "Students taught JavaScript"
  },
  {
    label: "WORKSHOP METRIC",
    value: "92%",
    sublabel: "Positive feedback rating"
  }
];

export const projects: Project[] = [
  {
    id: "kinesense",
    title: "KINESENSE",
    subtitle: "AI-Powered Posture Analysis",
    description: "Built a full-stack MERN application integrating MediaPipe Pose for real-time posture detection at 30fps, enabling computerized movement analysis and progress tracking. Designed with data-driven performance dashboards used by physiotherapists and trainers.",
    category: "AI & Computer Vision",
    year: "2026",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "MediaPipe Pose", "Tailwind CSS"],
    liveUrl: "https://kinesensee.web.app",
    githubUrl: "https://github.com/Barani-p"
  },
  {
    id: "unex",
    title: "UNEX PLATFORM",
    subtitle: "Collaborative Film Streaming",
    description: "Developed a full-stack short film streaming platform utilizing WebSockets to enable instant real-time video playback synchronization across all connected clients. Features a collaborative 'Watch-Together' system and emerging filmmaker discovery hub.",
    category: "Full-Stack & WebSockets",
    year: "2026",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "CSS3"],
    liveUrl: "https://github.com/Barani-p",
    githubUrl: "https://github.com/Barani-p"
  },
  {
    id: "supercode-clients",
    title: "CREATIVE CLIENT SITES",
    subtitle: "Production Solutions",
    description: "Successfully built and deployed multiple client websites during internship, leveraging custom WordPress themes and Next.js static generation. Ensured sitemaps, semantic markups, and page speed indexes scored >95% on Google Lighthouse.",
    category: "Web Engineering",
    year: "2026",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "WordPress", "Tailwind CSS", "API Integrations", "SEO Audits"],
    liveUrl: "https://github.com/Barani-p",
    githubUrl: "https://github.com/Barani-p"
  },
  {
    id: "bharani-portfolio",
    title: "BHARANI STUDIO",
    subtitle: "Creative Agency Showcase",
    description: "An ultra-premium dark theme digital playground implementing text mask animations, scrolling text parallax, glassmorphism, background noise grain layers, and interactive magnetic cursor controllers. Designed to leave a high-end impression.",
    category: "Creative Frontend",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "Vite", "Framer Motion", "Tailwind CSS", "JetBrains Mono"],
    liveUrl: "https://portfolio-d87a4.web.app",
    githubUrl: "https://github.com/Barani-p"
  }
];

export const services: Service[] = [
  {
    id: "srv-1",
    title: "FULL-STACK DEVELOPMENT",
    description: "Developing end-to-end web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. From designing responsive user interfaces to building secure REST APIs and managing databases, I create scalable applications tailored to business requirements.",
    highlighted: true
  },
  {
    id: "srv-2",
    title: "FRONTEND ENGINEERING",
    description: "Crafting fast, responsive, and visually engaging web experiences with React.js, Next.js, Tailwind CSS, and Framer Motion. Emphasizing reusable components, smooth animations, accessibility, and pixel-perfect interfaces that perform seamlessly across all devices."
  },
  {
    id: "srv-3",
    title: "BACKEND & API DEVELOPMENT",
    description: "Building reliable server-side applications with Node.js, Express.js, and MongoDB. Designing RESTful APIs, implementing authentication, managing databases, and integrating third-party services to power secure and scalable web applications."
  },
  {
    id: "srv-4",
    title: "WEBSITE OPTIMIZATION & DEPLOYMENT",
    description: "Optimizing applications for speed, SEO, and cross-browser compatibility while ensuring production-ready deployments. Experienced in QA testing, performance tuning, responsive design validation, and deploying applications using modern cloud platforms."
  },
  {
    id: "srv-5",
    title: "AI & MACHINE LEARNING",
    description: "Building intelligent web applications powered by AI and computer vision to solve real-world problems. Experienced in integrating machine learning models, MediaPipe Pose, and real-time data processing to deliver interactive, AI-driven user experiences with high accuracy and performance."
  },
  {
    id: "srv-6",
    title: "AI-POWERED DEVELOPMENT",
    description: "Leveraging modern AI tools such as ChatGPT, Claude, and n8n to accelerate development, automate workflows, and build intelligent web applications. Experienced in integrating AI-driven solutions, prompt engineering, API automation, and productivity-focused workflows into real-world projects."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING & CORE",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 75 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    title: "FRONTEND EXPERTISE",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 90 },
      { name: "WordPress", level: 80 }
    ]
  },
  {
    title: "BACKEND & DATA",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 }
    ]
  }
];

export const experiences: Experience[] = [
  {
    role: "Web Development Intern",
    company: "Supercode Design",
    location: "Bengaluru, India",
    period: "Mar 2026 - May 2026",
    bullets: [
      "Built and deployed 3+ client websites using WordPress and Next.js, carrying out extensive theme customization.",
      "Developed and maintained full-stack web platforms using Next.js and Node.js with complex UI component architectures.",
      "Conducted comprehensive QA testing across layouts, responsiveness, and SEO practices (meta tags, sitemaps, page speed)."
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote: "Baranidharan delivered a high-quality platform that perfectly fit our technical requirements. His grasp of real-time WebSockets and modern React transitions is exceptional.",
    author: "Fredrick Christopher",
    role: "Lead Creative at Supercode Design",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t-2",
    quote: "A remarkably talented engineer who understands that design matters as much as technical robustness. The posturing feedback overlays are highly intuitive.",
    author: "Sarah Jenkins",
    role: "Product Owner, Kinematics Hub",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t-3",
    quote: "Exceptional drive and self-learning mindset. Built a synchronized short film streaming layout in record time and solved performance issues single-handedly.",
    author: "Ramanathan K.",
    role: "Head of Engineering, Rathinam Technical Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];
