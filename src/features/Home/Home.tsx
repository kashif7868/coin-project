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

import styles from "@/components/animations/css/home/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />

      <section className={styles.homeSearchSection}>
        <div className={styles.homeSearchGrid}>
          <FadeIn
            y={18}
            className={styles.homeSearchItem}
          >
            <CoinSearchFilters />
          </FadeIn>

          <FadeIn
            delay={0.08}
            y={18}
            className={styles.homeSearchItem}
          >
            <MarketplaceStats />
          </FadeIn>
        </div>
      </section>

      <section className={styles.homeMainSection}>
        <div className={styles.homeMainGrid}>
          <div className={styles.homeLeftColumn}>
            <FadeIn
              y={20}
              className={styles.homeSectionBlock}
            >
              <HowItWorks />
            </FadeIn>

            <FadeIn
              delay={0.08}
              y={20}
              className={styles.homeFeaturedBlock}
            >
              <FeaturedCoins />
            </FadeIn>

            <FadeIn
              delay={0.14}
              y={18}
              className={styles.homeTrustBlock}
            >
              <TrustSection />
            </FadeIn>
          </div>

          <FadeIn
            delay={0.1}
            y={20}
            className={styles.homeAuctionColumn}
          >
            <AuctionSection />
          </FadeIn>
        </div>
      </section>

      <FadeIn
        y={24}
        className={styles.homeFullWidthBlock}
      >
        <BlogSection />
      </FadeIn>

      <FadeIn
        y={24}
        className={styles.homeFullWidthBlock}
      >
        <FaqSection />
      </FadeIn>

      <FadeIn
        y={24}
        className={styles.homeFullWidthBlock}
      >
        <Testimonials />
      </FadeIn>
    </div>
  );
};

export default Home;