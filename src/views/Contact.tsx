"use client";

import PageHero from "@/components/PageHero";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { z } from "zod";

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
      className={`reveal${isVisible ? " visible" : ""} ${delay === 200 ? "reveal-delay-2" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

const contactSchema = z.object({
  name:    z.string().trim().min(1, "Name is required").max(100),
  phone:   z.string().trim().min(10, "Enter a valid phone number").max(15),
  service: z.string().min(1, "Select a service"),
  customService: z.string().trim().optional(),
  message: z.string().trim().max(1000).optional(),
});

const serviceOptions = [
  "Washing", "Interior Cleaning", "Paint Correction", "Glass Treatment",
  "Ceramic Coating", "Wrapping", "PPF", "Painting", "Accessories", "Headlight Restoration", "Other"
];

/* Shared input styles */
const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--color-dark-card)",
  border: "1px solid var(--color-dark-border)",
  borderRadius: "2px",
  padding: "13px 16px",
  fontFamily: "'Outfit', sans-serif",
  fontSize: "14px",
  color: "var(--text-primary-dark)",
  outline: "none",
  transition: "border-color 0.3s",
  boxSizing: "border-box" as const,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Outfit', sans-serif",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "var(--text-secondary-dark)",
  marginBottom: "8px",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", customService: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--color-gold)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--color-dark-border)";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    // ── Build professional WhatsApp message ──────────────────
    const lines = [
      `*AUTO GLAM — BOOKING INQUIRY*`,
      ``,
      `Hello, I would like to request a booking with the following details:`,
      ``,
      `*Client Name:*    ${form.name.trim()}`,
      `*Phone Number:*   ${form.phone.trim()}`,
      `*Service Type:*   ${form.service === "Other" && form.customService ? form.customService.trim() : form.service}`,
      form.message.trim()
        ? `*Additional Info:* ${form.message.trim()}`
        : null,
      ``,
      `Please let me know your earliest availability. Thank you.`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const waNumber = "916363278962"; // India country code + business number
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Show success state on the site
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. PAGE HERO */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Contact Auto Glam"
        subtitle={
          <>
            We&apos;re open 7 days a week — come visit <br className="block md:hidden" />
            or reach out below.
          </>
        }
        watermark="CONTACT"
      />

      {/* 2. CONTACT SECTION — light */}
      <section className="section-light" style={{ padding: "var(--section-padding-lg) 0" }}>
        <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }}>
          <div className="flex flex-col md:grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-[var(--gap-xl)] items-start">
            {/* Info card */}
            <Reveal>
              <div className="card-light md:sticky md:top-[120px] shadow-sm border border-[var(--color-light-border)]/50">
                <span className="eyebrow" style={{ color: "var(--color-gold-dark)" }}>Our Location</span>
                <h3 className="section-title" style={{ color: "var(--text-primary-light)", fontSize: "clamp(28px,6vw,36px)", marginBottom: "32px" }}>
                  Find Us
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      content: "Shop No.01 Bannigida Cross Madhura Colony, Kusugal Rd, opposite Temple, Keshwapur, Hubballi, Karnataka 580023",
                      href: "https://maps.app.goo.gl/ay6Wu3Vn9R3BGgAp8",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      content: "9686363735",
                      href: "tel:+919686363735",
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      content: "Monday – Sunday: 9:00 AM – 8:00 PM",
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "2px",
                          border: "1px solid rgba(160,120,48,0.3)",
                          background: "rgba(201,168,76,0.06)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <item.icon size={16} color="var(--color-gold-dark)" />
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "var(--color-gold-dark)",
                            marginBottom: "4px",
                          }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "14px",
                              fontWeight: 300,
                              color: "var(--text-secondary-light)",
                              lineHeight: 1.6,
                              textDecoration: "none",
                              transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-dark)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary-light)")}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", fontWeight: 300, color: "var(--text-secondary-light)", lineHeight: 1.6 }}>
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick links */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-[var(--color-light-border)]">
                  <a
                    href="https://wa.me/919686363735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-light flex-1 justify-center !py-3.5 !text-[13px]"
                  >
                    WhatsApp <ArrowRight size={14} />
                  </a>
                  <a
                    href="https://maps.app.goo.gl/ay6Wu3Vn9R3BGgAp8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-light flex-1 justify-center !py-3.5 !text-[13px]"
                  >
                    Directions <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={200} className="w-full">
              {submitted ? (
                <div
                  className="card-light shadow-sm border border-[var(--color-light-border)]/50"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "280px",
                    textAlign: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="section-title" style={{ color: "var(--text-primary-light)", fontSize: "28px" }}>WhatsApp Opened!</h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", fontWeight: 300, color: "var(--text-secondary-light)", maxWidth: "320px", lineHeight: 1.7 }}>
                    Your booking details have been pre-filled in WhatsApp. Just tap <strong>Send</strong> and we&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <div className="card-light shadow-sm border border-[var(--color-light-border)]/50">
                  <h3 className="section-title" style={{ color: "var(--text-primary-light)", fontSize: "clamp(28px,6vw,36px)", marginBottom: "8px" }}>
                    Send a Message
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", fontWeight: 300, color: "var(--text-secondary-light)", marginBottom: "32px" }}>
                    Fill in your details and we&apos;ll be in touch shortly.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Name */}
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        style={{ ...inputStyle, background: "var(--color-light-card)", border: "1px solid var(--color-light-border)", color: "var(--text-primary-light)" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold-dark)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-light-border)")}
                      />
                      {errors.name && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#e53e3e", marginTop: "4px" }}>{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Your phone number"
                        style={{ ...inputStyle, background: "var(--color-light-card)", border: "1px solid var(--color-light-border)", color: "var(--text-primary-light)" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold-dark)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-light-border)")}
                      />
                      {errors.phone && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#e53e3e", marginTop: "4px" }}>{errors.phone}</p>}
                    </div>

                    {/* Service */}
                    <div>
                      <label style={labelStyle}>Service</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        style={{ ...inputStyle, background: "var(--color-light-card)", border: "1px solid var(--color-light-border)", color: form.service ? "var(--text-primary-light)" : "var(--text-muted-light)" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold-dark)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-light-border)")}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "12px", color: "#e53e3e", marginTop: "4px" }}>{errors.service}</p>}
                      
                      {form.service === "Other" && (
                        <div style={{ marginTop: "12px" }}>
                          <input
                            value={form.customService}
                            onChange={(e) => setForm({ ...form, customService: e.target.value })}
                            placeholder="Write your custom service request here..."
                            style={{ ...inputStyle, background: "var(--color-light-card)", border: "1px solid var(--color-light-border)", color: "var(--text-primary-light)" }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold-dark)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-light-border)")}
                          />
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Message <span style={{ opacity: 0.5 }}>(optional)</span></label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        placeholder="Tell us about your needs..."
                        style={{ ...inputStyle, background: "var(--color-light-card)", border: "1px solid var(--color-light-border)", color: "var(--text-primary-light)", resize: "none" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold-dark)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-light-border)")}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }}>
                      Send Message <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
