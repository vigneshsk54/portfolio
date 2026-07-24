"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// SKILLS"
          title="A stack built for shipping, not slides."
          description="Grouped the way I actually reach for these tools — pick a category to see it in more depth."
        />

        <div className="mt-14 grid lg:grid-cols-[280px_1fr] gap-8">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillGroups.map((g, i) => (
              <button
                key={g.label}
                onClick={() => setActive(i)}
                className={`shrink-0 text-left rounded-xl px-4 py-3 font-mono text-sm transition-all border ${
                  active === i
                    ? "glass border-blue/40 text-ink"
                    : "border-transparent text-muted hover:text-ink hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-muted-2 mr-2">{g.eyebrow}</span>
                {g.label}
              </button>
            ))}
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid sm:grid-cols-2 gap-x-8 gap-y-6"
              >
                {group.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-ink">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-2">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-line-soft overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-blue to-violet-soft"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
