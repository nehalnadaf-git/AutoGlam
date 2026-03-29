"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home",     path: "/" },
  { label: "About",    path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact",  path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 420);
  };

  useEffect(() => {
    if (open) handleClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}${isHidden ? " hidden-navbar" : ""}`}>
      {/* ── Logo ── */}
      <Link href="/" className="relative z-50 flex items-center gap-3">
        <Image
          src={logo}
          alt="Auto Glam"
          width={220}
          height={90}
          className="h-[52px] md:h-[72px] w-auto -my-[4px] md:-my-[12px] transition-all duration-300 drop-shadow-lg"
        />
      </Link>

      {/* ── Desktop nav ── */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 items-center gap-12">
        {navLinks.map((l) => (
          <Link
            key={l.path}
            href={l.path}
            className={`nav-link${pathname === l.path ? " active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        id="mobile-menu-toggle"
        className="relative z-50 md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => (open ? handleClose() : setOpen(true))}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <div className={`hamburger-icon${open ? " is-open" : ""}`}>
          <span />
          <span />
          <span />
        </div>
      </button>

      {/* ── Mobile fullscreen overlay ── */}
      {open && createPortal(
        <div
          id="mobile-menu-overlay"
          className={`mobile-menu-overlay${closing ? " is-closing" : ""}`}
        >
          <div className="mobile-menu-glow-tr" />
          <div className="mobile-menu-glow-bl" />
          <div className="mobile-menu-grain" />

          <div className="mobile-menu-inner flex flex-col justify-center items-center h-full">
            <nav className="mobile-menu-nav flex flex-col items-center gap-4 w-full" aria-label="Mobile navigation">
              {navLinks.map((l, i) => {
                const isActive = pathname === l.path;
                return (
                  <Link
                    key={l.path}
                    href={l.path}
                    onClick={handleClose}
                    className={`mobile-nav-item text-center${isActive ? " active" : ""}`}
                    style={{ animationDelay: `${0.08 + i * 0.07}s`, border: "none" }}
                  >
                    <span className="mobile-nav-label text-[36px] sm:text-[42px]">{l.label}</span>
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={handleClose}
                className="mobile-menu-cta-primary mt-8 w-[220px]"
                style={{ animationDelay: `${0.08 + navLinks.length * 0.07}s` }}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      , document.body)}
    </nav>
  );
};

export default Navbar;
