import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  Code2,
  Copy,
  Check,
  MapPin,
  Sparkles,
  Layers,
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-mesh tech-grid">
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-glow"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text & Introduction Column (Cols 1-7) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {personalInfo.statusBadge}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  Edilson Emidio
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-semibold mt-1">
                  de Espindola Filho
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-cyan-400/90 font-mono pt-1">
                {personalInfo.role}
              </p>
            </div>

            {/* Elevator Pitch */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Graduando em <strong className="text-white font-semibold">Ciência da Computação pela UNIVASF</strong>. 
              Especializado na criação de soluções robustas com{' '}
              <span className="text-emerald-300 font-medium">PHP (Laravel/Livewire)</span>,{' '}
              <span className="text-cyan-300 font-medium">React</span>,{' '}
              <span className="text-blue-300 font-medium">Java (Spring Boot)</span> e microsserviços com{' '}
              <span className="text-amber-300 font-medium">Python & IA</span>.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['Laravel', 'React', 'Spring Boot', 'Livewire', 'PostgreSQL', 'Docker', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-emerald-300 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#projetos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explorar Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all hover:scale-[1.02]"
                title="Copiar e-mail para a área de transferência"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">E-mail Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Avatar / Photo Slot Column (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Visual Photo Card */}
            <div className="relative group">
              
              {/* Animated Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-glow"></div>
              
              {/* Frame Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl bg-slate-900/90 border border-slate-700/60 p-3 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                
                {/* Photo Display with automatic fallback */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950/60 border border-slate-800 flex items-center justify-center relative">
                  {!imgError ? (
                    <img
                      src="./avatar.png"
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src="./avatar-placeholder.svg"
                      alt="Placeholder do desenvolvedor"
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1.5 font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      UNIVASF
                    </span>
                    <span className="text-slate-400 font-mono">Full Stack</span>
                  </div>
                </div>

              </div>
              
            </div>

          </div>

        </div>

        {/* Quick Highlights / Stats Grid Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-2xl border border-slate-800/60 text-center hover:border-emerald-500/30 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
