import React, { useState } from 'react';
import { MessageSquare, Phone, X, Shield, Sparkles } from 'lucide-react';

export const FloatingConcierge: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const predefinedInquiries = [
    {
      title: 'MahaRERA & HARERA Verification',
      text: 'Hello Leela Concierge, I would like to verify the RERA title search and Occupancy Certificate status for your luxury listings.',
    },
    {
      title: 'Worli Sea Face Sky Mansions',
      text: 'Hello, I am interested in exploring available high-floor sea-facing sky mansions in Worli/Bandra.',
    },
    {
      title: 'NRI Repatriation & Advisory',
      text: 'Hello, I am an NRI buyer seeking confidential advisory on RBI/FEMA compliance and high-value acquisitions.',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {expanded && (
        <div className="mb-3 w-80 bg-[#0c121e] border border-[#c5a880]/50 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#25344e]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-serif font-medium text-[#f3e9dc]">
                Leela VIP Concierge Desk
              </span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-[#718096] hover:text-[#f3e9dc]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-2.5 text-xs text-[#a0aec0]">
            Speak directly with a Senior Managing Partner via encrypted WhatsApp or priority call.
          </div>

          {/* Quick options */}
          <div className="space-y-1.5 mb-3">
            {predefinedInquiries.map((inq, i) => (
              <a
                key={i}
                href={`https://wa.me/919820048192?text=${encodeURIComponent(inq.text)}`}
                target="_blank"
                rel="noreferrer"
                className="block p-2 rounded-lg bg-[#080c13] hover:bg-[#172030] text-[11px] text-[#cbd5e0] hover:text-[#c5a880] border border-[#25344e] transition-all"
              >
                {inq.title}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#25344e] flex items-center justify-between">
            <a
              href="tel:+919820048192"
              className="flex items-center gap-1.5 text-xs text-[#cbd5e0] hover:text-[#c5a880]"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>+91 98200 48192</span>
            </a>
            <span className="text-[10px] text-emerald-400 font-medium">Available 24/7</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        id="floating-concierge-toggle"
        onClick={() => setExpanded(!expanded)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#c5a880] to-[#d8be93] text-[#090d14] font-bold text-xs shadow-xl shadow-black/60 hover:scale-105 transition-all"
        aria-label="Toggle VIP Concierge"
      >
        <MessageSquare className="w-4 h-4 text-[#090d14]" />
        <span className="tracking-wider uppercase">VIP Concierge</span>
        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping absolute top-1.5 right-1.5" />
      </button>
    </div>
  );
};
