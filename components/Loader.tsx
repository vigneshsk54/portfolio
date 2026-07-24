"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "initializing environment",
  "authenticating session",
  "loading profile: vignesh-kumar-s",
  "compiling experience.tsx",
  "ready",
];

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2200;
    const raf = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      setLineIndex(Math.min(BOOT_LINES.length - 1, Math.floor((pct / 100) * BOOT_LINES.length)));
      if (pct < 100) {
        requestAnimationFrame(raf);
      } else {
        setTimeout(() => {
          setHidden(true);
          setTimeout(onDone, 700);
        }, 300);
      }
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void noise"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="absolute inset-0 grid-overlay opacity-40" />
          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.div
              className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-gradient"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              VK
            </motion.div>

            <div className="w-64 sm:w-80">
              <div className="h-px w-full bg-line overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue via-blue-soft to-violet-soft"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-muted-2">
                <span>{BOOT_LINES[lineIndex]}</span>
                <span className="text-muted">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
