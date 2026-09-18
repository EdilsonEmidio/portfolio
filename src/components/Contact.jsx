import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link with prefilled subject and body
    const subject = encodeURIComponent(`Contato pelo Portfólio de ${formData.name}`);
    const body = encodeURIComponent(
      `Olá Edilson,\n\nMeu nome é ${formData.name} (${formData.email}).\n\nMensagem:\n${formData.message}\n`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section id="contato" className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>06. VAMOS CONVERSAR?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Entre em{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Seja para oportunidades profissionais, projetos em conjunto ou troca de experiências técnicas, estou sempre à disposição!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Direct Cards (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* E-mail Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800/80 hover:border-emerald-500/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">E-mail Direto</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white font-semibold text-sm sm:text-base hover:text-emerald-300 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp / Phone Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Telefone / WhatsApp</span>
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-sm sm:text-base hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-300 hover:brightness-125 transition-all font-medium inline-flex items-center gap-1"
                >
                  <span>Conversar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="Copiar telefone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-3xl border border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Localização</span>
                  <span className="text-xs font-semibold text-white">{personalInfo.location}</span>
                </div>
              </div>

              <div className="glass-card p-5 rounded-3xl border border-slate-800/80 flex items-center justify-around">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">|</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick Contact Form / Mail Composer (Cols 7-12) */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              Enviar Mensagem Rápida
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Preencha os campos abaixo para abrir diretamente seu cliente de e-mail pronto para envio:
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Seu Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Seu E-mail</label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@dominio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Mensagem</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Olá Edilson, gostaria de conversar sobre uma oportunidade / projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Enviar via E-mail</span>
              </button>

              {sentNotice && (
                <div className="text-center text-xs text-emerald-400 font-mono py-1 animate-fadeIn">
                  ✓ Abrindo cliente de e-mail com a sua mensagem!
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
