/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { RevealController } from "@/components/reveal-controller";
import { SeamlessHeroVideo } from "@/components/seamless-hero-video";
import {
  CoverflowCarousel,
  type CoverflowSlide,
} from "@/components/ui/coverflow-carousel";
import { LampContainer, ShowroomLight } from "@/components/ui/lamp";
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

type CertificationItem = {
  name: string;
  logo?: string;
  logoClassName?: string;
  logoLabel?: string;
  logoLabelClassName?: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  href?: string;
};

const flagSources: Record<string, string> = {
  BD: "/images/flags/bangladesh.svg",
  CA: "/images/flags/canada.svg",
  GB: "/images/flags/united-kingdom.svg",
  LK: "/images/flags/sri-lanka.svg",
};

type CountryFlagProps = {
  countryCode: string;
  title: string;
  className: string;
  imageClassName?: string;
};

function CountryFlag({
  countryCode,
  title,
  className,
  imageClassName,
}: CountryFlagProps) {
  return (
    <span className={className}>
      <img
        src={flagSources[countryCode]}
        alt={title}
        title={title}
        className={`block h-auto w-full ${imageClassName ?? ""}`}
        loading="eager"
      />
    </span>
  );
}

export default function Home() {
  const capabilities = [
    {
      title: "Inspiration & Concept Development",
      body: "We turn references, trend direction, sketches, and commercial goals into focused apparel concepts with clear silhouettes, materials, and development priorities.",
      image: "/images/concept-development.png",
      alt: "Apparel designers reviewing garment concepts and materials in a studio",
      width: 1536,
      height: 1024,
    },
    {
      title: "Product Development",
      body: "We support fabric sourcing, trims, lab dips, tech packs, samples, fit comments, and approvals before bulk production begins.",
      image: "/images/product-development-v3.png",
      alt: "Product development team reviewing a garment sample and material swatches",
      width: 1672,
      height: 941,
    },
    {
      title: "Sustainable Sourcing & Costing",
      body: "We help brands source certified materials, understand MOQ options, check traceability, and build costing that protects margin and quality.",
      image: "/images/sustainable-sourcing-v2.png",
      alt: "Apparel sourcing team reviewing fabrics and production information",
      width: 1536,
      height: 1024,
    },
    {
      title: "Manufacturing & Production",
      body: "We coordinate factory allocation, pre-production approvals, production planning, merchandising follow-up, and line-level execution through bulk manufacturing.",
      image: "/images/manufacturing-production.png",
      alt: "Garment production team working on an apparel manufacturing floor",
      width: 1536,
      height: 1024,
    },
    {
      title: "Quality Assurance & Compliance",
      body: "We follow up through factory checks, inline inspections, pre-shipment reviews, social compliance records, and practical corrective actions.",
      image: "/images/quality-compliance-v3.png",
      alt: "Quality assurance specialist inspecting garments during production",
      width: 1536,
      height: 1024,
    },
    {
      title: "Logistics & Reliable Delivery",
      body: "We coordinate packing, export documentation, freight handover, and shipment milestones so finished goods move reliably from factory to final destination.",
      image: "/images/logistics-delivery-v2.png",
      alt: "Logistics team coordinating packed garments for final delivery",
      width: 1536,
      height: 1024,
    },
  ];

  const capacities: CapacityItem[] = [
    { id: "woven", label: "Woven Top and Bottom", value: 210000, suffix: "pieces / month" },
    { id: "knit", label: "Knit Tops and Bottoms", value: 540000, suffix: "pieces / month" },
    { id: "outerwear", label: "Outerwear", value: 100000, suffix: "pieces / month" },
    { id: "workwear", label: "Workwear", value: 120000, suffix: "pieces / month" },
    { id: "headwear", label: "Headwear", value: 10000, suffix: "pieces / month" },
  ];

  const certifications: CertificationItem[] = [
    {
      name: "WRAP",
      logo: "/images/certifications/wrap.png",
      logoClassName: "max-h-12 w-auto scale-[1.5] object-contain",
      alt: "Worldwide Responsible Accredited Production logo",
      width: 2160,
      height: 2160,
      sizes: "72px",
      href: "https://wrapcompliance.org/",
    },
    {
      name: "amfori BSCI",
      logo: "/images/certifications/amfori-bsci.png",
      alt: "amfori BSCI logo",
      width: 1000,
      height: 600,
      sizes: "96px",
      href: "https://www.amfori.org/amfori-bsci/",
    },
    {
      name: "RMG Sustainability Council (RSC)",
      logo: "/images/certifications/rsc.png",
      logoClassName: "max-h-10 max-w-full w-auto object-contain",
      alt: "RMG Sustainability Council logo",
      width: 270,
      height: 88,
      sizes: "124px",
      href: "https://rsc-bd.org/",
    },
    {
      name: "Nirapon",
      logo: "/images/certifications/nirapon.png",
      logoClassName: "max-h-10 max-w-full w-auto object-contain",
      alt: "Nirapon logo",
      width: 194,
      height: 89,
      sizes: "88px",
      href: "https://www.nirapon.org/",
    },
    {
      name: "European Compliance",
      logo: "/images/certifications/european-compliance.svg",
      alt: "European compliance mark",
      width: 480,
      height: 160,
      sizes: "144px",
      href: "https://europa.eu/youreurope/business/product-rules-compliance/index_en.htm",
    },
    {
      name: "OEKO-TEX",
      logo: "/images/certifications/oeko-tex.svg",
      alt: "OEKO-TEX logo",
      width: 400,
      height: 100,
      sizes: "(max-width: 639px) 34vw, 192px",
      href: "https://www.oeko-tex.com/",
    },
    {
      name: "GOTS",
      logo: "/images/certifications/gots.png",
      logoClassName: "h-11 w-11 object-contain",
      logoLabel: "GOTS",
      logoLabelClassName: "text-lg font-bold tracking-[0.08em] text-[#389f33]",
      alt: "Global Organic Textile Standard logo",
      width: 625,
      height: 625,
      sizes: "44px",
      href: "https://global-standards.org/our-standards/gots",
    },
    {
      name: "GRS",
      logo: "/images/certifications/grs.jpg",
      logoClassName: "max-h-14 max-w-full scale-[1.3] object-contain",
      alt: "Global Recycled Standard logo",
      width: 866,
      height: 650,
      sizes: "176px",
      href: "https://textileexchange.org/recycled-claim-global-recycled-standard/",
    },
    {
      name: "SEDEX",
      logo: "/images/certifications/sedex.png",
      logoClassName: "h-9 w-9 object-contain",
      logoLabel: "Sedex",
      logoLabelClassName: "text-xl font-bold tracking-[-0.04em] text-[#111111]",
      alt: "Sedex logo",
      width: 192,
      height: 192,
      sizes: "36px",
      href: "https://www.sedex.com/",
    },
    {
      name: "ISO 9001",
      logo: "/images/certifications/iso-9001.svg",
      alt: "ISO 9001 quality management badge",
      width: 480,
      height: 160,
      sizes: "144px",
      href: "https://www.iso.org/iso-9001-quality-management.html",
    },
    {
      name: "Higg Index",
      logo: "/images/certifications/higg-index.png",
      logoClassName: "max-h-14 max-w-full scale-[1.2] object-contain",
      alt: "Higg Index logo",
      width: 618,
      height: 482,
      sizes: "162px",
      href: "https://worldly.io/higg-index/",
    },
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
    "Headwear",
  ];

  const categoryArtwork: Record<string, CategoryArtwork> = {
    "Circular Knit": {
      image: "/images/categories/circular-knit-streetwear-editorial.webp",
      alt: "Models wearing graphic circular-knit T-shirts and casual cargo bottoms",
      fit: "object-cover",
      imagePosition: "object-center",
    },
    "Flat Knit": {
      image: "/images/categories/flat-knit-editorial.webp",
      alt: "Model wearing layered neutral flat-knit cardigan and ribbed knitwear",
      fit: "object-cover",
      imagePosition: "object-top",
    },
    "Lightweight Woven": {
      image: "/images/categories/lightweight-woven.png",
      alt: "Lightweight woven shirt shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Denim: {
      image: "/images/categories/denim-editorial.webp",
      alt: "Models wearing coordinated denim jackets, tops, and jeans",
      fit: "object-cover",
      imagePosition: "object-center",
    },
    Pants: {
      image: "/images/categories/pants-tailoring-editorial.webp",
      alt: "Models wearing tailored trousers and coordinated formal apparel",
      fit: "object-cover",
      imagePosition: "object-center",
    },
    Activewear: {
      image: "/images/categories/activewear-editorial.webp",
      alt: "Models wearing performance tops, leggings, shorts, and light active layers",
      fit: "object-cover",
      imagePosition: "object-center",
    },
    Outerwear: {
      image: "/images/categories/outerwear-coat.png",
      alt: "Tailored wool overcoat shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Skiwear: {
      image: "/images/categories/skiwear-editorial.webp",
      alt: "Models wearing insulated ski jackets and cold-weather apparel in the mountains",
      fit: "object-cover",
      imagePosition: "object-center",
    },
    Leather: {
      image: "/images/categories/leather.png",
      alt: "Leather jackets shown as product samples",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    "Indoor Jackets": {
      image: "/images/categories/indoor-jackets-hoodies-editorial.webp",
      alt: "Friends wearing casual hoodies and relaxed indoor layers",
      fit: "object-cover",
      imagePosition: "object-center",
    },
    Chinos: {
      image: "/images/categories/chinos.png",
      alt: "Chino pants shown as a product sample",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Swimwear: {
      image: "/images/categories/swimwear-editorial.webp",
      alt: "Models wearing colorful swimwear beside a pool",
      fit: "object-cover",
      imagePosition: "object-center",
    },
    Seamless: {
      image: "/images/categories/seamless.png",
      alt: "Seamless base layer garments shown as product samples",
      fit: "object-contain",
      imagePosition: "object-center",
    },
    Headwear: {
      image: "/images/categories/headwear-editorial.webp",
      alt: "Model presenting embroidered fashion caps in a lifestyle setting",
      fit: "object-cover",
      imagePosition: "object-center",
    },
  };

  const categoryCapacity: Record<string, CapacityItem> = {
    "Circular Knit": capacities[1],
    "Flat Knit": capacities[1],
    "Lightweight Woven": capacities[0],
    Denim: capacities[0],
    Pants: capacities[3],
    Activewear: capacities[1],
    Outerwear: capacities[2],
    Skiwear: capacities[2],
    Leather: capacities[2],
    "Indoor Jackets": capacities[2],
    Chinos: capacities[0],
    Swimwear: capacities[1],
    Seamless: capacities[1],
    Headwear: capacities[4],
  };

  const productCategorySlides: CoverflowSlide[] = categories.map((category) => {
    const artwork = categoryArtwork[category];
    const capacity = categoryCapacity[category];

    return {
      src: artwork.image,
      alt: artwork.alt,
      title: category,
      capacity: {
        label: `${capacity.label} capacity`,
        value: capacity.value.toLocaleString("en-US"),
        suffix: capacity.suffix,
      },
      imageFit: artwork.fit === "object-cover" ? "cover" : "contain",
      imagePosition: artwork.imagePosition,
    };
  });

  const values = ["Customer First", "Quality", "Collaboration", "Responsibility", "Integrity"];

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <RevealController />
      <main>
        <div className={styles.viewport}>
          <header className={styles.navbar}>
            <div className="flex h-full w-full items-center justify-between gap-3 px-6 text-[0.68rem] uppercase tracking-[0.3em] sm:px-10 lg:px-14">
              <img
                src="/soulparodox-logo.png"
                alt="Soulparodox"
                className={styles.logo}
              />
              <div className="flex shrink-0 items-center gap-2 sm:gap-5 lg:gap-8">
                <div className="flex flex-col items-center text-[7px] tracking-widest sm:text-[9px] lg:text-[10px]">
                  <CountryFlag
                    countryCode="CA"
                    title="Canada"
                    className="mb-1 block w-5 sm:w-6 lg:w-8"
                    imageClassName="rounded-sm"
                  />
                  <span>TORONTO</span>
                </div>
                <div className="flex flex-col items-center text-[7px] tracking-widest sm:text-[9px] lg:text-[10px]">
                  <CountryFlag
                    countryCode="GB"
                    title="United Kingdom"
                    className="mb-1 block w-5 sm:w-6 lg:w-8"
                    imageClassName="rounded-sm"
                  />
                  <span>LONDON</span>
                </div>
                <div className="flex flex-col items-center text-[7px] tracking-widest sm:text-[9px] lg:text-[10px]">
                  <CountryFlag
                    countryCode="BD"
                    title="Bangladesh"
                    className="mb-1 block w-5 sm:w-6 lg:w-8"
                    imageClassName="rounded-sm"
                  />
                  <span>DHAKA</span>
                </div>
                <div className="flex flex-col items-center text-[7px] tracking-widest sm:text-[9px] lg:text-[10px]">
                  <CountryFlag
                    countryCode="LK"
                    title="Sri Lanka"
                    className="mb-1 block w-5 sm:w-6 lg:w-8"
                    imageClassName="rounded-sm"
                  />
                  <span>COLOMBO</span>
                </div>
              </div>
            </div>
          </header>
          <section className={styles.hero}>
            <SeamlessHeroVideo />
            <div className={styles.content}>
              <h1 className={styles.heroHeadline}>
                Your trusted apparel sourcing engine in Bangladesh & Sri Lanka with 20+ years of apparel manufacturing experience.
              </h1>
            </div>
          </section>
        </div>

        <LampContainer className="px-4 py-18 sm:px-8 sm:py-22 lg:px-12 lg:py-26">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="mx-auto max-w-4xl text-center" data-reveal>
              <p className="text-[0.64rem] font-medium uppercase tracking-[0.32em] text-white/42">
                Product categories
              </p>
              <h2 className="mt-4 text-[clamp(2.1rem,4.8vw,4.9rem)] font-light leading-[0.96] tracking-[-0.052em] text-[#f5f0e8]">
                Apparel built across a complete sourcing network.
              </h2>
              <ShowroomLight className="mt-[clamp(1.5rem,3vw,2.5rem)]" />
            </div>

            <div className="-mt-2 sm:-mt-4" data-reveal data-reveal-delay="100">
              <CoverflowCarousel slides={productCategorySlides} />
            </div>
          </div>
        </LampContainer>

        <section className="mx-auto max-w-[1600px] px-6 py-22 sm:px-10 lg:px-14 lg:py-30">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8" data-reveal>
              <p className="section-kicker">Why Soulparodox</p>
              <p className="text-[clamp(2.1rem,4.2vw,4.7rem)] font-light leading-[0.98] tracking-[-0.046em]">
                Practical support for brands that need factory-ready product development and reliable production follow-up.
              </p>
            </div>

            <div
              className="max-w-[42rem] space-y-6 text-black/76 lg:justify-self-end lg:pt-2"
              data-reveal
              data-reveal-delay="120"
            >
              <p className="text-[clamp(1.2rem,1.7vw,1.6rem)] font-light leading-[1.55] tracking-[-0.025em] text-black/88">
                Soulparodox is your trusted apparel sourcing engine for Bangladesh & Sri Lanka.
              </p>
              <p className="text-[clamp(1rem,1.15vw,1.12rem)] leading-[1.85]">
                Soulparodox specializes in complete apparel solutions for Woven and Knit, from design and product development to sourcing, manufacturing, and timely global delivery. We support global brands with the right manufacturing solutions, backed by 20+ years of apparel manufacturing experience.
              </p>
              <p className="border-t border-black/12 pt-6 text-[clamp(1rem,1.15vw,1.12rem)] leading-[1.85]">
                Soulparodox is a Toronto-headquartered apparel sourcing partner with offices in London, Dhaka, and Colombo.
              </p>
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
              Soulparodox gives brands experienced representation on the ground in Bangladesh and Sri Lanka, with support
              across product development, merchandising, sourcing, production follow-up, and quality control.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-black/10 pb-3 text-sm">
                <span className="label-mono">Headquarters</span>
                <span className="text-black/82">Toronto</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-black/10 pb-3 text-sm">
                <span className="label-mono">UK office</span>
                <span className="text-right text-black/82">United Kingdom</span>
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
                  From inspiration to final delivery, we manage the details that protect your product, price, and timeline.
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
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 1023px) calc(100vw - 3rem), 55vw"
                      loading="lazy"
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
              <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 sm:gap-x-8">
                {certifications.map((certification, index) => (
                  <div
                    key={certification.name}
                    className={`logo-wall-item ${
                      index === certifications.length - 1
                        ? "col-span-2 mx-auto w-[calc(50%-0.75rem)] sm:col-span-1 sm:mx-0 sm:w-auto"
                        : ""
                    }`}
                    data-reveal
                    data-reveal-delay={80 + index * 40}
                  >
                    <div className="flex h-16 items-center">
                      {certification.logo ? (
                        <a
                          href={certification.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${certification.name}`}
                          className="flex h-16 w-full items-center justify-center overflow-hidden bg-white px-3 py-2"
                        >
                          <span className="flex max-w-full items-center justify-center gap-2.5">
                            <Image
                              src={certification.logo}
                              alt={certification.alt ?? certification.name}
                              width={certification.width ?? 1000}
                              height={certification.height ?? 600}
                              sizes={certification.sizes}
                              className={certification.logoClassName ?? "max-h-12 max-w-full w-auto object-contain"}
                            />
                            {certification.logoLabel ? (
                              <span className={certification.logoLabelClassName ?? "text-lg font-semibold text-[#111111]"}>
                                {certification.logoLabel}
                              </span>
                            ) : null}
                          </span>
                        </a>
                      ) : (
                        <div className="text-[0.92rem] font-medium tracking-[0.04em] text-[#f5f0e8]">
                          {certification.name}
                        </div>
                      )}
                    </div>
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

      </main>

        <footer id="contact" className="relative overflow-hidden bg-[#111111] px-6 py-22 text-[var(--ink-invert)] sm:px-10 lg:px-14 lg:py-30">
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
                  transition-[border-color,background-color,color] duration-300
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
      countryCode: "CA",
      flagTitle: "Canada",
      code: "CA",
      city: "Toronto",
      addr: ["13 Hammersly Blvd", "L6E 2A5, Canada"],
      phone: "+1 437 383 2511",
    },
    {
      countryCode: "GB",
      flagTitle: "United Kingdom",
      code: "UK",
      city: "London",
      addr: ["23 Franklin Road", "DT4 0JW, United Kingdom"],
      phone: "+44 7388 910170",
    },
    {
      countryCode: "BD",
      flagTitle: "Bangladesh",
      code: "BD",
      city: "Dhaka",
      addr: ["Sector 11, Road 14", "House 79, Uttara"],
      phone: "+880 1739 176828",
    },
    {
      countryCode: "LK",
      flagTitle: "Sri Lanka",
      code: "LK",
      city: "Colombo",
      addr: ["566/3A Ranmuthugala" , "Kadawatha, Western Province"],
      phone: "+94 72 649 6551",
    },
  ].map((office) => {
    return (
      <div
        key={office.code}
        className="flex flex-col px-8 py-10 sm:px-10 lg:px-8"
      >
        <CountryFlag
          countryCode={office.countryCode}
          title={office.flagTitle}
          className="block w-7 overflow-hidden rounded-sm border border-white/10 shadow-sm"
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

        <a
          href={`tel:${office.phone.replace(/\s/g, "")}`}
          className="mt-4 text-[0.75rem] tracking-[0.04em] text-white/38 tabular-nums transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
        >
          {office.phone}
        </a>
      </div>
    );
  })}
</div>

          <div className="flex items-center justify-between pt-8" data-reveal data-reveal-delay="160">
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-white/35">
              General enquiries
            </span>
            <a
              href="mailto:info@soulparodox.com"
              className="text-[0.82rem] tracking-[0.02em] text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
            >
              info@soulparodox.com
            </a>
          </div>


        </footer>
    </div>
  );
}
