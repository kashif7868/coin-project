import {
  Clock3,
  Gavel,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/auctions/AuctionsHero.module.css";

const AuctionsHero = () => {
  return (
    <section className={styles.auctionsHero}>
      <div className={styles.auctionsHeroGlowLeft} />
      <div className={styles.auctionsHeroGlowRight} />

      <div className={styles.auctionsHeroContainer}>
        <div className={styles.auctionsHeroBadge}>
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>Live Collectible Auctions</span>
        </div>

        <div className={styles.auctionsHeroContent}>
          <div className={styles.auctionsHeroText}>
            <h1 className={styles.auctionsHeroTitle}>
              Bid on Remarkable Coins.
              <span> Own the Winning Piece.</span>
            </h1>

            <p className={styles.auctionsHeroDescription}>
              Explore active and upcoming coin auctions
              featuring collectible pieces from different
              countries, eras and collections.
            </p>

            <div className={styles.auctionsHeroStats}>
              <div className={styles.auctionsHeroStat}>
                <Gavel size={17} strokeWidth={1.7} />

                <div>
                  <strong>24</strong>
                  <span>Live Auctions</span>
                </div>
              </div>

              <div className={styles.auctionsHeroStat}>
                <Clock3 size={17} strokeWidth={1.7} />

                <div>
                  <strong>12</strong>
                  <span>Ending Today</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.auctionsHeroVisual}>
            <div className={styles.auctionsHeroVisualCircle}>
              <Gavel
                size={38}
                strokeWidth={1.35}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionsHero;