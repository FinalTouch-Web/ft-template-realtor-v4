"use client";

import { soldStream } from "@/lib/data";

export function SoldTicker() {
  const items = [...soldStream, ...soldStream, ...soldStream];
  return (
    <section className="border-y border-obsidian-rule bg-obsidian-900 overflow-hidden">
      <div className="flex items-stretch">
        <div className="shrink-0 flex items-center px-5 sm:px-8 border-r border-obsidian-rule">
          <span className="eyebrow text-gold">Of Late</span>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="flex items-center py-5 whitespace-nowrap animate-[ticker_75s_linear_infinite]">
            {items.map((it, i) => (
              <div
                key={i}
                className="flex items-baseline gap-4 px-10 border-r border-obsidian-rule/70 shrink-0"
              >
                <span className="display text-xl text-bone">{it.price}</span>
                <span className="text-sm text-bone-muted">{it.address}</span>
                <span className="eyebrow-muted">{it.hood}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
      `}</style>
    </section>
  );
}
