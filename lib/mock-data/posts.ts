export interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  authorHeadline: string;
  content: string;
  timestamp: string;
  likes: number;
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  authorHeadline: string;
  authorUsername: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  shares: number;
  isLiked: boolean;
  hashtags: string[];
}

export const mockPosts: Post[] = [
  {
    id: "p1",
    authorId: "u4",
    authorName: "David Park",
    authorAvatar: "https://upload.wikimedia.org/wikipedia/en/3/38/David_Park%2C_American_painter.jpeg",
    authorHeadline: "Startup Founder & CEO | Raised $12M Series A",
    authorUsername: "david-park",
    content: "🚀 Excited to announce that ParkVentures just closed our $12M Series A round led by Sequoia Capital!\n\nThis journey has been incredible — from a 2-person team working out of a garage to 47 employees and 500+ enterprise customers.\n\nKey lessons from our fundraising journey:\n\n1️⃣ Build relationships before you need money\n2️⃣ Know your metrics cold — ARR, churn, CAC, LTV\n3️⃣ Tell a compelling story about the future\n4️⃣ Find investors who believe in your mission, not just the numbers\n\nThank you to our amazing team, customers, and advisors who made this possible. The best is yet to come! 💪\n\n#Startup #Fundraising #SeriesA #Fintech #Entrepreneurship",
    timestamp: "2 hours ago",
    likes: 1847,
    shares: 234,
    isLiked: false,
    hashtags: ["Startup", "Fundraising", "SeriesA", "Fintech", "Entrepreneurship"],
    comments: [
      {
        id: "c1",
        authorId: "u2",
        authorName: "Marcus Johnson",
        authorAvatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971718.png&w=350&h=254",
        authorHeadline: "Software Engineer at Meta",
        content: "Congratulations David! Well deserved. The product you've built is genuinely game-changing for the fintech space. 🎉",
        timestamp: "1 hour ago",
        likes: 42,
      },
      {
        id: "c2",
        authorId: "u3",
        authorName: "Priya Sharma",
        authorAvatar: "https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg",
        authorHeadline: "UX Designer at Airbnb",
        content: "This is amazing news! I remember when you were just starting out. Proof that persistence and great execution pays off!",
        timestamp: "45 minutes ago",
        likes: 28,
      },
    ],
  },
  {
    id: "p2",
    authorId: "u3",
    authorName: "Priya Sharma",
    authorAvatar: "https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg",
    authorHeadline: "UX Designer at Airbnb | Human-centered design advocate",
    authorUsername: "priya-sharma",
    content: "The biggest mistake I see junior designers make? Falling in love with their solutions instead of the problem.\n\nAfter 6 years in UX, here's what separates good designers from great ones:\n\n✅ Great designers ask 'why' 5 times before opening Figma\n✅ They test with real users, not just colleagues\n✅ They embrace constraints as creative fuel\n✅ They can explain design decisions in business terms\n✅ They know when NOT to design something\n\nDesign is not about making things pretty. It's about making things work for real people in the real world.\n\nWhat would you add to this list? 👇\n\n#UXDesign #ProductDesign #DesignThinking #CareerAdvice",
    image: "https://s3.amazonaws.com/static.tryexponent.com/Whiteboarding_challenge_%284%29_7a227bc9e5.png",
    timestamp: "5 hours ago",
    likes: 3241,
    shares: 567,
    isLiked: true,
    hashtags: ["UXDesign", "ProductDesign", "DesignThinking", "CareerAdvice"],
    comments: [
      {
        id: "c3",
        authorId: "u1",
        authorName: "Alexandra Chen",
        authorAvatar: "https://cdn.prod.website-files.com/633ac0ec0a94952cd251fe1d/637bba4ae761e65c4ee09024_Alexandra_Chen22-04-22-09-11-20_medium-500x500.jpg",
        authorHeadline: "Senior Product Manager at TechCorp",
        content: "This is gold, Priya! As a PM, I'd add: great designers proactively communicate trade-offs and constraints to stakeholders.",
        timestamp: "4 hours ago",
        likes: 156,
      },
    ],
  },
  {
    id: "p3",
    authorId: "u2",
    authorName: "Marcus Johnson",
    authorAvatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971718.png&w=350&h=254",
    authorHeadline: "Software Engineer at Meta | React & Node.js",
    authorUsername: "marcus-johnson",
    content: "Hot take: TypeScript has made me a significantly better JavaScript developer, not just a safer one.\n\nBefore TypeScript, I thought I understood my code. After TypeScript, I realized how many assumptions I was making.\n\nThe type system forces you to:\n→ Think about edge cases upfront\n→ Document your intent in code\n→ Catch bugs at compile time, not runtime\n→ Write more modular, composable functions\n\nYes, there's a learning curve. Yes, it adds some boilerplate. But the productivity gains after the first month are undeniable.\n\nCurrently using TypeScript + React + tRPC and the DX is absolutely incredible. Highly recommend.\n\nWhat's your experience with TypeScript? Love it or hate it? 🤔\n\n#TypeScript #JavaScript #WebDev #Programming #React",
    timestamp: "8 hours ago",
    likes: 2156,
    shares: 389,
    isLiked: false,
    hashtags: ["TypeScript", "JavaScript", "WebDev", "Programming", "React"],
    comments: [
      {
        id: "c4",
        authorId: "u5",
        authorName: "Sarah Williams",
        authorAvatar: "https://m.media-amazon.com/images/M/MV5BY2EzNGVhZTItYWNjMy00MGY0LTlkOWQtYTNmZDk5MDdmZmY3XkEyXkFqcGc@._V1_.jpg",
        authorHeadline: "Data Scientist at Netflix",
        content: "Coming from Python, TypeScript felt weird at first. Now I can't imagine going back. The autocomplete alone saves hours every week!",
        timestamp: "7 hours ago",
        likes: 89,
      },
    ],
  },
  {
    id: "p4",
    authorId: "u5",
    authorName: "Sarah Williams",
    authorAvatar: "https://m.media-amazon.com/images/M/MV5BY2EzNGVhZTItYWNjMy00MGY0LTlkOWQtYTNmZDk5MDdmZmY3XkEyXkFqcGc@._V1_.jpg",
    authorHeadline: "Data Scientist at Netflix | ML & AI Enthusiast",
    authorUsername: "sarah-williams",
    content: "Just published my analysis of how Netflix's recommendation engine works under the hood 🎬\n\nKey findings:\n\n📊 Netflix uses a multi-armed bandit approach for A/B testing artwork\n🧠 The recommendation model combines collaborative filtering + content-based signals\n⚡ Real-time personalization updates every 24 hours based on viewing behavior\n🎯 The 'Top 10' list is actually personalized per region AND per user segment\n\nThe engineering behind this is genuinely impressive. They're serving personalized recommendations to 230M+ subscribers with sub-100ms latency.\n\nFull article in the comments 👇\n\n#MachineLearning #DataScience #Netflix #RecommendationSystems #AI",
    image: "https://i0.wp.com/studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2022/07/Screen-Shot-2022-07-28-at-5.06.01-PM-1.png?resize=840%2C592&ssl=1",
    timestamp: "1 day ago",
    likes: 4892,
    shares: 1203,
    isLiked: false,
    hashtags: ["MachineLearning", "DataScience", "Netflix", "RecommendationSystems", "AI"],
    comments: [
      {
        id: "c5",
        authorId: "u6",
        authorName: "James Rodriguez",
        authorAvatar: "https://upload.wikimedia.org/wikipedia/commons/7/79/James_Rodriguez_2018.jpg",
        authorHeadline: "Marketing Director at Salesforce",
        content: "Fascinating breakdown! The personalized artwork piece is something we've been trying to replicate for email marketing. Would love to chat more about this.",
        timestamp: "20 hours ago",
        likes: 67,
      },
    ],
  },
  {
    id: "p5",
    authorId: "u6",
    authorName: "James Rodriguez",
    authorAvatar: "https://upload.wikimedia.org/wikipedia/commons/7/79/James_Rodriguez_2018.jpg",
    authorHeadline: "Marketing Director at Salesforce | Growth & Brand Strategy",
    authorUsername: "james-rodriguez",
    content: "We just 3x'd our pipeline in Q3. Here's exactly what we changed:\n\nOld approach: Spray and pray with generic outbound\nNew approach: Hyper-personalized account-based marketing\n\nThe 5 changes that made the difference:\n\n1. Identified our top 50 dream accounts and built custom content for each\n2. Aligned sales and marketing on a single revenue goal (not separate MQL/SQL targets)\n3. Invested in intent data to reach buyers actively researching solutions\n4. Created a 'dark social' strategy for LinkedIn and Slack communities\n5. Built a customer reference program that generated 40% of new pipeline\n\nThe result? $4.2M in new ARR from ABM alone in Q3.\n\nHappy to share the full playbook — drop a comment and I'll DM you.\n\n#B2BMarketing #ABM #GrowthMarketing #SalesAndMarketing #Revenue",
    timestamp: "2 days ago",
    likes: 5621,
    shares: 892,
    isLiked: true,
    hashtags: ["B2BMarketing", "ABM", "GrowthMarketing", "SalesAndMarketing", "Revenue"],
    comments: [],
  },
];

export const trendingHashtags = [
  { tag: "OpenToWork", posts: 45200 },
  { tag: "TechLayoffs", posts: 32100 },
  { tag: "AIRevolution", posts: 28900 },
  { tag: "RemoteWork", posts: 24300 },
  { tag: "StartupLife", posts: 19800 },
  { tag: "ProductManagement", posts: 15600 },
  { tag: "WebDevelopment", posts: 12400 },
  { tag: "Leadership", posts: 9800 },
];
