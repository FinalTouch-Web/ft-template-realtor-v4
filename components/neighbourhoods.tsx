"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { neighborhoods } from "@/lib/data";
import { SectionHead } from "./section-head";

export function Neighbourhoods() {
  const [active, setActive] = useState(0);
  const n = neighborhoods[active];
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const els = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = Number((visible.target as HTMLElement).dataset.idx);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      { threshold: [0.55, 0.8], rootMargin: "0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="neighbourhoods"
      className="relative border-y border-obsidian-rule overflow-hidden"
    >
      {/* Full-bleed background — swaps with active district (mobile: shows first district) */}
      <div className="absolute inset-0 -z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={n.slug}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img
              src={n.image}
              alt=""
              className="w-full h-full object-cover grayscale-[30%] contrast-[0.85]"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-obsidian/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 md:px-14 py-24 sm:py-28 md:py-40">
        <SectionHead chapter="IV" label="The Districts">
          Six Calgary pockets,
          <br />
          <em className="display-italic text-gold">known intimately</em>.
        </SectionHead>
        <div className="mb-16 md:mb-24" />

        {/* Desktop split */}
        <div className="hidden lg:grid grid-cols-12 gap-16">
          <ol className="col-span-7 divide-y divide-obsidian-rule border-y border-obsidian-rule">
            {neighborhoods.map((hood, i) => (
              <li key={hood.slug}>
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="w-full py-7 flex items-baseline gap-8 text-left group"
                >
                  <span
                    className={`display-italic text-2xl transition-colors ${
                      active === i ? "text-gold" : "text-bone-faint"
                    }`}
                  >
                    {["I", "II", "III", "IV", "V", "VI"][i]}
                  </span>
                  <span
                    className={`display text-4xl xl:text-5xl flex-1 transition-colors ${
                      active === i ? "text-bone" : "text-bone-muted"
                    }`}
                  >
                    {hood.name}
                  </span>
                  <span
                    className={`eyebrow-muted transition-colors ${
                      active === i ? "text-gold" : ""
                    }`}
                  >
                    {hood.avgPrice}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <aside className="col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={n.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="eyebrow mb-4">{n.tag}</div>
                <h3 className="display-light text-5xl xl:text-6xl text-bone mb-8">
                  {n.name}
                </h3>
                <p className="prose-body mb-10 max-w-md">{n.description}</p>
                <dl className="grid grid-cols-3 gap-6 border-t border-obsidian-rule pt-6">
                  <Stat label="Walk Score" value={n.stats.walkScore} />
                  <Stat label="Listings" value={n.stats.listings} />
                  <Stat label="Demand" value={n.stats.demand} />
                </dl>
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>

        {/* Mobile scroll gallery */}
        <div className="lg:hidden -mx-5 sm:-mx-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 scroll-pl-5 sm:scroll-pl-8">
          <div className="flex gap-6 w-max px-5 sm:px-8">
            {neighborhoods.map((hood, i) => (
              <article
                key={hood.slug}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                data-idx={i}
                className="w-[80vw] sm:w-[360px] shrink-0 snap-start"
              >
                <img
                  src={hood.image}
                  alt={hood.name}
                  className="w-full aspect-[4/5] object-cover grayscale-[20%]"
                />
                <div className="mt-5 flex items-baseline justify-between">
                  <span className="display-italic text-gold text-xl">
                    {["I", "II", "III", "IV", "V", "VI"][i]}
                  </span>
                  <span className="eyebrow-muted">{hood.avgPrice}</span>
                </div>
                <h3 className="mt-3 display text-4xl text-bone">{hood.name}</h3>
                <div className="eyebrow mt-2">{hood.tag}</div>
                <p className="mt-4 text-sm text-bone-muted leading-relaxed line-clamp-4">
                  {hood.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <dt className="eyebrow-muted">{label}</dt>
      <dd className="display text-3xl text-gold mt-2">{value}</dd>
    </div>
  );
}
