"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Layers, BrainCircuit } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const strengths = [
  {
    icon: Layers,
    title: "Full-stack range",
    detail: "Comfortable owning a feature from React UI down to the Java or Node service behind it.",
  },
  {
    icon: ShieldCheck,
    title: "Security-minded",
    detail: "Published research in phishing detection shapes how I think about auth, RBAC, and trust.",
  },
  {
    icon: BrainCircuit,
    title: "Applied AI",
    detail: "Building real pipelines with Whisper and LLMs, not just experimenting in a notebook.",
  },
  {
    icon: Rocket,
    title: "Ships fast",
    detail: "Three internships and five-plus shipped projects before finishing my degree.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow=" ABOUT"
              title="Engineering with a research habit."
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-muted leading-relaxed text-base md:text-lg"
            >
              {profile.longSummary}
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-blue/30 transition-colors group"
              >
                <s.icon
                  size={20}
                  className="text-blue-soft mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-display text-base font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
