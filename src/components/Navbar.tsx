import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data';
import { useLenis } from './SmoothScrollProvider';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  view: 'main' | 'projects';
  setView: (v: 'main' | 'projects') => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'work', label: 'WORK' },
  { id: 'services', label: 'SERVICES' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar({ activeSection, setActiveSection, view, setView, theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenisContext = useLenis();

  // Scroll handler for background transparency & active sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section check based on position
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    if (view === 'projects') {
      if (id === 'work') {
        // Already on projects view, scroll back to top of the archive
        if (lenisContext && lenisContext.lenis) {
          lenisContext.lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      // If navigating to other sections, switch back to main view and scroll to that section
      setView('main');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          if (lenisContext) {
            lenisContext.scrollTo(element);
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        if (lenisContext) {
          lenisContext.scrollTo(element);
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand Signature */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center space-x-2 font-display text-xl font-bold tracking-widest text-white cursor-pointer"
          >
            <span className="relative">
              Bharani
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="text-xs font-mono text-white font-light translate-y-[2px]">
              ®
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = view === 'projects' ? item.id === 'work' : activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-1 py-2 font-display text-[13px] font-semibold tracking-[0.15em] cursor-pointer transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center relative overflow-hidden"
              aria-label="Toggle Theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </motion.div>
            </button>

            {/* Let's Collaborate CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center space-x-2 border border-white/10 px-5 py-2.5 rounded-full text-xs font-display font-semibold tracking-[0.1em] bg-white/5 hover:bg-white hover:border-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-white group-hover:text-black" />
            </button>
          </div>

          {/* Mobile Action Container (Theme Toggle & Menu) */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center text-white/90 hover:text-white transition-colors z-50 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-between p-12 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Mesh gradient backgrounds inside mobile nav for premium look */}
            <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-white/5 to-transparent pointer-events-none blur-[100px]" />

            <div className="mt-20 flex flex-col space-y-6">
              <span className="text-gray-500 font-mono text-[10px] tracking-[0.3em]">
                ( NAVIGATION )
              </span>
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => {
                  const isActive = view === 'projects' ? item.id === 'work' : activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left py-2 font-display text-4xl font-extrabold tracking-tight flex items-baseline space-x-4 cursor-pointer"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    >
                      <span className="text-xs font-mono text-white/60">
                        0{index + 1}.
                      </span>
                      <span
                        className={`transition-all duration-300 ${
                          isActive ? 'text-white pl-2' : 'text-gray-400'
                        }`}
                      >
                        {item.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Area inside Drawer */}
            <motion.div
              className="border-t border-white/5 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col space-y-3">
                <span className="text-gray-500 font-mono text-[10px] tracking-widest">
                  ( CONNECT WITH BARANI )
                </span>
                <div className="flex flex-col text-sm text-gray-300 space-y-1">
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
                    {personalInfo.email}
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                    LinkedIn
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
