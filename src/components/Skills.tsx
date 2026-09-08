import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { skillCategories } from '../data';

// Single Skill progress bar with scroll reveal animation
function SkillProgressBar({ name, level }: { name: string; level: number; key?: any }) {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true, amount: 0.2 });

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex justify-between items-center text-xs">
        <span className="font-sans text-white font-semibold tracking-tight text-sm sm:text-base">{name}</span>
        <span className="font-sans text-white/70 font-medium tracking-tight text-xs sm:text-sm">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Floating technologies lists for beautiful aesthetic tags
  const techBadges = [
    "React.js", "Node.js", "MongoDB", "TypeScript", "JavaScript", "Express.js",
    "Next.js", "Tailwind CSS", "WordPress", "WebSockets", "PHP", "Python",
    "Three.js", "n8n", "Blender", "Git", "GitHub", "REST APIs", "MediaPipe Pose"
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Background glow flares */}
      <div className="absolute bottom-[10%] right-[15%] w-80 h-80 rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-white/60 block mb-3">
              (TECH EXPRTISE)
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Technical Stack <br />
              <span className="gradient-text font-black">& Skills Matrix</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-400 text-sm font-light leading-relaxed">
            Proficient in modern programming languages, modular frontends, and reliable backend engineering architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Area: Interactive Floating tech badges (6 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />
              
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight mb-6">
                Floating Badges & Tags
              </h3>
              
              <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                A non-exhaustive index of development frameworks, animation APIs, database engines, and design software applied in my projects.
              </p>

              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, idx) => {
                  return (
                    <motion.span
                      key={idx}
                      className="inline-block px-4 py-2 rounded-full text-xs font-mono bg-white/5 border border-white/5 hover:border-white/40 hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: idx * 0.03, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {badge}
                    </motion.span>
                  );
                })}
              </div>
            </div>

            {/* Quick GUVI Workshop Banner */}
            <div className="border border-white/5 bg-white/5 p-8 rounded-3xl space-y-3">
              <h4 className="font-mono text-xs text-white uppercase tracking-widest">
                ✦ ACHIEVEMENTS & CONTRIBUTIONS
              </h4>
              <p className="font-display font-medium text-white text-base">
                GUVI Certified Developer
              </p>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Certified in React.js, MongoDB, and JavaScript through GUVI.
              </p>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Conducted Javascript programming workshop for 80+ students during the final year, awarded outstanding recognition by the college department.
              </p>
            </div>
          </div>

          {/* Right Area: Categorized Progress Bars (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-10">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                className="glass-card p-8 rounded-3xl space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: catIdx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-white tracking-tighter uppercase">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillProgressBar
                      key={skillIdx}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
