"use client";

import { useState } from "react";
import Link from "next/link";
import { UserPlus, X } from 'lucide-react';
import { suggestedUsers } from "@/lib/mock-data/users";
import { getInitials } from "@/lib/utils";

export default function SuggestedConnections() {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [connected, setConnected] = useState<string[]>([]);

  const visible = suggestedUsers.filter((u) => !dismissed.includes(u.id)).slice(0, 3);

  return (
    <div className="card p-4">
      <h3 className="font-semibold text-sm mb-3">People you may know</h3>
      <div className="space-y-4">
        {visible.map((user) => (
          <div key={user.id} className="flex items-start gap-3">
            <Link href={"/profile/" + user.username} className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = "<span class='text-white text-xs font-bold'>" + getInitials(user.name) + "</span>";
                    }
                  }}
                />
              </div>
            </Link>
            <div className="flex-1 min-w-0">
              <Link href={"/profile/" + user.username} className="font-semibold text-xs hover:text-brand hover:underline transition-colors line-clamp-1">
                {user.name}
              </Link>
              <p className="text-xs text-[var(--muted)] line-clamp-2">{user.headline}</p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              {connected.includes(user.id) ? (
                <span className="text-xs text-[var(--muted)] font-medium">Pending</span>
              ) : (
                <button
                  onClick={() => setConnected([...connected, user.id])}
                  className="flex items-center gap-1 text-xs font-semibold text-brand border border-brand rounded-full px-3 py-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <UserPlus className="w-3 h-3" />
                  Connect
                </button>
              )}
              <button
                onClick={() => setDismissed([...dismissed, user.id])}
                className="p-1 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link href="/network" className="block mt-3 text-sm text-brand hover:text-brand-dark font-medium transition-colors">
        View all recommendations
      </Link>
    </div>
  );
}
