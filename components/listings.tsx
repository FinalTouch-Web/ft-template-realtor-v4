"use client";

import { motion } from "framer-motion";
import { listings } from "@/lib/data";
import { SectionHead } from "./section-head";

export function Listings() {
  return (
    <section id="listings" className="py-24 sm:py-28 md:py-40 border-t border-obsidian-rule">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-14">
        <SectionHead chapter="I" label="The Portfolio">
          Four residences,
          <br />
          <em className="display-italic text-gold">currently in confidence</em>.
        </SectionHead>

        {/* 4-column equal gallery */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-16 md:gap-y-24">
          {listings.map((l, i) => (
            <motion.article
              key={l.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.08 }}
              className={`group ${
                i === 1 ? "lg:mt-12" : i === 2 ? "lg:mt-24" : i === 3 ? "lg:mt-6" : ""
              }`}
            >
              <a href="#" className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={l.image}
                    alt={l.address}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 eyebrow text-gold">
                    №{String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="mt-6 pb-5 border-b border-obsidian-rule">
                  <div className="eyebrow-muted mb-2">{l.neighborhood}</div>
                  <h3 className="display text-2xl md:text-3xl text-bone leading-[1.08]">
                    {l.address}
                  </h3>
                </div>
                <dl className="pt-5 grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <dt className="eyebrow-muted">Bed</dt>
                    <dd className="display text-xl text-bone mt-1">{l.beds}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow-muted">Bath</dt>
                    <dd className="display text-xl text-bone mt-1">{l.baths}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow-muted">Sqft</dt>
                    <dd className="display text-xl text-bone mt-1">
                      {l.sqft.toLocaleString()}
                    </dd>
                  </div>
                </dl>
                <div className="mt-5 pt-5 border-t border-obsidian-rule flex items-baseline justify-between">
                  <span className="eyebrow-muted">Offered At</span>
                  <span className="display-italic text-2xl md:text-3xl text-gold">
                    ${(l.price / 1000).toFixed(0)}K
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 md:mt-32 pt-6 border-t border-obsidian-rule flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4">
          <span className="eyebrow-muted">End of Portfolio</span>
          <a href="#" className="link-gold display-italic text-xl">
            The Full Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
