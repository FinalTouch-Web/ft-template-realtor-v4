"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Portfolio", href: "#listings" },
  { label: "Districts", href: "#neighbourhoods" },
  { label: "Office", href: "#about" },
  { label: "Enquire", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/92 backdrop-blur-sm border-b border-obsidian-rule"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-12 xl:px-14 h-16 md:h-20 flex items-center justify-between gap-4 md:gap-6">
          {/* Wordmark */}
          <a href="#top" className="flex items-baseline gap-3 shrink-0 min-w-0">
            <span className="display text-[22px] md:text-[24px] xl:text-[28px] text-bone truncate">
              Sarah Mitchell
            </span>
            <span className="eyebrow-muted hidden 2xl:inline">Broker</span>
          </a>

          {/* Desktop nav — md+ */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-baseline gap-2 eyebrow-bone link-bone whitespace-nowrap"
              >
                <span className="text-gold hidden lg:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{l.label}</span>
              </a>
            ))}
          </nav>

          {/* Phone — only on xl+ where there's room */}
          <a
            href="tel:+14035550567"
            className="hidden xl:block display-italic text-lg text-gold whitespace-nowrap shrink-0"
          >
            (403) 555 · 0567
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden eyebrow-bone shrink-0"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-obsidian"
          >
            <div className="h-16 border-b border-obsidian-rule" />
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="px-6 pt-12 pb-10 h-[calc(100%-4rem)] flex flex-col"
            >
              <div className="eyebrow mb-10">Index</div>
              <nav className="flex flex-col divide-y divide-obsidian-rule border-y border-obsidian-rule">
                {links.map((l, i) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-6 flex items-baseline justify-between"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="eyebrow">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-3xl sm:text-4xl text-bone">{l.label}</span>
                    </div>
                    <span className="text-gold">→</span>
                  </a>
                ))}
              </nav>
              <div className="mt-auto pt-10">
                <div className="eyebrow-muted mb-3">By Appointment</div>
                <a
                  href="tel:+14035550567"
                  className="display-italic text-3xl text-gold"
                >
                  (403) 555 · 0567
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
