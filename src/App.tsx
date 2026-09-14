import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedListings } from './components/FeaturedListings';
import { SpotlightShowcase } from './components/SpotlightShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { NeighborhoodGuide } from './components/NeighborhoodGuide';
import { TeamSection } from './components/TeamSection';
import { Testimonials } from './components/Testimonials';
import { SiteVisitSection } from './components/SiteVisitSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { MortgageCalculatorModal } from './components/MortgageCalculatorModal';
import { ShortlistDrawer } from './components/ShortlistDrawer';
import { FloatingConcierge } from './components/FloatingConcierge';

import { PROPERTIES } from './data/realEstateData';
import { Property, SearchFilters } from './types';

export default function App() {
  // Filters State
  const [filters, setFilters] = useState<SearchFilters>({
    city: 'All Metros',
    propertyType: 'All Types',
    bhk: 'Any BHK',
    budgetRange: 'all',
  });

  // Shortlist State with LocalStorage persistence
  const [shortlistedIds, setShortlistedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('leela_shortlist');
      return saved ? JSON.parse(saved) : ['leela-skycrest-worli'];
    } catch {
      return ['leela-skycrest-worli'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('leela_shortlist', JSON.stringify(shortlistedIds));
    } catch {
      // Ignore localstorage errors in restricted environments
    }
  }, [shortlistedIds]);

  const toggleShortlist = (id: string) => {
    setShortlistedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Property Details Modal State
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);

  // EMI Calculator Modal State
  const [isEmiModalOpen, setIsEmiModalOpen] = useState(false);
  const [emiModalPriceCr, setEmiModalPriceCr] = useState<number>(12.5);

  // Shortlist Drawer State
  const [isShortlistDrawerOpen, setIsShortlistDrawerOpen] = useState(false);

  // Site Visit Pre-fill property title
  const [visitPropertyTitle, setVisitPropertyTitle] = useState<string>('');

  const handleOpenPropertyModal = (property: Property) => {
    setSelectedProperty(property);
    setIsPropertyModalOpen(true);
  };

  const handleOpenEmiModal = (priceCr: number) => {
    setEmiModalPriceCr(priceCr);
    setIsEmiModalOpen(true);
  };

  const handleOpenScheduleVisit = (propertyOrAdvisorTitle?: string) => {
    if (propertyOrAdvisorTitle) {
      setVisitPropertyTitle(propertyOrAdvisorTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearchSubmit = () => {
    const listingsSection = document.getElementById('listings');
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCityFromNeighborhood = (city: string) => {
    setFilters((prev) => ({ ...prev, city: city }));
    const listingsSection = document.getElementById('listings');
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shortlistedProperties = PROPERTIES.filter((p) => shortlistedIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#080c13] text-[#e2e8f0] font-sans selection:bg-[#c5a880] selection:text-[#080c13]">
      {/* Fixed Luxury Navigation */}
      <Navbar
        shortlistCount={shortlistedIds.length}
        onOpenShortlist={() => setIsShortlistDrawerOpen(true)}
        onOpenScheduleVisit={() => handleOpenScheduleVisit()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          filters={filters}
          onFilterChange={setFilters}
          onSearchSubmit={handleHeroSearchSubmit}
        />

        {/* 2. Featured Listings Grid */}
        <FeaturedListings
          properties={PROPERTIES}
          filters={filters}
          shortlistedIds={shortlistedIds}
          onToggleShortlist={toggleShortlist}
          onSelectProperty={handleOpenPropertyModal}
          onOpenEmiCalculator={handleOpenEmiModal}
        />

        {/* 3. Why Choose Us (Trust & RERA) */}
        <WhyChooseUs />

        {/* 4. Featured Flagship Property Spotlight */}
        <SpotlightShowcase
          property={PROPERTIES[0]}
          onOpenPropertyModal={handleOpenPropertyModal}
          onOpenScheduleVisit={handleOpenScheduleVisit}
        />

        {/* 5. Indian Cities & Neighborhoods Guide */}
        <NeighborhoodGuide onSelectCity={handleSelectCityFromNeighborhood} />

        {/* 6. Private Advisory Team */}
        <TeamSection onOpenScheduleVisit={handleOpenScheduleVisit} />

        {/* 7. Client Reviews & Testimonials */}
        <Testimonials />

        {/* 8. Site Visit & Consultation Booking Form */}
        <SiteVisitSection initialPropertyTitle={visitPropertyTitle} />
      </main>

      {/* 9. Comprehensive Indian Real Estate Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isPropertyModalOpen}
        onClose={() => setIsPropertyModalOpen(false)}
        onOpenScheduleVisit={handleOpenScheduleVisit}
        isShortlisted={selectedProperty ? shortlistedIds.includes(selectedProperty.id) : false}
        onToggleShortlist={toggleShortlist}
        onOpenEmiModal={handleOpenEmiModal}
      />

      <MortgageCalculatorModal
        isOpen={isEmiModalOpen}
        onClose={() => setIsEmiModalOpen(false)}
        initialPriceInCr={emiModalPriceCr}
      />

      <ShortlistDrawer
        isOpen={isShortlistDrawerOpen}
        onClose={() => setIsShortlistDrawerOpen(false)}
        shortlistedProperties={shortlistedProperties}
        onRemoveFromShortlist={toggleShortlist}
        onSelectProperty={handleOpenPropertyModal}
        onOpenScheduleVisit={() => handleOpenScheduleVisit('All Shortlisted Residences')}
      />

      {/* Floating VIP Concierge Launcher */}
      <FloatingConcierge />
    </div>
  );
}
