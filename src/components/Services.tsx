import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Terminal, Layout, Database, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tech: string[];
  accent: string;
  glowColor: string;
  icon: React.ReactNode;
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeScrollIndex, setActiveScrollIndex] = useState<number>(0);

  const servicesData: ServiceItem[] = [
    {
      id: 'srv-frontend',
      num: '01',
      title: 'Frontend Engineering',
      description: 'Crafting fast, responsive, and visually engaging web experiences with React.js, Next.js, Tailwind CSS, and Framer Motion. Emphasizing reusable components, smooth animations, accessibility, and pixel-perfect interfaces that perform seamlessly across all devices.',
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
      accent: 'from-pink-500 to-rose-500',
      glowColor: 'rgba(244, 63, 94, 0.15)',
      icon: <Layout className="w-6 h-6 text-pink-500" />
    },
    {
      id: 'srv-fullstack',
      num: '02',
      title: 'Full Stack Development',
      description: 'Developing end-to-end web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. From designing responsive user interfaces to building secure REST APIs and managing databases, I create scalable applications tailored to business requirements.',
      tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'],
      accent: 'from-purple-500 to-indigo-500',
      glowColor: 'rgba(168, 85, 247, 0.15)',
      icon: <Database className="w-6 h-6 text-purple-400" />
    },
    {
      id: 'srv-backend',
      num: '03',
      title: 'Backend & API Development',
      description: 'Building reliable server-side applications with Node.js, Express.js, and MongoDB. Designing RESTful APIs, implementing authentication, managing databases, and integrating third-party services to power secure and scalable web applications.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
      accent: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.15)',
      icon: <Terminal className="w-6 h-6 text-blue-400" />
    },
    {
      id: 'srv-ai',
      num: '04',
      title: 'AI Integration & Automation',
      description: 'Building intelligent web applications powered by AI and computer vision to solve real-world problems. Experienced in integrating machine learning models, MediaPipe Pose, real-time data processing, and custom LLM interfaces to deliver interactive, automated user experiences.',
      tech: ['MediaPipe Pose', 'AI Agents', 'n8n Automations', 'ChatGPT API'],
      accent: 'from-emerald-500 to-teal-500',
      glowColor: 'rgba(16, 185, 129, 0.15)',
      icon: <Cpu className="w-6 h-6 text-emerald-400" />
    },
    {
      id: 'srv-performance',
      num: '05',
      title: 'Performance & SEO Optimization',
      description: 'Optimizing applications for speed, SEO, and cross-browser compatibility while ensuring production-ready deployments. Experienced in QA testing, performance tuning, responsive design validation, and deploying applications using modern cloud platforms.',
      tech: ['Lighthouse Audits', 'SEO Schema', 'Cloud Deploy', 'Vite Bundler'],
      accent: 'from-amber-500 to-orange-500',
      glowColor: 'rgba(245, 158, 11, 0.15)',
      icon: <Zap className="w-6 h-6 text-amber-400" />
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const hasReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasReducedMotion) {
      gsap.set(cardsRef.current, { opacity: 1, y: 0, scale: 1 });
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1 });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Header Word-by-Word Reveal Animation
      if (titleRef.current) {
        const wordSpans = titleRef.current.querySelectorAll('.word-span');

        gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
        .to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power4.out'
        })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.4');
      }

      // 2. TRUE SCROLL-PINNED STACKED DECK ANIMATION
      // The container pins, and cards slide up one-by-one, stacking directly on top of each other.
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        // Prepare initial states for incoming cards (offset off-screen with custom rotation for tactile feel)
        cards.forEach((card, i) => {
          if (i > 0) {
            // Alternating slight rotations for natural organic dealing deck feeling
            const angle = i % 2 === 0 ? 3 : -3;
            gsap.set(card, { 
              yPercent: 120, 
              rotation: angle, 
              transformOrigin: '50% 10%' 
            });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: () => `+=${window.innerHeight * (cards.length - 1) * 1.2}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const N = cards.length;
              if (N <= 1) {
                setActiveScrollIndex(0);
                return;
              }
              let activeIndex = 0;
              for (let i = 0; i < N; i++) {
                const lowerBound = i === 0 ? -Infinity : (i - 0.5) / (N - 1);
                const upperBound = i === N - 1 ? Infinity : (i + 0.5) / (N - 1);
                if (progress >= lowerBound && progress < upperBound) {
                  activeIndex = i;
                  break;
                }
              }
              setActiveScrollIndex(activeIndex);
            }
          }
        });

        cards.forEach((card, index) => {
          if (index === 0) return;

          // Previous card timeline triggers simultaneously
          const prevCard = cards[index - 1];

          tl.to(card, {
            yPercent: 0,
            rotation: 0,
            duration: 1,
            ease: 'sine.inOut'
          })
          .to(prevCard, {
            scale: 0.94 - (cards.length - 1 - index) * 0.012,
            opacity: 0.4,
            filter: 'blur(2px)',
            yPercent: -4, // Subtle vertical depth shift
            duration: 1,
            ease: 'sine.inOut'
          }, '<'); // Aligned exactly with the incoming card's slide up
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden border-t border-white/[0.02] flex flex-col justify-center py-10 md:py-16"
    >
      {/* Premium ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/[0.03] blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col h-full gap-5">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs tracking-[0.3em] text-white/60 block mb-3 uppercase font-bold">
            // SERVICE EXPERTISE
          </span>
          <h2 
            ref={titleRef}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-none mb-4"
          >
            <span className="word-span inline-block opacity-0 translate-y-8 text-white mr-2">What</span>
            <span className="word-span inline-block opacity-0 translate-y-8 text-white mr-2">I</span>
            <span className="word-span inline-block opacity-0 translate-y-8 text-white">Do</span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-gray-400 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl opacity-0 translate-y-6"
          >
            Combining rigorous architectural standards with fluid premium micro-interactions to build responsive web products, computer vision applications, and smart AI platforms.
          </p>
        </div>

        {/* Stacked Cards Deck Container - Centered and full landscape format */}
        <div 
          ref={cardsContainerRef}
          className="relative w-full max-w-5xl mx-auto flex-1" style={{ minHeight: '38vh', maxHeight: '52vh' }}
        >
          {servicesData.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = activeScrollIndex === index;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                className="absolute inset-0 w-full h-full origin-top"
                style={{
                  zIndex: (index + 1) * 10,
                }}
              >
                {/* Widescreen Landscape Premium Card */}
                <div
                  className="relative w-full h-full rounded-[20px] overflow-hidden border border-white/5 bg-[#0D0D11]/98 backdrop-blur-md p-5 sm:p-7 md:p-8 group flex flex-col justify-between"
                  style={{
                    transform: (isHovered || isActive) ? 'translateY(-6px) scale(1.012)' : 'none',
                    borderColor: (isHovered || isActive) ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: (isHovered || isActive) ? `0 25px 50px rgba(0, 0, 0, 0.95), 0 0 40px ${service.glowColor}` : '0 15px 35px rgba(0,0,0,0.6)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  {/* Thin Gradient Border Outline */}
                  <div 
                    className={`absolute inset-0 p-[1px] rounded-[20px] pointer-events-none transition-opacity duration-500 ${
                      (isHovered || isActive) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.2), ${service.glowColor}, rgba(255,255,255,0.02))`
                    }}
                  />

                  {/* Spotlight Floating Radial Glow */}
                  {(isHovered || isActive) && (
                    <div
                      className="absolute rounded-full pointer-events-none transition-opacity duration-500 blur-[80px]"
                      style={{
                        width: '260px',
                        height: '260px',
                        background: `radial-gradient(circle, ${service.glowColor} 0%, transparent 70%)`,
                        left: isHovered ? `${mousePos.x - 130}px` : '15%',
                        top: isHovered ? `${mousePos.y - 130}px` : '20%',
                      }}
                    />
                  )}

                  {/* Giant Subtle Background Number */}
                  <div className="absolute right-8 bottom-4 font-mono text-[100px] md:text-[140px] lg:text-[180px] font-black tracking-tighter text-white/[0.012] leading-none select-none pointer-events-none">
                    {service.num}
                  </div>

                  {/* Landscape Splitted Layout with High visual density */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start relative z-10 w-full h-full">
                    
                    {/* Left Column: Number, Icon, Title */}
                    <div className="md:col-span-5 flex flex-col items-start justify-between md:h-full space-y-4 md:space-y-0">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-[10px] tracking-widest text-gray-500">
                          ({service.num})
                        </span>
                        <div 
                          className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center transition-transform duration-500"
                          style={{
                            transform: (isHovered || isActive) ? 'rotate(12deg) scale(1.12)' : 'none',
                            boxShadow: (isHovered || isActive) ? `0 6px 20px ${service.glowColor}` : 'none'
                          }}
                        >
                          {service.icon}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white uppercase tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        {/* Beautiful Accent Line */}
                        <div className={`h-1 rounded bg-gradient-to-r ${service.accent} transition-all duration-500 ${(isHovered || isActive) ? 'w-16' : 'w-10'}`} />
                      </div>
                    </div>

                    {/* Right Column: Large Description, Deliverables & Premium Footer Tag Pills */}
                    <div className="md:col-span-7 flex flex-col justify-between md:h-full space-y-4 md:space-y-0 md:pl-6 md:border-l border-white/5">
                      <p className="text-gray-300 text-xs sm:text-sm lg:text-base font-light leading-relaxed">
                        {service.description}
                      </p>

                      <div className="border-t border-white/5 pt-4 flex justify-between items-end w-full">
                        <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                          {service.tech.map((tag) => (
                            <span
                              key={tag}
                              className={`px-2 py-0.5 rounded-md bg-white/[0.03] border transition-colors duration-300 font-mono text-[8px] sm:text-[9px] tracking-wider uppercase ${
                                (isHovered || isActive)
                                  ? 'text-gray-200 border-white/10'
                                  : 'text-gray-400 border-white/[0.02]'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Interactive magnetic visual arrow */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                          (isHovered || isActive)
                            ? 'text-white bg-white/10 border-white/20'
                            : 'bg-white/5 border border-white/5 text-gray-400'
                        }`}>
                          <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                            (isHovered || isActive) ? 'translate-x-0.5 -translate-y-0.5' : ''
                          }`} />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
