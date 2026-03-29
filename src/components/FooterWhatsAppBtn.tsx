"use client";

import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

const FooterWhatsAppBtn = () => (
  <button
    onClick={() => openWhatsApp("919686363735")}
    className="social-icon-btn"
    aria-label="WhatsApp"
  >
    <MessageCircle size={16} />
  </button>
);

export default FooterWhatsAppBtn;
