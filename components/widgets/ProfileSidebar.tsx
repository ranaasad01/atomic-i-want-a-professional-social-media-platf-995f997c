"use client";

import Link from "next/link";
import { Eye, Users, Bookmark, TrendingUp } from 'lucide-react';
import { currentUser } from "@/lib/mock-data/users";
import { formatNumber, getInitials } from "@/lib/utils";

export default function ProfileSidebar() {
  return (
    <div className="space-y-3">
      {/* Profile card */}
      <div className="card overflow-hidden">
        <div className="h-16 bg-gradient-to-r from-brand to-brand-light relative">
          <img
            src={currentUser.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>
        <div className="px-4 pb-4">
          <div className="flex justify-start -mt-6 mb-2">
            <div className="w-14 h-14 rounded-full bg-brand border-2 border-[var(--card)] flex items-center justify-center overflow-hidden">
              <span className="text-white font-bold text-lg">{getInitials(currentUser.name)}</span>
            </div>
          </div>
          <Link href={"/profile/" + currentUser.username} className="font-semibold text-sm hover:text-brand hover:underline transition-colors block">
            {currentUser.name}
          </Link>
          <p className="text-xs text-[var(--muted)] line-clamp-2 mt-0.5">{currentUser.headline}</p>

          <div className="mt-3 pt-3 border-t border-[var(--border)] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--muted)] flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" /> Profile views
              </span>
              <span className="font-semibold text-brand">247</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--muted)] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> Post impressions
              </span>
              <span className="font-semibold text-brand">1,842</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--muted)] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Connections
              </span>
              <span className="font-semibold text-brand">{formatNumber(currentUser.connections)}</span>
            </div>
          </div>

          <Link
            href="/jobs"
            className="mt-3 pt-3 border-t border-[var(--border)] block text-xs font-semibold text-[var(--foreground)] hover:text-brand transition-colors"
          >
            Access exclusive tools &amp; insights
          </Link>
        </div>
      </div>

      {/* Saved items */}
      <div className="card p-4">
        <Link href="/feed" className="flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors">
          <Bookmark className="w-4 h-4" />
          <span>Saved items</span>
        </Link>
      </div>
    </div>
  );
}
