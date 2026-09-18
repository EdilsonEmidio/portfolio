import React from 'react';
import { personalInfo, softSkills } from '../data/portfolioData';
import {
  Code,
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  Sparkles,
  CheckCircle2,
  GitBranch,
  Terminal
} from 'lucide-react';

export default function About() {
  const engineeringPillars = [
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "Arquitetura & Boas Práticas",
      desc: "Domínio prático de POO, princípios SOLID, Padrões de Projeto (GoF), Clean Architecture e GRASP. Código desacoplado, testável e de fácil manutenção."
    },
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: "Desenvolvimento Full Stack",
      desc: "Construção de aplicações completas conectando backends robustos em PHP (Laravel/Livewire), Java (Spring Boot) e Node.js a frontends reativos em React."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Modelagem de Dados & Integridade",
      desc: "Experiência na concepção de esquemas relacionais, integridade referencial, migrations e otimização de consultas em PostgreSQL, MySQL e MariaDB."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "IA & Engenharia de Prompts",
      desc: "Fluxo de desenvolvimento acelerado e rigoroso com GitHub Copilot (Chat & Agents) e ChatGPT, aplicando técnicas avançadas para refatoração e testes."
    }
  ];

  return (
    <section id="sobre" className="py-24 relative bg-[#090d16]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. SOBRE MIM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia de Software com{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Foco em Qualidade
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formação acadêmica sólida combinada com experiência real de desenvolvimento em sistemas de grande escala.
          </p>
        </div>

        {/* Story & Highlights Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-emerald-400"></span>
                Perfil Profissional
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutSummary}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ao longo de estágios e projetos acadêmicos aplicados, participei da reestruturação de sistemas para instituições como a 
                <strong className="text-slate-200 font-semibold"> UNIVASF (STI)</strong>, criando módulos de autenticação, geração de diplomas e agendamento de serviços, sempre prezando pela segurança da informação e facilidade de uso para os usuários finais.
              </p>
            </div>

            {/* Bulleted checkmarks */}
            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              {personalInfo.aboutHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Work Principles Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                Pontos Fortes & Atuação
              </h3>
              <div className="space-y-4">
                {softSkills.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <h4 className="text-sm font-semibold text-emerald-300 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Metodologias:</span>
              <span className="text-cyan-300 font-semibold">Scrum • Kanban • GitFlow</span>
            </div>
          </div>

        </div>

        {/* 4 Engineering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-1">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold text-white">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
