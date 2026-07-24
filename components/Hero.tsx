import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { MagneticButton } from "./MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 2.5 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-32 pb-20 px-4 sm:px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center"
      >
        <div>
          <motion.p
            variants={item}
            className="font-mono text-xs tracking-widest text-blue-soft mb-6 flex items-center gap-2"
          >
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span> */}
            {/* {profile.status.toUpperCase()} — {profile.location.toUpperCase()} */}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-medium tracking-tight text-ink text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            Vignesh
            <br />
            <span className="text-gradient">Kumar S</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-muted text-base md:text-lg leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects">
              View projects <ArrowUpRight size={16} />
            </MagneticButton>
            {/* <MagneticButton href="#contact" variant="ghost">
              Get in touch
            </MagneticButton> */}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted hover:text-ink hover:border-blue/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={item} className="relative">
          <div className="relative glass rounded-2xl p-6 overflow-hidden animate-float">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-blue/0 via-blue-soft/10 to-blue/0 animate-scan" />
            </div>

            <div className="relative flex items-center justify-between font-mono text-[10px] tracking-widest text-muted-2 mb-6">
              <span>SYSTEM.STATUS</span>
              <span className="text-signal">ONLINE</span>
            </div>

            <div className="relative space-y-4 font-mono text-xs">
              <Row label="role" value="Full Stack & AI Engineer" />
              <Row label="focus" value="AI systems, secure platforms" />
              <Row label="stack" value="React / Next.js / Node / Java" />
              <Row label="research" value="Phishing detection, published" />
              <Row label="education" value="B.E. CSE — CGPA 8.1" />
              <Row label="availability" value="Immediate" accent />
            </div>

            <div className="relative mt-6 pt-5 border-t border-line-soft flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted-2">
                LAST DEPLOY: {new Date().getFullYear()}
              </span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-signal" />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -z-10 -inset-6 bg-aurora-1 blur-2xl" />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-2 hover:text-ink transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted-2">{label}</span>
      <span className={accent ? "text-signal" : "text-ink"}>{value}</span>
    </div>
  );
}
