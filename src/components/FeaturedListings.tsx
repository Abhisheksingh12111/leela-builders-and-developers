import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  ShieldCheck, 
  Heart, 
  ArrowUpRight, 
  Calculator,
  Compass,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { Property, SearchFilters } from '../types';

interface FeaturedListingsProps {
  properties: Property[];
  filters: SearchFilters;
  shortlistedIds: string[];
  onToggleShortlist: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onOpenEmiCalculator: (priceInCr: number) => void;
}

export const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  properties,
  filters,
  shortlistedIds,
  onToggleShortlist,
  onSelectProperty,
  onOpenEmiCalculator,
}) => {
  const [selectedCityTab, setSelectedCityTab] = useState<string>('All');
  const cityTabs = ['All', 'Mumbai', 'Bangalore', 'Gurgaon', 'Pune', 'Surat', 'Goa'];

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // Tab filter
      if (selectedCityTab !== 'All' && p.city !== selectedCityTab) {
        return false;
      }
      // Hero filter if applied
      if (filters.city !== 'All Metros' && p.city !== filters.city) {
        return false;
      }
      if (filters.propertyType !== 'All Types' && p.propertyType !== filters.propertyType) {
        return false;
      }
      if (filters.bhk !== 'Any BHK') {
        if (filters.bhk === '3 BHK' && !p.bhk.includes('3')) return false;
        if (filters.bhk === '4 BHK' && !p.bhk.includes('4')) return false;
        if (filters.bhk === '5+ BHK' && !p.bhk.includes('5')) return false;
      }
      if (filters.budgetRange !== 'all') {
        if (filters.budgetRange === '5-10' && (p.price < 5 || p.price > 10)) return false;
        if (filters.budgetRange === '10-20' && (p.price < 10 || p.price > 20)) return false;
        if (filters.budgetRange === '20+' && p.price < 20) return false;
      }
      return true;
    });
  }, [properties, selectedCityTab, filters]);

  return (
    <section id="listings" className="py-20 bg-[#080c13] relative border-b border-[#25344e]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold mb-2">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              Curated Private Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f3e9dc]">
              Featured Luxury Residences
            </h2>
            <p className="text-sm text-[#a0aec0] mt-2 max-w-xl">
              RERA-compliant sky villas, golf penthouses, and private estates vetted for undisputed titles and generational value.
            </p>
          </div>

          {/* City Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0f1420] p-1.5 rounded-lg border border-[#25344e]/70">
            {cityTabs.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCityTab(city)}
                className={`px-3.5 py-1.5 rounded text-xs font-medium tracking-wide transition-all ${
                  selectedCityTab === city
                    ? 'bg-[#c5a880] text-[#090d14] font-semibold shadow'
                    : 'text-[#a0aec0] hover:text-[#f3e9dc] hover:bg-[#172030]'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        {filteredProperties.length === 0 ? (
          <div className="py-16 text-center bg-[#0d131f] border border-[#25344e]/50 rounded-xl max-w-xl mx-auto">
            <SlidersHorizontal className="w-8 h-8 text-[#c5a880] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl text-[#f3e9dc] mb-2">No residences match your current criteria</h3>
            <p className="text-xs text-[#a0aec0] mb-4">
              We frequently have off-market and unlisted properties that match private requirements.
            </p>
            <button
              onClick={() => setSelectedCityTab('All')}
              className="px-4 py-2 text-xs font-semibold rounded bg-[#172030] text-[#c5a880] border border-[#c5a880]/30 hover:bg-[#c5a880] hover:text-[#090d14] transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((property) => {
              const isShortlisted = shortlistedIds.includes(property.id);
              return (
                <div
                  key={property.id}
                  className="group relative bg-[#0c121e] border border-[#25344e]/70 rounded-xl overflow-hidden shadow-xl hover:border-[#c5a880]/70 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#080c13]">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-black/40" />

                    {/* Status Badge */}
                    <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
                      <span className="px-2.5 py-1 rounded bg-[#080c13]/85 backdrop-blur-md border border-[#c5a880]/40 text-[10px] font-semibold uppercase tracking-wider text-[#d8be93]">
                        {property.status}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#0f1420]/80 backdrop-blur-md text-[9px] text-[#cbd5e0] border border-[#25344e]/50">
                        {property.propertyType}
                      </span>
                    </div>

                    {/* Shortlist Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleShortlist(property.id);
                      }}
                      className="absolute top-3.5 right-3.5 p-2 rounded-full bg-[#080c13]/70 backdrop-blur-md border border-[#25344e] text-[#e2e8f0] hover:text-[#c5a880] transition-colors"
                      title={isShortlisted ? 'Remove from Shortlist' : 'Add to Shortlist'}
                      aria-label="Toggle shortlist"
                    >
                      <Heart className={`w-4 h-4 ${isShortlisted ? 'fill-[#c5a880] text-[#c5a880]' : ''}`} />
                    </button>

                    {/* Price Tag Overlay on Bottom Image */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
                      <div>
                        <div className="text-[11px] font-light uppercase tracking-wider text-[#a0aec0]">
                          Offered at
                        </div>
                        <div className="text-2xl font-serif font-bold text-[#f3e9dc] tracking-tight flex items-baseline gap-2">
                          <span>{property.priceDisplay}</span>
                          <span className="text-[11px] font-sans font-normal text-[#c5a880]">
                            ({property.pricePerSqFt})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Locality & City */}
                      <div className="flex items-center gap-1.5 text-xs text-[#c5a880] font-medium mb-1">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{property.locality}, {property.city}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-normal text-[#f3e9dc] group-hover:text-[#c5a880] transition-colors line-clamp-1 mb-2">
                        {property.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-xs text-[#a0aec0] line-clamp-2 leading-relaxed mb-4">
                        {property.tagline}
                      </p>

                      {/* Key Indian Real Estate Metrics */}
                      <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#25344e]/50 text-xs mb-4">
                        <div className="flex items-center gap-2 text-[#cbd5e0]">
                          <BedDouble className="w-4 h-4 text-[#c5a880] shrink-0" />
                          <span className="truncate">{property.bhk}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#cbd5e0]">
                          <Maximize2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                          <span>{property.carpetArea.toLocaleString('en-IN')} sq.ft <span className="text-[10px] text-[#718096]">(Carpet)</span></span>
                        </div>
                      </div>

                      {/* RERA Tag */}
                      <div className="flex items-center justify-between text-[11px] text-[#718096] mb-4">
                        <div className="flex items-center gap-1.5 truncate">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate font-mono text-[10px] text-[#a0aec0]">{property.reraNumber}</span>
                        </div>
                        <span className="text-emerald-400 font-medium text-[10px] shrink-0">RERA Verified</span>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => onSelectProperty(property)}
                        className="flex-1 py-2.5 px-4 rounded bg-[#172030] hover:bg-[#c5a880] text-[#f3e9dc] hover:text-[#090d14] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 group/btn"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                      <button
                        onClick={() => onOpenEmiCalculator(property.price)}
                        className="p-2.5 rounded bg-[#0f1420] border border-[#25344e] text-[#a0aec0] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
                        title="Calculate Indian Home Loan EMI"
                      >
                        <Calculator className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
