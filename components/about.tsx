"use client";

import { motion } from "framer-motion";
import { agent } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="bg-obsidian-900 border-y border-obsidian-rule">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12">
        {/* Text first on mobile AND desktop (image on right) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 py-20 sm:py-24 md:py-32 lg:py-40 lg:border-r border-obsidian-rule order-2 lg:order-1"
        >
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="h-px w-16 bg-gold" />
            <span className="eyebrow">The Office</span>
          </div>

          <h2 className="display-light text-[clamp(2.5rem,6.5vw,6rem)] text-bone leading-[0.95] mb-12 md:mb-16">
            A small practice,
            <br />
            <em className="display-italic text-gold">deliberately so</em>.
          </h2>

          <div className="grid md:grid-cols-12 gap-8 md:gap-14">
            <div className="md:col-span-7 space-y-5 md:space-y-6">
              <p className="prose-body">
                Most brokerages are built to scale. Ours is built to listen. I
                take on a limited number of clients each year &mdash; not because
                it&apos;s exclusive, but because proper work cannot be rushed.
              </p>
              <p className="prose-body">
                What that looks like in practice: I answer the phone. I walk
                every property. I know the neighbourhoods by the feel of them at
                6pm on a Thursday, not by what a database says. When you hire
                me, you hire the broker, not a brand.
              </p>
              <div className="pt-6 border-t border-obsidian-rule">
                <p className="display-italic text-xl md:text-2xl text-gold leading-relaxed">
                  &ldquo;A good broker negotiates price. A great one protects
                  the reason you wanted the house in the first place.&rdquo;
                </p>
              </div>
            </div>
            <aside className="md:col-span-5 md:pl-8 md:border-l border-obsidian-rule">
              <div className="eyebrow mb-6">Particulars</div>
              <dl className="space-y-4 text-sm">
                <Row label="Designation" value="ABR, SRS" />
                <Row label="Brokerage" value="RE/MAX First" />
                <Row label="Licensed" value="Since 2010" />
                <Row label="Focus" value="Inner-city Calgary" />
                <Row label="Typical Range" value="$800K – $4M" />
              </dl>
              <a
                href={`tel:${agent.phone}`}
                className="mt-10 inline-block link-gold display-italic text-xl"
              >
                Direct line &rarr;
              </a>
            </aside>
          </div>
        </motion.div>

        {/* Portrait on RIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5 relative order-1 lg:order-2"
        >
          <img
            src={agent.headshot}
            alt={agent.name}
            className="w-full h-[70vh] lg:h-full object-cover grayscale-[30%] contrast-[0.92]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-bone">
            <div className="flex items-center gap-3 text-gold">
              <span className="w-8 h-px bg-gold" />
              <span className="eyebrow">Portrait · II</span>
            </div>
            <div className="display text-2xl md:text-3xl mt-3">Sarah Mitchell</div>
            <div className="eyebrow-muted mt-1">Broker, RE/MAX First</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-obsidian-rule pb-3">
      <dt className="text-bone">{label}</dt>
      <dd className="text-bone-muted">{value}</dd>
    </div>
  );
}
