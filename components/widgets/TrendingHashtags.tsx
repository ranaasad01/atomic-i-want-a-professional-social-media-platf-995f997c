"use client";

import Link from "next/link";
import { TrendingUp } from 'lucide-react';
import { trendingHashtags } from "@/lib/mock-data/posts";
import { formatNumber } from "@/lib/utils";

export default function TrendingHashtags() {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">Today&apos;s top hashtags</h3>
        <TrendingUp className="w-4 h-4 text-brand" />
      </div>
      <div className="space-y-3">
        {trendingHashtags.slice(0, 6).map((item, index) => (
          <Link
            key={item.tag}
            href={"/search?q=" + encodeURIComponent("#" + item.tag)}
            className="flex items-center justify-between group"
          >
            <div>
              <p className="text-xs text-[var(--muted)]">{index + 1} • Trending in Tech</p>
              <p className="text-sm font-medium group-hover:text-brand transition-colors">#{item.tag}</p>
            </div>
            <span className="text-xs text-[var(--muted)]">{formatNumber(item.posts)} posts</span>
          </Link>
        ))}
      </div>
      <Link href="/search" className="block mt-3 text-sm text-brand hover:text-brand-dark font-medium transition-colors">
        Show more
      </Link>
    </div>
  );
}
