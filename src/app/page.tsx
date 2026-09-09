"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { CA, GB, BD, LK } from "country-flag-icons/react/3x2";
import { WorldMap } from "@/components/ui/world-map";
import styles from "./hero.module.css";

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
      title: "Sourcing & Vendor Management",
      body: "We match each product with the right factory, confirm capacity, negotiate clear terms, and keep production timelines realistic from the start.",
      image:
        "/images/strategic-sourcing.png",
    },
    {
      title: "Product Development",
      body: "We support fabric sourcing, trims, lab dips, tech packs, samples, fit comments, and approvals before bulk production begins.",
      image:
        "/images/product-development.png",
    },
    {
      title: "Quality Assurance & Compliance",
      body: "We follow up through factory checks, inline inspections, pre-shipment reviews, social compliance records, and practical corrective actions.",
      image:
        "/images/quality-compliance.png",
    },
    {
      title: "Sustainable Sourcing & Costing",
      body: "We help buyers source certified materials, understand MOQ options, check traceability, and build costing that protects margin and quality.",
      image:
        "/images/sustainable-sourcing.png",
    },
  ];

  const capacities: CapacityItem[] = useMemo(
    () => [
      { id: "woven", label: "Woven Tops and Bottoms", value: 210000, suffix: "pieces / month" },
      { id: "knit", label: "Knit Tops and Bottoms", value: 540000, suffix: "pieces / month" },
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
      image: "/images/categories/circular-knit.png",
      alt: "White circular knit t-shirt shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    "Flat Knit": {
      image: "/images/categories/flat-knit.png",
      alt: "Flat knit sweater shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    "Lightweight Woven": {
      image: "/images/categories/lightweight-woven.png",
      alt: "Lightweight woven shirt shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Denim: {
      image: "/images/categories/denim.png",
      alt: "Denim jeans shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Pants: {
      image: "/images/categories/pants.png",
      alt: "Technical pants shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Activewear: {
      image: "/images/categories/activewear.png",
      alt: "Activewear top shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Outerwear: {
      image: "/images/categories/outerwear.png",
      alt: "Technical outerwear jacket shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Skiwear: {
      image: "/images/categories/skiwear.png",
      alt: "Ski jacket shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Leather: {
      image: "/images/categories/leather.png",
      alt: "Leather jackets shown as product samples",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    "Indoor Jackets": {
      image: "/images/categories/indoor-jackets.png",
      alt: "Indoor jacket shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Chinos: {
      image: "/images/categories/chinos.png",
      alt: "Chino pants shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Swimwear: {
      image: "/images/categories/swimwear.png",
      alt: "Swimwear pieces shown as product samples",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Seamless: {
      image: "/images/categories/seamless.png",
      alt: "Seamless base layer garments shown as product samples",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Accessories: {
      image: "/images/categories/accessories.png",
      alt: "Textile accessories and trims shown as product samples",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Headwear: {
      image: "/images/categories/headwear.png",
      alt: "Caps shown as product samples",
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
        <div className={styles.viewport}>
          <header className={styles.navbar}>
            <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-3 px-6 text-[0.68rem] uppercase tracking-[0.3em] sm:px-10 lg:px-14">
              <img
                src="/soulparodox-logo.png"
                alt="Soulparodox"
                className={styles.logo}
              />
              <div className="flex shrink-0 items-center gap-2 sm:gap-5 lg:gap-8">
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
          </header>
          <section className={`${styles.hero} relative isolate bg-[#111111] text-[var(--ink-invert)]`}>
            <img
              src="/images/garment-hero.png"
              alt="Textile production environment"
              className="absolute inset-0 h-full w-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,17,17,0.86)_12%,rgba(17,17,17,0.54)_58%,rgba(17,17,17,0.84)_100%)]" />
            <div className={`${styles.content} relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14`}>
              <div className={styles.composition}>
                <div data-reveal>
                  <p className={`${styles.kicker} text-[0.75rem] tracking-[0.24em] uppercase text-white`}>
                    Product development · Merchandising · Sourcing · Production · Quality
                  </p>
                  <h1 className={`${styles.headline} editorial-headline max-w-6xl text-[var(--ink-invert)]`}>
                    20+ Years of Apparel Manufacturing Experience
                  </h1>
                </div>

                <div className={styles.support} data-reveal data-reveal-delay="120">
                  <p className={`${styles.supportCopy} text-white`}>
                    Soulparodox is your trusted apparel sourcing engine for Bangladesh & Sri Lanka. Soul Paradox specializes in providing complete apparel solution in Woven and Knit, from designs, to product development and sourcing to manufacturing as well as timely global delivery. We support for global brands with the right manufacturing solutions with 20+ years of apparel manufacturing experience. Soul Parodox is a Toronto-headquartered apparel sourcing partner with offices in London, Dhaka and Colomob.
                  </p>
                  <a
                    className={`${styles.cta} inline-block border-b border-white/70 pb-1 uppercase tracking-[0.24em] text-white`}
                    href="#contact"
                  >
                    Start a sourcing conversation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-[var(--surface)] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-4xl" data-reveal>
              <p className="section-kicker">Product categories</p>
              <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,3.6rem)] font-light leading-[1] tracking-[-0.045em]">
                Apparel categories buyers can source through our verified manufacturing network.
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
                  Monthly production capacity across core apparel categories.
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

        <section className="mx-auto grid max-w-[1600px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-28">
          <div data-reveal>
            <p className="section-kicker">Apparel sourcing support</p>
            <h2 className="editorial-headline mt-4 max-w-5xl text-[clamp(2.3rem,6.4vw,6.2rem)] text-[var(--foreground)]">
              Built on decades of hands-on apparel manufacturing experience.
            </h2>
          </div>
          <div className="space-y-8 lg:pt-12" data-reveal data-reveal-delay="100">
            <p className="quiet-line max-w-xl text-[1.03rem]">
              Soulparodox gives buyers experienced representation on the ground in Bangladesh and Sri Lanka, with support
              across product development, merchandising, sourcing, production follow-up, and quality control.
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
                <span className="text-black/82">20+ years</span>
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
                  From first sample to final shipment, we manage the details that protect your product, price, and delivery.
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

        <section className="bg-[var(--surface)] px-6 py-24 sm:px-10 lg:px-14 lg:py-30">
          <div className="mx-auto max-w-[1600px]">
            <div data-reveal>
              <p className="section-kicker">Global Presence</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.1rem,4.5vw,4.6rem)] font-light leading-[1] tracking-[-0.045em]">
                A practical network for sourcing across Canada, the UK, Bangladesh, and Sri Lanka.
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
                Quality, sustainability, social responsibility, and compliance are checked throughout the sourcing process.
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

        <section className="mx-auto max-w-[1600px] px-6 py-22 sm:px-10 lg:px-14 lg:py-30">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8" data-reveal>
              <p className="section-kicker">Why Soulparodox</p>
              <p className="text-[clamp(2.1rem,4.2vw,4.7rem)] font-light leading-[0.98] tracking-[-0.046em]">
                Practical support for buyers who need factory-ready product development and reliable production follow-up.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2" data-reveal data-reveal-delay="120">
              <div className="space-y-7 text-[0.98rem] text-black/78">
                <p>
                  <span className="font-medium text-black">R&D and product development:</span> support with fabrics,
                  trims, samples, fits, and production-ready details.
                </p>
                <p>
                  <span className="font-medium text-black">Product capability:</span> access to factories across knits,
                  wovens, denim, outerwear, activewear, accessories, and technical garments.
                </p>
                <p>
                  <span className="font-medium text-black">Speed to delivery:</span> clear follow-up from sample stage
                  through approvals, bulk production, and shipment readiness.
                </p>
                <p>
                  <span className="font-medium text-black">Quality:</span> inline checks, pre-shipment reviews, and
                  practical factory feedback help protect the final product.
                </p>
              </div>
              <div className="space-y-7 text-[0.98rem] text-black/78">
                <p>
                  <span className="font-medium text-black">Compliance and sustainability:</span> certifications, audits,
                  and responsible sourcing requirements are reviewed before placement.
                </p>
                <p>
                  <span className="font-medium text-black">Commercial competitiveness:</span> sourcing decisions balance
                  price, quality, MOQ, lead time, and landed cost.
                </p>
                <p>
                  <span className="font-medium text-black">Reliability:</span> buyers get consistent communication and
                  on-the-ground representation in Bangladesh and Sri Lanka.
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
                Ready to support your next apparel sourcing brief.
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
