"use client";

import { useState } from "react";
import { Image, FileText, Calendar, X } from 'lucide-react';
import { currentUser } from "@/lib/mock-data/users";
import { getInitials } from "@/lib/utils";

export default function PostComposer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");

  return (
    <div className="card p-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold">{getInitials(currentUser.name)}</span>
        </div>
        <button
          onClick={() => setIsExpanded(true)}
          className="flex-1 text-left px-4 py-3 rounded-full border border-[var(--border)] text-[var(--muted)] hover:bg-[var(--accent)] hover:border-[var(--foreground)] transition-all text-sm"
        >
          Start a post, try writing with AI
        </button>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-[var(--card)] rounded-xl w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <h3 className="font-semibold text-lg">Create a post</h3>
              <button
                onClick={() => { setIsExpanded(false); setContent(""); }}
                className="p-1 rounded-full hover:bg-[var(--accent)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                  <span className="text-white font-bold">{getInitials(currentUser.name)}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{currentUser.name}</p>
                  <button className="text-xs text-[var(--muted)] border border-[var(--border)] rounded px-2 py-0.5 hover:bg-[var(--accent)]">
                    Anyone ▾
                  </button>
                </div>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What do you want to talk about?"
                className="w-full min-h-[150px] resize-none bg-transparent text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none text-base"
                autoFocus
              />
            </div>
            <div className="px-4 pb-4 flex items-center justify-between border-t border-[var(--border)] pt-3">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-[var(--accent)] text-[var(--muted)] hover:text-brand transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-[var(--accent)] text-[var(--muted)] hover:text-brand transition-colors">
                  <FileText className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-[var(--accent)] text-[var(--muted)] hover:text-brand transition-colors">
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
              <button
                disabled={!content.trim()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                onClick={() => { setIsExpanded(false); setContent(""); }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--border)]">
        <button className="flex items-center gap-2 text-[var(--muted)] hover:text-brand hover:bg-[var(--accent)] px-3 py-2 rounded-lg transition-colors text-sm font-medium">
          <Image className="w-5 h-5 text-blue-500" />
          <span>Photo</span>
        </button>
        <button className="flex items-center gap-2 text-[var(--muted)] hover:text-brand hover:bg-[var(--accent)] px-3 py-2 rounded-lg transition-colors text-sm font-medium">
          <FileText className="w-5 h-5 text-orange-500" />
          <span>Write article</span>
        </button>
        <button className="flex items-center gap-2 text-[var(--muted)] hover:text-brand hover:bg-[var(--accent)] px-3 py-2 rounded-lg transition-colors text-sm font-medium">
          <Calendar className="w-5 h-5 text-yellow-500" />
          <span>Event</span>
        </button>
      </div>
    </div>
  );
}
