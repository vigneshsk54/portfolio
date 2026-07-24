"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-mono text-xs tracking-widest text-blue-soft mb-4">
        {project.category.toUpperCase()} — {project.year}
      </p>
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink text-balance">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{project.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line text-muted-2"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 glass rounded-2xl p-6 sm:p-8">
        <p className="text-muted leading-relaxed">{project.description}</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4 font-mono text-xs text-muted-2">
          <div>
            <span className="block text-muted-2 mb-1">Role</span>
            <span className="text-ink font-body text-sm">{project.role}</span>
          </div>
          <div>
            <span className="block text-muted-2 mb-1">Status</span>
            <span className="text-signal font-body text-sm">{project.status}</span>
          </div>
        </div>
      </div>

      <Section title="Key features">
        <ul className="space-y-3">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-soft shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Architecture">
        <ul className="space-y-3">
          {project.architecture.map((a) => (
            <li key={a} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-soft shrink-0" />
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Challenges & solutions">
        <div className="space-y-4">
          {project.challenges.map((c) => (
            <div key={c.problem} className="glass rounded-xl p-5">
              <p className="text-xs font-mono text-muted-2 mb-1.5">PROBLEM</p>
              <p className="text-sm text-muted mb-3 leading-relaxed">{c.problem}</p>
              <p className="text-xs font-mono text-signal mb-1.5">SOLUTION</p>
              <p className="text-sm text-ink leading-relaxed">{c.solution}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Impact">
        <ul className="space-y-3">
          {project.impact.map((i) => (
            <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" />
              {i}
            </li>
          ))}
        </ul>
      </Section>
    </motion.article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <h2 className="font-display text-xl font-medium text-ink mb-5">{title}</h2>
      {children}
    </div>
  );
}
