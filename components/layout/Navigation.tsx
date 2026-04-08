"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/concept", label: "The Concept" },
  { href: "/experiences", label: "Experiences" },
  { href: "/partners", label: "Partners" },
  { href: "/investors", label: "Investors" },
  { href: "/ships", label: "Ships & Venues" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-deep/90 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="EmbarqX — Return to homepage"
            >
              <div className="relative">
                <div className="w-8 h-8 border border-cyan/40 rotate-45 flex items-center justify-center group-hover:border-cyan/80 transition-all duration-300">
                  <div className="w-2 h-2 bg-cyan rotate-0 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-cyan/5 rotate-45 group-hover:bg-cyan/10 transition-colors duration-300" />
              </div>
              <span
                className="font-display font-semibold text-xl tracking-[0.08em] text-fg-primary"
                style={{ fontFamily: "var(--font-cormorant)", whiteSpace: "nowrap" }}
              >
                Embarq<span className="text-cyan" style={{ marginLeft: "-0.08em" }}>X</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[0.7rem] font-medium tracking-[0.12em] uppercase transition-all duration-200 group ${
                    pathname === link.href
                      ? "text-fg-primary"
                      : "text-fg-muted hover:text-fg-secondary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-cyan-DEFAULT transition-all duration-300 origin-left ${
                      pathname === link.href
                        ? "scale-x-100 opacity-60"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-40"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
              >
                Start a Conversation
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-fg-secondary hover:text-fg-primary transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-label="Mobile navigation menu"
            aria-modal="true"
          >
            <div className="absolute inset-0 bg-bg-deep/95 backdrop-blur-2xl" />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-bg-elevated/50 border-l border-border flex flex-col"
            >
              <div className="flex items-center justify-between p-6 pt-20">
                <span
                  className="font-display text-2xl font-semibold text-fg-primary"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Navigation
                </span>
              </div>

              <div className="divider-subtle mx-6" />

              <div className="flex-1 flex flex-col gap-1 px-4 pt-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-4 rounded-sm transition-all duration-200 ${
                        pathname === link.href
                          ? "text-fg-primary"
                          : "text-fg-secondary hover:text-fg-primary hover:bg-glass"
                      }`}
                    >
                      <span className="text-sm font-medium tracking-[0.08em] uppercase">{link.label}</span>
                      <span className="text-fg-muted">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-6">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                >
                  Start a Conversation
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
