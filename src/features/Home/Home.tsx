import FadeIn from "@/components/animations/FadeIn";

import AuctionSection from "./components/AuctionSection";
import BlogSection from "./components/BlogSection";
import CoinSearchFilters from "./components/CoinSearchFilters";
import FaqSection from "./components/FaqSection";
import FeaturedCoins from "./components/FeaturedCoins";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import MarketplaceStats from "./components/MarketplaceStats";
import Testimonials from "./components/Testimonials";
import TrustSection from "./components/TrustSection";

const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white text-black">
      <HeroSection />

      {/* Search + Stats */}
      <section className="relative z-30 bg-white px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto -mt-8 grid w-full max-w-[1540px] gap-5 lg:-mt-10 lg:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)]">
          <FadeIn y={18}>
            <CoinSearchFilters />
          </FadeIn>

          <FadeIn delay={0.08} y={18}>
            <MarketplaceStats />
          </FadeIn>
        </div>
      </section>

      {/* Main Figma Grid */}
      <section className="bg-white px-4 pb-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1540px] items-start gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)]">
          {/* LEFT */}
          <div className="min-w-0">
            <FadeIn y={20}>
              <HowItWorks />
            </FadeIn>

            <FadeIn delay={0.08} y={20} className="mt-3">
              <FeaturedCoins />
            </FadeIn>

            <FadeIn delay={0.14} y={18} className="mt-2">
              <TrustSection />
            </FadeIn>
          </div>

          {/* RIGHT */}
          <FadeIn delay={0.1} y={20} className="min-w-0">
            <AuctionSection />
          </FadeIn>
        </div>
      </section>

      <FadeIn y={24}>
        <BlogSection />
      </FadeIn>

      <FadeIn y={24}>
        <FaqSection />
      </FadeIn>

      <FadeIn y={24}>
        <Testimonials />
      </FadeIn>
    </main>
  );
};

export default Home;