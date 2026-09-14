import React from 'react';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] text-[#a0aec0] border-t border-[#25344e]/60 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#25344e]/50">
          {/* Column 1: Brand & Pedigree (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded border border-[#c5a880]/60 bg-[#0f1420] flex items-center justify-center text-[#c5a880]">
                <span className="font-serif text-xl font-bold tracking-widest text-[#d8be93]">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold tracking-[0.2em] text-[#f3e9dc]">
                  LEELA
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#c5a880] font-medium -mt-1">
                  Builders & Developers
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a0aec0] leading-relaxed max-w-sm">
              India’s premier boutique real estate agency, curating ultra-prime residences, sky mansions, and private coastal estates for distinguished family offices, institutional investors, and global NRIs.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#0c121e] border border-[#25344e] flex items-center justify-center text-[#a0aec0] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#0c121e] border border-[#25344e] flex items-center justify-center text-[#a0aec0] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#0c121e] border border-[#25344e] flex items-center justify-center text-[#a0aec0] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
                aria-label="YouTube Architectural Tours"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f3e9dc] font-semibold">
              Portfolios
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#listings" className="hover:text-[#c5a880] transition-colors">
                  Mumbai Sky Mansions
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-[#c5a880] transition-colors">
                  Gurgaon Golf Penthouses
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-[#c5a880] transition-colors">
                  Bangalore Garden Villas
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-[#c5a880] transition-colors">
                  Goa Coastal Estates
                </a>
              </li>
              <li>
                <a href="#listings" className="hover:text-[#c5a880] transition-colors">
                  Surat Diamond Mansions
                </a>
              </li>
              <li>
                <a href="#spotlight" className="hover:text-[#c5a880] transition-colors">
                  Flagship Spotlight
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#c5a880] transition-colors">
                  Title Verification Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Indian Office Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f3e9dc] font-semibold">
              Regional Offices
            </h4>
            <div className="space-y-3 text-[11px]">
              <div>
                <span className="text-[#c5a880] font-medium block">Mumbai Corporate Office:</span>
                <p className="text-[#cbd5e0]">
                  Suite 1402, Maker Chambers V, Nariman Point, Mumbai, Maharashtra 400021
                </p>
              </div>

              <div>
                <span className="text-[#c5a880] font-medium block">Bangalore Regional Suite:</span>
                <p className="text-[#cbd5e0]">
                  Level 9, Concorde Tower, UB City, 1 Vittal Mallya Road, Bengaluru, Karnataka 560001
                </p>
              </div>

              <div>
                <span className="text-[#c5a880] font-medium block">Gurgaon Executive Lounge:</span>
                <p className="text-[#cbd5e0]">
                  Two Horizon Center, Golf Course Road, DLF Phase 5, Gurugram, Haryana 122002
                </p>
              </div>

              <div>
                <span className="text-[#c5a880] font-medium block">Surat Private Wealth Suite:</span>
                <p className="text-[#cbd5e0]">
                  Tower C, Surat Diamond Bourse, DREAM City, Khajod, Surat, Gujarat 395007
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Private Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f3e9dc] font-semibold">
              Private Client Desk
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span className="text-[#f3e9dc]">+91 98200 48192 (Concierge)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>+91 22 6902 4400 (Corporate Board)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <span className="text-[#f3e9dc]">advisory@leelabuilders.in</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0c121e] border border-[#25344e] mt-3">
              <div className="text-[10px] text-[#c5a880] font-semibold uppercase tracking-wider mb-1">
                NRI & Offshore Family Offices
              </div>
              <p className="text-[11px] text-[#a0aec0]">
                Dedicated desks supporting FEMA guidelines, NRE/NRO repatriable banking accounts, and RBI compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: RERA Registrations Bar */}
        <div className="py-6 border-b border-[#25344e]/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[11px] font-mono text-[#cbd5e0]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>MahaRERA Reg No: A51900018924</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>HARERA Reg No: RC/HARERA/GGM/2023/84</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>KRERA Reg No: PRM/KA/RERA/1251/310/AG/220914</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>GujRERA Reg No: PR/GJ/SURAT/SURAT CITY/SUDA/AA00192</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#c5a880] hover:text-[#f3e9dc] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#718096]">
          <p>
            © {new Date().getFullYear()} Leela Builders & Developers Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#a0aec0] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#a0aec0] transition-colors">RERA Disclosures</a>
            <a href="#" className="hover:text-[#a0aec0] transition-colors">Terms of Representation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
