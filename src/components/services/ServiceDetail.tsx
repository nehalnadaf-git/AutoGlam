import type { Service } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <section className="section-light" style={{ padding: "140px 0 100px" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Text column */}
          <div>
            <span className="eyebrow" style={{ color: "var(--color-gold-dark)" }}>
              Our Services
            </span>
            <h1 className="section-title" style={{ color: "var(--text-primary-light)", marginBottom: "20px" }}>
              {service.title}
            </h1>
            <div style={{ width: "48px", height: "2px", background: "var(--gradient-gold)", marginBottom: "28px" }} />
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--text-secondary-light)",
                marginBottom: "16px",
              }}
            >
              {service.longDescription}
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--text-muted-light)",
                marginBottom: "40px",
              }}
            >
              {service.description}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Book This Service
              </Link>
              <Link href="/services" className="btn-secondary-light">
                All Services
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div
            style={{
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid var(--color-light-border)",
              aspectRatio: "4/3",
              position: "relative",
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
