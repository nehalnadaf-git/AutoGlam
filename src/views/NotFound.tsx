import Link from "next/link";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100svh",
        background: "var(--color-black)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "40px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* 404 */}
      <p
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(100px, 20vw, 220px)",
          lineHeight: 1,
          background: "var(--gradient-gold)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "8px",
          letterSpacing: "0.02em",
        }}
      >
        404
      </p>

      {/* Divider */}
      <div
        style={{
          width: "60px",
          height: "1px",
          background: "var(--gradient-gold)",
          margin: "0 auto 24px",
        }}
      />

      {/* Headline */}
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(22px, 4vw, 40px)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--text-primary-dark)",
          marginBottom: "12px",
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "14px",
          fontWeight: 300,
          color: "var(--text-secondary-dark)",
          maxWidth: "360px",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        The page you&apos;re looking for has moved, been removed, or doesn&apos;t exist.
      </p>

      <Link href="/" className="btn-primary" style={{ display: "inline-flex" }}>
        Back to Home <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default NotFound;

