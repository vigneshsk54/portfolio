"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// EDUCATION" title="Foundations." />

        <div className="mt-10 space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="h-12 w-12 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                <GraduationCap size={22} className="text-blue-soft" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-ink">{edu.degree}</h3>
                  <span className="font-mono text-xs text-muted-2">{edu.period}</span>
                </div>
                <p className="text-blue-soft text-sm mt-1">{edu.institution}</p>
                <p className="text-muted text-sm mt-3 leading-relaxed">{edu.detail}</p>
              </div>
              <div className="glass rounded-xl px-5 py-3 text-center shrink-0">
                <p className="font-display text-2xl font-semibold text-gradient">{edu.cgpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
