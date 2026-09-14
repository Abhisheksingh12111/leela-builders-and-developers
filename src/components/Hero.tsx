import React from 'react';
import { Search, MapPin, Home, Key, IndianRupee, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { SearchFilters } from '../types';

interface HeroProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
  onSearchSubmit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  filters, 
  onFilterChange, 
  onSearchSubmit 
}) => {
  const cities = ['All Metros', 'Mumbai', 'Bangalore', 'Gurgaon', 'Pune', 'Surat', 'Goa'];
  const propertyTypes = ['All Types', 'Sky Villa', 'Luxury High-Rise', 'Penthouse', 'Private Estate'];
  const bhkOptions = ['Any BHK', '3 BHK', '4 BHK', '5+ BHK'];
  const budgetRanges = [
    { label: 'Any Budget', value: 'all' },
    { label: '₹5 Cr – ₹10 Cr', value: '5-10' },
    { label: '₹10 Cr – ₹20 Cr', value: '10-20' },
    { label: '₹20 Cr+', value: '20+' },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Navy/Charcoal Luxury Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Indian Penthouse Villa"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c13] via-[#080c13]/75 to-[#080c13]/40" />
        <div className="absolute inset-0 bg-[#080c13]/50" />
        {/* Subtle decorative gold light glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#0f1420]/80 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8be93]">
            RERA Certified Ultra-Prime Residences • Est. 1998
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#f3e9dc] tracking-tight leading-[1.1] mb-6">
          Architects of <span className="italic font-normal text-[#d8be93]">Timeless Luxury</span> <br className="hidden sm:inline" />
          Living Across India
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#a0aec0] font-light leading-relaxed mb-10">
          Curating handpicked sea-facing sky mansions, golf penthouses, and private coastal estates in <strong className="text-[#cbd5e0] font-medium">Mumbai, Bangalore, Gurgaon, Pune, Surat, and Goa</strong> for the discerning few.
        </p>

        {/* Search Bar Overlay */}
        <div className="max-w-4xl mx-auto bg-[#0d131f]/95 backdrop-blur-md border border-[#25344e] rounded-xl p-3 sm:p-4 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {/* City Selector */}
            <div className="relative bg-[#080c13] border border-[#25344e]/70 rounded-lg p-2.5 hover:border-[#c5a880]/60 transition-colors">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#a0aec0] flex items-center gap-1.5 mb-1">
                <MapPin className="w-3 h-3 text-[#c5a880]" />
                Indian City
              </label>
              <select
                id="search-city-select"
                value={filters.city}
                onChange={(e) => onFilterChange({ ...filters, city: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#f3e9dc] focus:outline-none cursor-pointer"
              >
                {cities.map((c) => (
                  <option key={c} value={c} className="bg-[#0f1420] text-[#f3e9dc]">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="relative bg-[#080c13] border border-[#25344e]/70 rounded-lg p-2.5 hover:border-[#c5a880]/60 transition-colors">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#a0aec0] flex items-center gap-1.5 mb-1">
                <Home className="w-3 h-3 text-[#c5a880]" />
                Property Type
              </label>
              <select
                id="search-type-select"
                value={filters.propertyType}
                onChange={(e) => onFilterChange({ ...filters, propertyType: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#f3e9dc] focus:outline-none cursor-pointer"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t} className="bg-[#0f1420] text-[#f3e9dc]">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* BHK Selector */}
            <div className="relative bg-[#080c13] border border-[#25344e]/70 rounded-lg p-2.5 hover:border-[#c5a880]/60 transition-colors">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#a0aec0] flex items-center gap-1.5 mb-1">
                <Key className="w-3 h-3 text-[#c5a880]" />
                Configuration
              </label>
              <select
                id="search-bhk-select"
                value={filters.bhk}
                onChange={(e) => onFilterChange({ ...filters, bhk: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#f3e9dc] focus:outline-none cursor-pointer"
              >
                {bhkOptions.map((b) => (
                  <option key={b} value={b} className="bg-[#0f1420] text-[#f3e9dc]">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range */}
            <div className="relative bg-[#080c13] border border-[#25344e]/70 rounded-lg p-2.5 hover:border-[#c5a880]/60 transition-colors">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#a0aec0] flex items-center gap-1.5 mb-1">
                <IndianRupee className="w-3 h-3 text-[#c5a880]" />
                Budget (INR)
              </label>
              <select
                id="search-budget-select"
                value={filters.budgetRange}
                onChange={(e) => onFilterChange({ ...filters, budgetRange: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#f3e9dc] focus:outline-none cursor-pointer"
              >
                {budgetRanges.map((r) => (
                  <option key={r.value} value={r.value} className="bg-[#0f1420] text-[#f3e9dc]">
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CTA Submit Button */}
          <div className="mt-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#25344e]/40">
            <div className="flex items-center gap-2 text-[11px] text-[#718096]">
              <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>All properties verified under MahaRERA / HARERA / KRERA / GujRERA</span>
            </div>
            <button
              id="hero-search-submit-btn"
              onClick={onSearchSubmit}
              className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#c5a880] text-[#090d14] font-semibold text-xs uppercase tracking-wider hover:bg-[#d8be93] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/15 group"
            >
              <span>Explore Residences</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Brand Metric Ticker */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#25344e]/50">
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#f3e9dc]">₹4,200+ Cr</div>
            <div className="text-[11px] uppercase tracking-wider text-[#a0aec0] mt-0.5">Curated Portfolios</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#c5a880]">100% RERA</div>
            <div className="text-[11px] uppercase tracking-wider text-[#a0aec0] mt-0.5">Verified Clear Titles</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#f3e9dc]">35+ Enclaves</div>
            <div className="text-[11px] uppercase tracking-wider text-[#a0aec0] mt-0.5">In Mumbai, NCR & Blr</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#c5a880]">28+ Years</div>
            <div className="text-[11px] uppercase tracking-wider text-[#a0aec0] mt-0.5">Boutique Heritage</div>
          </div>
        </div>
      </div>
    </section>
  );
};
