import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: React.ReactNode;
  watermark: string;
}

const PageHero = ({ eyebrow, title, subtitle, watermark }: PageHeroProps) => {
  return (
    <section
      style={{
        background: "var(--color-black)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "55vh",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Cinematic spotlight */}
      <div
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw", height: "80vh",
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Watermark */}
      <span
        className="watermark"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(80px, 18vw, 220px)",
        }}
      >
        {watermark}
      </span>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}>
        <span className="eyebrow animate-1">{eyebrow}</span>
        <h1
          className="section-title animate-2"
          style={{ color: "var(--text-primary-dark)", marginBottom: subtitle ? "20px" : 0 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="animate-3"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--text-secondary-dark)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
