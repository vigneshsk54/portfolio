"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 pb-8 pt-16">
      <div className="mx-auto max-w-6xl border-t border-line-soft pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-2">
          <span>© {new Date().getFullYear()} {profile.name}.</span>
          <span className="hidden sm:inline">Built from scratch, no templates.</span>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-2 hover:text-ink transition-colors">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-2 hover:text-ink transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted-2 hover:text-ink transition-colors">
            <Mail size={16} />
          </a>

          <Link
            href="/#top"
            aria-label="Back to top"
            className="ml-2 h-9 w-9 rounded-full glass flex items-center justify-center text-muted-2 hover:text-ink hover:border-blue/40 transition-colors"
          >
            <ArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
