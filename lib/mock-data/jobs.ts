export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  companyLogo: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  experienceLevel: "Entry" | "Mid" | "Senior" | "Lead" | "Executive";
  salary: string;
  postedDate: string;
  applicants: number;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  skills: string[];
  isEasyApply: boolean;
  isSaved: boolean;
  isPromoted?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "j1",
    title: "Senior Product Manager",
    company: "Stripe",
    companyId: "stripe",
    companyLogo: "/images/stripe-company-logo.jpg",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    experienceLevel: "Senior",
    salary: "$180,000 - $240,000/yr",
    postedDate: "2 days ago",
    applicants: 247,
    isEasyApply: true,
    isSaved: false,
    isPromoted: true,
    description: "We're looking for a Senior Product Manager to join our Payments Infrastructure team at Stripe. You'll own the roadmap for our core payment processing APIs used by millions of businesses worldwide. This is a high-impact role where you'll work closely with engineering, design, and business stakeholders to shape the future of online payments.",
    requirements: [
      "5+ years of product management experience",
      "Experience with developer-facing products or APIs",
      "Strong analytical skills and data-driven decision making",
      "Excellent communication and stakeholder management",
      "Experience with payments or fintech is a plus",
    ],
    responsibilities: [
      "Define and own the product roadmap for Payments Infrastructure",
      "Work closely with engineering teams to deliver high-quality features",
      "Conduct user research and synthesize insights into product decisions",
      "Define success metrics and track product performance",
      "Collaborate with sales and marketing on go-to-market strategies",
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health, dental, and vision insurance",
      "Unlimited PTO",
      "Remote work flexibility",
      "$3,000 annual learning budget",
      "Home office stipend",
    ],
    skills: ["Product Management", "APIs", "Payments", "Data Analysis", "Agile", "Roadmapping"],
  },
  {
    id: "j2",
    title: "Staff Software Engineer, Frontend",
    company: "Figma",
    companyId: "figma",
    companyLogo: "/images/figma-company-logo.jpg",
    location: "Remote (US)",
    type: "Remote",
    experienceLevel: "Lead",
    salary: "$220,000 - $280,000/yr",
    postedDate: "1 day ago",
    applicants: 189,
    isEasyApply: false,
    isSaved: true,
    description: "Figma is looking for a Staff Software Engineer to help build the next generation of our collaborative design platform. You'll work on complex frontend challenges at scale, mentor engineers, and help define our technical direction.",
    requirements: [
      "8+ years of software engineering experience",
      "Deep expertise in React and TypeScript",
      "Experience with WebGL or Canvas rendering",
      "Track record of leading technical projects",
      "Strong communication and mentorship skills",
    ],
    responsibilities: [
      "Lead technical design and architecture for major features",
      "Mentor and grow junior and mid-level engineers",
      "Drive improvements to frontend performance and reliability",
      "Collaborate with product and design on complex features",
      "Contribute to engineering culture and best practices",
    ],
    benefits: [
      "Top-of-market compensation",
      "Equity with 4-year vesting",
      "Full remote flexibility",
      "Health, dental, vision for you and family",
      "Annual company retreat",
      "$2,000 equipment budget",
    ],
    skills: ["React", "TypeScript", "WebGL", "Performance Optimization", "System Design", "Mentorship"],
  },
  {
    id: "j3",
    title: "UX Research Lead",
    company: "Airbnb",
    companyId: "airbnb",
    companyLogo: "/images/airbnb-company-logo.jpg",
    location: "San Francisco, CA",
    type: "Full-time",
    experienceLevel: "Lead",
    salary: "$160,000 - $200,000/yr",
    postedDate: "3 days ago",
    applicants: 312,
    isEasyApply: true,
    isSaved: false,
    description: "Join Airbnb's Design team as a UX Research Lead to help shape the future of travel and belonging. You'll lead a team of researchers and work on some of the most complex human-centered design challenges in the industry.",
    requirements: [
      "7+ years of UX research experience",
      "Experience leading research teams",
      "Proficiency in both qualitative and quantitative methods",
      "Strong portfolio of impactful research projects",
      "Experience in consumer products at scale",
    ],
    responsibilities: [
      "Lead and mentor a team of 4-6 UX researchers",
      "Define research strategy for key product areas",
      "Conduct and oversee user studies, interviews, and usability tests",
      "Synthesize insights and present to executive stakeholders",
      "Build a culture of user-centered design across the organization",
    ],
    benefits: [
      "Competitive salary and RSUs",
      "Annual travel credit",
      "Flexible work arrangements",
      "Comprehensive benefits package",
      "Professional development budget",
    ],
    skills: ["UX Research", "User Interviews", "Usability Testing", "Data Analysis", "Research Strategy", "Team Leadership"],
  },
  {
    id: "j4",
    title: "Data Scientist, Growth",
    company: "Spotify",
    companyId: "spotify",
    companyLogo: "/images/spotify-company-logo.jpg",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    experienceLevel: "Mid",
    salary: "$140,000 - $175,000/yr",
    postedDate: "5 days ago",
    applicants: 428,
    isEasyApply: true,
    isSaved: false,
    description: "Spotify's Growth team is looking for a Data Scientist to help us understand and improve how users discover and engage with music and podcasts. You'll work on A/B testing, funnel analysis, and building predictive models to drive user growth.",
    requirements: [
      "3+ years of data science experience",
      "Strong Python and SQL skills",
      "Experience with A/B testing and experimentation",
      "Knowledge of statistical modeling and machine learning",
      "Experience with large-scale data processing (Spark, BigQuery)",
    ],
    responsibilities: [
      "Design and analyze A/B experiments to improve user growth",
      "Build predictive models for user behavior and churn",
      "Create dashboards and reports for key growth metrics",
      "Partner with product and engineering on data-driven decisions",
      "Develop and maintain data pipelines for growth analytics",
    ],
    benefits: [
      "Competitive salary and equity",
      "Spotify Premium family plan",
      "Flexible work policy",
      "Health and wellness benefits",
      "Learning and development budget",
    ],
    skills: ["Python", "SQL", "Machine Learning", "A/B Testing", "Statistics", "Spark"],
  },
  {
    id: "j5",
    title: "Marketing Manager, B2B",
    company: "HubSpot",
    companyId: "hubspot",
    companyLogo: "/images/hubspot-company-logo.jpg",
    location: "Boston, MA (Remote OK)",
    type: "Full-time",
    experienceLevel: "Mid",
    salary: "$110,000 - $140,000/yr",
    postedDate: "1 week ago",
    applicants: 567,
    isEasyApply: false,
    isSaved: false,
    description: "HubSpot is seeking a B2B Marketing Manager to drive demand generation and pipeline growth for our enterprise segment. You'll own integrated marketing campaigns, work with sales on ABM strategies, and help scale our go-to-market motion.",
    requirements: [
      "4+ years of B2B marketing experience",
      "Experience with demand generation and ABM",
      "Proficiency with marketing automation tools (HubSpot, Marketo)",
      "Strong analytical skills and ROI focus",
      "Excellent written and verbal communication",
    ],
    responsibilities: [
      "Plan and execute integrated demand generation campaigns",
      "Develop and manage ABM programs for enterprise accounts",
      "Collaborate with sales on pipeline and revenue goals",
      "Manage marketing budget and optimize spend",
      "Track and report on campaign performance and ROI",
    ],
    benefits: [
      "Competitive salary and equity",
      "Unlimited PTO",
      "Remote work flexibility",
      "Comprehensive health benefits",
      "Annual INBOUND conference attendance",
    ],
    skills: ["B2B Marketing", "Demand Generation", "ABM", "HubSpot", "Content Marketing", "Analytics"],
  },
  {
    id: "j6",
    title: "DevOps Engineer",
    company: "Cloudflare",
    companyId: "cloudflare",
    companyLogo: "/images/cloudflare-company-logo.jpg",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    experienceLevel: "Senior",
    salary: "$155,000 - $195,000/yr",
    postedDate: "4 days ago",
    applicants: 203,
    isEasyApply: true,
    isSaved: false,
    description: "Cloudflare is looking for a Senior DevOps Engineer to help build and maintain the infrastructure that powers our global network. You'll work on CI/CD pipelines, infrastructure automation, and reliability engineering at massive scale.",
    requirements: [
      "5+ years of DevOps/SRE experience",
      "Strong Kubernetes and Docker expertise",
      "Experience with Terraform and infrastructure as code",
      "Proficiency with cloud platforms (AWS, GCP, or Azure)",
      "Experience with monitoring and observability tools",
    ],
    responsibilities: [
      "Design and maintain CI/CD pipelines for global deployments",
      "Build and manage Kubernetes clusters at scale",
      "Implement infrastructure as code with Terraform",
      "Improve system reliability and reduce toil",
      "Respond to and resolve production incidents",
    ],
    benefits: [
      "Competitive salary and equity",
      "Remote work options",
      "Health, dental, vision insurance",
      "401k with company match",
      "Home office setup budget",
    ],
    skills: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "Linux", "Python"],
  },
];
