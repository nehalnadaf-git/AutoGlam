import type { Service } from "@/data/services";
import Link from "next/link";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <section className="section-light" style={{ padding: "140px 0 100px" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 24px" }}>
        <span className="eyebrow" style={{ color: "var(--color-gold)" }}>
          Service Detail
        </span>
        <h1 className="section-title" style={{ color: "var(--color-ivory)", marginBottom: "16px" }}>
          {service.title}
        </h1>
        <p style={{ color: "var(--color-ivory-muted)", maxWidth: "780px", marginBottom: "24px" }}>
          {service.longDescription}
        </p>
        <p style={{ color: "var(--color-ivory-muted)", maxWidth: "780px", marginBottom: "32px" }}>
          {service.description}
        </p>
        <Link href="/services" className="btn-primary">
          Back to Services
        </Link>
      </div>
    </section>
  );
}
