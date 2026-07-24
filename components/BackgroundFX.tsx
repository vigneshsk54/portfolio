"use client";

import { motion } from "framer-motion";

export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 grid-overlay bg-grid-fade" />

      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] bg-aurora-1 blur-3xl" />
      <div className="absolute top-20 -right-40 h-[600px] w-[600px] bg-aurora-2 blur-3xl" />

      <motion.div
        aria-hidden
        className="absolute top-[10%] left-[8%] h-2 w-2 rounded-full bg-blue-soft/70 shadow-[0_0_20px_6px_rgba(76,124,255,0.4)]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-[35%] right-[12%] h-1.5 w-1.5 rounded-full bg-violet-soft/70 shadow-[0_0_20px_6px_rgba(157,92,255,0.35)]"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[20%] left-[20%] h-1 w-1 rounded-full bg-signal/70 shadow-[0_0_16px_4px_rgba(52,211,153,0.35)]"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="noise absolute inset-0" />
    </div>
  );
}
