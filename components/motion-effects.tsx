"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-0.5 origin-left bg-brand"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HeroMedia({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, reduced ? 0 : 42]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [1, reduced ? 1 : 1.035]);

  return (
    <motion.div style={{ y, scale }} className="will-change-transform">
      {children}
    </motion.div>
  );
}
