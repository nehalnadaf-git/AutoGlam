"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import MarqueeBanner from "@/components/MarqueeBanner";
import CTABanner from "@/components/CTABanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " visible" : ""} ${delay === 80 ? "reveal-delay-1" : delay === 160 ? "reveal-delay-2" : delay === 240 ? "reveal-delay-3" : ""}`}
    >
      {children}
    </div>
  );
};

const allServices = [
  {
    title: "Washing",
    desc: "Complete exterior and interior wash to remove dirt, dust, and contaminants for a pristine showroom shine.",
    image: "/Service Images/Washing.webp",
    href: "/services/washing",
  },
  {
    title: "Interior Cleaning",
    desc: "Vacuuming, surface wiping, and deep-clean treatments to refresh and restore every inch of your car's cabin.",
    image: "/Service Images/Interior Cleaning.webp",
    href: "/services/interior-cleaning",
  },
  {
    title: "Paint Correction",
    desc: "Meticulous restoration of your vehicle's paint — eliminating swirl marks, scratches, and oxidation for a flawless finish.",
    image: "/Service Images/Paint correction.webp",
    href: "/services/paint-correction",
  },
  {
    title: "Glass Treatment",
    desc: "Advanced ceramic glass coating for lasting visibility, hydrophobic water-repellency, and maximum windshield protection.",
    image: "/Service Images/Glass Treatment.webp",
    href: "/services/glass-treatment",
  },
  {
    title: "PPF (Paint Protection Film)",
    desc: "Transparent film shield that protects against rock chips, scratches, and environmental damage — invisible, permanent protection.",
    image: "/Service Images/PPF.webp",
    href: "/services/ppf",
  },
  {
    title: "Ceramic Coating",
    desc: "Liquid polymer application for long-lasting gloss, hydrophobic protection, and a permanent showroom finish.",
    image: "/Service Images/Ceramic Coating.webp",
    href: "/services/ceramic-coating",
  },
  {
    title: "Cars & Bikes Painting",
    desc: "Professional full-body or panel painting using high-quality automotive finishes for lasting beauty and resale value.",
    image: "/Service Images/Cars & Bikes Painting.webp",
    href: "/services/painting",
  },
  {
    title: "Wrapping",
    desc: "Premium vinyl wrapping that transforms your vehicle's style while protecting the original paintwork underneath.",
    image: "/Service Images/Wrapping.webp",
    href: "/services/wrapping",
  },
  {
    title: "Cars & Bikes Accessories",
    desc: "Expert installation of automotive accessories — ensuring every fitment is precise, clean, and professionally finished.",
    image: "/Service Images/Car & Bikes Accessories.webp",
    href: "/services/accessories",
  },
  {
    title: "Headlight Restoration",
    desc: "Restore faded, yellowed headlights to crystal clarity — improving both the aesthetics and safety of your vehicle.",
    image: "/Service Images/Headlight Restoration.webp",
    href: "/services/headlight-restoration",
  },
  {
    title: "Engine Bay Cleaning",
    desc: "Professional deep cleaning of the engine compartment. Removes grease, grime, and carbon buildup — leaving a spotless, showroom-ready engine bay.",
    image: "/Service Images/Engine Bay.webp",
    href: "/services/engine-bay-cleaning",
  },
  {
    title: "Vehicle Polishing",
    desc: "Professional machine and hand polishing for the full vehicle body. Removes dullness, restores deep gloss, and rejuvenates faded paint to a showroom-level shine.",
    image: "/Service Images/Vehicle Polishing.webp",
    href: "/services/vehicle-polishing",
  },
];

const Services = () => (
  <>
    {/* 1. PAGE HERO */}
    <PageHero
      eyebrow="WHAT WE OFFER"
      title="Our Services"
      subtitle="From routine care to advanced protection — every service is executed with precision and passion."
      watermark="SERVICES"
    />

    {/* 2. SERVICES GRID — dark */}
    <section className="section-dark py-12 md:py-[var(--section-padding-lg)]">
      <div className="w-full max-w-[var(--container-xl)] mx-auto px-4 sm:px-6 md:px-[48px]">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="eyebrow">Full Range</span>
          <h2 className="section-title text-[var(--text-primary-dark)] px-2">
            Everything Your Car Needs
          </h2>
          <div className="divider-gold mx-auto my-5" />
        </div>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {allServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div
                className="group relative block w-full overflow-hidden rounded-[4px] service-img-card"
                style={{ textDecoration: "none" }}
              >
                {/* Image — 4:3 aspect ratio, mobile-optimised */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: "center" }}
                  />

                  {/* Permanent dark gradient at bottom for legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.45) 45%, transparent 100%)",
                    }}
                  />

                  {/* Gold top accent line that expands on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100"
                    style={{ background: "var(--gradient-gold)" }}
                  />

                  {/* Card content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                        color: "#FFFFFF",
                        marginBottom: "6px",
                        lineHeight: 1.25,
                      }}
                    >
                      {s.title}
                    </h3>
                    {/* Description — slides up on hover */}
                    <p
                      className="transition-all duration-500 ease-out max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "13px",
                        fontWeight: 300,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,0.82)",
                        marginBottom: "10px",
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 3. MARQUEE */}
    <MarqueeBanner
      items={["WASHING", "CERAMIC COATING", "PPF", "WRAPPING", "PAINT CORRECTION", "GLASS TREATMENT", "ACCESSORIES", "CAR PAINTING", "HEADLIGHT RESTORATION", "ENGINE BAY CLEANING", "VEHICLE POLISHING"]}
    />

    {/* 4. CTA */}
    <CTABanner />
  </>
);

export default Services;
