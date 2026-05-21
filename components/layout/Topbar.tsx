"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Briefcase, MessageSquare, Bell, Search, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from "react";
import { currentUser } from "@/lib/mock-data/users";
import { getInitials } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "/feed", label: "Home", icon: Home },
  { href: "/network", label: "My Network", icon: Users },
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/messaging", label: "Messaging", icon: MessageSquare },
  { href: "/notifications", label: "Notifications", icon: Bell },
];

export default function Topbar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--card)] border-b border-[var(--border)] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 h-14">
        <Link href="/feed" className="flex-shrink-0 mr-2">
          <div className="w-9 h-9 bg-brand rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
        </Link>

        <div className="relative hidden sm:flex items-center flex-1 max-w-xs">
          <Search className="absolute left-3 w-4 h-4 text-[var(--muted)]" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchQuery.trim()) {
                window.location.href = "/search?q=" + encodeURIComponent(searchQuery);
              }
            }}
            className="w-full pl-9 pr-4 py-2 bg-[var(--accent)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand border border-transparent focus:border-brand transition-all"
          />
        </div>

        <div className="flex-1" />

        <nav className="hidden md:flex items-center">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={"nav-item " + (isActive ? "active" : "") + " min-w-[72px]"}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-1 ml-2 border-l border-[var(--border)] pl-2">
          <ThemeToggle />
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="flex flex-col items-center gap-1 px-3 py-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center overflow-hidden">
                <span className="text-white text-xs font-bold">
                  {getInitials(currentUser.name)}
                </span>
              </div>
              <span className="text-xs flex items-center gap-0.5">
                Me <ChevronDown className="w-3 h-3" />
              </span>
            </button>
            {profileMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-64 bg-[var(--card)] rounded-lg shadow-lg border border-[var(--border)] py-2 z-50">
                <div className="px-4 py-3 border-b border-[var(--border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{getInitials(currentUser.name)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{currentUser.name}</p>
                      <p className="text-xs text-[var(--muted)] line-clamp-2">{currentUser.headline}</p>
                    </div>
                  </div>
                  <Link
                    href={"/profile/" + currentUser.username}
                    className="mt-3 block text-center text-sm font-semibold text-brand border border-brand rounded-full py-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    onClick={() => setProfileMenuOpen(false)}
                  >
                    View Profile
                  </Link>
                </div>
                <div className="py-2">
                  <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-[var(--accent)] transition-colors" onClick={() => setProfileMenuOpen(false)}>Settings &amp; Privacy</Link>
                  <Link href="/login" className="block px-4 py-2 text-sm hover:bg-[var(--accent)] transition-colors text-red-500" onClick={() => setProfileMenuOpen(false)}>Sign Out</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--card)] border-t border-[var(--border)] px-4 py-3">
          <div className="flex items-center mb-3">
            <Search className="w-4 h-4 text-[var(--muted)] mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-[var(--accent)] rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>
          <nav className="grid grid-cols-5 gap-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={"flex flex-col items-center gap-1 py-2 text-xs " + (isActive ? "text-[var(--foreground)]" : "text-[var(--muted)]")}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px]">{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
