export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number; // in Crores (e.g. 8.5)
  priceDisplay: string; // e.g. "₹8.50 Cr"
  pricePerSqFt: string; // e.g. "₹34,500 / sq.ft"
  locality: string;
  city: 'Mumbai' | 'Bangalore' | 'Gurgaon' | 'Pune' | 'Goa' | 'Hyderabad' | 'Surat';
  bhk: string; // e.g. "4 BHK Ultra-Luxe Suite", "5 BHK Sky Villa"
  carpetArea: number; // in sq.ft
  superBuiltUpArea: number; // in sq.ft
  reraNumber: string;
  reraVerified: boolean;
  status: 'Ready to Move' | 'Under Construction' | 'Immediate Handover' | 'Signature Launch';
  propertyType: 'Sky Villa' | 'Luxury High-Rise' | 'Penthouse' | 'Private Estate' | 'Golf Residence';
  images: string[];
  featured: boolean;
  floor: string;
  facing: string;
  furnishing: string;
  amenities: string[];
  highlights: string[];
  floorPlanUrl?: string;
  possession: string;
  agentId: string;
}

export interface Agent {
  id: string;
  name: string;
  designation: string;
  experience: string;
  transactionsVolume: string;
  bio: string;
  phone: string;
  email: string;
  image: string;
  specialization: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  propertyPurchased: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface Neighborhood {
  id: string;
  city: string;
  locality: string;
  tagline: string;
  image: string;
  avgRateSqFt: string;
  vibe: string;
  connectivity: string;
  keyLandmarks: string[];
  activeListingsCount: number;
}

export interface SearchFilters {
  city: string;
  propertyType: string;
  bhk: string;
  budgetRange: string;
}
