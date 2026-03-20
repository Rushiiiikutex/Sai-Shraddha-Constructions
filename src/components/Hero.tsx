"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import FadeUpWrapper from "./FadeUpWrapper";

const LINES = [
  { text: "SAI", fillColor: "#ffffff" },
  { text: "SHRADDHA", fillColor: "#06B6D4" },
  { text: "CONSTRUCTIONS", fillColor: "#ffffff" },
];

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollRange = window.innerHeight;
      const percent = Math.min(100, Math.max(0, (scrolled / scrollRange) * 100));
      const clipRight = 100 - percent;

      for (const el of fillRefs.current) {
        if (el) el.style.clipPath = `inset(0 ${clipRight}% 0 0)`;
      }

      if (indicatorRef.current) {
        indicatorRef.current.style.opacity = percent > 10 ? "0" : "1";
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[200vh]" id="hero">
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.png"
          alt="Modern building under construction"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/60 to-slate-900/80" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Scroll-fill company name */}
          <div className="mb-4 sm:mb-8 select-none" aria-label="Sai Shraddha Constructions">
            {LINES.map((line, i) => (
              /* w-fit makes clipPath % relative to text width, not container */
              <div key={i} className="relative w-fit leading-[0.9]">
                {/* Outline layer — always visible */}
                <span
                  className="block text-[12vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black uppercase tracking-tighter"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.3)",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {line.text}
                </span>
                {/* Fill layer — clipped by scroll, sits on top */}
                <span
                  ref={(el) => { fillRefs.current[i] = el; }}
                  className="absolute inset-0 block text-[12vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black uppercase tracking-tighter"
                  style={{
                    color: line.fillColor,
                    clipPath: "inset(0 100% 0 0)",
                    willChange: "clip-path",
                  }}
                >
                  {line.text}
                </span>
              </div>
            ))}
          </div>

          {/* Subheadline */}
          <FadeUpWrapper delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl leading-relaxed mb-6 sm:mb-8">
              Delivering exceptional craftsmanship, unwavering reliability, and
              uncompromising quality on every project — from foundation to finishing
              touches.
            </p>
          </FadeUpWrapper>

          <FadeUpWrapper delay={0.4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-all duration-300 hover:bg-white/10"
              >
                Our Projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Request a Free Estimate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </FadeUpWrapper>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={indicatorRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10"
        >
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </div>
  );
}
