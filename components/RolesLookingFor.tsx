"use client";

import { motion } from "framer-motion";
import { roles } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function RolesLookingFor() {
  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// WHAT I'M LOOKING FOR"
          title="Roles where I'd add value from day one."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-line px-6 py-5 hover:border-blue/40 hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="font-display text-base font-medium text-ink mb-1.5">{role.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{role.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
