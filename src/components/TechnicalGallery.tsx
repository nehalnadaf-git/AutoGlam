"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";
// New images from public/Images/In Action folder
const galleryImages = [
  { src: "/Images/In%20Action/Wash.png",   alt: "Premium car wash in action",             rotation: -6,  offset: 20  },
  { src: "/Images/In%20Action/Wash3.png",  alt: "Professional detailing precision",        rotation: -2,  offset: -10 },
  { src: "/Images/In%20Action/Wash4.png",  alt: "Auto Glam workshop expertise",            rotation: 4,   offset: 15  },
  { src: "/Images/In%20Action/Wash5.png",  alt: "Deep cleaning and restoration",           rotation: -4,  offset: -5  },
  { src: "/Images/In%20Action/Wash6.png",  alt: "Meticulous paint care",                   rotation: 6,   offset: -20 },
  { src: "/Images/In%20Action/Wash8.png",  alt: "Showroom finish results",                 rotation: -2,  offset: 10  },
  { src: "/Images/In%20Action/Wash9.png",  alt: "High-end automotive protection",         rotation: 3,   offset: -15 },
  { src: "/Images/In%20Action/Wash10.png", alt: "Final quality check at Auto Glam",        rotation: -5,  offset: 5   },
];

const TechnicalGallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Drag to scroll logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      className="section-black"
      style={{ padding: "100px 0", overflow: "hidden" }}
    >
      {/* Ghost watermarks */}
      <span
        className="watermark pointer-events-none"
        style={{ left: "50%", top: "20%", transform: "translateX(-50%)", fontSize: "clamp(60px, 14vw, 180px)" }}
      >
        TECHNICAL
      </span>

      <div
        ref={ref}
        style={{
          width: "100%",
          padding: "0 20px md:0",
          transition: "opacity 1s ease, transform 1s ease",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 1 }}>
          <span className="eyebrow">Our Workshop</span>
          <h2 className="section-title" style={{ color: "var(--text-primary-dark)" }}>In Action</h2>
        </div>

        {/* Gallery Slider Track */}
        <div className="relative z-10 w-full overflow-hidden group">
          <div
            ref={sliderRef}
            className={`flex items-center gap-6 px-[10vw] py-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:snap-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="img-cinematic snap-center shrink-0"
                style={{
                  width: "280px",
                  aspectRatio: "3/4",
                  borderRadius: "4px",
                  border: "1px solid var(--color-dark-border)",
                  transform: `rotate(${img.rotation}deg) translateY(${img.offset}px)`,
                  transition: "transform 0.5s ease, box-shadow 0.5s ease, z-index 0s",
                  position: "relative",
                  pointerEvents: isDragging ? "none" : "auto", // Prevent dragging from pulling images
                }}
                onMouseEnter={(e) => {
                  if (isDragging) return;
                  const el = e.currentTarget;
                  el.style.transform = `rotate(0deg) translateY(-8px) scale(1.04)`;
                  el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.3)";
                  el.style.zIndex = "5";
                }}
                onMouseLeave={(e) => {
                  if (isDragging) return;
                  const el = e.currentTarget;
                  el.style.transform = `rotate(${img.rotation}deg) translateY(${img.offset}px)`;
                  el.style.boxShadow = "none";
                  el.style.zIndex = "0";
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={560}
                  height={740}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                {/* Gold bottom accent on hover */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    height: "3px",
                    background: "var(--gradient-gold)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12 mb-4">
            <button
              onClick={() => scroll("left")}
              className="btn-secondary-dark !p-3 rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {galleryImages.map((_, idx) => (
                <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/20" />
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="btn-secondary-dark !p-3 rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalGallery;
