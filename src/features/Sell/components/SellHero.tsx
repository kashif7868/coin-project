import Link from "next/link";
import {
  Camera,
  Coins,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/sell/SellHero.module.css";

const SellHero = () => {
  return (
    <section className={styles.sellHero}>
      <div className={styles.sellHeroGlowLeft} />
      <div className={styles.sellHeroGlowRight} />

      <div className={styles.sellHeroContainer}>
        <div className={styles.sellHeroBadge}>
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>Sell on CoinHeritage</span>
        </div>

        <div className={styles.sellHeroContent}>
          <div className={styles.sellHeroText}>
            <h1 className={styles.sellHeroTitle}>
              Turn Your Coins Into
              <span> Marketplace Listings.</span>
            </h1>

            <p className={styles.sellHeroDescription}>
              Scan or upload your coin, review the identified
              details, set your price and quantity, then publish
              the listing to CoinHeritage.
            </p>

            <div className={styles.sellHeroActions}>
              <Link
                href="/scan?mode=sell"
                className={styles.sellHeroPrimaryAction}
              >
                <Camera
                  size={17}
                  strokeWidth={1.8}
                />

                <span>Start Selling</span>
              </Link>

              <Link
                href="/how-it-works"
                className={styles.sellHeroSecondaryAction}
              >
                How It Works
              </Link>
            </div>

            <div className={styles.sellHeroFreeNotice}>
              <Coins
                size={16}
                strokeWidth={1.8}
              />

              <div>
                <strong>
                  First 10 listings are free
                </strong>

                <span>
                  After your free listings are used, choose
                  one of the seller subscription plans.
                </span>
              </div>
            </div>
          </div>

          <div className={styles.sellHeroVisual}>
            <div className={styles.sellHeroCoinCircle}>
              <Coins
                size={54}
                strokeWidth={1.2}
              />
            </div>

            <div className={styles.sellHeroCommissionCard}>
              <span>Platform Commission</span>

              <strong>5%</strong>

              <p>
                Charged only after a successful coin sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellHero;