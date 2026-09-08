import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLenis } from './SmoothScrollProvider';
import { stats } from '../data';

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, delay = 0, trigger = false) {
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(animate, delay);
    return () => clearTimeout(t);
  }, [trigger, delay, animate]);

  return count;
}

// Parse "01+" → { num: 1, prefix: "", suffix: "+" }
// Parse "92%" → { num: 92, prefix: "", suffix: "%" }
function parseStatValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  if (!match) return { num: 0, prefix: '', suffix: '' };
  return {
    num: parseInt(match[2], 10),
    prefix: match[1],
    suffix: match[3],
  };
}

// Individual animated stat value
function AnimatedStatValue({ value, trigger, delay }: { value: string; trigger: boolean; delay: number }) {
  const { num, prefix, suffix } = parseStatValue(value);
  const count = useCountUp(num, 1600, delay, trigger);
  return (
    <>
      {prefix}{String(count).padStart(String(num).length, '0')}{suffix}
    </>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-black py-24 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Company & Role Details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="font-mono text-xs tracking-[0.2em] text-gray-400 uppercase">
              (ABOUT ME & EXPERIENCE)
            </span>

            <div className="space-y-3">
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                Supercode Design
              </h3>
              <div className="flex flex-col gap-1.5 font-mono text-xs text-gray-400">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>WEB DEVELOPMENT INTERN</span>
                </div>
                <span>Bengaluru, India</span>
                <span>Mar 2026 - May 2026</span>
              </div>
            </div>
            
            {/* Button Group matching screenshot exactly */}
            <div className="flex items-center space-x-2 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
              >
                LET'S CONTACT
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Contact Link"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: Experience Works & Projects */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <div className="border-b border-white/5 pb-6">
              <span className="font-mono text-[10px] tracking-widest text-white uppercase block mb-2">
                ✦ FEATURED WORK & PROJECTS
              </span>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed font-sans">
                As a Web Development Intern at Supercode Design, I contributed to the development of multiple client projects using Next.js, Node.js, and WordPress. My responsibilities included building responsive web applications, customizing themes and plugins, integrating backend services, and ensuring high-quality releases through comprehensive testing and SEO optimization. This experience strengthened my skills in full-stack development and delivering scalable, production-ready web solutions.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Stat Cards in alternating layout dynamically loaded from data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.slice(0, 4).map((stat, idx) => {
            const isHeaderTop = idx % 2 === 0;
            return (
              <motion.div
                key={stat.label}
                className="bg-[#121212] p-4 sm:p-5 rounded-[1.75rem] sm:rounded-[2rem] flex flex-col justify-between h-44 sm:h-52 lg:h-64 border border-white/[0.02]"
                initial={{ opacity: 0, y: 30 }}
                animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: (idx + 1) * 0.1, duration: 0.6 }}
              >
                {isHeaderTop ? (
                  <>
                    {/* Header sub-card */}
                    <div className="bg-[#1c1c1c] py-2 sm:py-3 lg:py-4 px-3 sm:px-4 rounded-xl sm:rounded-2xl flex items-center justify-center text-center">
                      <span className="text-[9px] sm:text-[10px] lg:text-xs font-mono font-medium tracking-widest text-gray-400">
                        {stat.label}
                      </span>
                    </div>
                    {/* Value bottom-left */}
                     <div className="px-2 sm:px-4 pb-1 sm:pb-2">
                       <span className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight block leading-none">
                         <AnimatedStatValue value={stat.value} trigger={isSectionInView} delay={idx * 150} />
                       </span>
                       {stat.sublabel && (
                         <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 block mt-0.5 sm:mt-1">
                           {stat.sublabel}
                         </span>
                       )}
                     </div>
                  </>
                ) : (
                  <>
                    {/* Value top-left */}
                     <div className="px-2 sm:px-4 pt-1 sm:pt-2">
                       <span className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight block leading-none">
                         <AnimatedStatValue value={stat.value} trigger={isSectionInView} delay={idx * 150} />
                       </span>
                       {stat.sublabel && (
                         <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 block mt-0.5 sm:mt-1">
                           {stat.sublabel}
                         </span>
                       )}
                     </div>
                    {/* Footer sub-card */}
                    <div className="bg-[#1c1c1c] py-2 sm:py-3 lg:py-4 px-3 sm:px-4 rounded-xl sm:rounded-2xl flex items-center justify-center text-center">
                      <span className="text-[9px] sm:text-[10px] lg:text-xs font-mono font-medium tracking-widest text-gray-400">
                        {stat.label}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
