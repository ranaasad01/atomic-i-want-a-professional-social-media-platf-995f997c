export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantAvatar: string;
  participantHeadline: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
  isOnline: boolean;
}

export const mockConversations: Conversation[] = [
  {
    id: "conv1",
    participantId: "u4",
    participantName: "David Park",
    participantAvatar: "https://upload.wikimedia.org/wikipedia/en/3/38/David_Park%2C_American_painter.jpeg",
    participantHeadline: "Startup Founder & CEO",
    lastMessage: "Would love to grab coffee and discuss the opportunity!",
    lastMessageTime: "10:32 AM",
    unreadCount: 2,
    isOnline: true,
    messages: [
      {
        id: "m1",
        senderId: "u4",
        content: "Hey Alexandra! Congrats on the new role at TechCorp. How are you settling in?",
        timestamp: "Yesterday 3:15 PM",
        isRead: true,
      },
      {
        id: "m2",
        senderId: "u1",
        content: "Thanks David! It's been amazing so far. The team is incredible and the product challenges are exactly what I was looking for.",
        timestamp: "Yesterday 3:42 PM",
        isRead: true,
      },
      {
        id: "m3",
        senderId: "u4",
        content: "That's great to hear! I actually wanted to reach out because we have an opening for a VP of Product at ParkVentures. Given your background, I think you'd be a perfect fit.",
        timestamp: "Yesterday 4:01 PM",
        isRead: true,
      },
      {
        id: "m4",
        senderId: "u1",
        content: "Wow, that's very flattering! I'm happy where I am right now, but I'd love to hear more about what you're building.",
        timestamp: "Yesterday 4:15 PM",
        isRead: true,
      },
      {
        id: "m5",
        senderId: "u4",
        content: "Would love to grab coffee and discuss the opportunity!",
        timestamp: "10:32 AM",
        isRead: false,
      },
    ],
  },
  {
    id: "conv2",
    participantId: "u3",
    participantName: "Priya Sharma",
    participantAvatar: "https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg",
    participantHeadline: "UX Designer at Airbnb",
    lastMessage: "The design system doc looks great! Let me review and get back to you.",
    lastMessageTime: "Yesterday",
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        id: "m6",
        senderId: "u1",
        content: "Hi Priya! I loved your post about UX design principles. Really resonated with me as a PM.",
        timestamp: "Monday 9:00 AM",
        isRead: true,
      },
      {
        id: "m7",
        senderId: "u3",
        content: "Thank you so much! It's always great to hear from PMs who value design thinking. What aspects resonated most with you?",
        timestamp: "Monday 10:30 AM",
        isRead: true,
      },
      {
        id: "m8",
        senderId: "u1",
        content: "Definitely the part about falling in love with the problem, not the solution. I've been trying to instill that mindset in my team. I actually put together a design system doc for our product — would love your feedback if you have time!",
        timestamp: "Monday 11:15 AM",
        isRead: true,
      },
      {
        id: "m9",
        senderId: "u3",
        content: "The design system doc looks great! Let me review and get back to you.",
        timestamp: "Yesterday 2:00 PM",
        isRead: true,
      },
    ],
  },
  {
    id: "conv3",
    participantId: "u2",
    participantName: "Marcus Johnson",
    participantAvatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971718.png&w=350&h=254",
    participantHeadline: "Software Engineer at Meta",
    lastMessage: "Sure! I'll send over the GitHub repo link.",
    lastMessageTime: "Tuesday",
    unreadCount: 0,
    isOnline: true,
    messages: [
      {
        id: "m10",
        senderId: "u2",
        content: "Hey! I saw you're working on a new feature for TechCorp's API. I built something similar at Meta — happy to share some learnings if helpful.",
        timestamp: "Tuesday 1:00 PM",
        isRead: true,
      },
      {
        id: "m11",
        senderId: "u1",
        content: "That would be incredibly helpful, Marcus! We're running into some rate limiting challenges. What approach did you take?",
        timestamp: "Tuesday 1:30 PM",
        isRead: true,
      },
      {
        id: "m12",
        senderId: "u2",
        content: "Sure! I'll send over the GitHub repo link.",
        timestamp: "Tuesday 2:00 PM",
        isRead: true,
      },
    ],
  },
  {
    id: "conv4",
    participantId: "u5",
    participantName: "Sarah Williams",
    participantAvatar: "https://m.media-amazon.com/images/M/MV5BY2EzNGVhZTItYWNjMy00MGY0LTlkOWQtYTNmZDk5MDdmZmY3XkEyXkFqcGc@._V1_.jpg",
    participantHeadline: "Data Scientist at Netflix",
    lastMessage: "The analysis was really eye-opening. Thanks for sharing!",
    lastMessageTime: "Last week",
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        id: "m13",
        senderId: "u5",
        content: "Hi Alexandra! I noticed we have several mutual connections in the product space. Would love to connect!",
        timestamp: "Last week",
        isRead: true,
      },
      {
        id: "m14",
        senderId: "u1",
        content: "Hi Sarah! Of course — your work on recommendation systems is fascinating. I've been following your posts.",
        timestamp: "Last week",
        isRead: true,
      },
      {
        id: "m15",
        senderId: "u5",
        content: "The analysis was really eye-opening. Thanks for sharing!",
        timestamp: "Last week",
        isRead: true,
      },
    ],
  },
];
