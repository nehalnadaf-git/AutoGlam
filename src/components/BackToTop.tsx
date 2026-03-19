import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="back-to-top"
      aria-label="Back to top"
      style={{ opacity: show ? 1 : 0, pointerEvents: show ? "auto" : "none", transition: "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease" }}
    >
      <ArrowUp size={18} color="#0F0F0F" strokeWidth={2.5} />
    </button>
  );
};

export default BackToTop;
