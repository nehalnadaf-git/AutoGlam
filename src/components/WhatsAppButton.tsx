import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919686363735"
    target="_blank"
    rel="noopener noreferrer"
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.45)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.35)";
    }}
  >
    <MessageCircle size={24} fill="white" color="white" />
  </a>
);

export default WhatsAppButton;
