import { ArrowUp, Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../data';
import { useLenis } from './SmoothScrollProvider';
import connectImg from '../../assets/Photos/connect.png';
import connectImgLight from '../../assets/Photos/connect1.png';

export default function Footer({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const lenisContext = useLenis();

  const handleScrollTop = () => {
    if (lenisContext) {
      lenisContext.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pb-10 overflow-hidden z-10">

      {/* Massive Collaborations Full Width Image Block */}
      <div className="relative w-full h-[400px] sm:h-[700px] md:h-[100vh] overflow-hidden">
        <img
          src={theme === 'light' ? connectImgLight : connectImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Decorative vertical grid lines continuing from layout */}
      <div className="absolute inset-0 flex justify-between px-6 md:px-12 pointer-events-none opacity-[0.01]">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden sm:block" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12 pt-16">

        {/* Info & Navigation Directory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-0 mb-16">

          {/* Column 1: Brand Pitch & Newsletter signup mock (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-widest">
              Bharani
            </h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed max-w-sm">
              My engineering strategy is rooted in extensive full-stack system architecture, where I explore user behavior, fast synchronization, and responsive computer vision interfaces.
            </p>

            {/* Quick newsletter signup */}
            <div className="flex items-center space-x-2 max-w-sm">
              <input
                type="email"
                placeholder="Type your email..."
                className="w-full bg-white/[0.03] border border-white/5 focus:border-white/45 rounded-xl px-4 py-2.5 text-xs text-white outline-none placeholder:text-gray-600"
              />
              <button className="bg-white hover:bg-gray-100 text-black font-mono text-[10px] font-bold px-4 py-3 rounded-xl transition-colors cursor-pointer">
                SIGNUP
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Page links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
              DIRECTORY PAGES
            </h4>
            <ul className="space-y-2 text-xs font-light text-gray-400">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer">
                  About Resume
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('work')} className="hover:text-white cursor-pointer">
                  Featured Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer">
                  Service Offerings
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="hover:text-white cursor-pointer">
                  Technical Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Networking Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
              SOCIAL CONNECTIVITY
            </h4>
            <div className="flex flex-wrap gap-3">
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 border border-white/10 hover:border-white/50 hover:bg-white/5 px-4 py-2.5 rounded-full text-xs text-gray-300 hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 border border-white/10 hover:border-white/50 hover:bg-white/5 px-4 py-2.5 rounded-full text-xs text-gray-300 hover:text-white transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 border border-white/10 hover:border-white/50 hover:bg-white/5 px-4 py-2.5 rounded-full text-xs text-gray-300 hover:text-white transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              {/* Email link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 border border-white/10 hover:border-white/50 hover:bg-white/5 px-4 py-2.5 rounded-full text-xs text-gray-300 hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Inbox</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright stamp & Back-to-Top Button */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">
              © {currentYear} BHARANI PORTFOLIO. ALL CODES SECURED.
            </p>
            <p className="text-gray-600 text-[9px] font-mono mt-1 tracking-wider">
              DEVELOPED BY {personalInfo.name.toUpperCase()}
            </p>
          </div>

          {/* Smooth Snapping Back to Top */}
          <button
            onClick={handleScrollTop}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:border-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-white group-hover:text-black transition-colors" />
          </button>
        </div>

      </div>
    </footer >
  );
}
