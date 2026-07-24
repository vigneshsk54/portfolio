"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 40 });
  const springY = useSpring(y, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button']"));
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        className="rounded-full bg-ink"
        animate={{
          width: isPointer ? 44 : 10,
          height: isPointer ? 44 : 10,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </motion.div>
  );
}
