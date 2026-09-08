import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectCardData {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  alignYear: 'bottom-left' | 'bottom-right';
  link?: string;
  image?: string;
  tech?: string[];
}

interface ProjectCardProps {
  key?: string;
  project: ProjectCardData;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const renderMockup = () => {
    switch (project.id) {
      case 'hero-products':
      case 'proj-4': // Kinesense AI
        return (
          <div className="absolute inset-0 bg-radial from-[#1a1a1a] via-[#0d0d0d] to-black flex items-center justify-center overflow-hidden">
            {/* Background luxury subtle gradient glow */}
            <div className="absolute w-72 h-72 rounded-full bg-orange-600/10 blur-[60px] pointer-events-none" />
            
            {/* Horizontal iPhone 16 Pro Mockup */}
            <div className="relative w-[290px] sm:w-[330px] aspect-[19.5/9] bg-neutral-950 border-[4px] border-neutral-800 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-[5px] flex rotate-[-5deg] transition-transform duration-500 group-hover:rotate-[-2deg] group-hover:scale-[1.02] z-10">
              <div className="relative flex-1 h-full rounded-[18px] bg-[#070707] border border-neutral-900 overflow-hidden p-3 flex flex-row items-center justify-between">
                
                {/* Simulated Phone Screen Left side - text details */}
                <div className="flex flex-col justify-between h-full py-0.5 text-left select-none">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-white/60 font-mono tracking-widest uppercase block">COMPUTER VISION</span>
                    <h4 className="font-sans font-black text-xs sm:text-sm text-white tracking-tight leading-none uppercase">
                      KINESENSE <br /> POSE ENGINE
                    </h4>
                  </div>
                  <div className="flex items-center space-x-1.5 mt-1">
                    <span className="px-1.5 py-0.5 rounded bg-white text-black font-mono text-[8px] font-bold uppercase tracking-wider">
                      AI LIVE
                    </span>
                    <span className="text-[8px] text-gray-500 font-mono">MEDIAPIPE</span>
                  </div>
                </div>
                
                {/* Simulated Phone Screen Right side - graphic component */}
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-gradient-to-tr from-white/40 to-white/10 p-[1px] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <div className="w-full h-full rounded-[11px] bg-black/80 flex flex-col items-center justify-center p-1.5 border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-white to-gray-400 flex items-center justify-center text-black text-[9px] font-bold">
                      ★
                    </div>
                    <span className="text-[7px] text-gray-400 font-mono mt-1 tracking-wider uppercase">98% ACC</span>
                  </div>
                </div>

                {/* Dynamic island bezel on screen */}
                <div className="absolute top-1/2 left-1.5 -translate-y-1/2 w-1.5 h-6 rounded-full bg-neutral-950 border border-neutral-900" />
              </div>
            </div>

            {/* Simulated Black Leather Glove Hands wrapping the borders - incredibly stylish! */}
            {/* Left Hand fingers wrapping edge */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-28 flex flex-col justify-between py-4 z-20 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1">
              <div className="w-8 h-4.5 bg-neutral-950 rounded-r-full shadow-lg border-r border-white/5" />
              <div className="w-10 h-5 bg-neutral-900 rounded-r-full shadow-lg border-r border-white/10" />
              <div className="w-8 h-4.5 bg-neutral-950 rounded-r-full shadow-lg border-r border-white/5" />
            </div>

            {/* Right Hand fingers wrapping edge */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-28 flex flex-col justify-between py-4 z-20 pointer-events-none transition-transform duration-500 group-hover:translate-x-1">
              <div className="w-8 h-4.5 bg-neutral-950 rounded-l-full shadow-lg border-l border-white/5 self-end" />
              <div className="w-10 h-5 bg-neutral-900 rounded-l-full shadow-lg border-l border-white/10 self-end" />
              <div className="w-8 h-4.5 bg-neutral-950 rounded-l-full shadow-lg border-l border-white/5 self-end" />
            </div>
          </div>
        );

      case 'hero-collection':
      case 'proj-1': // React JS Project Launch
        return (
          <div className="absolute inset-0 bg-[#0d0d0d] overflow-hidden">
            {/* Background image: coarse dark stone */}
            <img
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80"
              alt="Granite stone mockup context"
              className="w-full h-full object-cover opacity-80 filter contrast-125 brightness-75 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Subtle warm orange lighting vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-black/60 pointer-events-none" />

            {/* Vertical rotated iPhone 15 Pro on the rock */}
            <div className="absolute right-6 sm:right-10 -bottom-8 w-[160px] sm:w-[190px] aspect-[9/19.5] bg-neutral-950 border-[4px] border-neutral-800 rounded-[28px] shadow-[0_20px_45px_rgba(0,0,0,0.9)] p-[5px] rotate-[15deg] transition-all duration-700 ease-out group-hover:rotate-[10deg] group-hover:scale-105 group-hover:translate-y-2 z-10">
              {/* Screen containing the high-contrast warm orange gradient layout */}
              <div className="relative w-full h-full rounded-[22px] bg-gradient-to-b from-[#ffeedd] via-[#ff3366] to-[#ff6699] overflow-hidden p-3.5 flex flex-col justify-between text-[#121212] select-none">
                
                {/* Mini headers matching mockup */}
                <div className="flex justify-between items-center text-[7px] font-mono tracking-wider opacity-90 border-b border-black/10 pb-1.5">
                  <span>REACT LAUNCH</span>
                  <span>ONLINE</span>
                </div>

                {/* Big Bold Numerics '⚛' */}
                <div className="flex-1 flex flex-col justify-center my-1">
                  <div className="font-sans font-black text-4xl sm:text-5xl tracking-tighter leading-none text-black select-none">
                    ⚛
                  </div>
                  <div className="h-[1px] bg-black/15 my-2 w-full" />
                  <div className="font-mono text-[7px] tracking-widest font-semibold uppercase opacity-80 leading-snug">
                    COMPONENT <br /> STRUCTURE <br /> CLEAN CODE
                  </div>
                </div>

                {/* Bottom Number */}
                <div className="border-t border-black/10 pt-1.5 flex justify-between items-end">
                  <span className="text-[6px] font-mono opacity-80">2026 EDITION</span>
                  <span className="font-sans font-black text-2xl sm:text-3xl tracking-tighter leading-none text-black">
                    V1.2
                  </span>
                </div>

                {/* Speaker pill top */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 rounded-full bg-neutral-950 flex items-center justify-center p-[1px]">
                  <div className="w-1 h-1 rounded-full bg-[#ff3366]" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'essentials-collection':
      case 'proj-10': // Walleet SaaS Landing
        return (
          <div className="absolute inset-0 bg-[#080808] overflow-hidden flex items-center justify-center">
            {/* Background dark abstract textured overlay */}
            <div className="absolute inset-0 bg-radial from-neutral-900 via-neutral-950 to-black opacity-90" />
            
            {/* Stylized floating dark rock shards behind and around matching screenshot */}
            <div className="absolute left-6 bottom-10 w-24 h-12 bg-neutral-800 border border-neutral-700/50 rounded-xl rotate-[20deg] opacity-60 shadow-2xl blur-[0.5px] transition-transform duration-1000 group-hover:translate-y-2 group-hover:rotate-[25deg]" />
            <div className="absolute right-12 top-6 w-16 h-16 bg-neutral-700 border border-neutral-600/50 rounded-2xl rotate-[-35deg] opacity-50 shadow-xl blur-[0.5px] transition-transform duration-1000 group-hover:-translate-y-2 group-hover:rotate-[-40deg]" />
            <div className="absolute left-1/3 top-8 w-12 h-6 bg-neutral-900 border border-neutral-800 rounded-lg rotate-[10deg] opacity-40 shadow-md blur-[1px]" />

            {/* Diagonally floating iPhone with bright glowing violet mockup */}
            <div className="relative w-[150px] sm:w-[185px] aspect-[9/19.5] bg-neutral-950 border-[4px] border-neutral-800 rounded-[28px] shadow-[0_25px_50px_rgba(0,0,0,0.85)] p-[5px] rotate-[-12deg] transition-all duration-700 ease-out group-hover:rotate-[-8deg] group-hover:scale-105 z-10">
              <div className="relative w-full h-full rounded-[22px] bg-gradient-to-tr from-[#121212] to-neutral-900 overflow-hidden p-3 flex flex-col justify-between text-white select-none">
                
                {/* Header text */}
                <div className="text-[7px] font-mono tracking-widest text-gray-400">
                  WALLEET SAAS
                </div>

                {/* Glow/Fluid screen center mockup matching screenshot */}
                <div className="my-auto relative w-full aspect-[4/3] bg-gradient-to-tr from-violet-600/20 to-indigo-500/20 rounded-xl border border-white/5 p-2 flex flex-col justify-between overflow-hidden shadow-inner">
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-indigo-500 rounded-full blur-[20px] opacity-70" />
                  <div className="absolute -left-4 -top-4 w-16 h-16 bg-fuchsia-500 rounded-full blur-[20px] opacity-40" />

                  <div className="relative z-10 text-left">
                    <span className="text-[6px] font-mono text-indigo-300 tracking-wider block uppercase">FINTECH</span>
                    <span className="font-sans font-bold text-[10px] leading-tight text-white uppercase block mt-0.5">
                      WALLEET <br /> MARKETING
                    </span>
                  </div>

                  {/* Little white vector line */}
                  <div className="relative z-10 w-full h-[1px] bg-white/10 mt-1" />

                  {/* Centered tiny white interactive arrow overlay on device screen */}
                  <div className="relative z-10 self-center w-6 h-6 rounded-full bg-violet-600 border border-white/20 flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-1 text-[6px] font-mono text-gray-500">
                  <span>© WALLEET SaaS</span>
                  <span>CONVERT</span>
                </div>
              </div>
            </div>

            {/* Central glowing floating play/action white button exactly as requested in the mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-[0_10px_35px_rgba(139,92,246,0.3)]">
                <ArrowUpRight className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>
          </div>
        );

      case 'top-picks':
      case 'proj-7': // SV Collections Saree Business
        return (
          <div className="absolute inset-0 bg-[#161a0f] overflow-hidden">
            {/* Background luxury olive/lime green velvet fabric texture */}
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
              alt="Luxury saree retail texture"
              className="w-full h-full object-cover opacity-90 filter brightness-95 contrast-110 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Deep rich lighting gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161a0f]/40 via-transparent to-black/60 pointer-events-none" />

            {/* Vertically standing iPhone 15 Pro rotated slightly */}
            <div className="absolute right-10 sm:right-16 -bottom-10 w-[155px] sm:w-[185px] aspect-[9/19.5] bg-neutral-950 border-[4px] border-neutral-800 rounded-[28px] shadow-[0_22px_45px_rgba(0,0,0,0.85)] p-[5px] rotate-[-3deg] transition-all duration-700 ease-out group-hover:rotate-[-1deg] group-hover:scale-105 group-hover:translate-y-1 z-10">
              {/* Screen containing clean elegant off-white layout */}
              <div className="relative w-full h-full rounded-[22px] bg-[#f2f1ed] overflow-hidden p-4 flex flex-col justify-between text-neutral-800 select-none">
                
                {/* Header info */}
                <div className="flex justify-between items-center text-[7px] font-mono tracking-widest text-neutral-500 border-b border-neutral-200 pb-1">
                  <span>SV CO.</span>
                  <span>E-COMMERCE</span>
                </div>

                {/* Big elegant thin serif display letter 'S' */}
                <div className="my-auto flex flex-col items-center justify-center">
                  <div className="font-serif text-[6.5rem] leading-none font-light text-neutral-900 select-none relative -translate-y-2">
                    S
                    {/* Shadow layer underneath the S */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/10 blur-[2px] rounded-full" />
                  </div>
                </div>

                {/* Bottom title and mockup descriptors */}
                <div className="border-t border-neutral-200 pt-1.5 text-left">
                  <span className="font-sans font-black text-[10px] tracking-wide text-neutral-900 uppercase block">
                    SV Collections
                  </span>
                  <div className="flex justify-between items-center text-[6px] font-mono text-neutral-500 mt-0.5">
                    <span>RETAIL STORE</span>
                    <span>• 2025</span>
                  </div>
                </div>

                {/* Speaker pill top */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 rounded-full bg-neutral-950 flex items-center justify-center p-[1px]">
                  <div className="w-1 h-1 rounded-full bg-neutral-400" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'proj-2': // Photography Portfolio
        return (
          <div className="absolute inset-0 bg-[#070707] overflow-hidden">
            {/* Background luxury Camera Lens */}
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80"
              alt="Hasselblad camera lens"
              className="w-full h-full object-cover opacity-60 filter contrast-[1.15] brightness-75 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />

            {/* Cinematic Camera Viewfinder Layout overlay */}
            <div className="absolute inset-4 border border-white/10 rounded-2xl flex flex-col justify-between p-3 select-none font-mono text-[8px] text-gray-400">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="tracking-widest">REC 4K 60FPS</span>
                </div>
                <span>00:12:44:09</span>
              </div>

              {/* Viewfinder brackets in middle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-l border-t border-white/20 flex items-start justify-start">
                <div className="absolute right-0 top-0 w-2 h-[1px] bg-white/20" />
                <div className="absolute bottom-0 left-0 w-[1px] h-2 bg-white/20" />
                <div className="absolute right-0 bottom-0 w-10 h-10 border-r border-b border-white/20" />
              </div>

              <div className="flex justify-between items-end text-white/90">
                <div className="space-y-0.5">
                  <span className="block text-gray-500 text-[6px]">SHUTTER</span>
                  <span>1/250s</span>
                </div>
                <div className="space-y-0.5 text-center">
                  <span className="block text-gray-500 text-[6px]">APERTURE</span>
                  <span>F1.4</span>
                </div>
                <div className="space-y-0.5 text-right">
                  <span className="block text-gray-500 text-[6px]">SENSITIVITY</span>
                  <span>ISO 400</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'proj-3': // NEO-FIT Platform
        return (
          <div className="absolute inset-0 bg-[#040404] overflow-hidden">
            {/* Background dynamic athletic/gym context */}
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
              alt="Athlete gym workouts"
              className="w-full h-full object-cover opacity-50 filter contrast-125 brightness-50 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Warm high-intensity deep crimson and orange lighting */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff3366]/20 via-transparent to-black/80 pointer-events-none" />

            {/* Glowing virtual fitness dashboard */}
            <div className="absolute right-4 bottom-4 left-4 h-32 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md p-3 flex flex-col justify-between select-none">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff3366] animate-ping" />
                  <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest">LIVE HEART PROFILE</span>
                </div>
                <span className="font-mono text-[10px] text-white font-bold">185 BPM</span>
              </div>

              {/* Heart rate SVG grid vector indicator */}
              <div className="flex-1 flex items-center justify-center my-1.5 opacity-80">
                <svg className="w-full h-8 stroke-pink-500 fill-none stroke-2" viewBox="0 0 100 30">
                  <path d="M0,15 L20,15 L25,10 L30,22 L35,5 L40,15 L50,15 L55,2 L60,28 L65,15 L100,15" />
                </svg>
              </div>

              <div className="flex justify-between text-[7px] font-mono text-gray-400 uppercase border-t border-white/5 pt-1.5">
                <span>INTENSITY: 92%</span>
                <span>CALORIES: 640 KCAL</span>
              </div>
            </div>
          </div>
        );

      case 'proj-5': // Personal Portfolio V1
        return (
          <div className="absolute inset-0 bg-[#09090b] overflow-hidden flex items-center justify-center">
            {/* Background developer workstation */}
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="Developer workstation coding"
              className="w-full h-full object-cover opacity-30 filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Glowing cyan/violet gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-violet-500/15" />

            {/* Floating glass VS Code window */}
            <div className="relative w-[280px] h-[190px] rounded-xl bg-black/75 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-md overflow-hidden flex flex-col select-none">
              {/* Window header */}
              <div className="h-6.5 bg-neutral-900 border-b border-white/5 px-3 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[8px] text-gray-500 tracking-wider">App.tsx — DeveloperPortfolio</span>
                <span className="w-4" />
              </div>

              {/* IDE coding area */}
              <div className="p-3.5 flex-1 font-mono text-[8.5px] leading-relaxed text-gray-400 text-left overflow-hidden">
                <div className="text-violet-400">import <span className="text-white">React, &#123; useState &#125;</span> from <span className="text-emerald-400">'react'</span>;</div>
                <div className="text-violet-400">import <span className="text-white">PortfolioCard</span> from <span className="text-emerald-400">'./components'</span>;</div>
                <div className="mt-1.5 text-blue-400">const <span className="text-yellow-400">DeveloperApp</span> = () =&gt; &#123;</div>
                <div className="pl-3.5 text-violet-400">const <span className="text-gray-300">[skills]</span> = <span className="text-sky-400">useState</span>([<span className="text-emerald-400">'React', 'Tailwind'</span>]);</div>
                <div className="pl-3.5 text-blue-400">return (</div>
                <div className="pl-7 text-sky-400">&lt;<span className="text-white">PortfolioCard</span> <span className="text-white">skills</span>=&#123;skills&#125; /&gt;</div>
                <div className="pl-3.5 text-blue-400">);</div>
                <div className="text-blue-400">&#125;;</div>
              </div>
            </div>
          </div>
        );

      case 'proj-6': // UNEX Platform Film Streaming
        return (
          <div className="absolute inset-0 bg-black overflow-hidden">
            {/* Cinema projector style background */}
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80"
              alt="Retro neon cinema projector"
              className="w-full h-full object-cover opacity-60 filter saturate-150 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Blue and violet atmospheric glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-indigo-500/25 pointer-events-none" />

            {/* Stream Player overlay layout */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 border border-white/10 rounded-2xl backdrop-blur-md p-3 select-none">
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest">WATCH SYNC LIVE</span>
                </div>
                {/* Simulated connected viewer avatars */}
                <div className="flex -space-x-1.5 items-center">
                  <div className="w-4 h-4 rounded-full bg-rose-500 border border-neutral-900 text-[6px] font-bold flex items-center justify-center">A</div>
                  <div className="w-4 h-4 rounded-full bg-amber-500 border border-neutral-900 text-[6px] font-bold flex items-center justify-center">J</div>
                  <div className="w-4 h-4 rounded-full bg-sky-500 border border-neutral-900 text-[6px] font-bold flex items-center justify-center">B</div>
                  <span className="font-mono text-[7px] text-gray-400 ml-2 font-semibold">+5 WATCHING</span>
                </div>
              </div>

              {/* Synchronized timeline progress */}
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[8px] text-gray-500">01:42</span>
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative">
                  <div className="w-2/3 h-full bg-white rounded-full" />
                </div>
                <span className="font-mono text-[8px] text-gray-500">03:15</span>
              </div>
            </div>
          </div>
        );

      case 'proj-8': // PhishGuard AI Scanner
        return (
          <div className="absolute inset-0 bg-[#040904] overflow-hidden flex items-center justify-center">
            {/* Cyber security security mainframe background */}
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
              alt="Cyber warning matrix scanner"
              className="w-full h-full object-cover opacity-20 filter saturate-50 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Emerald matrix neon sweep scanning grid */}
            <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-black" />
            
            {/* Laser scanning line sweeping vertically */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-bounce pointer-events-none" />

            {/* Glowing security scanner HUD */}
            <div className="relative w-[270px] bg-black/75 border border-emerald-500/20 rounded-2xl p-4 shadow-[0_15px_40px_rgba(16,185,129,0.15)] flex flex-col justify-between select-none">
              <div className="flex justify-between items-center border-b border-emerald-500/10 pb-2 mb-2">
                <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest font-bold">PHISHGUARD SHIELD</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[7px] border border-emerald-500/30">ACTIVE</span>
              </div>

              <div className="flex items-center space-x-3.5 my-1.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg">
                  🛡️
                </div>
                <div className="text-left font-mono space-y-0.5">
                  <div className="text-[9px] text-white font-bold uppercase">AI AUDIT COMPLETION</div>
                  <div className="text-[8px] text-emerald-400 font-bold uppercase">THREAT LEVEL: 0.00%</div>
                  <div className="text-[7px] text-gray-500 uppercase">DESTINATION: SECURED SAFE</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'proj-9': // Gushwork HDPE Pipes
        return (
          <div className="absolute inset-0 bg-[#090b10] overflow-hidden flex items-center justify-center">
            {/* Technical blueprint schematic workspace */}
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
              alt="Engineering blueprints technical drafting"
              className="w-full h-full object-cover opacity-20 filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Tech blue and blueprint grids */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-orange-500/5 pointer-events-none" />

            {/* High-precision HDPE technical drawing panel */}
            <div className="relative w-[280px] h-[190px] border border-white/10 rounded-2xl bg-black/60 backdrop-blur-md p-4 flex flex-col justify-between select-none">
              <div className="flex justify-between items-center font-mono text-[8px] text-gray-500 border-b border-white/5 pb-2">
                <span>GUSHWORK MANUFACTURER</span>
                <span className="text-white">CAD WORKSPACE</span>
              </div>

              {/* Cylindrical extrusion caliper measure lines */}
              <div className="flex-1 flex items-center justify-center relative">
                {/* 3D pipe schematic cylinder */}
                <div className="w-40 h-8 rounded bg-gradient-to-b from-[#222] via-[#444] to-[#111] border-y border-white/20 relative flex items-center justify-center">
                  <div className="absolute inset-y-0 left-4 w-[2px] bg-white/50" />
                  <div className="absolute inset-y-0 right-4 w-[2px] bg-white/50" />
                  <span className="font-mono text-[8px] text-gray-400 tracking-wider">HDPE EXTRUSION</span>
                </div>

                {/* Caliper measuring dotted helper line */}
                <div className="absolute -bottom-1 left-10 right-10 h-[1px] border-b border-dashed border-gray-600 flex justify-between px-1">
                  <div className="w-[1px] h-2 bg-gray-500 -translate-y-1" />
                  <span className="font-mono text-[7px] text-white font-bold -translate-y-2">Ø 110mm NOMINAL</span>
                  <div className="w-[1px] h-2 bg-gray-500 -translate-y-1" />
                </div>
              </div>

              <div className="flex justify-between font-mono text-[7px] text-gray-400 uppercase pt-1 border-t border-white/5">
                <span>MATERIAL: PE100</span>
                <span>TOLERANCE: +/- 0.4mm</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 z-0">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter grayscale contrast-[1.1] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        );
    }
  };

  return (
    <motion.div
      className="relative group rounded-[2rem] overflow-hidden h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] bg-[#0c0c0c] flex flex-col justify-between p-6 sm:p-10 cursor-pointer border border-white/[0.03] shadow-lg"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
    >
      {/* Absolute high-fidelity CSS/HTML/Unsplash mockup container */}
      <div className="absolute inset-0 z-0 select-none">
        {renderMockup()}
        {/* Transparent dark gradient vignette for overall text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/70 group-hover:to-black/80 transition-all duration-500 z-[2]" />
      </div>

      {/* Top-Left Header Content */}
      <div className="relative z-10 space-y-1">
        <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight uppercase transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300/80 text-xs sm:text-sm font-light">
          {project.subtitle}
        </p>
      </div>

      {/* Floating Interactive Hover Arrow in center or high-fidelity tech overlay */}
      {project.tech ? (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 flex flex-col items-center justify-center p-6 text-center">
          <div className="space-y-4 mb-6">
            {project.tech.map((tag) => (
              <div
                key={tag}
                className="text-white font-sans font-medium text-sm sm:text-base tracking-wide"
              >
                {tag}
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t border-white/10 w-full max-w-[200px] flex justify-center">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono tracking-widest text-white font-bold uppercase hover:text-white/80 transition-colors duration-200">
              <span>VISIT LIVE WEBSITE</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-2xl">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>
      )}

      {/* Bottom Year Indicator */}
      <div 
        className={`relative z-10 flex items-center ${
          project.alignYear === 'bottom-right' ? 'justify-end' : 'justify-start'
        }`}
      >
        <div className="flex items-center space-x-2 text-white/80 font-mono text-[11px] sm:text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
}
