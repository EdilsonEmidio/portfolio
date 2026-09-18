import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 relative bg-[#090d16]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04. TRAJETÓRIA PROFISSIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiência Prática &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Atuação Técnica
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Vivência em ambiente corporativo/institucional de TI (STI Univasf) e desenvolvimento colaborativo de software.
          </p>
        </div>

        {/* Chronological Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative group pl-6 sm:pl-10">
              
              {/* Glowing Node on Timeline Line */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090d16] border-2 border-emerald-400 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-emerald-500/30 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-cyan-400"></span>
              </div>

              {/* Date tag positioned on the left for larger screens */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 text-xs font-mono text-slate-400 font-semibold group-hover:text-emerald-400 transition-colors">
                {exp.period.split('–')[0].trim()}
              </div>

              {/* Content Box */}
              <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800/80 space-y-4">
                
                {/* Header row inside card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 mb-1.5">
                      {exp.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono mt-1">
                      <span className="flex items-center gap-1 text-slate-300 font-medium">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="sm:hidden text-xs font-mono text-emerald-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Principais Atividades & Entregas:
                  </h4>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
