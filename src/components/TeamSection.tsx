import React from 'react';
import { Phone, Mail, MessageSquare, Award, Sparkles, ArrowRight } from 'lucide-react';
import { AGENTS } from '../data/realEstateData';
import { Agent } from '../types';

interface TeamSectionProps {
  onOpenScheduleVisit: (advisorName?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenScheduleVisit }) => {
  return (
    <section id="advisors" className="py-24 bg-[#0a0e16] relative border-b border-[#25344e]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            Private Client Advisory Group
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f3e9dc] mb-4">
            India’s Foremost Luxury Property Partners
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light leading-relaxed">
            Our managing partners operate with the discretion of private bankers and the precision of chartered surveyors, representing high-net-worth individuals, tech founders, and NRI families globally.
          </p>
        </div>

        {/* 4 Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENTS.map((agent: Agent) => (
            <div
              key={agent.id}
              className="bg-[#0d131f] border border-[#25344e]/70 rounded-xl overflow-hidden shadow-xl hover:border-[#c5a880]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Portrait with luxury gold-accented frame */}
                <div className="relative h-72 w-full overflow-hidden bg-[#080c13]">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d131f] via-transparent to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#080c13]/85 backdrop-blur-md border border-[#c5a880]/40 text-[10px] font-semibold text-[#d8be93]">
                    {agent.experience}
                  </div>

                  {/* Volume Ticker */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[10px] uppercase tracking-wider text-[#a0aec0]">
                      Transaction Track Record
                    </div>
                    <div className="font-serif text-base font-semibold text-[#f3e9dc]">
                      {agent.transactionsVolume}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-medium text-[#f3e9dc] group-hover:text-[#c5a880] transition-colors mb-0.5">
                    {agent.name}
                  </h3>
                  <div className="text-xs text-[#c5a880] font-medium mb-3">
                    {agent.designation}
                  </div>

                  <p className="text-xs text-[#a0aec0] leading-relaxed line-clamp-3 mb-4">
                    {agent.bio}
                  </p>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {agent.specialization.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] bg-[#080c13] text-[#cbd5e0] border border-[#25344e]/50"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#25344e]/50 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:${agent.phone}`}
                      className="p-2 rounded bg-[#080c13] hover:bg-[#172030] text-[#a0aec0] hover:text-[#c5a880] border border-[#25344e] transition-colors"
                      title="Call Advisor"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/${agent.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(agent.name)}%2C%20I%20would%20like%20to%20consult%20regarding%20luxury%20properties.`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded bg-[#080c13] hover:bg-[#172030] text-[#a0aec0] hover:text-emerald-400 border border-[#25344e] transition-colors"
                      title="WhatsApp Confidential Chat"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="p-2 rounded bg-[#080c13] hover:bg-[#172030] text-[#a0aec0] hover:text-[#c5a880] border border-[#25344e] transition-colors"
                      title="Email Advisor"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => onOpenScheduleVisit(agent.name)}
                    className="px-3 py-1.5 rounded bg-[#172030] hover:bg-[#c5a880] text-[#f3e9dc] hover:text-[#090d14] text-[11px] font-semibold tracking-wide transition-all"
                  >
                    Consult
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
