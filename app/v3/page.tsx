import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SoldTicker } from "@/components/sold-ticker";
import { Listings } from "@/components/listings";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Neighbourhoods } from "@/components/neighbourhoods";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function V3Page() {
  return (
    <div className="theme-v3 min-h-screen">
      <main>
        <Nav />
        <Hero />
        <SoldTicker />
        <Listings />
        <About />
        <Stats />
        <Neighbourhoods />
        <Testimonials />
        <CTA fontCredit="Plus Jakarta Sans" />
      </main>
    </div>
  );
}
