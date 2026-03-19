import { Helmet } from "react-helmet-async";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import MarqueeBanner from "@/components/MarqueeBanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Crown, Shield } from "lucide-react";
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
    <Helmet>
      <title>About Us | Auto Glam Car Service Centre Hubballi</title>
      <meta name="description" content="Learn about Auto Glam — Hubballi's trusted car service partner. We combine technical precision with genuine passion for every vehicle." />
    </Helmet>

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
          
          {/* Left: The Brand Card */}
          <Reveal delay={100}>
            <div className="about-brand-card-wrap">
              <div className="about-brand-card">
                <div className="about-brand-card-border" />

                <div className="about-brand-top">
                  <img
                    src={logo}
                    alt="Auto Glam"
                    className="about-brand-logo"
                  />

                  <div className="about-brand-title">AUTO GLAM</div>

                  <span className="about-brand-tagline">Your Own Pitstop</span>
                </div>
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
                <a href="/services" className="btn-primary" style={{ padding: "18px 48px", borderRadius: "100px" }}>
                  Explore Our Services
                </a>
                <a href="/contact" className="btn-secondary-light" style={{ padding: "18px 48px", borderRadius: "100px", border: "1px solid #ddd" }}>
                  Visit Our Studio
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>


    {/* MARQUEE */}
    <MarqueeBanner />

    {/* 3. WHY CHOOSE — upgraded to premium light/white cinematic style */}
    <section className="section-light" style={{ padding: "var(--section-padding-lg) 0", background: "linear-gradient(to bottom, #F8F6F2, #FFFFFF)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="eyebrow" style={{ color: "var(--color-gold-dark)", marginBottom: "16px", display: "inline-block" }}>Our Pillars</span>
            <h2 className="section-title" style={{ color: "var(--text-primary-light)", fontSize: "clamp(2rem, 8vw, 3rem)", lineHeight: 1.1 }}>
              Why Choose <br className="block md:hidden" />
              <span style={{ color: "var(--color-gold-dark)", fontStyle: "italic" }}>Auto Glam?</span>
            </h2>
            <div className="divider-gold" style={{ margin: "24px auto 0" }} />
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", width: "100%" }}>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120} style={{ height: "100%" }}>
              <div 
                className="card-light group" 
                style={{ 
                  textAlign: "left", 
                  padding: "48px 40px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "16px",
                  background: "white",
                  border: "1px solid rgba(201,168,76,0.15)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.02)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                }}
              >
                {/* Premium hover glow overlay - light version */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Animated Gold Top Line */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "var(--gradient-gold)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                }} className="group-hover:scale-x-100" />

                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,246,242,1) 100%)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "36px",
                    position: "relative",
                    zIndex: 2,
                    boxShadow: "0 8px 24px rgba(160,120,48,0.08)",
                    transition: "all 0.5s ease"
                  }}
                  className="group-hover:bg-[#C9A84C]/5 group-hover:border-[#C9A84C]/50 group-hover:shadow-[0_12px_30px_rgba(201,168,76,0.15)] group-hover:-translate-y-2"
                >
                  <f.icon size={32} color="var(--color-gold-dark)" style={{ transition: "all 0.3s ease" }} />
                </div>
                
                <h3 className="card-title" style={{ 
                  color: "var(--text-primary-light)", 
                  marginBottom: "16px", 
                  fontSize: "1.5rem", 
                  fontWeight: 600,
                  position: "relative",
                  zIndex: 2,
                  letterSpacing: "0.02em"
                }}>
                  {f.title}
                </h3>
                
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--text-secondary-light)",
                  margin: 0,
                  position: "relative",
                  zIndex: 2
                }}>
                  {f.desc}
                </p>

                {/* Corner accent for premium look - light version */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="w-8 h-8 rounded-full border border-[#C9A84C]/40 flex items-center justify-center bg-white shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A07830]" />
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
