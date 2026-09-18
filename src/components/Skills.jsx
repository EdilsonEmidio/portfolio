import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import {
  Code2,
  Server,
  Layout,
  Database,
  Cpu,
  Terminal,
  Search,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = skillsData
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => {
      if (activeCategory !== 'all' && cat.category !== activeCategory) {
        return false;
      }
      return cat.skills.length > 0;
    });

  return (
    <section id="habilidades" className="py-24 relative bg-[#090d16]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>03. COMPETÊNCIAS & FERRAMENTAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stack Tecnológica &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Domínio abrangente de tecnologias modernas para desenvolvimento backend corporativo, frontends interativos, arquitetura de sistemas e produtividade com IA.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          
          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar tecnologia ou padrão..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-white'
              }`}
            >
              Todas
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat.category
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-white'
                }`}
              >
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills list inside category */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-950/70 border border-slate-800/90 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 group-hover/skill:bg-emerald-400 transition-colors"></span>
                      <span>{skill.name}</span>

                      {skill.badge && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>{cat.skills.length} competências listadas</span>
                <span className="text-emerald-400/80">★ Prática comprovada</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            Nenhuma tecnologia encontrada com o termo "{searchTerm}".
          </div>
        )}

      </div>
    </section>
  );
}
