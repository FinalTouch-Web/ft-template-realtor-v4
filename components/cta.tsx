"use client";

import { motion } from "framer-motion";
import { agent } from "@/lib/data";
import { SectionHead } from "./section-head";

export function CTA() {
  return (
    <section id="contact" className="border-t border-obsidian-rule">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-14 py-24 sm:py-28 md:py-40">
        <SectionHead chapter="VI" label="A Private Enquiry">
          If the moment is
          <br />
          <em className="display-italic text-gold">right</em>, write.
        </SectionHead>

        <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: details */}
          <aside className="lg:col-span-4">
            <div className="eyebrow mb-6">Direct</div>
            <div className="space-y-5">
              <Detail label="Telephone" big>
                <a
                  href={`tel:${agent.phone}`}
                  className="display-italic text-3xl text-gold"
                >
                  {agent.phone}
                </a>
              </Detail>
              <Detail label="Correspondence">
                <a
                  href={`mailto:${agent.email}`}
                  className="text-sm text-bone link-bone"
                >
                  {agent.email}
                </a>
              </Detail>
              <Detail label="Office">
                <p className="text-sm text-bone-muted leading-relaxed">
                  RE/MAX First
                  <br />
                  1234 Centre Street SW
                  <br />
                  Calgary, Alberta
                </p>
              </Detail>
              <Detail label="Hours">
                <p className="text-sm text-bone-muted leading-relaxed">
                  By private appointment
                  <br />
                  Evenings &amp; weekends upon request
                </p>
              </Detail>
            </div>
          </aside>

          {/* Right: form — inside a dark bordered card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 border border-obsidian-rule bg-obsidian-900 p-8 md:p-12 lg:p-16"
          >
            <div className="eyebrow mb-10">The Letter</div>
            <form className="space-y-10">
              <Field label="Your Name" placeholder="First and last" />
              <div className="grid sm:grid-cols-2 gap-10">
                <Field label="Email" placeholder="you@domain.com" type="email" />
                <Field label="Telephone" placeholder="(403) 555-0000" type="tel" />
              </div>
              <Field label="Property Address" placeholder="If one is already in mind" />
              <div>
                <label className="eyebrow-muted block mb-3">Notes</label>
                <textarea
                  rows={5}
                  placeholder="A sentence or two is plenty."
                  className="w-full bg-transparent border-b border-obsidian-rule pb-3 pt-1 text-base text-bone placeholder:text-bone-faint focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <div className="pt-6 border-t border-obsidian-rule flex items-center justify-between">
                <p className="eyebrow-muted">Replies within 24 hours.</p>
                <button type="button" className="link-gold display-italic text-2xl">
                  Send &rarr;
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <footer className="mt-32 md:mt-48 pt-8 border-t border-obsidian-rule">
          <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4 mb-6">
            <div className="display text-3xl text-bone">Sarah Mitchell</div>
            <div className="eyebrow-muted">Calgary · Alberta · Canada</div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-3">
            <div className="text-xs text-bone-faint">
              © {new Date().getFullYear()} Sarah Mitchell &nbsp;·&nbsp; RE/MAX First
            </div>
            <div className="eyebrow-muted">
              Set in Cormorant Garamond &amp; Inter
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

function Detail({
  label,
  big,
  children,
}: {
  label: string;
  big?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`pb-5 border-b border-obsidian-rule ${big ? "" : ""}`}>
      <div className="eyebrow-muted mb-2">{label}</div>
      {children}
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="eyebrow-muted block mb-3">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-obsidian-rule pb-3 pt-1 text-base text-bone placeholder:text-bone-faint focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
