"use client";

import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MarqueeBanner from "@/components/MarqueeBanner";
import CTABanner from "@/components/CTABanner";
import TechnicalGallery from "@/components/TechnicalGallery";
import {
  ArrowRight, Star, Quote,
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
      className={`reveal${isVisible ? " visible" : ""} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </div>
  );
};

/* ── Services data — now image-backed ── */
const services = [
  { title: "Washing",                    desc: "Complete exterior & interior wash to remove dirt and contaminants for a pristine shine.",                image: "/Service Images/Washing.webp",                   href: "/services/washing" },
  { title: "Interior Cleaning",          desc: "Vacuuming, deep-clean treatments to refresh and restore every inch of your car's cabin.",               image: "/Service Images/Interior Cleaning.webp",         href: "/services/interior-cleaning" },
  { title: "Paint Correction",           desc: "Eliminate scratches and swirl marks for a flawless, mirror-like paint finish.",                         image: "/Service Images/Paint correction.webp",          href: "/services/paint-correction" },
  { title: "Glass Treatment",            desc: "Advanced ceramic coating for lasting visibility and hydrophobic windshield protection.",                  image: "/Service Images/Glass Treatment.webp",           href: "/services/glass-treatment" },
  { title: "PPF",                        desc: "Transparent film shield against rock chips, scratches, and environmental damage.",                        image: "/Service Images/PPF.webp",                       href: "/services/ppf" },
  { title: "Ceramic Coating",            desc: "Liquid polymer for lasting gloss, hydrophobic protection, and a permanent showroom finish.",             image: "/Service Images/Ceramic Coating.webp",           href: "/services/ceramic-coating" },
  { title: "Cars & Bikes Painting",      desc: "Professional full-body painting using high-quality automotive finishes for lasting beauty.",             image: "/Service Images/Cars & Bikes Painting.webp",     href: "/services/painting" },
  { title: "Wrapping",                   desc: "Premium vinyl wrapping for bold style and paint protection.",                                            image: "/Service Images/Wrapping.webp",                  href: "/services/wrapping" },
  { title: "Cars & Bikes Accessories",   desc: "Expert installation of automotive accessories — ensuring every fitment is precise, clean, and professionally finished.",               image: "/Service Images/Car & Bikes Accessories.webp",   href: "/services/accessories" },
];

/* ── Testimonials data ── */
const testimonials = [
  { name: "Naveen Akalwadi", service: "🚗 Ceramic Coating", text: "If you are looking for someone to make your car a head turner while you're driving it, right place to bring in your car. My new ScorpioN was given Ceramic Coat which is making people turn heads." },
  { name: "Sachin Arakeri", service: "🧹 Interior Cleaning", text: "Detailed interior cleaning of each corner inside the car. High quality products used for cleaning which gives the car a long lasting glossy look. Quick service, professionally cleaned and washed, good service at a very competitive price. I highly recommend AUTO GLAM to everyone." },
  { name: "Milind Shetti", service: "✨ Detailing", text: "Looks do kill — neighbour's envy, owner's pride. My Honda City has become brand new. Graceful yet glamorous work. Would recommend it to everyone who are crazy about their car looks and focus on minute details." },
  { name: "Ashish Singh", service: "🏆 General", text: "A much needed premium detailing studio in Hubli! These guys are dedicated and their work is impeccable. Would definitely recommend Auto Glam to everyone." },
  { name: "Basavaraj Gadgimath", service: "🔥 General", text: "The best ever service center for bikes and cars. The staff's work is so clean and they take care of your vehicle as if it is their own. Thank you AUTOGLAM team for the wonderful service you're providing." },
  { name: "Akash Pawar", service: "🛡️ Ceramic Coating", text: "Got Ceramic Coating done for my 1 year old car — it's looking better than it was at the time of delivery 1 year ago!" },
  { name: "VASANT. MURNAL", service: "🎨 Paint Correction", text: "After years of exposure to the sun and Hubballi's unpredictable weather, my car's paint had lost its luster. Opting for a professional rubbing and polishing service was the best decision. The technicians meticulously removed minor scratches." },
  { name: "Sridhar S", service: "🛡️ PPF", text: "Got PPF for my new car and the quality of the work and product was amazing." },
  { name: "kevin luthia", service: "⭐ General", text: "One of the best car detailing studios in Hubli. Staff here is very professional and friendly — they will help you choose what service is best for your car." },
  { name: "Highway Lounge", service: "🚿 Washing & PPF", text: "Think of car wash, it's Auto Glam. They are real professionals in terms of car wash and PPF. I just like the way they do their job perfectly." },
  { name: "Renzil O'Connor", service: "💬 Customer Service", text: "Veeresh from Autoglam is very responsive and has an incredible customer-centric attitude. I would recommend this place for all your car care needs." },
  { name: "Avinash Lakkundi", service: "✨ Polishing", text: "Done my i20 whole vehicle polishing. Best in class in Hubballi. Affordable price and quality." },
  { name: "Shahzaman Mujahid", service: "🛡️ PPF", text: "Done PPF for my black Fortuner — happy with the service." },
  { name: "Adarsh Hublikar", service: "⭐ General", text: "Awesome service! Mr. Samrat the owner was very polite and kind." },
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
      <section className="relative w-full bg-black pt-[76px] md:pt-[96px] overflow-hidden">
        <div className="w-full max-w-[1920px] relative mx-auto overflow-hidden">
          <Image
            src="/Banner/Web%20Banner%20-%20wide.webp"
            alt="Auto Glam Services Portfolio"
            width={1920}
            height={900}
            priority
            className="w-full h-auto hidden md:block"
          />
          <Image
            src="/Banner/Mobile%20Banner%20-%20New.webp"
            alt="Auto Glam Services Portfolio Mobile"
            width={1080}
            height={1440}
            priority
            className="w-full h-auto block md:hidden"
          />

          {/* Top Fade Gradient Overlay - Optimized for both Desktop & Mobile */}
          <div className="hero-top-overlay" />

          {/* CTA Buttons — absolutely overlaid at the bottom of the banner */}
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
                  Why Choose <br />
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
                className="card-light img-cinematic mobile-no-frame"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  borderRadius: "4px",
                }}
              >
                <Image
                  src="/Images/Why%20choose%20Auto%20glam/Main4.webp"
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

          {/* Image card grid — 1 col mobile, 2 col md, 3 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80} className={`h-full ${i >= 6 ? "hidden lg:block" : ""}`}>
                <div
                  className="group relative block w-full overflow-hidden service-img-card"
                  style={{ borderRadius: "4px", textDecoration: "none" }}
                >
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ objectPosition: "center" }}
                    />
                    {/* Dark gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.45) 45%, transparent 100%)",
                      }}
                    />
                    {/* Gold top line on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100"
                      style={{ background: "var(--gradient-gold)" }}
                    />
                    {/* Card text */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h3
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "clamp(15px, 2.2vw, 17px)",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                          color: "#FFFFFF",
                          marginBottom: "6px",
                          lineHeight: 1.25,
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="transition-all duration-500 ease-out max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "13px",
                          fontWeight: 300,
                          lineHeight: 1.65,
                          color: "rgba(255,255,255,0.82)",
                          marginBottom: "8px",
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
                  src="/Images/Built%20on%20passion,%20driven%20by%20excellence/Mainv2.webp"
                  alt="Built on Passion, Driven by Excellence"
                  width={900}
                  height={1125}
                  className="w-full h-full object-cover"
                />
                
                {/* Mobile Workshop Announcement Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md px-3 py-2 border border-white/20 rounded-lg md:hidden shadow-lg flex items-center justify-center text-center max-w-[200px] mx-auto">
                  <div>
                    <span className="block text-[9px] font-bold tracking-widest uppercase text-white mb-0.5">Premium Studio</span>
                    <span className="block text-[12px] font-medium text-white/90">State-of-the-Art Workshop</span>
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
        items={["WASHING", "CERAMIC COATING", "PPF", "WRAPPING", "PAINT CORRECTION", "GLASS TREATMENT", "ACCESSORIES", "CAR PAINTING"]}
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

        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-lg)", margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 6vw, 64px)" }}>
              <span className="eyebrow">Client Reviews</span>
              <h2 className="section-title" style={{ color: "var(--text-primary-dark)" }}>
                What Our <span className="gold-shimmer">Clients Say</span>
              </h2>
            </div>
          </Reveal>

          {/* CAROUSEL TESTIMONIALS */}
          <div style={{ position: "relative" }}>
            {/* Left fade */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: -1,
                bottom: 0,
                width: "clamp(60px, 12vw, 150px)",
                background: "linear-gradient(to right, var(--color-dark, #0F0F0F) 0%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />
            {/* Right fade */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                right: -1,
                bottom: 0,
                width: "clamp(60px, 12vw, 150px)",
                background: "linear-gradient(to left, var(--color-dark, #0F0F0F) 0%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

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
                      <div className="card-glass h-full relative testimonial-card">
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--gradient-gold)", borderRadius: "4px 4px 0 0" }} />
                        
                        <div className="flex items-start gap-3 mb-3">
                          <Quote className="text-[#C9A84C] opacity-40 shrink-0 w-6 h-6 md:w-8 md:h-8" />
                          <div className="flex gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#C9A84C] text-[#C9A84C]" />
                            ))}
                          </div>
                        </div>

                        <p className="testimonial-text">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                        
                        <div style={{ marginTop: "16px" }}>
                          <p className="testimonial-name" style={{ marginBottom: "4px" }}>
                            — {testimonial.name}
                          </p>
                          {testimonial.service && (
                            <p style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "12px",
                              fontWeight: 500,
                              color: "var(--color-gold-dark)",
                              marginLeft: "18px",
                              letterSpacing: "0.05em",
                              opacity: 0.9
                            }}>
                              [{testimonial.service}]
                            </p>
                          )}
                        </div>
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
