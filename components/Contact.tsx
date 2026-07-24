"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 h-72 w-72 bg-aurora-1 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 bg-aurora-2 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-12">
            <div>
              <SectionHeading
                eyebrow="// CONTACT"
                title="Let's build something worth shipping."
                description="Open to Software Engineer, Full Stack, and AI Engineer roles. I usually reply within a day."
              />

              <div className="mt-10 space-y-4">
                <ContactRow icon={Mail} label={profile.email} href={`mailto:${profile.email}`} />
                <ContactRow icon={Phone} label={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
                <ContactRow icon={Linkedin} label="linkedin.com/in/vignesh-kumar-sundaram" href={profile.linkedin} external />
                <ContactRow icon={Github} label="github.com/vigneshsk54" href={profile.github} external />
              </div>

              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent("Résumé request from your portfolio")}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass text-ink hover:border-blue/40 transition-colors"
              >
                Request resume <ArrowUpRight size={16} />
              </a>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
              <div>
                <label className="font-mono text-[11px] text-muted-2 mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-sm text-ink placeholder:text-muted-2 focus:border-blue/50 outline-none transition-colors resize-none"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-ink text-void hover:bg-blue-soft transition-colors duration-300"
              >
                Send message <ArrowUpRight size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[11px] text-muted-2 mb-1.5 block">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-sm text-ink placeholder:text-muted-2 focus:border-blue/50 outline-none transition-colors"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-3 group"
    >
      <span className="h-9 w-9 rounded-full glass flex items-center justify-center text-muted-2 group-hover:text-blue-soft group-hover:border-blue/40 transition-colors shrink-0">
        <Icon size={15} />
      </span>
      <span className="text-sm text-muted group-hover:text-ink transition-colors break-all">
        {label}
      </span>
    </a>
  );
}
