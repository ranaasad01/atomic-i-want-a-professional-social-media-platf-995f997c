"use client";

import { useState } from "react";
import { ThumbsUp, Send } from 'lucide-react';
import { Comment } from "@/lib/mock-data/posts";
import { currentUser } from "@/lib/mock-data/users";
import { getInitials } from "@/lib/utils";

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState("");
  const [localComments, setLocalComments] = useState(comments);

  const handleSubmit = () => {
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: "new-" + Date.now(),
      authorId: currentUser.id,
      authorName: currentUser.name,
      authorAvatar: currentUser.avatar,
      authorHeadline: currentUser.headline,
      content: newComment,
      timestamp: "Just now",
      likes: 0,
    };
    setLocalComments([...localComments, comment]);
    setNewComment("");
  };

  return (
    <div className="border-t border-[var(--border)] px-4 py-3">
      {/* Add comment */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">{getInitials(currentUser.name)}</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-[var(--accent)] rounded-full px-4 py-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-sm focus:outline-none text-[var(--foreground)] placeholder-[var(--muted)]"
          />
          {newComment.trim() && (
            <button onClick={handleSubmit} className="text-brand hover:text-brand-dark transition-colors">
              <Send className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Comments list */}
      <div className="space-y-3">
        {localComments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src={comment.authorAvatar}
                alt={comment.authorName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = "<span class='text-white text-xs font-bold'>" + getInitials(comment.authorName) + "</span>";
                  }
                }}
              />
            </div>
            <div className="flex-1">
              <div className="bg-[var(--accent)] rounded-2xl px-4 py-2">
                <p className="font-semibold text-xs">{comment.authorName}</p>
                <p className="text-xs text-[var(--muted)]">{comment.authorHeadline}</p>
                <p className="text-sm mt-1">{comment.content}</p>
              </div>
              <div className="flex items-center gap-4 mt-1 px-2">
                <button className="text-xs text-[var(--muted)] hover:text-brand font-medium transition-colors">Like</button>
                <button className="text-xs text-[var(--muted)] hover:text-brand font-medium transition-colors">Reply</button>
                <span className="text-xs text-[var(--muted)]">{comment.timestamp}</span>
                {comment.likes > 0 && (
                  <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" /> {comment.likes}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
