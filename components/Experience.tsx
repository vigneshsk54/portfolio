"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// EXPERIENCE"
          title="Real teams, real codebases."
          description="Three internships, three different angles on shipping software professionally."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative sm:pl-10"
              >
                <span className="hidden sm:block absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-void border-2 border-blue-soft" />

                <div className="glass rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-medium text-ink">{exp.role}</h3>
                      <p className="text-blue-soft text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right font-mono text-xs text-muted-2 shrink-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point) => (
                      <li key={point} className="text-sm text-muted leading-relaxed flex gap-2.5">
                        <span className="text-blue-soft mt-1.5 h-1 w-1 rounded-full bg-blue-soft shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line text-muted-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
