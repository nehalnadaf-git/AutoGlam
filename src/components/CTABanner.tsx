import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="cta-banner" style={{ padding: "120px 0" }}>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Watermark */}
      <span
        className="watermark"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(60px, 16vw, 200px)",
          opacity: 1,
        }}
      >
        GLAM
      </span>

      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "var(--container-lg)",
          margin: "0 auto",
          padding: "0 48px",
          textAlign: "center",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(32px)",
        }}
      >
        <span className="eyebrow" style={{ justifyContent: "center", display: "block" }}>Get Started</span>

        <h2
          className="section-title"
          style={{ color: "var(--text-primary-dark)", marginBottom: "20px" }}
        >
          Ready to Give Your Car the{" "}
          <span className="gold-shimmer">Glam</span> It Deserves?
        </h2>

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--text-secondary-dark)",
            maxWidth: "480px",
            margin: "0 auto 40px",
          }}
        >
          Visit us at Keshwapur, Hubballi — Open 7 Days, 9 AM to 8 PM
        </p>

        <Link to="/contact" className="btn-primary">
          Contact Us Today
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
