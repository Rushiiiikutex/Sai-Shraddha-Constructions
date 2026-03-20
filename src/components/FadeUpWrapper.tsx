"use client";

import { motion } from "framer-motion";

interface FadeUpWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeUpWrapper({
  children,
  delay = 0,
}: FadeUpWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
