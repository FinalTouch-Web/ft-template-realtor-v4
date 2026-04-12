"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { SectionHead } from "./section-head";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 8000);
    return () => clearInterval(id);
  }, [total]);

  const t = testimonials[index];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-obsidian-900 border-y border-obsidian-rule">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-14">
        <SectionHead chapter="V" label="Correspondence">
          Letters from those who
          <br />
          <em className="display-italic text-gold">stayed in touch</em>.
        </SectionHead>

        <div className="mt-14 md:mt-20 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {/* Stars */}
              <div
                className="flex gap-1 mb-6 md:mb-8 text-gold"
                aria-label={`${t.rating} out of 5`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <blockquote>
                <p className="display-light text-[clamp(1.5rem,3.2vw,2.75rem)] text-bone leading-[1.28]">
                  <span className="display-italic text-gold">&ldquo;</span>
                  {t.text}
                  <span className="display-italic text-gold">&rdquo;</span>
                </p>
              </blockquote>

              {/* Attribution — avatar is properly contained */}
              <figcaption className="mt-10 md:mt-12 pt-6 border-t border-gold/30 flex items-center gap-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-full grayscale-[20%] border border-gold/40 shrink-0"
                />
                <div>
                  <div className="display text-xl md:text-2xl text-bone">{t.name}</div>
                  <div className="eyebrow-muted mt-1">{t.neighborhood}</div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-14 md:mt-16 pt-6 border-t border-obsidian-rule max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="group h-6 flex items-center"
              >
                <span
                  className={`block h-px transition-all duration-500 ${
                    i === index
                      ? "w-12 bg-gold"
                      : "w-6 bg-obsidian-rule group-hover:bg-bone-faint"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex items-baseline gap-6 sm:gap-8">
            <span className="eyebrow-muted">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button onClick={prev} className="eyebrow-bone link-bone">
              ← Prev
            </button>
            <button onClick={next} className="eyebrow-bone link-bone">
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
