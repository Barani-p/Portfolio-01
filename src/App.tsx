import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import AllProjectsView from './components/AllProjectsView';
import SmoothScrollProvider from './components/SmoothScrollProvider';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [view, setView] = useState<'main' | 'projects'>('main');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') return saved;
      }
    } catch (e) {
      console.warn('Storage access is restricted in this context:', e);
    }
    return 'dark';
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        console.warn('Failed to save theme in storage:', e);
      }
      return next;
    });
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <SmoothScrollProvider key={view}>
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-white overflow-hidden font-sans">
        {/* Premium Ambient Background effects */}
        <BackgroundEffects />

        {/* Adaptive custom cursor outline/dot */}
        <CustomCursor />

        {/* Sticky top glass navbar with sliding underline indicators */}
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          view={view}
          setView={setView}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Main Sections Body */}
        <main className="relative z-10">
          {view === 'main' ? (
            <>
              <Hero theme={theme} />
              <About />
              <FeaturedWork onSeeAllWorks={() => setView('projects')} />
              <Services />
              <Skills />
              <Contact />
            </>
          ) : (
            <AllProjectsView onBackToHome={() => setView('main')} />
          )}
        </main>

        {/* Interactive signature footer only on main view */}
        {view === 'main' && <Footer theme={theme} />}
      </div>
    </SmoothScrollProvider>
  );
}
