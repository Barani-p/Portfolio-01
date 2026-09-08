import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import ProjectCard, { ProjectCardData } from './ProjectCard';
import { useLenis } from './SmoothScrollProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AllProjectsViewProps {
  onBackToHome: () => void;
}

interface ProjectDetail extends ProjectCardData {
  description: string;
  link: string;
  tech: string[];
}

const detailedProjects: ProjectDetail[] = [
  {
    id: "proj-1",
    title: "React JS Project Launch",
    subtitle: "Frontend Web Application",
    description: "I’m pleased to share a web application I recently built using React JS ⚛️\n\nThis project demonstrates my experience with component-based development, responsive design, and modern frontend practices. I focused on writing clean code and delivering a smooth user experience across devices. I’m actively learning and improving, and I welcome any feedback or suggestions. Thank you for taking a look.",
    link: "https://webquetechzi.web.app/",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "Component-Based", "Responsive Design", "Modern Practices"],
    year: "2026",
    alignYear: "bottom-right"
  },
  {
    id: "proj-2",
    title: "Photography Portfolio",
    subtitle: "Creative 3D Interactive Gallery",
    description: "🚀 Excited to share my latest project! I’ve been working on this website to showcase modern design, smooth interactions, and a user-focused experience. Built as a photography portfolio website, it features an interactive 3D gallery experience that enhances visual storytelling and engagement, while maintaining clarity and performance from concept to execution.",
    link: "https://magic01.netlify.app/",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    tech: ["ReactJS", "3D Interactive Gallery", "Framer Motion", "Tailwind CSS"],
    year: "2026",
    alignYear: "bottom-left"
  },
  {
    id: "proj-3",
    title: "NEO-FIT Platform",
    subtitle: "Premium Fitness Experience",
    description: "Just Launched: My New Project – NEO-FIT! 🚀\n\nI’m excited to share a project I’ve been working on: NEO-FIT — a premium fitness experience platform built to help people push their limits and transform their body and mind. 🏋️‍♂️💪",
    link: "https://neo-fit-1d94d.web.app/",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    tech: ["ReactJS", "Tailwind CSS", "Framer Motion", "Fitness Program UI"],
    year: "2026",
    alignYear: "bottom-left"
  },
  {
    id: "proj-4",
    title: "Kinesense AI",
    subtitle: "Real-Time Posture & Rehab",
    description: "🚀 Excited to share my latest project – Kinesense!\nI built a web app using the MERN stack + AI that leverages MediaPipe in React to deliver real-time posture analysis, intelligent repetition counting, and progress tracking for fitness and rehabilitation.\n\n⚡ What Kinesense Does:\n✅ Real-time posture detection with MediaPipe Pose\n✅ Intelligent repetition counting (valid reps only)\n✅ Instant visual & audio feedback (“Back straight,” “Elbows in”)\n✅ Data-driven progress tracking for both users & professionals\n\n🌍 Who Can Benefit?\n- Physiotherapists & rehabilitation patients\n- Fitness trainers & athletes\n- Beginners learning proper form\n- Elderly individuals maintaining mobility",
    link: "https://kinesensee.web.app",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tech: ["MERN Stack", "MediaPipe Pose", "React.js", "AI Real-Time Posture"],
    year: "2026",
    alignYear: "bottom-right"
  },
  {
    id: "proj-5",
    title: "Personal Portfolio V1",
    subtitle: "React.js Developer Portfolio",
    description: "🚀 Launching My Portfolio!\nI’m excited to share my personal portfolio, built using React.js to showcase my work, skills, and projects. This platform reflects my passion for frontend development and UI/UX design.\n\nKey Features:\n✅ Modern Tech Stack: React.js, Tailwind CSS\n✅ Fully Responsive: Optimized for all screen sizes\n✅ Smooth Animations: Enhancing user experience\n✅ Project Showcase: Live previews and detailed case studies\n✅ Blog Section: Sharing insights and learning experiences",
    link: "https://portfolio-d87a4.web.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "Tailwind CSS", "Smooth Animations", "Project Showcase", "Blog Section"],
    year: "2026",
    alignYear: "bottom-right"
  },
  {
    id: "proj-6",
    title: "UNEX Platform",
    subtitle: "Collaborative Watch-Together",
    description: "UNEX Website — Collaborative Short Film Streaming Platform (React.js, Node.js, MongoDB)\n\n• Developed a full-stack web platform using HTML, CSS, JavaScript, and MongoDB, implementing real-time synchronized watch-together functionality for collaborative short film viewing.\n• Integrated WebSocket technology to enable instant video playback synchronization across all connected clients in real time.\n• Built a trending short films section to surface emerging directors and creators, boosting platform discoverability and overall user engagement.",
    link: "https://unex-com.netlify.app/first",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "Node.js", "MongoDB", "WebSockets", "Collaborative Streaming"],
    year: "2025",
    alignYear: "bottom-left"
  },
  {
    id: "proj-7",
    title: "SV Collections",
    subtitle: "Saree E-Commerce Demo",
    description: "A demo project for an e-commerce site for a saree business. Prioritizes gorgeous image catalogs, clean layout options, quick item lookups, cart interaction simulations, and fully adaptive mobile grids.",
    link: "https://svcollections-c9749.web.app/",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "E-Commerce", "Saree Retail Demo", "Tailwind CSS"],
    year: "2025",
    alignYear: "bottom-left"
  },
  {
    id: "proj-8",
    title: "PhishGuard AI Scanner",
    subtitle: "Threat Detection & Security QR",
    description: "Scan a QR code with your camera, upload a QR image, or paste a URL for instant AI-powered phishing analysis.\n\nHelps inspect credentials, analyze external domains, protect personal data, and guard against real-time cyber threats.",
    link: "https://phishguardaii.netlify.app/",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    tech: ["React.js", "Camera Scanner", "Phishing Audit API", "AI Analysis"],
    year: "2025",
    alignYear: "bottom-right"
  },
  {
    id: "proj-9",
    title: "Gushwork HDPE Pipes",
    subtitle: "Industrial Infrastructure Mfg",
    description: "Premium HDPE Pipes & Coils for Modern Infrastructure. Our state-of-the-art extrusion technology ensures consistent quality, optimal material properties, and dimensional accuracy in every pipe we manufacture.",
    link: "https://gushworrk.netlify.app/",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    tech: ["HTML/CSS/JS", "Extrusion Animation", "Infrastructure Manufacturing", "Industrial Catalog"],
    year: "2024",
    alignYear: "bottom-right"
  },
  {
    id: "proj-10",
    title: "Walleet SaaS Landing",
    subtitle: "SaaS Landing Page Template",
    description: "This is a template designed specifically for SaaS product marketing. It has everything you need to launch: optimized layouts, value proposition blocks, interactive feature cards, and dynamic responsive forms.",
    link: "https://walleet.netlify.app/",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "Tailwind CSS", "SaaS Conversion", "Framer Motion"],
    year: "2024",
    alignYear: "bottom-left"
  }
];

