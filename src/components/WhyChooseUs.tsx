import React from 'react';
import { ShieldCheck, Award, Briefcase, Landmark, CheckCircle2, Lock, FileCheck2 } from 'lucide-react';
import { TRUST_POINTS } from '../data/realEstateData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#c5a880]" />;
      case 'Briefcase':
        return <Briefcase className="w-7 h-7 text-[#c5a880]" />;
      case 'Award':
        return <Award className="w-7 h-7 text-[#c5a880]" />;
      case 'Building2':
      default:
        return <Landmark className="w-7 h-7 text-[#c5a880]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#0a0e16] relative border-b border-[#25344e]/40 overflow-hidden">
      {/* Background aesthetic glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            Bespoke Standards of Integrity
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f3e9dc] mb-4">
            Why Discerning Clients Choose Leela
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light leading-relaxed">
            In an Indian real estate ecosystem fraught with legal complexities and developer delays, Leela Builders & Developers operates as your impenetrable institutional shield.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.id}
              className="relative p-6 rounded-xl bg-[#0d131f] border border-[#25344e]/70 hover:border-[#c5a880]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-lg bg-[#080c13] border border-[#25344e] flex items-center justify-center mb-6 group-hover:border-[#c5a880]/50 transition-colors shadow-inner">
                  {getIcon(point.icon)}
                </div>

                {/* Badge */}
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#c5a880]/10 text-[#d8be93] border border-[#c5a880]/20 mb-3">
                  {point.badge}
                </span>

                {/* Title */}
                <h3 className="font-serif text-lg font-medium text-[#f3e9dc] mb-1 group-hover:text-[#c5a880] transition-colors">
                  {point.title}
                </h3>
                
                <div className="text-xs text-[#c5a880] font-medium mb-3">
                  {point.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs text-[#a0aec0] leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Card Footer accent */}
              <div className="pt-6 mt-6 border-t border-[#25344e]/40 flex items-center gap-2 text-[11px] text-[#718096]">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certified Due Diligence</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Assurance Bar */}
        <div className="mt-12 p-5 rounded-xl bg-gradient-to-r from-[#0c121e] via-[#101726] to-[#0c121e] border border-[#25344e] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-medium text-[#f3e9dc]">
                100% Escrow & Clean Title Guarantee Across Maharashtra, Karnataka, NCR, and Gujarat
              </div>
              <div className="text-[11px] text-[#a0aec0]">
                All agreements registered strictly in accordance with Real Estate (Regulation and Development) Act, 2016.
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-[#c5a880] px-3 py-1.5 rounded bg-[#080c13] border border-[#25344e] whitespace-nowrap">
            Zero Litigation Record • Since 1998
          </div>
        </div>
      </div>
    </section>
  );
};
