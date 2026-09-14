import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  BedDouble, 
  Maximize2, 
  Compass, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Phone, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  Heart,
  Download,
  IndianRupee,
  Calculator
} from 'lucide-react';
import { Property, Agent } from '../types';
import { AGENTS } from '../data/realEstateData';

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenScheduleVisit: (propertyTitle?: string) => void;
  isShortlisted: boolean;
  onToggleShortlist: (id: string) => void;
  onOpenEmiModal: (priceInCr: number) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  isOpen,
  onClose,
  onOpenScheduleVisit,
  isShortlisted,
  onToggleShortlist,
  onOpenEmiModal,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [property]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !property) return null;

  const agent = AGENTS.find((a) => a.id === property.agentId) || AGENTS[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-5xl bg-[#0c121e] border border-[#25344e] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#080c13]/95 border-b border-[#25344e]/70 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#c5a880]/15 text-[#d8be93] text-xs font-semibold uppercase tracking-wider border border-[#c5a880]/30">
              {property.status}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>{property.reraNumber}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleShortlist(property.id)}
              className="p-2 rounded-lg bg-[#0f1420] border border-[#25344e] text-[#a0aec0] hover:text-[#c5a880] transition-colors"
              title="Shortlist Property"
            >
              <Heart className={`w-4 h-4 ${isShortlisted ? 'fill-[#c5a880] text-[#c5a880]' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-[#0f1420] border border-[#25344e] text-[#a0aec0] hover:text-[#c5a880] transition-colors relative"
              title="Share Residence Link"
            >
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -bottom-8 right-0 bg-[#c5a880] text-[#090d14] text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
                  Link Copied!
                </span>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#0f1420] border border-[#25344e] text-[#cbd5e0] hover:text-white hover:border-red-500/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Main Hero Visual & Gallery Slider */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 md:h-[420px] rounded-xl overflow-hidden bg-[#080c13] border border-[#25344e]">
              <img
                src={property.images[activeImageIndex]}
                alt={`${property.title} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c13]/70 via-transparent to-transparent" />

              {/* Slider Arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#080c13]/75 backdrop-blur-md border border-[#25344e] text-[#e2e8f0] hover:text-[#c5a880] transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#080c13]/75 backdrop-blur-md border border-[#25344e] text-[#e2e8f0] hover:text-[#c5a880] transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Price & Location Overlay Banner */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <div className="text-xs text-[#c5a880] font-medium flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{property.locality}, {property.city}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#f3e9dc] font-normal">
                    {property.title}
                  </h1>
                </div>

                <div className="bg-[#080c13]/90 backdrop-blur-md px-4 py-2 rounded-lg border border-[#c5a880]/40 text-right">
                  <div className="text-[11px] uppercase tracking-wider text-[#a0aec0]">Offering Price</div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#f3e9dc]">
                    {property.priceDisplay}
                  </div>
                  <div className="text-[10px] text-[#c5a880] font-mono">{property.pricePerSqFt}</div>
                </div>
              </div>
            </div>

            {/* Thumbnail Row */}
            {property.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx ? 'border-[#c5a880] scale-95 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Specifications Grid */}
          <div className="bg-[#080c13] border border-[#25344e]/70 rounded-xl p-5">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Indian Real Estate Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3 bg-[#0f1420] rounded-lg border border-[#25344e]/50">
                <div className="text-[#a0aec0] mb-1 flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Configuration</span>
                </div>
                <div className="font-medium text-[#f3e9dc] text-sm">{property.bhk}</div>
              </div>

              <div className="p-3 bg-[#0f1420] rounded-lg border border-[#25344e]/50">
                <div className="text-[#a0aec0] mb-1 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>RERA Carpet Area</span>
                </div>
                <div className="font-medium text-[#f3e9dc] text-sm">
                  {property.carpetArea.toLocaleString('en-IN')} sq.ft
                </div>
              </div>

              <div className="p-3 bg-[#0f1420] rounded-lg border border-[#25344e]/50">
                <div className="text-[#a0aec0] mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Super Built-up Area</span>
                </div>
                <div className="font-medium text-[#f3e9dc] text-sm">
                  {property.superBuiltUpArea.toLocaleString('en-IN')} sq.ft
                </div>
              </div>

              <div className="p-3 bg-[#0f1420] rounded-lg border border-[#25344e]/50">
                <div className="text-[#a0aec0] mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Facing & Vastu</span>
                </div>
                <div className="font-medium text-[#f3e9dc] text-sm truncate">{property.facing}</div>
              </div>

              <div className="p-3 bg-[#0f1420] rounded-lg border border-[#25344e]/50">
                <div className="text-[#a0aec0] mb-1">Elevation / Floor</div>
                <div className="font-medium text-[#f3e9dc] text-sm truncate">{property.floor}</div>
              </div>

              <div className="p-3 bg-[#0f1420] rounded-lg border border-[#25344e]/50">
                <div className="text-[#a0aec0] mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Possession Status</span>
                </div>
                <div className="font-medium text-[#f3e9dc] text-sm">{property.possession}</div>
              </div>

              <div className="p-3 bg-[#0f1420] rounded-lg border border-[#25344e]/50 col-span-2">
                <div className="text-[#a0aec0] mb-1">Furnishing Status</div>
                <div className="font-medium text-[#f3e9dc] text-sm">{property.furnishing}</div>
              </div>
            </div>
          </div>

          {/* Highlights & Architectural Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-serif text-xl text-[#f3e9dc]">Architectural Highlights</h3>
              <ul className="space-y-2.5">
                {property.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e0]">
                    <div className="w-4 h-4 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] mt-0.5 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-xl text-[#f3e9dc]">Bespoke Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {property.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded bg-[#0f1420] border border-[#25344e]/40 text-xs text-[#a0aec0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                    <span className="truncate">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dedicated Advisor Connect & Action Bar */}
          <div className="bg-gradient-to-r from-[#0f1420] to-[#131c2d] border border-[#c5a880]/40 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#c5a880]"
              />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold">
                  Assigned Luxury Advisor
                </div>
                <div className="font-serif text-lg font-medium text-[#f3e9dc]">{agent.name}</div>
                <div className="text-xs text-[#a0aec0]">{agent.designation}</div>
                <div className="text-[11px] text-[#718096]">{agent.phone}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => onOpenEmiModal(property.price)}
                className="flex-1 md:flex-initial px-4 py-2.5 rounded border border-[#25344e] bg-[#080c13] hover:border-[#c5a880] text-xs font-semibold text-[#cbd5e0] hover:text-[#c5a880] transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>EMI & Stamp Duty</span>
              </button>

              <a
                href={`https://wa.me/919820048192?text=Hello%2C%20I%20am%20interested%20in%20arranging%20a%20confidential%20viewing%20for%20${encodeURIComponent(property.title)}%20(${encodeURIComponent(property.priceDisplay)}).`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-initial px-4 py-2.5 rounded bg-[#1f2c3f] hover:bg-[#25344e] text-xs font-semibold text-[#c5a880] transition-colors flex items-center justify-center gap-2 border border-[#c5a880]/30"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp VIP Desk</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenScheduleVisit(property.title);
                }}
                className="w-full md:w-auto px-5 py-2.5 rounded bg-[#c5a880] text-[#090d14] text-xs font-bold uppercase tracking-wider hover:bg-[#d8be93] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/15"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Private Viewing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
