import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Globe, Clock, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer style={{ background: "var(--color-dark)", position: "relative" }}>
    {/* Gold top separator */}
    <div className="section-separator" />

    <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "72px 24px 0" }}>
      {/* Top: logo + newsletter */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
          marginBottom: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src={logo} alt="Auto Glam" width={220} height={96} className="h-20 md:h-24 w-auto object-contain drop-shadow-lg" />
          <div>
            <div className="footer-logo-text">AUTO GLAM</div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "var(--text-muted-dark)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>
              Your Own Pitstop
            </p>
          </div>
        </div>

      </div>

      {/* 4-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px",
          marginBottom: "64px",
        }}
      >
        {/* Pages */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>Navigation</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Home",     path: "/" },
              { label: "About",    path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact",  path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link href={l.path} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>Location</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <MapPin size={14} style={{ color: "var(--color-gold)", marginTop: "3px", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "var(--text-secondary-dark)", lineHeight: "1.6" }}>
                Shop No.01, Bannigida Cross, Kusugal Rd, Keshwapur, Hubballi 580023
              </span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>Contact</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a href="tel:9686363735" className="footer-link" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Phone size={14} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
              9686363735
            </a>
            <a
              href="https://maps.app.goo.gl/ay6Wu3Vn9R3BGgAp8"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <MapPin size={14} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
              Google Maps
            </a>
          </div>
        </div>

        {/* Hours + Social */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>Hours</p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
            <Clock size={14} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "var(--text-secondary-dark)" }}>
              Mon – Sun
            </span>
          </div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "var(--text-secondary-dark)", marginLeft: "24px", marginBottom: "28px" }}>
            9:00 AM – 8:00 PM
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://wa.me/919686363735" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href="https://www.instagram.com/agautoglam/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section-separator" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "24px 0",
        }}
      >
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "var(--text-muted-dark)" }}>
          © 2025 Auto Glam Car Service Centre. All Rights Reserved.
        </p>

      </div>
    </div>
  </footer>
);

export default Footer;
