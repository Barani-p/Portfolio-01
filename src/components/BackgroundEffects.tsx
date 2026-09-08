import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  
  // Mouse position values with springs for ultra-smooth lag-free motion
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 150, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Offset by half of glow width (300px)
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Vignette Shadow Frame */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-500" 
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, var(--vignette-color) 95%)'
        }}
      />

      {/* Stationary Ambient Aurora Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-orange-500/5 blur-[140px] animate-pulse duration-[10000ms] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-orange-600/5 blur-[160px] animate-pulse duration-[8000ms] pointer-events-none" />
      <div className="absolute top-[50%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-amber-500/5 blur-[150px] animate-pulse duration-[12000ms] pointer-events-none" />

      {/* Hardware-Accelerated Interactive Mouse-Follow Glow (Spotlight) */}
      <motion.div
        ref={glowRef}
        style={{
          x: glowX,
          y: glowY,
        }}
        className="hidden md:block absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,138,0,0.06)_0%,transparent_70%)] blur-[20px] pointer-events-none"
      />
    </div>
  );
}
