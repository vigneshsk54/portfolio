"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// ACHIEVEMENTS" title="Numbers behind the work." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-blue/30 transition-colors"
            >
              <p className="font-display text-4xl font-semibold text-gradient mb-3">{a.stat}</p>
              <p className="text-sm font-medium text-ink mb-2">{a.label}</p>
              <p className="text-xs text-muted leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
