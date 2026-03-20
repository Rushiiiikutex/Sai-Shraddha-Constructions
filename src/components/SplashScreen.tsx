"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  children: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Always start from the top on load/refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // After 2 seconds, trigger the exit animation
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll while splash is showing
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          >
            {/* Subtle radial glow behind the idol */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.15)_0%,_transparent_70%)]" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.3, opacity: 0 }}
              transition={{
                opacity: { duration: 0.5, ease: "easeOut" },
                scale: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              }}
              className="relative w-48 h-48 sm:w-64 sm:h-64"
              style={{ willChange: "transform, opacity" }}
            >
              <Image
                src="/images/ganpati.png"
                alt="Ganpati"
                fill
                priority
                className="object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                sizes="256px"
              />
            </motion.div>

            {/* Company name below */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-20 text-white/60 text-sm font-bold uppercase tracking-[0.3em]"
            >
              Sai Shraddha Constructions
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content is always mounted underneath */}
      {children}
    </>
  );
}
