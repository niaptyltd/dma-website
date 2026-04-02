"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.22 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
