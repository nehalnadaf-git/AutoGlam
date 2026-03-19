"use client";

import PageHero from "@/components/PageHero";
import MarqueeBanner from "@/components/MarqueeBanner";
import CTABanner from "@/components/CTABanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Droplets, SprayCan, Paintbrush, GlassWater, Shield, Layers, Film, Palette, Settings, Lightbulb } from "lucide-react";

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
  { icon: Droplets,   title: "Washing",                    desc: "Complete exterior and interior wash to remove dirt, dust, and surface contaminants for a pristine showroom shine." },
  { icon: SprayCan,   title: "Interior Cleaning",           desc: "Vacuuming, surface wiping, and deep-clean treatments to refresh and restore every inch of your car's cabin." },
  { icon: Paintbrush, title: "Paint Correction",            desc: "Meticulous restoration of your vehicle's paint — eliminating swirl marks, scratches, and oxidation for a flawless finish." },
  { icon: GlassWater, title: "Glass Treatment",             desc: "Advanced ceramic glass coating for lasting visibility, hydrophobic water-repellency, and maximum windshield protection." },
  { icon: Shield,     title: "Ceramic Coating",             desc: "Liquid polymer application for long-lasting gloss, hydrophobic protection, and a permanent showroom finish." },
  { icon: Layers,     title: "Wrapping",                    desc: "Premium vinyl wrapping that transforms your vehicle's style while protecting the original paintwork underneath." },
  { icon: Film,       title: "PPF (Paint Protection Film)", desc: "Transparent film shield that protects against rock chips, scratches, and environmental damage — invisible, permanent protection." },
  { icon: Palette,    title: "Cars & Bikes Painting",       desc: "Professional full-body or panel painting using high-quality automotive finishes for lasting beauty and resale value." },
  { icon: Settings,   title: "Cars & Bikes Accessories",    desc: "Expert installation of automotive accessories — ensuring every fitment is precise, clean, and professionally finished." },
  { icon: Lightbulb,  title: "Headlight Restoration",       desc: "Restore faded, yellowed headlights to crystal clarity — improving both the aesthetics and safety of your vehicle." },
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
        <div className="text-center mb-10 md:mb-[64px]">
          <span className="eyebrow">Full Range</span>
          <h2 className="section-title text-[var(--text-primary-dark)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2">
            Everything Your Car Needs
          </h2>
          <div className="divider-gold mx-auto my-5 md:my-[20px]" />
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-[20px]">
          {allServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="card-dark flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-[20px] items-center sm:items-start text-center sm:text-left h-full group">
                <div className="service-icon-wrap flex-shrink-0 w-16 h-16 sm:w-[52px] sm:h-[52px] mb-2 sm:mb-0 transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="w-7 h-7 sm:w-5 sm:h-5" color="var(--color-gold)" />
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-[var(--text-primary-dark)] mb-3 sm:mb-2 md:mb-[10px] text-xl sm:text-lg md:text-xl font-semibold tracking-wide">
                    {s.title}
                  </h3>
                  <p className="body-text text-[15px] sm:text-[15px] opacity-95 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 3. MARQUEE */}
    <MarqueeBanner
      items={["WASHING", "CERAMIC COATING", "PPF", "WRAPPING", "PAINT CORRECTION", "GLASS TREATMENT", "ACCESSORIES", "CAR PAINTING", "HEADLIGHT RESTORATION"]}
    />

    {/* 4. CTA */}
    <CTABanner />
  </>
);

export default Services;