export default function AllProjectsView({ onBackToHome }: AllProjectsViewProps) {
  const lenisContext = useLenis();

  useEffect(() => {
    // Kill existing ScrollTriggers from previous page view to prevent layout shifts or scroll-locks
    try {
      ScrollTrigger.getAll().forEach(t => t.kill());
    } catch (e) {
      console.warn('Failed to kill existing ScrollTriggers:', e);
    }

    const scrollToTop = () => {
      if (lenisContext && lenisContext.lenis) {
        try {
          lenisContext.lenis.resize();
          lenisContext.lenis.scrollTo(0, { immediate: true });
        } catch (e) {
          console.warn('Lenis scrollTo failed:', e);
          try {
            window.scrollTo({ top: 0, behavior: 'auto' });
          } catch (err) {
            window.scrollTo(0, 0);
          }
        }
      } else {
        try {
          window.scrollTo({ top: 0, behavior: 'auto' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }
    };

    // Scroll immediately
    scrollToTop();

    // Scroll again in next paint cycles to make sure layout calculations don't push it back down
    const timer1 = setTimeout(scrollToTop, 10);
    const timer2 = setTimeout(scrollToTop, 100);

    // Refresh ScrollTrigger to recalculate all positions with new elements
    const triggerTimer = setTimeout(() => {
      try {
        ScrollTrigger.refresh();
      } catch (e) {
        console.warn('ScrollTrigger.refresh failed:', e);
      }
    }, 150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(triggerTimer);
    };
  }, [lenisContext]);

  const handleBackToHome = () => {
    const scrollToTop = () => {
      if (lenisContext && lenisContext.lenis) {
        try {
          lenisContext.lenis.resize();
          lenisContext.lenis.scrollTo(0, { immediate: true });
        } catch (e) {
          try {
            window.scrollTo({ top: 0, behavior: 'auto' });
          } catch (err) {
            window.scrollTo(0, 0);
          }
        }
      } else {
        try {
          window.scrollTo({ top: 0, behavior: 'auto' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }
    };

    scrollToTop();
    onBackToHome();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 overflow-hidden"
    >
      
      {/* Decorative Elegant Ambient Glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-pink-500/5 rounded-full pointer-events-none blur-[150px] z-0" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-sky-500/5 rounded-full pointer-events-none blur-[150px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Back Navigation Bar */}
        <div className="mb-12">
          <button
            onClick={handleBackToHome}
            className="group flex items-center space-x-3 text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-colors uppercase bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>BACK TO HOME</span>
          </button>
        </div>

        {/* Title & Description Grid */}
        <div className="border-b border-white/10 pb-8 mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-white/60 uppercase block mb-3">
            ( COMPLETE ARCHIVE )
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none">
            Selected Works & Releases
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl font-light mt-4">
            A comprehensive list of fully realized digital solutions, from AI-powered real-time computer vision engines to premium design portfolios and WebSockets watch-together pipelines.
          </p>
        </div>

        {/* Projects Responsive Grid Layout - EXACT same asymmetric UI as (FEATURED WORK) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {detailedProjects.map((project, idx) => {
            const colSpan = idx % 4 === 0 || idx % 4 === 3 ? 'md:col-span-7' : 'md:col-span-5';
            return (
              <div key={project.id} className={`${colSpan}`}>
                
                {/* Outer Interactive Gallery Card matching screenshot layout perfectly */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <ProjectCard project={project} />
                </a>

              </div>
            );
          })}
        </div>

        {/* Footer section matching home page */}
        <div className="mt-24 text-center border-t border-white/5 pt-12">
          <p className="text-gray-500 font-mono text-xs">
            © {new Date().getFullYear()} BARANIDHARAN P. ALL PRODUCTS DESIGNED & BUILT EXCLUSIVELY.
          </p>
          <button
            onClick={handleBackToHome}
            className="mt-6 inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-white hover:text-white/60 transition-colors uppercase cursor-pointer"
          >
            <span>← GO BACK TO PORTFOLIO OVERVIEW</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
