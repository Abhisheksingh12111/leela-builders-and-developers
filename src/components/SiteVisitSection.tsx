import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  Phone, 
  Send,
  Lock
} from 'lucide-react';

interface SiteVisitSectionProps {
  initialPropertyTitle?: string;
}

export const SiteVisitSection: React.FC<SiteVisitSectionProps> = ({ initialPropertyTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    propertyInterest: initialPropertyTitle || 'The Leela Skycrest Residences (Worli)',
    date: '',
    timeSlot: 'Morning (10:30 AM - 1:00 PM)',
    chauffeurService: true,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'LEELA-VIP-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(ref);
    setSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080c13] relative border-b border-[#25344e]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Context & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c5a880]/10 border border-[#c5a880]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8be93]">
              <Sparkles className="w-3.5 h-3.5" />
              Private Concierge Reservation
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#f3e9dc] leading-tight">
              Schedule a Confidential <span className="italic text-[#d8be93]">Site Visit</span> or Consultation
            </h2>

            <p className="text-sm sm:text-base text-[#a0aec0] font-light leading-relaxed">
              Experience the craftsmanship in person. Every viewing is private, unhurried, and accompanied by a Managing Partner.
            </p>

            {/* VIP Experience Highlights */}
            <div className="space-y-4 pt-4 border-t border-[#25344e]/60">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#0f1420] border border-[#25344e] flex items-center justify-center text-[#c5a880] shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#f3e9dc] uppercase tracking-wider">
                    Complimentary Chauffeur Transit
                  </div>
                  <p className="text-xs text-[#a0aec0] mt-0.5">
                    Private airport or hotel pick-up arranged for out-of-station HNWIs and NRI investors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#0f1420] border border-[#25344e] flex items-center justify-center text-[#c5a880] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#f3e9dc] uppercase tracking-wider">
                    Strict Confidentiality (NDA)
                  </div>
                  <p className="text-xs text-[#a0aec0] mt-0.5">
                    Complete identity protection for prominent industrialists, celebrities, and institutional leaders.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#0f1420] border border-[#25344e] flex items-center justify-center text-[#c5a880] shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#f3e9dc] uppercase tracking-wider">
                    Comprehensive Legal Due Diligence Packet
                  </div>
                  <p className="text-xs text-[#a0aec0] mt-0.5">
                    Receive 30-year title search records, MahaRERA, HARERA & GujRERA certificates, and sanctioned building plans.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Line Badge */}
            <div className="p-4 rounded-xl bg-[#0c121e] border border-[#25344e] flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#a0aec0]">Immediate Assistance</div>
                <div className="font-serif text-lg text-[#f3e9dc]">+91 98200 48192</div>
              </div>
              <a
                href="tel:+919820048192"
                className="px-3 py-1.5 rounded bg-[#172030] hover:bg-[#c5a880] text-[#cbd5e0] hover:text-[#090d14] text-xs font-semibold transition-all"
              >
                Call Desk
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c121e] border border-[#25344e] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Subtle gold glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/50 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                      Private Viewing Confirmed
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#f3e9dc] mt-1">
                      Welcome to the Leela Experience
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-[#080c13] border border-[#25344e] max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between text-[#a0aec0]">
                      <span>Reference Booking Code:</span>
                      <span className="font-mono text-[#f3e9dc] font-bold">{referenceCode}</span>
                    </div>
                    <div className="flex justify-between text-[#a0aec0]">
                      <span>Guest Name:</span>
                      <span className="text-[#f3e9dc]">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between text-[#a0aec0]">
                      <span>Property of Interest:</span>
                      <span className="text-[#c5a880] font-medium">{formData.propertyInterest}</span>
                    </div>
                    <div className="flex justify-between text-[#a0aec0]">
                      <span>VIP Chauffeur Transit:</span>
                      <span className="text-emerald-400 font-medium">
                        {formData.chauffeurService ? 'Requested & Assigned' : 'Self-Driven'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#a0aec0] max-w-sm mx-auto">
                    A Senior Partner will contact you within 2 hours to confirm chauffeur coordinates and the security clearance access codes.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded bg-[#172030] hover:bg-[#c5a880] text-[#f3e9dc] hover:text-[#090d14] text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Schedule Another Viewing
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#25344e]/60">
                    <h3 className="font-serif text-xl text-[#f3e9dc]">
                      Request Private Site Inspection
                    </h3>
                    <span className="text-[11px] text-[#c5a880] font-medium">Direct Developer Desk</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-[#a0aec0] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Vikramaditya Singhania"
                        className="w-full bg-[#080c13] border border-[#25344e] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f3e9dc] placeholder-[#4a5568] focus:border-[#c5a880] focus:outline-none"
                      />
                    </div>

                    {/* Phone (+91) */}
                    <div>
                      <label className="block text-xs font-medium text-[#a0aec0] mb-1.5">
                        Phone Number (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 XXXXX"
                        className="w-full bg-[#080c13] border border-[#25344e] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f3e9dc] placeholder-[#4a5568] focus:border-[#c5a880] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-[#a0aec0] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@familyoffice.in"
                        className="w-full bg-[#080c13] border border-[#25344e] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f3e9dc] placeholder-[#4a5568] focus:border-[#c5a880] focus:outline-none"
                      />
                    </div>

                    {/* Preferred City */}
                    <div>
                      <label className="block text-xs font-medium text-[#a0aec0] mb-1.5">
                        City of Interest
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#080c13] border border-[#25344e] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f3e9dc] focus:border-[#c5a880] focus:outline-none cursor-pointer"
                      >
                        <option value="Mumbai">Mumbai (Worli, Bandra, Pali Hill)</option>
                        <option value="Bangalore">Bangalore (Indiranagar, Lavelle Rd)</option>
                        <option value="Gurgaon">Gurgaon (Golf Course Road, DLF 5)</option>
                        <option value="Pune">Pune (Koregaon Park, Boat Club)</option>
                        <option value="Surat">Surat (Vesu, Piplod, Diamond Bourse)</option>
                        <option value="Goa">Goa (Assagao, Beachfront)</option>
                      </select>
                    </div>
                  </div>

                  {/* Residence / Configuration */}
                  <div>
                    <label className="block text-xs font-medium text-[#a0aec0] mb-1.5">
                      Property or Configuration
                    </label>
                    <input
                      type="text"
                      value={formData.propertyInterest}
                      onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                      placeholder="e.g. 5 BHK Sky Mansion Worli, or 4 BHK Indiranagar Villa"
                      className="w-full bg-[#080c13] border border-[#25344e] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f3e9dc] focus:border-[#c5a880] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-medium text-[#a0aec0] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#080c13] border border-[#25344e] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f3e9dc] focus:border-[#c5a880] focus:outline-none cursor-pointer"
                      />
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="block text-xs font-medium text-[#a0aec0] mb-1.5">
                        Preferred Viewing Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-[#080c13] border border-[#25344e] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f3e9dc] focus:border-[#c5a880] focus:outline-none cursor-pointer"
                      >
                        <option value="Morning">Morning (10:30 AM - 1:00 PM)</option>
                        <option value="Afternoon">Afternoon (2:00 PM - 4:30 PM)</option>
                        <option value="Sunset">Golden Hour Sunset Preview (5:00 PM - 7:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Chauffeur Service Checkbox */}
                  <label className="flex items-center gap-3 p-3 rounded-lg bg-[#080c13] border border-[#25344e] cursor-pointer hover:border-[#c5a880]/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.chauffeurService}
                      onChange={(e) => setFormData({ ...formData, chauffeurService: e.target.checked })}
                      className="w-4 h-4 accent-[#c5a880] rounded cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="text-[#f3e9dc] font-medium block">
                        Include Complimentary VIP Chauffeur Transfer
                      </span>
                      <span className="text-[#718096] text-[11px]">
                        Luxury sedan pick-up from your home, office, or private airport terminal.
                      </span>
                    </div>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="site-visit-submit-btn"
                    className="w-full py-3.5 rounded-lg bg-[#c5a880] hover:bg-[#d8be93] text-[#090d14] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Confidential Site Visit Request</span>
                  </button>

                  <div className="text-center text-[11px] text-[#718096]">
                    Protected by non-disclosure agreements. Zero unsolicited broker marketing.
                  </div>
                </form>
              )}
            </div>

            {/* Newsletter Monograph Subscription Box */}
            <div className="mt-6 p-5 rounded-xl bg-[#0c121e] border border-[#25344e] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="text-xs font-semibold text-[#f3e9dc] flex items-center justify-center sm:justify-start gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>The Leela Private Monograph</span>
                </div>
                <div className="text-[11px] text-[#a0aec0]">
                  Quarterly research on ultra-prime Indian real estate, off-market opportunities & NRI wealth flows.
                </div>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#080c13] border border-[#25344e] rounded-lg px-3 py-1.5 text-xs text-[#f3e9dc] placeholder-[#4a5568] focus:border-[#c5a880] focus:outline-none w-full sm:w-48"
                />
                <button
                  type="submit"
                  className="px-3.5 py-1.5 rounded bg-[#172030] hover:bg-[#c5a880] text-[#cbd5e0] hover:text-[#090d14] text-xs font-semibold transition-colors whitespace-nowrap"
                >
                  {newsletterSubscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
