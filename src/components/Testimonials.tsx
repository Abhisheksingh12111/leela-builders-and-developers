import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/realEstateData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#080c13] relative border-b border-[#25344e]/40 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            Verified Client Accolades
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f3e9dc] mb-4">
            Trusted by India’s Discerning Buyers
          </h2>
          <p className="text-sm text-[#a0aec0] font-light">
            Read first-hand accounts from business leaders, medical luminaries, and NRI investors who found their flagship residences through Leela.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div className="relative bg-[#0c121e] border border-[#25344e] rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl">
          <Quote className="w-12 h-12 text-[#c5a880]/20 absolute top-6 right-8 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            {/* Avatar & Verification Seal */}
            <div className="relative shrink-0 text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#c5a880] p-0.5 bg-[#080c13]">
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Buyer</span>
              </div>
            </div>

            {/* Testimonial Body */}
            <div className="flex-1 text-center md:text-left space-y-4">
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c5a880] text-[#c5a880]" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#f3e9dc] font-light leading-relaxed italic">
                "{current.quote}"
              </p>

              {/* Client Info & Property Tag */}
              <div className="pt-2 border-t border-[#25344e]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#f3e9dc]">
                    {current.clientName}
                  </h4>
                  <p className="text-xs text-[#a0aec0]">
                    {current.designation}
                  </p>
                </div>

                <div className="text-xs sm:text-right">
                  <div className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold">
                    Acquired Residence
                  </div>
                  <div className="text-[#cbd5e0] font-medium">
                    {current.propertyPurchased}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-[#25344e]/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#c5a880]' : 'w-2 bg-[#25344e] hover:bg-[#a0aec0]'
                  }`}
                  aria-label={`Jump to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg bg-[#080c13] border border-[#25344e] text-[#cbd5e0] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-[#080c13] border border-[#25344e] text-[#cbd5e0] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
