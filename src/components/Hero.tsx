import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';
import BlurText from './BlurText';
import GradientText from './GradientText';
import { useLenis } from './SmoothScrollProvider';
import homeImg from '../../assets/Photos/Home_img.png';
import homeImg1 from '../../assets/Photos/Home_img1.png';

export default function Hero({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisContext = useLenis();

  // Parallax effects using Framer Motion useScroll & useTransform
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 800], [0, 240]);
  const imgY = useTransform(scrollY, [0, 800], [0, 100]);
  const decorY = useTransform(scrollY, [0, 800], [0, 60]);

  // Mouse hover 3D tilt effect variables for the portrait
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Max 12 degrees tilt
    const tiltX = (mouseY / (height / 2)) * -12;
    const tiltY = (mouseX / (width / 2)) * 12;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenisContext) {
        lenisContext.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Blur Reveal Animation configuration
  const blurRevealVariants = {
    hidden: {
      filter: 'blur(20px)',
      opacity: 0,
      y: 80,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-28 md:pt-20 pb-16 px-6 md:px-12 overflow-hidden bg-[#050505]"
    >
      {/* Background Image Layer — img tag guarantees zero gaps */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={theme === 'light' ? homeImg1 : homeImg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '30% center',
          }}
        />
        {/* Dark overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.4), rgba(5,5,5,0.85))',
          }}
        />
      </div>


      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Side: Massive Premium Typography Header */}
        <motion.div
          className="lg:col-span-10 xl:col-span-9 flex flex-col justify-center"
          style={{ y: textY }}
        >
          {/* Subtle Taglines */}
          <div className="flex flex-wrap items-center gap-y-2 mb-8 text-gray-500 font-mono text-[10px] tracking-[0.3em]">
            <BlurText
              text="[ BUILDING SCALABLE WEB APPLICATIONS • MODERN DIGITAL EXPERIENCES ]"
              delay={30}
              animateBy="words"
              direction="top"
              className="inline-block"
            />
          </div>

          {/* Heading with Character / Word Animation & Blur Reveal */}
          <div className="flex flex-col text-left font-display font-extrabold text-[12vw] sm:text-[8vw] lg:text-[5.5vw] leading-[0.9] tracking-tighter text-white uppercase select-none">
            {/* Row 1: BUILD */}
            <BlurText
              text="BUILD"
              delay={40}
              animateBy="letters"
              direction="top"
              className="block font-extrabold"
            />

            {/* Row 2: MODERN — applying gradient directly to letters to preserve blur effect */}
            <BlurText
              text="MODERN"
              delay={40}
              animateBy="letters"
              direction="top"
              className="block font-black leading-[0.9] tracking-tighter modern-gradient-letters"
            />

            {/* Row 3: WEB APPS */}
            <BlurText
              text="WEB APPS"
              delay={40}
              animateBy="letters"
              direction="top"
              className="block font-extrabold"
            />
          </div>

          {/* Dynamic Description Text */}
          <BlurText
            text="I'm Baranidharan P, a Full-Stack Developer specializing in React, Next.js, Node.js, and AI-powered solutions. I build fast, scalable, and user-centric web applications that combine clean design with robust backend architecture."
            delay={10}
            animateBy="words"
            direction="bottom"
            className="mt-8 max-w-lg text-gray-400 text-sm sm:text-base leading-relaxed font-light font-sans"
          />

          {/* CTAs Section with micro interactions */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            {/* Let's Contact - Primary Solid CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative flex items-center space-x-3 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full overflow-hidden hover:bg-gray-100 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>LET'S CONTACT</span>
                <span className="w-5 h-5 rounded-full bg-black/5 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </span>
            </button>

            {/* View Work - Secondary Glass Outline CTA */}
            <button
              onClick={() => scrollToSection('work')}
              className="group flex items-center space-x-2 border border-white/10 hover:border-white/50 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full font-mono text-xs font-bold tracking-widest text-white transition-all duration-300 cursor-pointer"
            >
              <span>VIEW WORK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping group-hover:bg-white/80" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Arrow indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer opacity-40 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('about')}>
        <span className="font-mono text-[9px] tracking-[0.2em] mb-2 uppercase">SCROLL DOWN</span>
        <motion.div
          className="w-1 h-8 bg-gradient-to-b from-white to-transparent rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
