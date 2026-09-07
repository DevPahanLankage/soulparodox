"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { CA, GB, BD, LK } from 'country-flag-icons/react/3x2'
import { WorldMap } from "@/components/ui/world-map";

type CapacityItem = {
  id: string;
  label: string;
  value: number;
  suffix: string;
};

type CategoryArtwork = {
  image: string;
  alt: string;
  fit: "object-contain" | "object-cover";
  imagePosition: string;
};

export default function Home() {
  const capabilities = [
    {
      title: "Strategic Sourcing & Vendor Management",
      body: "Supplier selection, factory matching, capacity planning, commercial negotiations, and lead time optimization for global fashion calendars.",
      image:
        "/images/strategic-sourcing.png",
    },
    {
      title: "Product Development & R&D",
      body: "Fabric sourcing, lab dips, tech packs, sampling, fit approvals, and prototype development with practical production alignment.",
      image:
        "/images/product-development.png",
    },
    {
      title: "Quality Assurance & Compliance",
      body: "Factory inspections, inline quality control, pre-shipment checks, social compliance audits, and continuous corrective action loops.",
      image:
        "/images/quality-compliance.png",
    },
    {
      title: "Sustainable Sourcing & Commercial Costing",
      body: "Certified material pathways, traceability, MOQ planning, and margin-conscious costing to protect both quality and business outcomes.",
      image:
        "/images/sustainable-sourcing.png",
    },
  ];

  const capacities: CapacityItem[] = useMemo(
    () => [
      { id: "woven", label: "Woven", value: 210000, suffix: "pieces / month" },
      { id: "knit", label: "Knit", value: 540000, suffix: "pieces / month" },
      { id: "outerwear", label: "Outerwear", value: 100000, suffix: "pieces / month" },
      { id: "workwear", label: "Workwear", value: 120000, suffix: "pieces / month" },
      { id: "headwear", label: "Headwear", value: 10000, suffix: "pieces / month" },
    ],
    [],
  );

  const certifications = [
    "WRAP",
    "BSCI",
    "OEKO-TEX",
    "GOTS",
    "GRS",
    "SEDEX",
    "ISO 9001",
    "HIGG",
  ];

  const categories = [
    "Circular Knit",
    "Flat Knit",
    "Lightweight Woven",
    "Denim",
    "Pants",
    "Activewear",
    "Outerwear",
    "Skiwear",
    "Leather",
    "Indoor Jackets",
    "Chinos",
    "Swimwear",
    "Seamless",
    "Accessories",
    "Headwear",
    "Belts",
    "Bags",
  ];

  const services = [
    "Design Support",
    "Industrial Washing",
    "Printing",
    "Embroidery",
    "All Over Printing",
    "Down Filling",
    "Sealing",
    "Quilting",
    "Bonding",
  ];

  const categoryArtwork: Record<string, CategoryArtwork> = {
    "Circular Knit": {
      image: "https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?auto=format&fit=crop&w=900&q=82",
      alt: "Two cotton t-shirts arranged with natural fiber details",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    "Flat Knit": {
      image: "https://images.unsplash.com/photo-1611312449297-a69dc9c3987b?auto=format&fit=crop&w=900&q=82",
      alt: "Black knit sweater suspended on a hanger",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    "Lightweight Woven": {
      image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?auto=format&fit=crop&w=900&q=82",
      alt: "White button-up shirt displayed on a wooden hanger",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Denim: {
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=82",
      alt: "Denim jeans and jackets hanging on a rail",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Pants: {
      image: "https://images.unsplash.com/photo-1564400143653-f881883b52df?auto=format&fit=crop&w=900&q=82",
      alt: "Pants displayed on a retail rack",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Activewear: {
      image: "https://images.unsplash.com/photo-1522897355400-c4fdec73d979?auto=format&fit=crop&w=900&q=82",
      alt: "Activewear and training apparel arranged flat",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Outerwear: {
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=82",
      alt: "Brown bomber jacket displayed on a hanger",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Skiwear: {
      image: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?auto=format&fit=crop&w=900&q=82",
      alt: "White puffer jacket displayed in a store window",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Leather: {
      image: "https://images.unsplash.com/photo-1603798125914-7b5d27789248?auto=format&fit=crop&w=900&q=82",
      alt: "Brown leather coat hanging on a hanger",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    "Indoor Jackets": {
      image: "https://images.unsplash.com/photo-1771605884393-056bd7a70a12?auto=format&fit=crop&w=900&q=82",
      alt: "Indoor jackets and coats arranged on hangers",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Chinos: {
      image: "https://images.unsplash.com/photo-1632337950445-ba446cb0e26f?auto=format&fit=crop&w=900&q=82",
      alt: "Blue shorts and casual bottoms displayed on a hanger",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Swimwear: {
      image: "https://images.unsplash.com/photo-1566447172003-b861a3a44ae7?auto=format&fit=crop&w=900&q=82",
      alt: "Black bikini swimwear set arranged flat",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Seamless: {
      image: "https://images.unsplash.com/photo-1753369232904-a8a888319d28?auto=format&fit=crop&w=900&q=82",
      alt: "Folded seamless garments stacked on retail shelves",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Accessories: {
      image: "https://images.unsplash.com/photo-1566447128734-341ef6a9c6e7?auto=format&fit=crop&w=900&q=82",
      alt: "Summer accessories and swim apparel arranged flat",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Headwear: {
      image: "https://images.unsplash.com/photo-1663280426478-9294cf296749?auto=format&fit=crop&w=900&q=82",
      alt: "Black cap displayed on a clean tabletop",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Belts: {
      image: "https://images.unsplash.com/photo-1783309239996-61643e6e6e74?auto=format&fit=crop&w=900&q=82",
      alt: "Leather belts displayed vertically at a market stall",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Bags: {
      image: "https://images.unsplash.com/photo-1782406747605-4a6b34f8b7f7?auto=format&fit=crop&w=900&q=82",
      alt: "Retail wall display with a backpack and bags",
      fit: "object-contain",
      imagePosition: "object-center",
    },
  };

  const values = ["Customer First", "Quality", "Collaboration", "Responsibility", "Integrity"];

  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(capacities.map((item) => [item.id, 0])),
  );
  const [hasAnimatedCounts, setHasAnimatedCounts] = useState(false);
  const capacityRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      if (element.dataset.revealDelay) {
        element.style.transitionDelay = `${element.dataset.revealDelay}ms`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = capacityRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || hasAnimatedCounts) {
          return;
        }

        const start = performance.now();
        const duration = 1400;

        const frame = (timestamp: number) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          const nextState: Record<string, number> = {};
          capacities.forEach((item) => {
            nextState[item.id] = Math.round(item.value * eased);
          });

          setCounts(nextState);

          if (progress < 1) {
            window.requestAnimationFrame(frame);
          } else {
            setHasAnimatedCounts(true);
          }
        };

        window.requestAnimationFrame(frame);
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [capacities, hasAnimatedCounts]);


  
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <main>
        <section className="relative isolate min-h-[86svh] overflow-hidden bg-[#111111] text-[var(--ink-invert)] sm:min-h-[92svh] lg:min-h-[96svh]">
          <img
            src="/images/garment-hero.png"
            alt="Textile production environment"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,17,17,0.92)_12%,rgba(17,17,17,0.62)_58%,rgba(17,17,17,0.9)_100%)]" />

          <div className="relative mx-auto flex min-h-[86svh] max-w-[1600px] flex-col justify-between px-6 py-6 sm:min-h-[92svh] sm:px-10 sm:py-8 lg:min-h-[96svh] lg:px-14">
          
          <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.3em] text-white">
            <img
              src="https://raw.githubusercontent.com/DevPahanLankage/my-image-assets/refs/heads/main/Fixed%20Logo.pdf-Photoroom.png"
              alt="Soulparodox"
              className="h-[51px] w-auto object-contain sm:h-[77px] lg:h-[103px]"
            />
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
              <div className="flex flex-col items-center text-[7px] tracking-widest sm:text-[9px] lg:text-[10px]">
                <CA title="Canada" className="mb-1 h-auto w-5 rounded-sm sm:w-6 lg:w-8" />
                <span>TORONTO</span>
              </div>
              <div className="flex flex-col items-center text-[7px] tracking-widest sm:text-[9px] lg:text-[10px]">
                <GB title="United Kingdom" className="mb-1 h-auto w-5 rounded-sm sm:w-6 lg:w-8" />
                <span>LONDON</span>
              </div>
              <div className="flex flex-col items-center text-[7px] tracking-widest sm:text-[9px] lg:text-[10px]">
                <BD title="Bangladesh" className="mb-1 h-auto w-5 rounded-sm sm:w-6 lg:w-8" />
                <span>DHAKA</span>
              </div>
              <div className="flex flex-col items-center text-[7px] tracking-widest sm:text-[9px] lg:text-[10px]">
                <LK title="Sri Lanka" className="mb-1 h-auto w-5 rounded-sm sm:w-6 lg:w-8" />
                <span>COLOMBO</span>
              </div>
            </div>
          </div>

            <div className="grid gap-8 pb-6 pt-14 sm:gap-10 sm:pb-8 sm:pt-16 lg:grid-cols-[1.25fr_0.75fr] lg:pb-16 lg:pt-20">
              <div data-reveal>
                <p className="text-[0.75rem] tracking-[0.24em] uppercase text-white">Sourcing clarity. Manufacturing confidence.</p>
                <h1 className="editorial-headline mt-5 max-w-6xl text-[clamp(2.35rem,7vw,7.1rem)] text-[var(--ink-invert)] sm:mt-6">
                  Apparel sourcing with the structure, pace, and control billion-dollar brands expect.
                </h1>
              </div>

              <div className="self-end pb-2" data-reveal data-reveal-delay="120">
                <p className="max-w-md text-[1rem] text-white">
                  Soulparodox is a Toronto-headquartered sourcing partner with 5+ years of leadership inside global
                  manufacturing organizations, connecting premium fashion teams with verified manufacturing networks
                  across Bangladesh and Sri Lanka.
                </p>
                <a
                  className="mt-6 inline-block border-b border-white/70 pb-1 text-[1rem] uppercase tracking-[0.24em] text-white sm:mt-8"
                  href="#contact"
                >
                  Start a sourcing conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1600px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-28">
          <div data-reveal>
            <p className="section-kicker">Global manufacturing posture</p>
            <h2 className="editorial-headline mt-4 max-w-5xl text-[clamp(2.3rem,6.4vw,6.2rem)] text-[var(--foreground)]">
              Deep manufacturing fluency. Commercial discipline. Zero noise.
            </h2>
          </div>
          <div className="space-y-8 lg:pt-12" data-reveal data-reveal-delay="100">
            <p className="quiet-line max-w-xl text-[1.03rem]">
              Every supplier is verified against quality, cost architecture, capacity, lead-time feasibility, and
              compliance expectations before placement. Production oversight remains active from development to shipment.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-black/10 pb-3 text-sm">
                <span className="label-mono">Headquarters</span>
                <span className="text-black/82">Toronto</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-3 text-sm">
                <span className="label-mono">Manufacturing countries</span>
                <span className="text-black/82">Bangladesh · Sri Lanka</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-3 text-sm">
                <span className="label-mono">Experience</span>
                <span className="text-black/82">5+ years</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] px-6 py-18 sm:px-10 lg:px-14 lg:py-30" id="capabilities">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-14 flex items-end justify-between gap-10">
              <div data-reveal>
                <p className="section-kicker">Core capabilities</p>
                <h2 className="editorial-headline mt-4 max-w-5xl text-[clamp(2.2rem,5.3vw,5.5rem)]">
                  The sourcing lifecycle, art-directed as operational storytelling.
                </h2>
              </div>
            </div>

            <div className="space-y-18">
              {capabilities.map((item, index) => (
                <article
                  key={item.title}
                  className={`grid items-center gap-8 lg:gap-14 ${index % 2 === 0 ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.82fr_1.18fr]"}`}
                  data-reveal
                >
                  <div className={`media-mask ${index % 2 === 0 ? "" : "lg:order-2"}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`h-[42vh] min-h-[260px] w-full object-cover ${index % 2 === 0 ? "rounded-tr-[4.2rem]" : "rounded-bl-[4.2rem]"}`}
                    />
                  </div>
                  <div className={index % 2 === 0 ? "" : "lg:order-1"}>
                    <p className="label-mono">{`0${index + 1}`}</p>
                    <h3 className="mt-3 max-w-2xl text-[clamp(1.8rem,3.3vw,3.2rem)] font-light leading-[1.03] tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p className="quiet-line mt-4 max-w-xl text-[0.98rem]">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={capacityRef}
          className="relative overflow-hidden bg-[#111111] px-6 py-20 text-[var(--ink-invert)] sm:px-10 lg:px-14 lg:py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.09),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.07),transparent_40%)]" />
          <div className="relative mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div data-reveal>
                <p className="text-[0.68rem] tracking-[0.3em] uppercase font-medium text-white">Production capacity</p>
                <h2 className="mt-4 text-[clamp(2.2rem,4.9vw,5.3rem)] font-light leading-[0.95] tracking-[-0.05em]">
                  Scale presented as hard numbers, not supporting cards.
                </h2>
              </div>
              <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-delay="120">
                {capacities.map((item) => (
                  <div key={item.id}>
                    <p className="label-mono text-white/46">{item.label}</p>
                    <p className="mt-3 text-[clamp(2.2rem,4.8vw,4rem)] font-light leading-none tracking-[-0.04em] tabular-nums">
                      {counts[item.id].toLocaleString()}
                    </p>
                    <p className="mt-2 text-[0.78rem] uppercase tracking-[0.18em] text-white/48">{item.suffix}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] px-6 py-24 sm:px-10 lg:px-14 lg:py-30">
          <div className="mx-auto max-w-[1600px]">
            <div data-reveal>
              <p className="section-kicker">Global Presence</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.1rem,4.5vw,4.6rem)] font-light leading-[1] tracking-[-0.045em]">
                A global network built for precision sourcing.
              </h2>
            </div>

            <div className="mt-12" data-reveal data-reveal-delay="120">
              <WorldMap
                dots={[
                  {
                    start: { lat: -6.5, lng: 87.5, label: "Sri Lanka" },
                    end: { lat: 43.5, lng: 3.5, label: "London, UK" },
                  },
                  {
                    start: { lat: 15.5, lng: 95.5, label: "Bangladesh" },
                    end: { lat: 35.0, lng: -90.0, label: "Toronto" },
                  },
                  {
                    start: { lat: 43.5, lng: 3.5, label: "London, UK" },
                    end: { lat: 35.0, lng: -90.0, label: "Toronto" },
                  },
                  {
                    start: { lat: -6.5, lng: 87.5, label: "Sri Lanka" },
                    end: { lat: 15.5, lng: 95.5, label: "Bangladesh" },
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1a1917] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />
          <div className="relative mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1fr_1fr]">
            <div data-reveal>
              <p className="text-[0.68rem] tracking-[0.3em] uppercase font-medium text-white">Certifications & Compliance</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.1rem,4.5vw,4.6rem)] font-light leading-[1] tracking-[-0.045em] text-[#f5f0e8]">
                Built for quality, sustainability, social responsibility, and measurable compliance.
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-9 sm:grid-cols-4">
                {certifications.map((logo, index) => (
                  <div key={logo} className="logo-wall-item" data-reveal data-reveal-delay={80 + index * 40}>
                    <div className="text-[1.05rem] font-medium tracking-[0.06em] text-[#f5f0e8]">{logo}</div>
                    <div className="mt-2 h-px bg-white/12" />
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <p className="label-mono text-white/35">Values</p>
                <div className="mt-4 hidden lg:block">
                  {values.map((value) => (
                    <div key={value} className="flex items-center justify-between border-t border-white/10 py-2.5 last:border-b">
                      <span className="text-[0.82rem] tracking-[0.02em] text-[#f5f0e8]/70">{value}</span>
                      <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/25">—</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 lg:hidden">
                  {values.map((value) => (
                    <span key={value} className="text-sm text-white/55">{value}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-4xl" data-reveal>
              <p className="section-kicker">Product categories</p>
              <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,3.6rem)] font-light leading-[1] tracking-[-0.045em]">
                A concise catalogue of apparel categories built for precise sourcing.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-7">
              {categories.map((category, index) => (
                <article key={category} className="group" data-reveal data-reveal-delay={index * 18}>
                  <div className="flex h-32 items-center justify-center overflow-hidden border border-black/10 bg-[#f5f2ed] p-2.5 sm:h-36 sm:p-3 lg:h-40 xl:h-44">
                    <img
                      src={categoryArtwork[category].image}
                      alt={categoryArtwork[category].alt}
                      className={`h-full w-full ${categoryArtwork[category].fit} ${categoryArtwork[category].imagePosition} transition-transform duration-700 group-hover:scale-[1.02]`}
                    />
                  </div>
                  <div className="mt-2.5 flex items-start justify-between gap-3 border-b border-black/10 pb-2">
                    <p className="text-[0.68rem] font-medium uppercase leading-[1.35] tracking-[0.2em] text-black/68">
                      {category}
                    </p>
                    <span className="text-[0.56rem] tabular-nums tracking-[0.16em] text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 border-t border-black/10 pt-6" data-reveal data-reveal-delay="160">
              <div>
                <p className="section-kicker">Value-added services</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 border-b border-black/10 pb-5">
                  {services.map((service, index) => (
                    <span key={service} className="inline-flex items-center gap-3 text-[0.78rem] leading-6 tracking-[0.01em] text-black/64">
                      <span>{service}</span>
                      {index < services.length - 1 && <span className="text-black/24">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-22 sm:px-10 lg:px-14 lg:py-30">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8" data-reveal>
              <p className="section-kicker">Why Soulparodox</p>
              <p className="text-[clamp(2.1rem,4.2vw,4.7rem)] font-light leading-[0.98] tracking-[-0.046em]">
                We do not source by catalog. We source by commercial intent, risk posture, and production truth.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2" data-reveal data-reveal-delay="120">
              <div className="space-y-7 text-[0.98rem] text-black/78">
                <p>
                  <span className="font-medium text-black">Manufacturing credibility:</span> senior leadership with
                  front-line factory execution experience.
                </p>
                <p>
                  <span className="font-medium text-black">Commercial clarity:</span> decisions prioritize landed cost
                  and margin durability, not just low headline pricing.
                </p>
                <p>
                  <span className="font-medium text-black">Vendor depth:</span> verified matrix across Asia with both
                  scale and short-batch flexibility.
                </p>
              </div>
              <div className="space-y-7 text-[0.98rem] text-black/78">
                <p>
                  <span className="font-medium text-black">Measured compliance:</span> traceable audits, certifications,
                  and closed-loop corrective action.
                </p>
                <p>
                  <span className="font-medium text-black">Speed with control:</span> optimized development and sampling
                  reduce calendar risk without compromising standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-[#111111] px-6 py-22 text-[var(--ink-invert)] sm:px-10 lg:px-14 lg:py-30">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_40%,rgba(255,255,255,0.06))]" />
          <div className="relative mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div data-reveal>
              <p className="text-[0.68rem] tracking-[0.3em] uppercase font-medium text-white">Contact</p>
              <h2 className="mt-5 mb-7 max-w-5xl text-[clamp(2.4rem,6.4vw,6.8rem)] font-light leading-[0.9] tracking-[-0.055em]">
                Built to support the sourcing demands of global premium brands.
              </h2>
            </div>


            <div
              className="flex items-center justify-center h-full"
              data-reveal
              data-reveal-delay="120">
              <a
                href="mailto:info@soulparodox.com"
                className="
                  inline-flex items-center justify-center
                  border border-white/28
                  px-6 py-[14px]
                  text-[0.7rem] font-medium uppercase
                  tracking-[0.22em]
                  text-[#f5f0e8]
                  transition-all duration-300
                  hover:border-[#f5f0e8]
                  hover:bg-[#f5f0e8]
                  hover:text-[#111111]
                "
                data-reveal
                data-reveal-delay="80">
                  Request Sourcing Brief
              </a>
            </div>
          </div>


{/* Office Grid */}
<div
  className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.12] divide-x divide-y lg:divide-y-0 divide-white/[0.12]"
  data-reveal
  data-reveal-delay="120"
>
  {[
    {
      Flag: CA,
      code: "CA",
      city: "Toronto",
      addr: ["13 Hammersly Blvd", "L6E 2A5, Canada"],
      phone: "+1 437 383 2511",
    },
    {
      Flag: GB,
      code: "UK",
      city: "London",
      addr: ["23 Franklin Road", "DT4 0JW, United Kingdom"],
      phone: "+44 7388 910170",
    },
    {
      Flag: BD,
      code: "BD",
      city: "Dhaka",
      addr: ["Sector 11, Road 14", "House 79, Uttara"],
      phone: "+880 1739 176828",
    },
    {
      Flag: LK,
      code: "LK",
      city: "Colombo",
      addr: ["566/3A Ranmuthugala" , "Kadawatha, Western Province"],
      phone: "+94 72 649 6551",
    },
  ].map((office) => {
    const OfficeFlag = office.Flag;

    return (
      <div
        key={office.code}
        className="flex flex-col px-8 py-10 sm:px-10 lg:px-8"
      >
        <OfficeFlag
          title={office.city}
          className="w-7 h-auto rounded-sm border border-white/10 shadow-sm"
        />

        <p className="mt-3 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-white/40">
          {office.code}
        </p>

        <h3 className="mt-5 text-[1rem] font-normal tracking-[-0.01em] text-[#f5f0e8]">
          {office.city}
        </h3>

        <p className="mt-3 text-[0.78rem] leading-[1.7] text-white/52">
          {office.addr.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <p className="mt-4 text-[0.75rem] tracking-[0.04em] text-white/38 tabular-nums">
          {office.phone}
        </p>
      </div>
    );
  })}
</div>

          <div className="flex items-center justify-between pt-8" data-reveal data-reveal-delay="160">
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-white/35">
              General enquiries
            </span>
            <span className="text-[0.82rem] tracking-[0.02em] text-white/70">
              info@soulparodox.com
            </span>
          </div>


        </section>       
      </main>
    </div>
  );
}
