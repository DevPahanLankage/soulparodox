"use client";

import Image from "next/image";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

const springStiffness = 58;
const springDamping = 12;
const maximumVelocity = 9;

export interface CoverflowSlide {
  src: string;
  alt: string;
  title: string;
  capacity: {
    label: string;
    value: string;
    suffix: string;
  };
  imageFit?: "contain" | "cover";
  imagePosition?: string;
}

export interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  rotate?: number;
  depth?: number;
  perspective?: number;
  falloff?: number;
  fade?: number;
  cardWidth?: string;
  gap?: number;
  loop?: boolean;
  label?: string;
  className?: string;
}

export function CoverflowCarousel({
  slides,
  rotate = 38,
  depth = 0.58,
  perspective = 3.2,
  falloff = 0.6,
  fade = 0.12,
  cardWidth = "clamp(210px, 27vw, 390px)",
  gap = 0.08,
  loop = true,
  label = "Product categories",
  className,
}: CoverflowCarouselProps) {
  const count = slides.length;
  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const velocityRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const reduceMotionRef = React.useRef(false);
  const suppressClickRef = React.useRef(false);
  const selectedRef = React.useRef(0);
  const dragRef = React.useRef<{
    id: number;
    x: number;
    pos: number;
    v: number;
    t: number;
    moved: boolean;
  } | null>(null);

  const [selected, setSelected] = React.useState(0);
  const [announced, setAnnounced] = React.useState(0);

  const indexAt = React.useCallback(
    (position: number) => ((Math.round(position) % count) + count) % count,
    [count],
  );

  const clampPosition = React.useCallback(
    (position: number) =>
      loop ? position : Math.max(0, Math.min(count - 1, position)),
    [count, loop],
  );

  const syncSelected = React.useCallback(
    (position: number) => {
      const index = indexAt(position);
      if (selectedRef.current === index) return;

      selectedRef.current = index;
      setSelected(index);
    },
    [indexAt],
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width || !count) return;

    const pitch = width * (1 + gap);
    const position = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - position;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 78) * Math.sign(offset);
      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      const zIndex = String(100 - Math.round(distance));
      const pointerEvents = distance < 2.6 ? "auto" : "none";
      if (card.style.zIndex !== zIndex) card.style.zIndex = zIndex;
      if (card.style.pointerEvents !== pointerEvents) {
        card.style.pointerEvents = pointerEvents;
      }
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const setCardsAnimating = React.useCallback((isAnimating: boolean) => {
    const willChange = isAnimating ? "transform, opacity" : "auto";
    cardRefs.current.forEach((card) => {
      if (card) card.style.willChange = willChange;
    });
  }, []);

  const settle = React.useCallback(
    (target: number, initialVelocity?: number) => {
      targetRef.current = target;

      if (reduceMotionRef.current) {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        posRef.current = target;
        velocityRef.current = 0;
        syncSelected(target);
        paint();
        setAnnounced(indexAt(target));
        setCardsAnimating(false);
        rafRef.current = null;
        return;
      }

      if (initialVelocity !== undefined) {
        const carriedVelocity = rafRef.current === null ? 0 : velocityRef.current;
        velocityRef.current = Math.max(
          -maximumVelocity,
          Math.min(maximumVelocity, carriedVelocity + initialVelocity),
        );
      }

      if (rafRef.current !== null) return;

      setCardsAnimating(true);

      let previousTime = performance.now();

      const step = (time: number) => {
        const elapsed = Math.min((time - previousTime) / 1000, 0.064);
        previousTime = time;

        const substepCount = Math.max(1, Math.ceil(elapsed / 0.016));
        const deltaTime = elapsed / substepCount;

        for (let stepIndex = 0; stepIndex < substepCount; stepIndex += 1) {
          const remaining = targetRef.current - posRef.current;
          velocityRef.current += remaining * springStiffness * deltaTime;
          velocityRef.current *= Math.exp(-springDamping * deltaTime);
          velocityRef.current = Math.max(
            -maximumVelocity,
            Math.min(maximumVelocity, velocityRef.current),
          );
          posRef.current += velocityRef.current * deltaTime;
        }

        syncSelected(posRef.current);
        paint();

        const remaining = targetRef.current - posRef.current;
        if (Math.abs(remaining) < 0.0005 && Math.abs(velocityRef.current) < 0.004) {
          posRef.current = targetRef.current;
          velocityRef.current = 0;
          syncSelected(targetRef.current);
          paint();
          setAnnounced(indexAt(targetRef.current));
          setCardsAnimating(false);
          rafRef.current = null;
          return;
        }

        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint, setCardsAnimating, syncSelected],
  );

  const goTo = React.useCallback(
    (index: number) => {
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clampPosition(target));
    },
    [clampPosition, count, loop, settle],
  );

  const nudge = React.useCallback(
    (by: number) => {
      const target = clampPosition(Math.round(targetRef.current) + by);
      settle(target, by * 0.72);
    },
    [clampPosition, settle],
  );

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    velocityRef.current = 0;
    setCardsAnimating(true);

    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
      moved: false,
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const delta = event.clientX - drag.x;
    if (Math.abs(delta) > 4) drag.moved = true;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clampPosition(drag.pos - delta / pitch);
    const instantaneousVelocity =
      ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.v = drag.v * 0.7 + instantaneousVelocity * 0.3;
    drag.t = now;

    syncSelected(posRef.current);
    paint();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    dragRef.current = null;
    suppressClickRef.current = drag.moved;
    if (drag.moved) {
      requestAnimationFrame(() => {
        suppressClickRef.current = false;
      });
    }
    const elapsedSinceMove = Math.max(performance.now() - drag.t, 0);
    const releaseVelocity = Math.max(
      -maximumVelocity,
      Math.min(maximumVelocity, drag.v * Math.exp(-elapsedSinceMove / 110)),
    );
    const carried = Math.max(-2.5, Math.min(2.5, releaseVelocity * 0.24));
    const target = clampPosition(Math.round(posRef.current + carried));
    settle(target, releaseVelocity);
  };

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame || !count) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => {
      reduceMotionRef.current = reducedMotionQuery.matches;
    };

    updateReducedMotion();
    reducedMotionQuery.addEventListener("change", updateReducedMotion);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(frame);

    return () => {
      observer.disconnect();
      reducedMotionQuery.removeEventListener("change", updateReducedMotion);
    };
  }, [count, paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  if (!count) return null;

  const active = slides[selected];

  return (
    <div
      className={cn("w-full", className)}
      style={{ ["--cf-card" as string]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="coverflow-frame cursor-grab overflow-hidden py-8 outline-none ring-white/60 focus-visible:ring-1 active:cursor-grabbing sm:py-10"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "calc(var(--cf-card) * 1.08)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                type="button"
                aria-label={`${slide.title}, slide ${index + 1} of ${count}`}
                aria-current={index === selected ? "true" : undefined}
                tabIndex={index === selected ? 0 : -1}
                onClick={() => {
                  if (suppressClickRef.current) {
                    suppressClickRef.current = false;
                    return;
                  }
                  goTo(index);
                }}
                className="absolute left-1/2 top-0 aspect-[1/1.08] overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#efede8] shadow-[0_28px_70px_rgba(0,0,0,0.48)] outline-none ring-white/70 transition-[border-color,box-shadow] duration-300 focus-visible:ring-2"
                style={{
                  width: "var(--cf-card)",
                }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 639px) 210px, (max-width: 1023px) 32vw, 390px"
                  draggable={false}
                  className={cn(
                    "select-none p-[7%]",
                    slide.imageFit === "cover" ? "object-cover p-0" : "object-contain",
                    slide.imagePosition ?? "object-center",
                  )}
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent" />
                <span className="absolute bottom-4 right-4 text-[0.62rem] font-medium tracking-[0.2em] text-black/36">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous category"
          onClick={() => nudge(-1)}
          className="absolute left-3 top-1/2 z-[200] hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-black/35 text-white backdrop-blur-md transition-colors hover:border-white/45 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex lg:left-8"
        >
          <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Next category"
          onClick={() => nudge(1)}
          className="absolute right-3 top-1/2 z-[200] hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-black/35 text-white backdrop-blur-md transition-colors hover:border-white/45 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex lg:right-8"
        >
          <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>
      </div>

      <div
        className="coverflow-details mx-auto mt-1 w-full max-w-3xl border-t border-white/14 px-1 pt-5 sm:mt-3 sm:px-6 sm:pt-7"
      >
        <div className="coverflow-details-grid grid gap-5 text-center sm:grid-cols-[1fr_auto] sm:grid-rows-[auto_auto_auto] sm:items-baseline sm:gap-y-0 sm:text-left">
          <div className="sm:contents">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-white/38 sm:col-start-1 sm:row-start-1">
              {String(selected + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-[clamp(1.8rem,3vw,3rem)] font-light leading-none tracking-[-0.045em] text-[#f5f0e8] sm:col-start-1 sm:row-start-2">
              {active.title}
            </h3>
          </div>

          <div className="sm:contents sm:text-right">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/40 sm:col-start-2 sm:row-start-1">
              {active.capacity.label}
            </p>
            <p className="mt-1 text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-none tracking-[-0.04em] tabular-nums text-white sm:col-start-2 sm:row-start-2">
              {active.capacity.value}
            </p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-white/38 sm:col-start-2 sm:row-start-3">
              {active.capacity.suffix}
            </p>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`${slides[announced].title}, slide ${announced + 1} of ${count}`}
      </p>

      <div
        className="coverflow-pagination mx-auto mt-2 flex min-h-11 w-full max-w-[21rem] items-center justify-center sm:mt-4"
        role="group"
        aria-label="Choose a product category"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show ${slide.title}`}
            aria-current={index === selected ? "true" : undefined}
            onClick={() => goTo(index)}
            className="group flex h-11 min-w-5 flex-1 items-center justify-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <span
              aria-hidden="true"
              className={cn(
                "h-1 rounded-full bg-white transition-[width,opacity] duration-300",
                index === selected ? "w-6 opacity-90" : "w-1.5 opacity-25 group-hover:opacity-60",
              )}
            />
          </button>
        ))}
      </div>

      <p className="coverflow-swipe-hint mt-4 text-center text-[0.58rem] uppercase tracking-[0.22em] text-white/28 sm:hidden">
        Swipe to explore
      </p>
    </div>
  );
}
