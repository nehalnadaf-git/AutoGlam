"use client";

import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

const WhatsAppButton = () => (
  <button
    onClick={() => openWhatsApp("919686363735")}
    aria-label="Chat on WhatsApp"
    style={{
      position: "fixed",
      bottom: "32px",
      left: "32px",
      zIndex: 999,
      width: "52px",
      height: "52px",
      borderRadius: "50%",
      background: "#25D366",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(37,211,102,0.45)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.35)";
    }}
  >
    <MessageCircle size={24} fill="white" color="white" />
  </button>
);

export default WhatsAppButton;
