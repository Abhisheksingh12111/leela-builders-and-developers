import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  BedDouble, 
  Maximize2, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  Download,
  CheckCircle,
  FileText
} from 'lucide-react';
import { Property } from '../types';

interface SpotlightShowcaseProps {
  property: Property;
  onOpenPropertyModal: (property: Property) => void;
  onOpenScheduleVisit: (propertyTitle?: string) => void;
}

export const SpotlightShowcase: React.FC<SpotlightShowcaseProps> = ({
  property,
  onOpenPropertyModal,
  onOpenScheduleVisit,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [brochureRequested, setBrochureRequested] = useState(false);

  const gallerySlides = [
    {
      title: 'Panoramic Sea Link & Arabian Sea Vista',
      category: 'Exterior Deck',
      url: property.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    },
    {
      title: 'Double-Height Living Salon with Italian Travertine',
      category: 'Living Space',
      url: property.images[1] || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    },
    {
      title: 'Master Presidential Suite with Wraparound Balcony',
      category: 'Master Suite',
      url: property.images[2] || 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    },
    {
      title: 'Private Sky Infinity Pool at 460 Feet Elevation',
      category: 'Amenities',
      url: property.images[3] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    },
  ];

  const handleDownloadBrochure = () => {
    setBrochureRequested(true);
    setTimeout(() => {
      setBrochureRequested(false);
    }, 4000);
  };

  return (
    <section id="spotlight" className="py-24 bg-[#080c13] relative border-b border-[#25344e]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c5a880]/10 border border-[#c5a880]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8be93] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Residence of the Month
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f3e9dc]">
              The Leela Skycrest Residences
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#a0aec0]">MahaRERA: P51900038491</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              OC Received
            </span>
          </div>
        </div>

        {/* Big Spotlight Visual Card */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0c121e] border border-[#25344e] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Left/Main Image Slider Container (8 cols) */}
            <div className="relative lg:col-span-8 min-h-[380px] lg:min-h-full overflow-hidden bg-black">
              <img
                src={gallerySlides[activeSlide].url}
                alt={gallerySlides[activeSlide].title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c13] via-[#080c13]/30 to-transparent" />

              {/* Slider Controls */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-[#080c13]/80 backdrop-blur-md border border-[#25344e] text-xs font-medium text-[#f3e9dc]">
                  {gallerySlides[activeSlide].category}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveSlide((prev) => (prev === 0 ? gallerySlides.length - 1 : prev - 1))}
                    className="p-2 rounded-full bg-[#080c13]/70 backdrop-blur-md border border-[#25344e] text-white hover:text-[#c5a880] transition-colors"
                    aria-label="Previous view"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev === gallerySlides.length - 1 ? 0 : prev + 1))}
                    className="p-2 rounded-full bg-[#080c13]/70 backdrop-blur-md border border-[#25344e] text-white hover:text-[#c5a880] transition-colors"
                    aria-label="Next view"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slide Caption Bottom Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="text-xs uppercase tracking-widest text-[#c5a880] mb-1 font-semibold">
                  Architectural Viewpoint {activeSlide + 1} of {gallerySlides.length}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#f3e9dc] font-light">
                  {gallerySlides[activeSlide].title}
                </h3>

                {/* Dots indicator */}
                <div className="flex items-center gap-2 mt-4">
                  {gallerySlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeSlide === idx ? 'w-8 bg-[#c5a880]' : 'w-2 bg-[#25344e] hover:bg-[#a0aec0]'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Information & Specifications Panel (4 cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0c121e] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#25344e]">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#c5a880] font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Worli Sea Face, South Mumbai</span>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#f3e9dc] mb-2">
                    5 BHK Sky Mansion
                  </h3>
                  <div className="text-3xl font-serif font-bold text-[#d8be93] mb-1">
                    ₹18.50 Cr
                  </div>
                  <div className="text-xs text-[#a0aec0]">
                    ₹53,620 per sq.ft (RERA Carpet Area)
                  </div>
                </div>

                {/* Key Spec Badges */}
                <div className="space-y-3 pt-4 border-t border-[#25344e]/60">
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#25344e]/40">
                    <span className="text-[#a0aec0]">RERA Carpet Area</span>
                    <span className="font-medium text-[#f3e9dc]">3,450 sq.ft</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#25344e]/40">
                    <span className="text-[#a0aec0]">Super Built-up Area</span>
                    <span className="font-medium text-[#f3e9dc]">4,850 sq.ft</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#25344e]/40">
                    <span className="text-[#a0aec0]">Floor Elevation</span>
                    <span className="font-medium text-[#f3e9dc]">46th of 58 Floors</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#25344e]/40">
                    <span className="text-[#a0aec0]">Private Parking</span>
                    <span className="font-medium text-[#f3e9dc]">4 Covered Stalls + EV</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#25344e]/40">
                    <span className="text-[#a0aec0]">Possession</span>
                    <span className="font-medium text-emerald-400">Immediate (OC Ready)</span>
                  </div>
                </div>

                {/* Curated Perks */}
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                    Signature Inclusions
                  </div>
                  <div className="text-xs text-[#cbd5e0] space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span>Dedicated high-speed private elevator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span>Unobstructed Bandra-Worli Sea Link vista</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span>Private 400-bottle temperature wine vault</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#25344e]/60 space-y-2.5">
                <button
                  onClick={() => onOpenScheduleVisit(property.title)}
                  className="w-full py-3 rounded-lg bg-[#c5a880] hover:bg-[#d8be93] text-[#090d14] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/15"
                >
                  <span>Request Private Deck Preview</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenPropertyModal(property)}
                    className="py-2.5 px-3 rounded-lg bg-[#080c13] hover:bg-[#172030] text-[#cbd5e0] hover:text-[#c5a880] border border-[#25344e] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>All Specs</span>
                  </button>

                  <button
                    onClick={handleDownloadBrochure}
                    className="py-2.5 px-3 rounded-lg bg-[#080c13] hover:bg-[#172030] text-[#cbd5e0] hover:text-[#c5a880] border border-[#25344e] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 relative"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{brochureRequested ? 'Sent to Concierge' : 'Brochure'}</span>
                  </button>
                </div>
                {brochureRequested && (
                  <p className="text-[10px] text-center text-emerald-400">
                    Confidential dossier download dispatched via encrypted link!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
