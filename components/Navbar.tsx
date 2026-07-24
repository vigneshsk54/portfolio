"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { nav, profile } from "@/lib/data";
import { MagneticButton } from "./MagneticButton";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-[80]"
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <Link href="/#top" className="font-display text-lg font-semibold tracking-tight text-ink">
            {profile.initials}
            <span className="text-blue-soft">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide text-muted">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="/#contact" className="!px-5 !py-2 text-xs">
              Let&rsquo;s talk
            </MagneticButton>
          </div>

          <button
            className="md:hidden text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-4 flex flex-col gap-1 md:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg font-mono text-sm text-muted hover:text-ink hover:bg-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
