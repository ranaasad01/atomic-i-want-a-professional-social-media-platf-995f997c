export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  schoolLogo: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  activities?: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  endorsements: number;
  isEndorsed: boolean;
}

export interface Recommendation {
  id: string;
  authorName: string;
  authorAvatar: string;
  authorHeadline: string;
  relationship: string;
  content: string;
  date: string;
}

export const mockExperience: Experience[] = [
  {
    id: "e1",
    title: "Senior Product Manager",
    company: "TechCorp",
    companyLogo: "/images/techcorp-company-logo.jpg",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: null,
    isCurrent: true,
    description: "Leading product strategy for TechCorp's core SaaS platform serving 50,000+ enterprise customers. Grew key metrics by 40% YoY through data-driven roadmap prioritization and cross-functional collaboration. Managing a team of 3 associate PMs.",
  },
  {
    id: "e2",
    title: "Product Manager",
    company: "Stripe",
    companyLogo: "/images/stripe-company-logo.jpg",
    location: "San Francisco, CA",
    startDate: "Mar 2019",
    endDate: "Dec 2021",
    isCurrent: false,
    description: "Owned the Stripe Dashboard product used by 2M+ developers. Launched 12 major features including the new Analytics suite, which drove a 25% increase in dashboard engagement. Collaborated with engineering, design, and data science teams.",
  },
  {
    id: "e3",
    title: "Associate Product Manager",
    company: "Google",
    companyLogo: "/images/google-company-logo.jpg",
    location: "Mountain View, CA",
    startDate: "Jul 2017",
    endDate: "Feb 2019",
    isCurrent: false,
    description: "Part of Google's APM program. Worked on Google Workspace (formerly G Suite) focusing on Google Docs collaboration features. Shipped real-time commenting improvements used by 1B+ users.",
  },
];

export const mockEducation: Education[] = [
  {
    id: "ed1",
    school: "Stanford University",
    schoolLogo: "/images/stanford-university-logo.jpg",
    degree: "Master of Science",
    field: "Computer Science",
    startYear: "2015",
    endYear: "2017",
    activities: "Product Management Club, Women in Tech, Hackathon organizer",
    description: "Focused on Human-Computer Interaction and Machine Learning. Thesis on 'Designing for Cognitive Load in Enterprise Software'.",
  },
  {
    id: "ed2",
    school: "UC Berkeley",
    schoolLogo: "/images/uc-berkeley-logo.jpg",
    degree: "Bachelor of Science",
    field: "Electrical Engineering & Computer Science",
    startYear: "2011",
    endYear: "2015",
    activities: "IEEE Student Chapter, Startup@Berkeley, Dean's List",
  },
];

export const mockSkills: Skill[] = [
  { id: "s1", name: "Product Management", endorsements: 87, isEndorsed: false },
  { id: "s2", name: "Product Strategy", endorsements: 64, isEndorsed: true },
  { id: "s3", name: "Agile Methodologies", endorsements: 52, isEndorsed: false },
  { id: "s4", name: "Data Analysis", endorsements: 48, isEndorsed: false },
  { id: "s5", name: "Leadership", endorsements: 71, isEndorsed: true },
  { id: "s6", name: "UX Design", endorsements: 39, isEndorsed: false },
  { id: "s7", name: "SQL", endorsements: 33, isEndorsed: false },
  { id: "s8", name: "Roadmapping", endorsements: 45, isEndorsed: false },
  { id: "s9", name: "Stakeholder Management", endorsements: 58, isEndorsed: true },
  { id: "s10", name: "Go-to-Market Strategy", endorsements: 29, isEndorsed: false },
];

export const mockRecommendations: Recommendation[] = [
  {
    id: "r1",
    authorName: "David Park",
    authorAvatar: "https://upload.wikimedia.org/wikipedia/en/3/38/David_Park%2C_American_painter.jpeg",
    authorHeadline: "Startup Founder & CEO at ParkVentures",
    relationship: "Worked together at Stripe",
    content: "Alexandra is one of the most talented product managers I've had the pleasure of working with. Her ability to balance user needs with business objectives is exceptional. She has a rare combination of technical depth, design sensibility, and business acumen that makes her incredibly effective. Any team would be lucky to have her.",
    date: "March 2024",
  },
  {
    id: "r2",
    authorName: "Priya Sharma",
    authorAvatar: "https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg",
    authorHeadline: "UX Designer at Airbnb",
    relationship: "Collaborated on projects",
    content: "Working with Alexandra on the Stripe Dashboard redesign was a masterclass in product-design collaboration. She came to every design review with thoughtful feedback grounded in user research and data. She championed the user experience even when it meant pushing back on engineering constraints. I'd work with her again in a heartbeat.",
    date: "January 2024",
  },
];
