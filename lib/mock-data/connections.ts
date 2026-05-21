export interface Connection {
  id: string;
  name: string;
  username: string;
  headline: string;
  avatar: string;
  mutualConnections: number;
  connectedDate?: string;
  status: "connected" | "pending_sent" | "pending_received" | "suggested";
}

export const myConnections: Connection[] = [
  {
    id: "u4",
    name: "David Park",
    username: "david-park",
    headline: "Startup Founder & CEO | Raised $12M Series A",
    avatar: "https://upload.wikimedia.org/wikipedia/en/3/38/David_Park%2C_American_painter.jpeg",
    mutualConnections: 23,
    connectedDate: "March 2024",
    status: "connected",
  },
  {
    id: "u3",
    name: "Priya Sharma",
    username: "priya-sharma",
    headline: "UX Designer at Airbnb | Human-centered design advocate",
    avatar: "https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg",
    mutualConnections: 15,
    connectedDate: "January 2024",
    status: "connected",
  },
  {
    id: "u7",
    name: "Emily Torres",
    username: "emily-torres",
    headline: "Engineering Manager at Shopify | Building high-performing teams",
    avatar: "https://d3e6ckxkrs5ntg.cloudfront.net/artists/images/3803848/original/crop:x0y0w2208h2208/hash:1467498583/1434764506_CMP_3902a2s.jpg?1467498583",
    mutualConnections: 8,
    connectedDate: "November 2023",
    status: "connected",
  },
  {
    id: "u8",
    name: "Ryan Kim",
    username: "ryan-kim",
    headline: "Venture Capital at Andreessen Horowitz | Investing in the future",
    avatar: "https://purposely.com/wp-content/uploads/2022/06/PMP-32-RyanKim.jpg",
    mutualConnections: 31,
    connectedDate: "September 2023",
    status: "connected",
  },
];

export const pendingRequests: Connection[] = [
  {
    id: "u9",
    name: "Lisa Chen",
    username: "lisa-chen",
    headline: "Product Designer at Google | Previously at Apple",
    avatar: "https://skift.com/wp-content/uploads/2023/10/Lisa_Chen_CEO_Toursbylocals.png",
    mutualConnections: 12,
    status: "pending_received",
  },
  {
    id: "u10",
    name: "Michael Brown",
    username: "michael-brown",
    headline: "CTO at TechStartup | Full-stack engineer turned executive",
    avatar: "https://media.cnn.com/api/v1/images/stellar/prod/michael-brown-by-elcardo-anthony-dsc-7603.JPG?c=original",
    mutualConnections: 7,
    status: "pending_received",
  },
];

export const suggestedConnections: Connection[] = [
  {
    id: "u2",
    name: "Marcus Johnson",
    username: "marcus-johnson",
    headline: "Software Engineer at Meta | React & Node.js",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971718.png&w=350&h=254",
    mutualConnections: 18,
    status: "suggested",
  },
  {
    id: "u5",
    name: "Sarah Williams",
    username: "sarah-williams",
    headline: "Data Scientist at Netflix | ML & AI Enthusiast",
    avatar: "https://m.media-amazon.com/images/M/MV5BY2EzNGVhZTItYWNjMy00MGY0LTlkOWQtYTNmZDk5MDdmZmY3XkEyXkFqcGc@._V1_.jpg",
    mutualConnections: 9,
    status: "suggested",
  },
  {
    id: "u6",
    name: "James Rodriguez",
    username: "james-rodriguez",
    headline: "Marketing Director at Salesforce | Growth & Brand Strategy",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/79/James_Rodriguez_2018.jpg",
    mutualConnections: 14,
    status: "suggested",
  },
  {
    id: "u11",
    name: "Aisha Patel",
    username: "aisha-patel",
    headline: "AI Research Scientist at OpenAI | PhD Stanford",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/21/Ameesha_Patel_graces_the_store_launch_of_Kamaal.jpg",
    mutualConnections: 6,
    status: "suggested",
  },
  {
    id: "u12",
    name: "Tom Wilson",
    username: "tom-wilson",
    headline: "Head of Growth at Notion | Previously Dropbox",
    avatar: "https://a.espncdn.com/i/headshots/nhl/players/full/2970615.png",
    mutualConnections: 22,
    status: "suggested",
  },
  {
    id: "u13",
    name: "Nina Okafor",
    username: "nina-okafor",
    headline: "Senior Software Engineer at Vercel | Next.js contributor",
    avatar: "https://m.media-amazon.com/images/M/MV5BNjE0NTI2MTYtZGYzMy00NWQwLWJmOTItODM3MTE0ZDI1MDM3XkEyXkFqcGc@._V1_.jpg",
    mutualConnections: 11,
    status: "suggested",
  },
];
