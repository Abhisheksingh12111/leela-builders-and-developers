import React from 'react';
import { MapPin, TrendingUp, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { NEIGHBORHOODS } from '../data/realEstateData';
import { Neighborhood } from '../types';

interface NeighborhoodGuideProps {
  onSelectCity: (city: string) => void;
}

export const NeighborhoodGuide: React.FC<NeighborhoodGuideProps> = ({ onSelectCity }) => {
  return (
    <section id="neighborhoods" className="py-24 bg-[#0a0e16] relative border-b border-[#25344e]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            Prime Geographic Corridors
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f3e9dc] mb-4">
            Indian Luxury Neighborhood Guides
          </h2>
          <p className="text-sm sm:text-base text-[#a0aec0] font-light leading-relaxed">
            In-depth market intelligence covering capital appreciation trends, infrastructure catalysts, and lifestyle amenities across India's most coveted postal codes.
          </p>
        </div>

        {/* Neighborhood Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {NEIGHBORHOODS.map((area: Neighborhood) => (
            <div
              key={area.id}
              className="group bg-[#0d131f] border border-[#25344e]/70 rounded-xl overflow-hidden shadow-xl hover:border-[#c5a880]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Image with Overlay */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#080c13]">
                  <img
                    src={area.image}
                    alt={area.locality}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d131f] via-transparent to-black/30" />

                  {/* Active Listings Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#080c13]/85 backdrop-blur-md border border-[#c5a880]/40 text-[10px] font-semibold text-[#d8be93]">
                    {area.activeListingsCount} Prime Properties
                  </div>

                  {/* City Label */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-[#c5a880] font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{area.city}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h3 className="font-serif text-2xl font-light text-[#f3e9dc] group-hover:text-[#c5a880] transition-colors mb-1">
                    {area.locality}
                  </h3>
                  <div className="text-xs text-[#a0aec0] italic mb-4">
                    {area.tagline}
                  </div>

                  {/* Capital Metrics */}
                  <div className="p-3 rounded-lg bg-[#080c13] border border-[#25344e]/50 text-xs mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#a0aec0] flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#c5a880]" />
                        Average Capital Value
                      </span>
                    </div>
                    <div className="text-sm font-semibold font-serif text-[#f3e9dc]">
                      {area.avgRateSqFt}
                    </div>
                  </div>

                  {/* Lifestyle & Connectivity Details */}
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold block mb-0.5">
                        Lifestyle Profile
                      </span>
                      <p className="text-[#cbd5e0] leading-relaxed line-clamp-2">
                        {area.vibe}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold block mb-0.5">
                        Strategic Connectivity
                      </span>
                      <p className="text-[#a0aec0] leading-relaxed line-clamp-2">
                        {area.connectivity}
                      </p>
                    </div>

                    {/* Key Landmarks */}
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold block mb-1">
                        Key Landmarks
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {area.keyLandmarks.map((lm, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] bg-[#141c2c] text-[#cbd5e0] border border-[#25344e]/50"
                          >
                            {lm}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectCity(area.city.split(' ')[0])}
                  className="w-full py-2.5 px-4 rounded bg-[#172030] hover:bg-[#c5a880] text-[#f3e9dc] hover:text-[#090d14] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Explore {area.city.split(' ')[0]} Residences</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
