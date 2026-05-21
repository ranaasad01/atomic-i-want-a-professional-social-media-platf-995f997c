export interface User {
  id: string;
  name: string;
  username: string;
  headline: string;
  location: string;
  avatar: string;
  coverPhoto: string;
  bio: string;
  connections: number;
  followers: number;
  following: number;
  isConnected?: boolean;
  isFollowing?: boolean;
  skills: string[];
  email: string;
  website?: string;
  joinedDate: string;
}

export const currentUser: User = {
  id: "u1",
  name: "Alexandra Chen",
  username: "alexandra-chen",
  headline: "Senior Product Manager at TechCorp | Building the future of SaaS",
  location: "San Francisco, CA",
  avatar: "https://cdn.prod.website-files.com/633ac0ec0a94952cd251fe1d/637bba4ae761e65c4ee09024_Alexandra_Chen22-04-22-09-11-20_medium-500x500.jpg",
  coverPhoto: "/images/profile-cover-tech.jpg",
  bio: "Passionate product leader with 8+ years of experience building B2B SaaS products. I love turning complex problems into elegant solutions. Previously at Google, Stripe, and two successful startups.",
  connections: 847,
  followers: 2341,
  following: 412,
  skills: ["Product Management", "Strategy", "Agile", "Data Analysis", "Leadership", "UX Design", "SQL", "Roadmapping"],
  email: "alex.chen@techcorp.com",
  website: "https://alexchen.io",
  joinedDate: "January 2019",
};

export const suggestedUsers: User[] = [
  {
    id: "u2",
    name: "Marcus Johnson",
    username: "marcus-johnson",
    headline: "Software Engineer at Meta | React & Node.js",
    location: "New York, NY",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971718.png&w=350&h=254",
    coverPhoto: "/images/profile-cover-engineering.jpg",
    bio: "Full-stack engineer passionate about building scalable web applications. Open source contributor and tech blogger.",
    connections: 523,
    followers: 1204,
    following: 287,
    isConnected: false,
    isFollowing: false,
    skills: ["React", "Node.js", "TypeScript", "GraphQL", "AWS", "Docker"],
    email: "marcus@meta.com",
    joinedDate: "March 2020",
  },
  {
    id: "u3",
    name: "Priya Sharma",
    username: "priya-sharma",
    headline: "UX Designer at Airbnb | Human-centered design advocate",
    location: "Seattle, WA",
    avatar: "https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg",
    coverPhoto: "/images/profile-cover-design.jpg",
    bio: "Creating intuitive and beautiful user experiences. Specializing in design systems and accessibility.",
    connections: 689,
    followers: 3102,
    following: 521,
    isConnected: false,
    isFollowing: true,
    skills: ["UX Design", "Figma", "Design Systems", "User Research", "Prototyping", "Accessibility"],
    email: "priya@airbnb.com",
    joinedDate: "June 2018",
  },
  {
    id: "u4",
    name: "David Park",
    username: "david-park",
    headline: "Startup Founder & CEO | Raised $12M Series A",
    location: "Austin, TX",
    avatar: "https://upload.wikimedia.org/wikipedia/en/3/38/David_Park%2C_American_painter.jpeg",
    coverPhoto: "/images/profile-cover-startup.jpg",
    bio: "Serial entrepreneur building the next generation of fintech tools. Angel investor and startup mentor.",
    connections: 1204,
    followers: 8921,
    following: 203,
    isConnected: true,
    isFollowing: true,
    skills: ["Entrepreneurship", "Fundraising", "Strategy", "Leadership", "Fintech", "Business Development"],
    email: "david@parkventures.com",
    joinedDate: "September 2017",
  },
  {
    id: "u5",
    name: "Sarah Williams",
    username: "sarah-williams",
    headline: "Data Scientist at Netflix | ML & AI Enthusiast",
    location: "Los Angeles, CA",
    avatar: "https://m.media-amazon.com/images/M/MV5BY2EzNGVhZTItYWNjMy00MGY0LTlkOWQtYTNmZDk5MDdmZmY3XkEyXkFqcGc@._V1_.jpg",
    coverPhoto: "/images/profile-cover-data.jpg",
    bio: "Turning data into insights that drive business decisions. Specializing in recommendation systems and NLP.",
    connections: 412,
    followers: 1876,
    following: 334,
    isConnected: false,
    isFollowing: false,
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Data Visualization", "Statistics"],
    email: "sarah@netflix.com",
    joinedDate: "February 2021",
  },
  {
    id: "u6",
    name: "James Rodriguez",
    username: "james-rodriguez",
    headline: "Marketing Director at Salesforce | Growth & Brand Strategy",
    location: "Chicago, IL",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/79/James_Rodriguez_2018.jpg",
    coverPhoto: "/images/profile-cover-marketing.jpg",
    bio: "Driving growth through data-driven marketing strategies. Passionate about brand storytelling and customer acquisition.",
    connections: 934,
    followers: 4521,
    following: 678,
    isConnected: false,
    isFollowing: false,
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Brand Management", "Analytics", "Growth Hacking"],
    email: "james@salesforce.com",
    joinedDate: "April 2019",
  },
];

export const allUsers = [currentUser, ...suggestedUsers];
