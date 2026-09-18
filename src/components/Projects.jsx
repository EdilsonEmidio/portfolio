import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import {
  ExternalLink,
  Calendar,
  Building2,
  Cpu,
  Layers,
  Sparkles,
  Award,
  ClipboardCheck,
  ShoppingBag,
  BrainCircuit,
  Info,
  X,
  ChevronRight,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'IA & Otimização' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-6 h-6 text-emerald-400" />;
      case 'clipboard-check':
        return <ClipboardCheck className="w-6 h-6 text-cyan-400" />;
      case 'shopping-bag':
        return <ShoppingBag className="w-6 h-6 text-blue-400" />;
      case 'brain-circuit':
        return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      default:
        return <Cpu className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="projetos" className="py-24 relative bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>02. PROJETOS EM DESTAQUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sistemas Desenvolvidos &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Experiência Prática
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Aplicações reais, institucionais e acadêmicas demonstrando domínio completo de arquitetura, segurança, bancos de dados e inteligência artificial.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat.id).length;
            const isActive = filter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive
                      ? 'bg-emerald-500/30 text-emerald-200'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800/80 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle accent border gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-blue-500/40 group-hover:from-emerald-400 group-hover:via-cyan-400 group-hover:to-blue-400 transition-all duration-300"></div>

              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.icon)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Project Title & Context */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{project.institution}</span>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/60 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/btn"
                >
                  <Info className="w-4 h-4" />
                  <span>Ver Detalhes Técnicos & Arquitetura</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Ver no GitHub"
                  title="Ver perfil do GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Technical Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar Detalhes"
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6 pr-12">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0">
                {getProjectIcon(selectedProject.icon)}
              </div>
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-2">
                  {selectedProject.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                  {selectedProject.institution} • {selectedProject.role}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-slate-300 text-sm">
              
              {/* Detailed Context */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Visão Geral & Contexto
                </h4>
                <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                  {selectedProject.description}
                </p>
              </div>

              {/* Responsibilities & Deliverables */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Entregas & Responsabilidades (Currículo)
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Approach */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800">
                <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-mono mb-1 font-bold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  Padrão Arquitetural & Engenharia
                </h4>
                <p className="text-xs text-slate-300">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Technologies Full Tags */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2 font-bold">
                  Stack Utilizada
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-950 border border-slate-800 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Perfil no GitHub</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold hover:brightness-110 transition-all"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
