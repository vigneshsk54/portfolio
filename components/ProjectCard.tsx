"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -py * 6, y: px * 6 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        className="relative glass rounded-2xl p-7 sm:p-8 h-full flex flex-col transition-transform duration-200 ease-out overflow-hidden hover:border-blue/30"
      >
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-aurora-2 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />

        <div className="relative flex items-start justify-between gap-4 mb-5">
          <div>
            <span className="font-mono text-[11px] text-muted-2">
              {project.category} — {project.year}
            </span>
            <h3 className="font-display text-xl font-medium text-ink mt-1.5">{project.title}</h3>
          </div>
          {project.status === "Published Research" && (
            <span className="shrink-0 font-mono text-[10px] px-2.5 py-1 rounded-full bg-violet/10 text-violet-soft border border-violet/20">
              Published
            </span>
          )}
        </div>

        <p className="relative text-sm text-muted leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="relative flex flex-wrap gap-2 mb-7">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line text-muted-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="relative flex items-center justify-between mt-auto pt-5 border-t border-line-soft">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-blue-soft transition-colors"
          >
            Case study <ArrowUpRight size={14} />
          </Link>
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="h-9 w-9 rounded-full flex items-center justify-center text-muted-2 hover:text-ink hover:bg-white/5 transition-colors"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
