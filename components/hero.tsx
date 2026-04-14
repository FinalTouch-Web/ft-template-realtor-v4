"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { agent } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-screen flex flex-col justify-end overflow-hidden pt-28 md:pt-32 pb-14 md:pb-20"
    >
      {/* Cinematic background image */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="absolute inset-0 -top-[10%] -bottom-[10%] -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&q=85"
          alt=""
          className="w-full h-full object-cover grayscale-[60%] brightness-[0.45] contrast-[0.9]"
        />
        <div className="absolute inset-0 bg-obsidian/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian" />
      </motion.div>
      {/* Top right meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-24 md:top-28 right-5 sm:right-8 md:right-14 text-right z-10"
      >
        <div className="eyebrow-muted mb-2">Volume XV</div>
        <div className="display-italic text-lg sm:text-xl md:text-2xl text-bone">
          Calgary, Alberta
        </div>
      </motion.div>

      {/* Main */}
      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <span className="h-px w-12 md:w-20 bg-gold" />
              <span className="eyebrow">An Introduction</span>
            </div>

            <h1 className="display-light text-[clamp(2.5rem,10vw,11rem)] text-bone leading-[0.92]">
              The quiet side
              <br />
              of Calgary
              <br />
              <em className="display-italic text-gold">real estate</em>.
            </h1>

            <div className="mt-10 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-10 items-end">
              <p className="sm:col-span-2 lg:col-span-6 prose-body max-w-md">
                Sarah Mitchell runs a private brokerage for those who value
                judgement over theatrics. Fifteen years, four hundred and fifty
                homes, one number: hers.
              </p>
              <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-5 border-t border-gold/40 pt-5 min-w-0">
                <div>
                  <span className="eyebrow block mb-2">Direct</span>
                  <a
                    href="tel:+14035550567"
                    className="display-italic text-2xl md:text-3xl text-gold"
                  >
                    (403) 555 · 0567
                  </a>
                </div>
                <a
                  href="#listings"
                  className="eyebrow-bone link-bone shrink-0"
                >
                  View Portfolio ↓
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image side — small portrait card on the right */}
          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-4 hidden lg:block self-end"
          >
            <div className="relative">
              <img
                src={agent.headshot}
                alt={agent.name}
                className="w-full aspect-[3/4] object-cover grayscale-[30%] contrast-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 eyebrow text-gold">Plate · I</div>
              <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between">
                <div className="display-italic text-bone text-xl">Sarah Mitchell</div>
                <div className="eyebrow-muted">Broker</div>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>

      {/* Bottom gold hairline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-0 inset-x-0 h-px bg-gold/30"
      />
    </section>
  );
}
