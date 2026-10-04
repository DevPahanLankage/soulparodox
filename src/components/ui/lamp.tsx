"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type LampContainerProps = {
  children: ReactNode;
  className?: string;
};

type ShowroomLightProps = {
  className?: string;
};

export function ShowroomLight({ className }: ShowroomLightProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  const viewport = { once: true, amount: 0.6 };
  const transitionFor = (duration: number, delay: number) => ({
    duration: reduceMotion ? 0 : duration,
    delay: reduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative mx-auto h-[clamp(3.75rem,14vw,5.5rem)] w-full overflow-visible sm:h-[clamp(4.5rem,8vw,6.5rem)]",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, scaleX: 0.62 }}
        whileInView={{ opacity: 0.7, scaleX: 1 }}
        viewport={viewport}
        transition={transitionFor(0.9, 0.06)}
        className="absolute left-1/2 top-0 z-30 h-px w-[80%] max-w-[43rem] origin-center -translate-x-1/2 bg-[#fffdf8] shadow-[0_0_5px_1px_rgba(255,253,248,0.38),0_0_14px_2px_rgba(255,255,255,0.1)] sm:w-[84%]"
      />

      <div className="absolute left-1/2 top-0 z-20 h-[clamp(5rem,13vw,7.5rem)] w-[min(88vw,50rem)] -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scaleX: 0.62 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={viewport}
          transition={transitionFor(0.95, 0.08)}
          className="h-full w-full origin-top bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,253,248,0.76)_0%,rgba(255,255,255,0.37)_22%,rgba(255,255,255,0.12)_48%,transparent_76%)] opacity-90 [filter:blur(clamp(5px,0.9vw,11px))] sm:opacity-100"
        />
      </div>

      <div className="absolute left-1/2 top-[clamp(0.15rem,0.5vw,0.45rem)] z-10 h-[clamp(16rem,38vw,27rem)] w-[min(116vw,84rem)] -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scaleX: 0.54, scaleY: 0.76 }}
          whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          viewport={viewport}
          transition={transitionFor(1.1, 0.13)}
          className="h-full w-full origin-top opacity-90 [filter:blur(clamp(13px,1.8vw,25px))] sm:opacity-100"
          style={{
            backgroundImage:
              "conic-gradient(from 0deg at 50% 0%, transparent 0deg 136deg, rgba(255,253,248,0.015) 143deg, rgba(255,255,255,0.13) 158deg, rgba(255,255,255,0.34) 180deg, rgba(255,255,255,0.13) 202deg, rgba(255,253,248,0.015) 217deg, transparent 224deg 360deg)",
            WebkitMaskImage:
              "radial-gradient(ellipse 76% 104% at 50% 0%, black 0%, rgba(0,0,0,0.96) 50%, rgba(0,0,0,0.54) 74%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 76% 104% at 50% 0%, black 0%, rgba(0,0,0,0.96) 50%, rgba(0,0,0,0.54) 74%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute left-1/2 top-[clamp(0.35rem,1vw,0.75rem)] h-[clamp(19rem,45vw,31rem)] w-[min(140vw,108rem)] -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scaleX: 0.48, scaleY: 0.72 }}
          whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          viewport={viewport}
          transition={transitionFor(1.2, 0.19)}
          className="h-full w-full origin-top opacity-65 [filter:blur(clamp(22px,2.8vw,42px))] sm:opacity-85"
          style={{
            backgroundImage:
              "conic-gradient(from 0deg at 50% 0%, transparent 0deg 120deg, rgba(255,253,248,0.01) 128deg, rgba(255,255,255,0.06) 151deg, rgba(255,255,255,0.15) 180deg, rgba(255,255,255,0.06) 209deg, rgba(255,253,248,0.01) 232deg, transparent 240deg 360deg)",
            WebkitMaskImage:
              "radial-gradient(ellipse 82% 108% at 50% 0%, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.76) 58%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 82% 108% at 50% 0%, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.76) 58%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute left-1/2 top-[clamp(5.5rem,12vw,8rem)] h-[clamp(10rem,21vw,15rem)] w-[min(118vw,88rem)] -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scaleX: 0.64 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={viewport}
          transition={transitionFor(1.2, 0.24)}
          className="h-full w-full origin-center bg-[radial-gradient(ellipse_at_50%_42%,rgba(255,253,248,0.18)_0%,rgba(255,255,255,0.075)_40%,rgba(255,255,255,0.025)_61%,transparent_78%)] opacity-75 [filter:blur(clamp(20px,2.4vw,36px))] sm:opacity-95"
        />
      </div>
    </div>
  );
}

export function LampContainer({ children, className }: LampContainerProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-[#09090b] text-[#f5f0e8] [contain:paint]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(255,255,255,0.018),transparent_52%),linear-gradient(180deg,#09090b_0%,#0a0a0d_52%,#09090b_100%)]"
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
