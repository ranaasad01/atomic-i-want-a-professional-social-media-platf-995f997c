export interface Company {
  id: string;
  name: string;
  logo: string;
  coverPhoto: string;
  tagline: string;
  about: string;
  industry: string;
  size: string;
  headquarters: string;
  website: string;
  founded: string;
  followers: number;
  isFollowing: boolean;
  specialties: string[];
  jobCount: number;
}

export const mockCompanies: Company[] = [
  {
    id: "stripe",
    name: "Stripe",
    logo: "/images/stripe-company-logo.jpg",
    coverPhoto: "/images/stripe-company-cover.jpg",
    tagline: "Financial infrastructure for the internet",
    about: "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance.",
    industry: "Financial Technology",
    size: "5,001 - 10,000 employees",
    headquarters: "San Francisco, CA",
    website: "https://stripe.com",
    founded: "2010",
    followers: 892400,
    isFollowing: true,
    specialties: ["Payments", "APIs", "Fintech", "E-commerce", "Billing", "Fraud Prevention"],
    jobCount: 47,
  },
  {
    id: "figma",
    name: "Figma",
    logo: "/images/figma-company-logo.jpg",
    coverPhoto: "/images/figma-company-cover.jpg",
    tagline: "Design together, build faster",
    about: "Figma is a collaborative interface design tool. We're building a platform that brings together everyone involved in the design process—from ideation to development—so teams can ship better products, faster. Our mission is to make design accessible to everyone.",
    industry: "Software / Design Tools",
    size: "1,001 - 5,000 employees",
    headquarters: "San Francisco, CA",
    website: "https://figma.com",
    founded: "2012",
    followers: 654200,
    isFollowing: false,
    specialties: ["Design Tools", "Collaboration", "Prototyping", "Design Systems", "UI/UX"],
    jobCount: 23,
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "/images/airbnb-company-logo.jpg",
    coverPhoto: "/images/airbnb-company-cover.jpg",
    tagline: "Belong anywhere",
    about: "Airbnb is an online marketplace that connects people who want to rent out their homes with people looking for accommodations in that locale. We believe in a world where anyone can belong anywhere, and we are committed to creating a world where anyone can belong anywhere.",
    industry: "Travel & Hospitality",
    size: "10,001+ employees",
    headquarters: "San Francisco, CA",
    website: "https://airbnb.com",
    founded: "2008",
    followers: 2341000,
    isFollowing: true,
    specialties: ["Travel", "Hospitality", "Marketplace", "Community", "Experiences"],
    jobCount: 89,
  },
];

export const getCompanyById = (id: string): Company | undefined => {
  return mockCompanies.find((c) => c.id === id);
};
