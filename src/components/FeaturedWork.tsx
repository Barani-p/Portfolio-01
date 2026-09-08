import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard, { ProjectCardData } from './ProjectCard';
import { useLenis } from './SmoothScrollProvider';

const displayProjects: ProjectCardData[] = [
  {
    id: "proj-4",
    title: "Kinesense AI",
    subtitle: "Real-Time Posture & Rehab Engine",
    year: "2026",
    alignYear: "bottom-right",
    link: "https://kinesensee.web.app"
  },
  {
    id: "proj-1",
    title: "React JS Project Launch",
    subtitle: "Frontend Web Application Framework",
    year: "2026",
    alignYear: "bottom-left",
    link: "https://webquetechzi.web.app/"
  },
  {
    id: "proj-10",
    title: "Walleet SaaS Landing",
    subtitle: "SaaS Conversions & Templates",
    year: "2024",
    alignYear: "bottom-left",
    link: "https://walleet.netlify.app/"
  },
  {
    id: "proj-7",
    title: "SV Collections",
    subtitle: "Saree E-Commerce Demo",
    year: "2025",
    alignYear: "bottom-right",
    link: "https://svcollections-c9749.web.app/"
  }
];

interface FeaturedWorkProps {
  onSeeAllWorks: () => void;
}

export default function FeaturedWork({ onSeeAllWorks }: FeaturedWorkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisContext = useLenis();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (lenisContext) {
        lenisContext.scrollTo(element);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSeeAllWorks = () => {
    if (lenisContext && lenisContext.lenis) {
      try {
        lenisContext.lenis.resize();
        lenisContext.lenis.scrollTo(0, { immediate: true });
      } catch (e) {
        try {
          window.scrollTo(0, 0);
        } catch (err) {}
      }
    } else {
      try {
        window.scrollTo(0, 0);
      } catch (e) {}
    }
    onSeeAllWorks();
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative bg-black py-24 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Label */}
        <div className="mb-12">
          <span className="font-mono text-xs tracking-[0.2em] text-gray-400 uppercase">
            (FEATURED WORK)
          </span>
        </div>

        {/* Asymmetric Responsive Grid matching layout request */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
          {displayProjects.map((project, idx) => {
            const colSpan = idx % 4 === 0 || idx % 4 === 3 ? 'md:col-span-7' : 'md:col-span-5';
            return (
              <div key={project.id} className={`${colSpan}`}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-current no-underline"
                >
                  <ProjectCard project={project} />
                </a>
              </div>
            );
          })}
        </div>

        {/* See All Works CTA at the bottom center */}
        <div className="mt-16 flex items-center justify-center space-x-2">
          <button
            onClick={handleSeeAllWorks}
            className="bg-white hover:bg-gray-200 text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
          >
            SEE ALL WORKS
          </button>
          <button
            onClick={handleSeeAllWorks}
            className="bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-xl flex items-center justify-center transition-colors cursor-pointer border-none"
            aria-label="All Works Link"
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
