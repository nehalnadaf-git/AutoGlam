"use client";

import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import MarqueeBanner from "@/components/MarqueeBanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Crown, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Reveal = ({
  children,
  delay = 0,
  style = {},
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " visible" : ""} ${delay === 100 ? "reveal-delay-1" : delay === 200 ? "reveal-delay-2" : delay === 300 ? "reveal-delay-3" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

const features = [
  { icon: Award,  title: "Technical Excellence", desc: "Our technicians bring unmatched precision and mastery to every service, guaranteeing a flawless finish from basic washes to advanced ceramic coatings." },
  { icon: Crown,  title: "Client First",         desc: "Your satisfaction dictates our standard. We provide bespoke automotive care, treating your vehicle with the royal treatment it deserves." },
  { icon: Shield, title: "Trusted Community",    desc: "Built on integrity and passion, we are more than a detailing studio—we are Hubballi's most trusted automotive care partner." },
];

const About = () => (
  <>
    {/* 1. PAGE HERO — dark */}
    <PageHero
      eyebrow="WHO WE ARE"
      title="Your Trusted Car Service Partner"
      subtitle="Providing excellence in automotive care, backed by passion and precision."
      watermark="ABOUT"
    />

    {/* 2. HERITAGE & IDENTITY — CINEMATIC LUXURY */}
    <section className="section-light" style={{ padding: "var(--section-padding-lg) 0", overflow: "hidden", background: "#fff" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "clamp(40px, 8vw, 100px)", 
          alignItems: "center" 
        }}>
          {/* Left: The Brand Card — Acard.png */}
          <Reveal delay={100}>
            <div className="about-brand-card-wrap">
              <div className="about-brand-card-image-wrap">
                <Image
                  src="/Images/About Card/Acard.png"
                  alt="Auto Glam Brand Card"
                  width={520}
                  height={640}
                  className="about-brand-card-image"
                  priority
                />
              </div>
            </div>
          </Reveal>


          {/* Right: Content Section */}
          <Reveal delay={200}>
            <div>
              <span className="eyebrow" style={{ color: "var(--color-gold-dark)", marginBottom: "16px", fontWeight: 600 }}>Our Heritage</span>
              <h2 className="section-title" style={{ 
                color: "var(--text-primary-light)", 
                marginBottom: "36px",
                fontSize: "clamp(2.8rem, 8vw, 4.5rem)",
                lineHeight: 1.05
              }}>
                A Legacy of <br />
                <span style={{ fontStyle: "italic", color: "var(--color-gold-dark)", fontWeight: 300 }}>Detail & Soul</span>
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(16px, 2vw, 18px)",
                  lineHeight: 1.9,
                  color: "var(--text-secondary-light)",
                  fontWeight: 300
                }}>
                  Located in the heart of Hubballi, <strong style={{ fontWeight: 600, color: "var(--text-primary-light)" }}>Auto Glam</strong> has blossomed into the most trusted sanctuary for automotive connoisseurs.
                </p>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(16px, 2vw, 18px)",
                  lineHeight: 1.9,
                  color: "var(--text-secondary-light)",
                  fontWeight: 300
                }}>
                  Our journey began with a singular, passionate belief: that luxury should not be a privilege, but an experience accessible to all. We stand at the crossroads of two distinct worlds — preserving the <span style={{ color: "var(--color-gold-dark)", fontWeight: 500 }}>classic art of car care</span> while embracing the <span style={{ color: "var(--color-gold-dark)", fontWeight: 500 }}>modern allure of technical precision</span>.
                </p>
              </div>

              <div style={{ display: "flex", gap: "20px", marginTop: "56px", flexWrap: "wrap" }}>
                <Link href="/services" className="btn-primary" style={{ padding: "18px 48px", borderRadius: "100px" }}>
                  Explore Our Services
                </Link>
                <Link href="/contact" className="btn-secondary-light" style={{ padding: "18px 48px", borderRadius: "100px", border: "1px solid #ddd" }}>
                  Visit Our Studio
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>


    {/* MARQUEE */}
    <MarqueeBanner />

    {/* 3. WHY CHOOSE — PREMIUM DARK LUXURY */}
    <section className="about-pillars-section">
      <div className="about-pillars-inner">
        {/* Heading */}
        <Reveal>
          <div className="about-pillars-header">
            <span className="eyebrow about-pillars-eyebrow">Our Pillars</span>
            <h2 className="about-pillars-title">
              Why Choose&nbsp;
              <em className="gold-shimmer">Auto Glam?</em>
            </h2>
            <div className="about-pillars-rule" />
          </div>
        </Reveal>

        {/* Cards */}
        <div className="about-pillars-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 130} style={{ height: "100%" }}>
              <div className="about-pillar-card">

                {/* Animated top border on hover */}
                <div className="about-pillar-top-bar" />

                {/* Icon circle */}
                <div className="about-pillar-icon-wrap">
                  <div className="about-pillar-icon-ring" />
                  <f.icon size={28} className="about-pillar-icon" />
                </div>

                {/* Title */}
                <h3 className="about-pillar-card-title">{f.title}</h3>

                {/* Thin gold rule under title */}
                <div className="about-pillar-title-rule" />

                {/* Description */}
                <p className="about-pillar-desc">{f.desc}</p>

                {/* Bottom accent row */}
                <div className="about-pillar-footer">
                  <span className="about-pillar-footer-label">
                    {i === 0 ? "Precision First" : i === 1 ? "Bespoke Care" : "Est. Trust"}
                  </span>
                  <div className="about-pillar-arrow">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <line x1="3" y1="9" x2="15" y2="9" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round"/>
                      <polyline points="10,4 15,9 10,14" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>


    <CTABanner />
  </>
);

export default About;
