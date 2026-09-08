import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: any) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export const useLenis = () => {
  const context = useContext(SmoothScrollContext);
  return context;
};

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  key?: any;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's preferences for reduced motion
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.log('Smooth scrolling disabled due to prefers-reduced-motion');
      return;
    }

    // Initialize Lenis instance
    // Standard configuration for smooth inertia and 60 FPS performance
    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom expo ease-out
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5, // Buttery smooth mobile momentum touch scrolls
        infinite: false,
      });

      lenisRef.current = lenis;
      setLenisInstance(lenis);

      // Synchronize ScrollTrigger with Lenis scroll events to prevent layout shifts
      lenis.on('scroll', () => {
        ScrollTrigger.update();
      });
    } catch (e) {
      console.warn('Lenis smooth scroll failed to initialize:', e);
    }

    // Use GSAP's ticker to handle the animation frame requests (RAF)
    // This connects Lenis with the GSAP lifecycle and keeps them perfectly synchronized
    const updateTicker = (time: number) => {
      // gsap.ticker provides elapsed seconds. Lenis expects milliseconds.
      if (lenisRef.current) {
        try {
          lenisRef.current.raf(time * 1000);
        } catch (e) {
          // ignore or warn once
        }
      }
    };

    gsap.ticker.add(updateTicker);

    // Disable GSAP lag smoothing to ensure animations map exactly to scroll updates without visual latency
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger to ensure all initial triggers and pinned parameters are accurately computed
    ScrollTrigger.refresh();

    // Clean up when the provider unmounts to prevent memory leaks and ghost ticking
    return () => {
      gsap.ticker.remove(updateTicker);
      if (lenisRef.current) {
        try {
          lenisRef.current.destroy();
        } catch (e) {
          console.warn('Failed to destroy Lenis instance:', e);
        }
      }
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  const scrollTo = (target: string | number | HTMLElement, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    } else {
      // Fallback for reduced motion or fallback situations
      if (typeof target === 'string') {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
