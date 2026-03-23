"use client";

import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MarqueeBanner from "@/components/MarqueeBanner";
import CTABanner from "@/components/CTABanner";
import TechnicalGallery from "@/components/TechnicalGallery";
import {
  Droplets, SprayCan, Paintbrush, GlassWater, Shield, Layers,
  ArrowRight, Star, Quote, Film, Lightbulb
} from "lucide-react";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";



/* ── Scroll-reveal wrapper ── */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " visible" : ""} ${delay === 100 ? "reveal-delay-1" : delay === 200 ? "reveal-delay-2" : delay === 300 ? "reveal-delay-3" : delay === 400 ? "reveal-delay-4" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

/* ── Services data ── */
const services = [
  { icon: Droplets,   title: "Washing",          desc: "Complete exterior & interior wash to remove dirt, dust, and contaminants for a pristine shine." },
  { icon: SprayCan,   title: "Interior Cleaning", desc: "Vacuuming, surface wiping, and deep clean for a refreshed, spotless cabin." },
  { icon: Paintbrush, title: "Paint Correction",  desc: "Eliminate scratches and swirl marks for a flawless, mirror-like paint finish." },
  { icon: GlassWater, title: "Glass Treatment",   desc: "Advanced coating for lasting visibility and maximum windshield protection." },
  { icon: Shield,     title: "Ceramic Coating",   desc: "Liquid polymer for lasting gloss, hydrophobic protection, and showroom finish." },
  { icon: Layers,     title: "Wrapping",           desc: "Premium vinyl wrapping for style and paint protection with a distinctive appeal." },
  { icon: Film,       title: "PPF",                desc: "Transparent film shield that protects against rock chips, scratches, and environmental damage — invisible, permanent protection." },
  { icon: Lightbulb,  title: "Headlight Restoration", desc: "Restore faded, yellowed headlights to crystal clarity — improving both the aesthetics and safety of your vehicle." },
];

/* ── Testimonials data ── */
const testimonials = [
  { name: "Rahul M., Hubballi",    text: "Auto Glam transformed my car completely. The ceramic coating is flawless and the team was incredibly professional." },
  { name: "Priya K.",              text: "Best car wash and interior cleaning I've experienced. Highly recommend for anyone in Hubballi." },
  { name: "Arun S.",               text: "Got PPF done for my new car. Excellent work and great attention to detail." },
  { name: "Suresh D., Dharwad",    text: "The wrapping work on my bike was outstanding. Colors are vibrant and the finish is top-notch." },
  { name: "Meena R., Hubballi",    text: "My car looks brand new after the paint correction. The team really knows what they're doing!" },
];

const Index = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO — BANNER
      ══════════════════════════════════════════ */}
      <section className="relative w-full bg-black pt-[60px] md:pt-[40px] flex justify-center">
        <div className="w-full max-w-[1920px] relative">
          {/* Top Gradient Overlay */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 via-black/10 to-transparent pointer-events-none z-10"></div>
          
          <Image
            src="/Banner/Web%20Banner%20-%20wide.png"
            alt="Auto Glam Services Portfolio"
            width={1920}
            height={900}
            priority
            className="w-full h-auto hidden md:block"
          />
          <Image
            src="/Banner/Mobile%20Banner.png"
            alt="Auto Glam Services Portfolio Mobile"
            width={1080}
            height={1440}
            priority
            className="w-full h-auto block md:hidden"
          />
          
          {/* CTA Buttons — sized perfectly for web and mobile */}
          <div className="hero-cta-wrap animate-4" style={{ animationDelay: '0.2s' }}>
            <Link href="/services" className="btn-primary hero-cta-primary">
              Our Services <ArrowRight className="hero-cta-icon" />
            </Link>
            <Link href="/contact" className="btn-secondary-dark hero-cta-secondary">
              Book Appointment
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════════ */}
      <MarqueeBanner />

      {/* ══════════════════════════════════════════
          2. WHY CHOOSE US — LIGHT section
      ══════════════════════════════════════════ */}
      <section className="section-light" style={{ padding: "var(--section-padding-lg) 0" }}>
        <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 48px" }}>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-[var(--gap-xl)] items-start">
            {/* Left: text + accordion */}
            <Reveal>
              <div className="section-title-group">
                <span className="eyebrow" style={{ color: "var(--color-gold-dark)" }}>Why Choose Us</span>
                <h2 className="section-title" style={{ color: "var(--text-primary-light)", marginBottom: "16px", lineHeight: 1.1 }}>
                  Why Choose <br className="block md:hidden" />
                  <em>Auto Glam?</em>
                </h2>
              </div>
              <div className="divider-gold" />
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "var(--text-secondary-light)",
                  marginBottom: "32px",
                  marginTop: "8px",
                }}
              >
                Auto Glam is committed to delivering exceptional automotive care with technical precision and genuine passion. Your vehicle is in expert hands, every time.
              </p>
              <Link href="/about" className="btn-secondary-light" style={{ marginBottom: "40px", display: "inline-flex" }}>
                More About Us <ArrowRight size={15} />
              </Link>

              <Accordion type="single" collapsible style={{ marginTop: "8px" }}>
                {[
                  { id: "a", q: "Trusted Experts in Car Detailing", a: "Our team combines years of hands-on experience with the latest techniques to deliver outstanding results on every vehicle." },
                  { id: "b", q: "Customer-First Approach", a: "We listen, understand, and tailor every service to match your exact needs — because your satisfaction drives us." },
                  { id: "c", q: "Quality Service You Can Count On", a: "Premium products, meticulous processes, and a relentless commitment to excellence — every single time." },
                ].map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    style={{ borderColor: "var(--color-light-border)" }}
                  >
                    <AccordionTrigger
                      className="text-left py-3.5 md:py-4"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(14px, 4.2vw, 15px)",
                        fontWeight: 600,
                        color: "var(--text-primary-light)",
                        letterSpacing: "0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "14px",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: "var(--text-secondary-light)",
                      }}
                    >
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

            {/* Right: image */}
            <Reveal delay={200} className="w-full">
              <div
                className="card-light img-cinematic"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  borderRadius: "4px",
                }}
              >
                <Image
                  src="/Images/Why%20choose%20Auto%20glam/Main4.png"
                  alt="Auto Glam workshop and expert services"
                  width={1200}
                  height={900}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SERVICES PREVIEW — dark
      ══════════════════════════════════════════ */}
      <section className="section-dark-atmospheric" style={{ padding: "var(--section-padding-lg) 0" }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="eyebrow">What We Do</span>
              <h2 className="section-title" style={{ color: "var(--text-primary-dark)" }}>
                Our <span className="gold-shimmer">Services</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "var(--text-secondary-dark)",
                  maxWidth: "480px",
                  margin: "16px auto 0",
                  lineHeight: 1.75,
                }}
              >
                From routine care to specialized solutions — crafted to meet your unique requirements.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className={`h-full ${i >= 6 ? "hidden md:block" : ""}`}>
                <div className="card-dark h-full flex flex-col">
                  <div className="service-icon-wrap">
                    <s.icon size={22} color="var(--color-gold)" />
                  </div>
                  <h3 className="card-title" style={{ color: "var(--text-primary-dark)", marginBottom: "10px" }}>
                    {s.title}
                  </h3>
                  <p className="body-text flex-grow">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/services" className="btn-secondary-dark">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. ABOUT SNIPPET — light
      ══════════════════════════════════════════ */}
      <section className="section-light" style={{ padding: "var(--section-padding-lg) 0" }}>
        <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 48px" }}>
          <div className="flex flex-col md:grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-[var(--gap-xl)] items-center">
            {/* Text */}
            <Reveal>
              <span className="eyebrow" style={{ color: "var(--color-gold-dark)" }}>Our Story</span>
              <div className="section-title-group" style={{ marginBottom: "24px" }}>
                <h2 className="section-title" style={{ color: "var(--text-primary-light)" }}>
                  Built on Passion, <em>Driven by Excellence</em>
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--text-secondary-light)",
                  marginBottom: "16px",
                }}
              >
                Auto Glam was founded with a singular vision — to bring world-class automotive care to Hubballi. Every service we offer is backed by precision, premium products, and unwavering dedication.
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--text-secondary-light)",
                  marginBottom: "40px",
                }}
              >
                From daily drivers to luxury vehicles, every car that enters Auto Glam leaves as a testament to craftsmanship.
              </p>

              {/* Feature highlights without stats */}
              <div className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:gap-8 mb-10 w-full">
                {[
                  { value: "PREMIUM", label: "Materials" },
                  { value: "EXPERT",  label: "Craftsmanship" },
                  { value: "TRUSTED", label: "Professionals" },
                  { value: "FLAWLESS",  label: "Finishes" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(28px, 6vw, 36px)",
                        background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-secondary-light)",
                        marginTop: "4px",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-secondary-light">
                Our Full Story <ArrowRight size={15} />
              </Link>
            </Reveal>

            {/* Image */}
            <Reveal delay={200} className="w-full relative">
              <div
                className="img-cinematic relative w-full"
                style={{
                  aspectRatio: "4/5",
                  borderRadius: "4px",
                  border: "1px solid var(--color-light-border)",
                  overflow: "hidden",
                  boxShadow: "12px 12px 0 var(--color-light-border)",
                }}
              >
                <Image
                  src="/Images/Built%20on%20passion,%20driven%20by%20excellence/Mainv2.png"
                  alt="Built on Passion, Driven by Excellence"
                  width={900}
                  height={1125}
                  className="w-full h-full object-cover"
                />
                
                {/* Mobile Workshop Announcement Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-5 py-3 border border-black/5 rounded-sm md:hidden shadow-xl flex items-center justify-center text-center">
                  <div>
                    <span className="block text-[10px] font-bold tracking-widest uppercase text-[#A07830] mb-0.5">Premium Studio</span>
                    <span className="block text-[14px] font-semibold text-[#0F0F0F]">State-of-the-Art Workshop</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE #2 — different items
      ══════════════════════════════════════════ */}
      <MarqueeBanner
        items={["WASHING", "CERAMIC COATING", "PPF", "WRAPPING", "PAINT CORRECTION", "GLASS TREATMENT", "ACCESSORIES", "HEAD LIGHT RESTORATION", "CAR PAINTING"]}
      />

      {/* ══════════════════════════════════════════
          5. GALLERY STRIP — dark
      ══════════════════════════════════════════ */}
      <TechnicalGallery />

      {/* ══════════════════════════════════════════
          6. TESTIMONIALS — dark
      ══════════════════════════════════════════ */}
      <section
        className="section-dark-2 section-dark-atmospheric"
        style={{ padding: "var(--section-padding-lg) 0", overflow: "hidden" }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: "500px", height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-lg)", margin: "0 auto", padding: "0 48px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="eyebrow">Client Reviews</span>
              <h2 className="section-title" style={{ color: "var(--text-primary-dark)" }}>
                What Our <span className="gold-shimmer">Clients Say</span>
              </h2>
            </div>
          </Reveal>

          {/* CAROUSEL TESTIMONIALS */}
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <div 
                      className="card-glass h-full relative" 
                      style={{ 
                        padding: "40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        minHeight: "260px"
                      }}
                    >
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gradient-gold)", borderRadius: "4px 4px 0 0" }} />
                      
                      <div>
                        <Quote className="text-[#C9A84C] opacity-40 mb-4 w-8 h-8" />
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                          ))}
                        </div>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "var(--text-primary-dark)", marginBottom: "24px" }}>
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                      </div>
                      
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                        — {testimonial.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-10 gap-4 relative z-20">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 border-[#C9A84C]/30 bg-transparent hover:bg-[#C9A84C]/10 text-white" />
              <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 border-[#C9A84C]/30 bg-transparent hover:bg-[#C9A84C]/10 text-white" />
            </div>
          </Carousel>


        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. CTA BANNER — dark
      ══════════════════════════════════════════ */}
      <CTABanner />
    </>
  );
};

export default Index;
