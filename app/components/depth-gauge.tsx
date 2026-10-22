"use client";

import { useEffect, useRef, useState } from "react";

// Jauge de profondeur : le défilement de la page est lu comme une plongée.
const METERS_PER_PX = 0.05;
const TICKS = Array.from({ length: 21 }, (_, i) => i);

export function DepthGauge() {
  const [depth, setDepth] = useState(0);
  const [progress, setProgress] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    const update = () => {
      frame.current = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setDepth(Math.round(window.scrollY * METERS_PER_PX));
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame.current) frame.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed top-1/2 right-5 z-40 hidden h-[46vh] -translate-y-1/2 transition-opacity duration-500 2xl:block ${
        depth > 15 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative h-full w-6">
        {TICKS.map((i) => (
          <span
            key={i}
            className="absolute right-0 h-px bg-cyan/60"
            style={{ top: `${i * 5}%`, width: i % 5 === 0 ? 14 : 7 }}
          />
        ))}
        <span className="absolute top-0 right-0 bottom-0 w-px bg-cyan/30" />
        <div
          className="absolute right-0 flex -translate-y-1/2 items-center gap-1.5 transition-[top] duration-150 ease-out"
          style={{ top: `${progress * 100}%` }}
        >
          <span className="rounded-full bg-navy px-2 py-0.5 font-mono text-[0.65rem] whitespace-nowrap text-white shadow-lg shadow-navy/20">
            −{depth} m
          </span>
          <span className="size-2 rounded-full bg-cyan ring-4 ring-cyan/25" />
        </div>
      </div>
    </div>
  );
}
