"use client";

import { useState } from "react";
import Link from "next/link";
import { ThumbsUp, MessageCircle, Share2, Send, MoreHorizontal, Bookmark } from 'lucide-react';
import { Post } from "@/lib/mock-data/posts";
import { formatNumber, getInitials } from "@/lib/utils";
import CommentSection from "./CommentSection";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount((c) => c - 1);
    } else {
      setLikeCount((c) => c + 1);
    }
    setLiked(!liked);
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i < content.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <Link href={"/profile/" + post.authorUsername}>
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity overflow-hidden">
                <img
                  src={post.authorAvatar}
                  alt={post.authorName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = "<span class='text-white font-bold'>" + getInitials(post.authorName) + "</span>";
                    }
                  }}
                />
              </div>
            </Link>
            <div>
              <Link href={"/profile/" + post.authorUsername} className="font-semibold text-sm hover:text-brand hover:underline transition-colors">
                {post.authorName}
              </Link>
              <p className="text-xs text-[var(--muted)] line-clamp-1">{post.authorHeadline}</p>
              <p className="text-xs text-[var(--muted)]">{post.timestamp}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSaved(!saved)}
              className={"p-2 rounded-full hover:bg-[var(--accent)] transition-colors " + (saved ? "text-brand" : "text-[var(--muted)]")}
            >
              <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
            </button>
            <button className="p-2 rounded-full hover:bg-[var(--accent)] text-[var(--muted)] transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-sm leading-relaxed whitespace-pre-line">{formatContent(post.content)}</p>
      </div>

      {/* Image */}
      {post.image && (
        <div className="w-full bg-[var(--accent)] overflow-hidden">
          <img
            src={post.image}
            alt="Post image"
            className="w-full max-h-96 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      {/* Stats */}
      <div className="px-4 py-2 flex items-center justify-between text-xs text-[var(--muted)] border-b border-[var(--border)]">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-[8px]">👍</span>
            <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-[8px]">❤️</span>
          </div>
          <span className="ml-1 hover:text-brand hover:underline cursor-pointer">{formatNumber(likeCount)}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowComments(!showComments)}
            className="hover:text-brand hover:underline"
          >
            {post.comments.length} comments
          </button>
          <span>{formatNumber(post.shares)} reposts</span>
        </div>
      </div>

      {/* Actions */}
      <div className="px-2 py-1 flex items-center justify-between">
        <button
          onClick={handleLike}
          className={"flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center " + (liked ? "text-brand bg-blue-50 dark:bg-blue-900/20" : "text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]")}
        >
          <ThumbsUp className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
          <span>Like</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors flex-1 justify-center"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors flex-1 justify-center">
          <Share2 className="w-4 h-4" />
          <span>Repost</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors flex-1 justify-center">
          <Send className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>

      {/* Comments */}
      {showComments && <CommentSection comments={post.comments} />}
    </div>
  );
}
