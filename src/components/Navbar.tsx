import React, { useState, useEffect } from 'react';
import { 
  Building, 
  Phone, 
  Menu, 
  X, 
  Heart, 
  ChevronDown, 
  Compass, 
  Sparkles,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface NavbarProps {
  shortlistCount: number;
  onOpenShortlist: () => void;
  onOpenScheduleVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  shortlistCount, 
  onOpenShortlist,
  onOpenScheduleVisit 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Residences', href: '#listings' },
    { name: 'Flagship Spotlight', href: '#spotlight' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'City Guides', href: '#neighborhoods' },
    { name: 'Private Advisors', href: '#advisors' },
    { name: 'Client Reviews', href: '#testimonials' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080c13]/95 backdrop-blur-md border-b border-[#25344e]/50 py-3 shadow-2xl shadow-black/40' 
          : 'bg-gradient-to-b from-[#080c13]/90 via-[#080c13]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm border border-[#c5a880]/60 bg-[#0f1420] flex items-center justify-center text-[#c5a880] shadow-inner group-hover:border-[#c5a880] transition-colors">
              <span className="font-serif text-2xl font-bold tracking-widest text-[#d8be93]">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.2em] text-[#f3e9dc] group-hover:text-[#c5a880] transition-colors">
                LEELA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#c5a880]/80 font-medium -mt-1">
                Builders & Developers
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] tracking-wider uppercase text-[#a0aec0] hover:text-[#f3e9dc] hover:underline underline-offset-8 decoration-[#c5a880] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Shortlist Badge Button */}
            <button
              id="nav-shortlist-btn"
              onClick={onOpenShortlist}
              className="relative p-2 rounded border border-[#25344e] bg-[#0f1420] text-[#a0aec0] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors flex items-center gap-1.5 text-xs"
              title="View Shortlisted Properties"
            >
              <Heart className={`w-4 h-4 ${shortlistCount > 0 ? 'fill-[#c5a880] text-[#c5a880]' : ''}`} />
              <span className="hidden md:inline font-medium">Shortlist</span>
              {shortlistCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#c5a880] text-[#080c13] text-[10px] font-bold flex items-center justify-center ml-0.5">
                  {shortlistCount}
                </span>
              )}
            </button>

            {/* Direct Dial VIP Concierge */}
            <a
              href="tel:+919820048192"
              className="hidden xl:flex items-center gap-2 text-xs text-[#a0aec0] hover:text-[#c5a880] transition-colors py-1.5 px-2.5 rounded border border-[#25344e]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>+91 98200 48192</span>
            </a>

            {/* CTA Button */}
            <button
              id="nav-schedule-visit-btn"
              onClick={onOpenScheduleVisit}
              className="relative group overflow-hidden px-4 py-2 rounded bg-[#c5a880] text-[#090d14] text-xs font-semibold uppercase tracking-wider hover:bg-[#d8be93] transition-all shadow-md hover:shadow-[#c5a880]/20 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Visit</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenShortlist}
              className="relative p-2 text-[#a0aec0] hover:text-[#c5a880]"
              aria-label="Shortlist"
            >
              <Heart className={`w-5 h-5 ${shortlistCount > 0 ? 'fill-[#c5a880] text-[#c5a880]' : ''}`} />
              {shortlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c5a880] text-[#080c13] text-[9px] font-bold flex items-center justify-center">
                  {shortlistCount}
                </span>
              )}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e2e8f0] hover:text-[#c5a880] rounded border border-[#25344e] bg-[#0f1420]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 px-4 bg-[#0d131f] border border-[#25344e] rounded-lg shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#25344e]/60">
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                Menu & Directories
              </span>
              <span className="text-[11px] text-[#718096]">RERA Reg. MahaRERA</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-[#cbd5e0] hover:text-[#c5a880] transition-colors py-1.5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#25344e]/60 flex flex-col gap-2.5">
              <a
                href="tel:+919820048192"
                className="flex items-center justify-center gap-2 py-2.5 rounded border border-[#25344e] text-xs text-[#cbd5e0] bg-[#0f1420]"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Call Private Desk: +91 98200 48192</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScheduleVisit();
                }}
                className="w-full py-2.5 rounded bg-[#c5a880] text-[#090d14] text-xs font-semibold uppercase tracking-wider text-center"
              >
                Schedule Site Visit
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
