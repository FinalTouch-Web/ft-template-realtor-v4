"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { marketStats } from "@/lib/data";
import { SectionHead } from "./section-head";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 2,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const cells = [
  {
    num: "I",
    label: "Average Sale Price",
    value: marketStats.averagePrice,
    note: "Inner-city benchmark for single-family residences.",
  },
  {
    num: "II",
    label: "Median Days on Market",
    counter: marketStats.medianDays,
    suffix: " days",
    note: "Well-appointed listings continue to move with intention.",
  },
  {
    num: "III",
    label: "Residences Transacted",
    counter: marketStats.totalSold,
    note: "Year-to-date across the Calgary Region.",
  },
  {
    num: "IV",
    label: "Year-over-Year",
    value: marketStats.yearOverYear,
    note: "Median sale change, twelve-month trailing.",
  },
];

export function Stats() {
  return (
    <section className="py-24 sm:py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-14">
        <SectionHead chapter="III" label="Market Observed">
          Calgary, <em className="display-italic text-gold">honestly</em> read.
        </SectionHead>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 border-y border-obsidian-rule">
          {cells.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 ${
                i % 2 === 1 ? "md:border-l border-obsidian-rule" : ""
              } ${i < 2 ? "border-b border-obsidian-rule" : ""} ${
                i === 2 ? "border-b md:border-b-0 border-obsidian-rule" : ""
              }`}
            >
              <div className="flex items-baseline justify-between mb-8 md:mb-10">
                <span className="display-italic text-gold text-2xl md:text-3xl">
                  {c.num}
                </span>
                <span className="eyebrow-muted text-right">{c.label}</span>
              </div>
              <div className="display-light text-[clamp(3rem,11vw,7rem)] text-bone leading-[0.92] mb-6 md:mb-8 break-words">
                {c.counter !== undefined ? (
                  <Counter to={c.counter} suffix={c.suffix} />
                ) : (
                  c.value
                )}
              </div>
              <p className="text-sm text-bone-muted max-w-xs leading-relaxed">
                {c.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
