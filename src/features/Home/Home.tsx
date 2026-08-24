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
    <div className="w-full min-w-0 bg-white text-black">
      <HeroSection />

      {/* Search + Stats */}
      <section className="relative z-30 w-full bg-white px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full min-w-0 max-w-[1540px] gap-4 lg:-mt-4 lg:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)] lg:gap-5">
          <FadeIn
            y={18}
            className="min-w-0"
          >
            <CoinSearchFilters />
          </FadeIn>

          <FadeIn
            delay={0.08}
            y={18}
            className="min-w-0"
          >
            <MarketplaceStats />
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white px-4 pb-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full min-w-0 max-w-[1540px] items-start gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)] lg:gap-5">
          {/* Left Column */}
          <div className="min-w-0">
            <FadeIn
              y={20}
              className="min-w-0"
            >
              <HowItWorks />
            </FadeIn>

            <FadeIn
              delay={0.08}
              y={20}
              className="mt-3 min-w-0"
            >
              <FeaturedCoins />
            </FadeIn>

            <FadeIn
              delay={0.14}
              y={18}
              className="mt-2 min-w-0"
            >
              <TrustSection />
            </FadeIn>
          </div>

          {/* Right Column */}
          <FadeIn
            delay={0.1}
            y={20}
            className="min-w-0"
          >
            <AuctionSection />
          </FadeIn>
        </div>
      </section>

      <FadeIn
        y={24}
        className="w-full min-w-0"
      >
        <BlogSection />
      </FadeIn>

      <FadeIn
        y={24}
        className="w-full min-w-0"
      >
        <FaqSection />
      </FadeIn>

      <FadeIn
        y={24}
        className="w-full min-w-0"
      >
        <Testimonials />
      </FadeIn>
    </div>
  );
};

export default Home;