import Link from "next/link";
import { ArrowRight, Users, Briefcase, MessageSquare, Star, CheckCircle, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Build Your Network",
    description: "Connect with professionals in your industry, send connection requests, and grow your professional circle with smart suggestions.",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Discover Opportunities",
    description: "Browse thousands of job listings from top companies. Filter by location, experience level, and job type. Apply with one click.",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600",
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    description: "Have meaningful conversations with your connections. Share ideas, collaborate on projects, and build lasting professional relationships.",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Share Your Insights",
    description: "Post articles, share updates, and engage with trending topics. Build your personal brand and establish thought leadership.",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600",
  },
  {
    icon: Star,
    title: "Skill Endorsements",
    description: "Get your skills endorsed by colleagues and connections. Showcase your expertise with verified endorsements and recommendations.",
    color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600",
  },
  {
    icon: CheckCircle,
    title: "Profile Completeness",
    description: "Track your profile strength and get actionable tips to improve visibility. A complete profile gets 5x more views.",
    color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600",
  },
];

const stats = [
  { value: "50M+", label: "Professionals" },
  { value: "120K+", label: "Companies" },
  { value: "2M+", label: "Job Listings" },
  { value: "98%", label: "Satisfaction Rate" },
];

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Data Scientist at Netflix",
    avatar: "https://m.media-amazon.com/images/M/MV5BY2EzNGVhZTItYWNjMy00MGY0LTlkOWQtYTNmZDk5MDdmZmY3XkEyXkFqcGc@._V1_.jpg",
    quote: "ProConnect helped me land my dream job at Netflix. The network I built here opened doors I never thought possible.",
  },
  {
    name: "Marcus Johnson",
    role: "Software Engineer at Meta",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971718.png&w=350&h=254",
    quote: "The quality of professional connections on ProConnect is unmatched. I've found mentors, collaborators, and friends here.",
  },
  {
    name: "Priya Sharma",
    role: "UX Designer at Airbnb",
    avatar: "https://directory.uthscsa.edu/sites/directory/files/sharma_priya.jpg",
    quote: "Sharing my design insights on ProConnect has grown my audience to 3,000+ followers. It's the best platform for thought leadership.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="bg-[var(--card)] border-b border-[var(--border)] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-brand">ProConnect</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-[var(--foreground)] hover:text-brand transition-colors px-4 py-2">
              Sign in
            </Link>
            <Link href="/register" className="btn-primary text-sm">
              Join now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EBF4FF] via-[var(--background)] to-[#F0F9FF] dark:from-[#0D1B2A] dark:via-[var(--background)] dark:to-[#0D1B2A] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Welcome to your{" "}
              <span className="text-brand">professional community</span>
            </h1>
            <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
              Connect with professionals, discover opportunities, and build the career you deserve. Join 50 million professionals already on ProConnect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="btn-primary text-base px-8 py-3 flex items-center justify-center gap-2">
                Get started — it&apos;s free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/login" className="btn-outline text-base px-8 py-3 text-center">
                Sign in
              </Link>
            </div>
            <p className="text-sm text-[var(--muted)] mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-brand hover:underline font-medium">Sign in here</Link>
            </p>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <img
                src="https://virtualspeech-com.b-cdn.net/wp-content/uploads/professional_networking.jpg"
                alt="Professional networking"
                className="rounded-2xl shadow-2xl w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Floating cards */}
              <div className="absolute -bottom-4 -left-4 bg-[var(--card)] rounded-xl p-3 shadow-lg border border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">New connection!</p>
                    <p className="text-xs text-[var(--muted)]">David Park accepted</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[var(--card)] rounded-xl p-3 shadow-lg border border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Job match found!</p>
                    <p className="text-xs text-[var(--muted)]">Senior PM at Stripe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Everything you need to grow professionally
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              ProConnect gives you the tools to build meaningful connections, advance your career, and stay ahead in your industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6 hover:shadow-md transition-shadow">
                <div className={"w-12 h-12 rounded-xl flex items-center justify-center mb-4 " + feature.color}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Trusted by professionals worldwide
            </h2>
            <p className="text-[var(--muted)] text-lg">
              See what our members are saying about ProConnect
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[var(--background)] rounded-xl p-6 border border-[var(--border)]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[var(--foreground)] leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center overflow-hidden">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-[var(--muted)]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand to-brand-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to take the next step in your career?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join millions of professionals who use ProConnect to network, find jobs, and grow their careers.
          </p>
          <Link href="/register" className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg shadow-lg">
            Join ProConnect for free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--card)] border-t border-[var(--border)] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand rounded flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="font-bold text-brand">ProConnect</span>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                The professional network for the modern workforce.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">General</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><Link href="/register" className="hover:text-brand transition-colors">Sign Up</Link></li>
                <li><Link href="/login" className="hover:text-brand transition-colors">Sign In</Link></li>
                <li><Link href="/jobs" className="hover:text-brand transition-colors">Jobs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Browse</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><Link href="/search" className="hover:text-brand transition-colors">People</Link></li>
                <li><Link href="/jobs" className="hover:text-brand transition-colors">Companies</Link></li>
                <li><Link href="/feed" className="hover:text-brand transition-colors">Posts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><span className="cursor-pointer hover:text-brand transition-colors">Privacy Policy</span></li>
                <li><span className="cursor-pointer hover:text-brand transition-colors">Terms of Service</span></li>
                <li><span className="cursor-pointer hover:text-brand transition-colors">Cookie Policy</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--muted)]">© 2024 ProConnect. All rights reserved.</p>
            <p className="text-xs text-[var(--muted)]">Built with ❤️ for professionals everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
