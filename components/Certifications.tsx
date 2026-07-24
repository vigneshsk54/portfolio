"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// CERTIFICATIONS" title="Continuous learning, on the record." />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:border-violet/30 transition-colors"
            >
              <div className="h-9 w-9 rounded-lg bg-violet/10 flex items-center justify-center mb-4">
                <Award size={16} className="text-violet-soft" />
              </div>
              <h3 className="font-display text-sm font-medium text-ink leading-snug mb-1.5">
                {cert.title}
              </h3>
              <p className="font-mono text-[11px] text-muted-2 mb-3">
                {cert.issuer} — {cert.date}
              </p>
              <p className="text-xs text-muted leading-relaxed">{cert.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
