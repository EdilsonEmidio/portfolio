import React from 'react';
import { educationData, extraCourses } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Globe2, CheckCircle, ExternalLink } from 'lucide-react';

export default function Education() {
  return (
    <section id="formacao" className="py-24 relative bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05. FORMAÇÃO & CERTIFICAÇÕES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educação &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Desenvolvimento Contínuo
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Graduação na Universidade Federal do Vale do São Francisco (UNIVASF), hackathons e capacitação técnica constante.
          </p>
        </div>

        {/* Degrees and Major Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {index === 0 ? (
                      <GraduationCap className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <Award className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                      edu.status === 'Cursando'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 mb-4">
                  {edu.institution}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Período: {edu.period}</span>
                <span className="text-emerald-400">✓ Formação Oficial</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supplementary Courses & Languages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Courses List (Cols 1-8) */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              Cursos Complementares & Especializações
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {extraCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                      {course.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {course.provider}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                      course.status === 'Cursando'
                        ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Communication (Cols 9-12) */}
          <div className="lg:col-span-4 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Globe2 className="w-5 h-5 text-cyan-400" />
                Idiomas
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">Português</span>
                    <span className="text-xs font-mono text-emerald-400">Nativo</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Comunicação fluente e redação técnica precisa.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">Inglês</span>
                    <span className="text-xs font-mono text-cyan-400">Nível B1</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Leitura fluente de documentações técnicas, APIs, escrita e conversação em evolução.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono text-center pt-2">
              Auto-didata com foco em documentação internacional.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
