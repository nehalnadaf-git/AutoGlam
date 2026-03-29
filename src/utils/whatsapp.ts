export const openWhatsApp = (phone: string, message: string = "") => {
  const encoded = encodeURIComponent(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(
    typeof navigator !== 'undefined' ? navigator.userAgent : ""
  );

  if (isMobile) {
    // Deep-link into the WhatsApp app on mobile
    window.location.href = `whatsapp://send?phone=${phone}&text=${encoded}`;
  } else {
    // Universal wa.me link works on desktop — launches the app if installed,
    // otherwise opens WhatsApp Web
    window.open(`https://wa.me/${phone}${encoded ? `?text=${encoded}` : ""}`, '_blank');
  }
};
