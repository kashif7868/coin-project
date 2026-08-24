import {
  Coins,
  Search,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/coins/CoinsHero.module.css";

const CoinsHero = () => {
  return (
    <section className={styles.coinsHero}>
      <div className={styles.coinsHeroGlowLeft} />
      <div className={styles.coinsHeroGlowRight} />

      <div className={styles.coinsHeroContainer}>
        <div className={styles.coinsHeroBadge}>
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>
            Explore Numismatic History
          </span>
        </div>

        <div className={styles.coinsHeroContent}>
          <div className={styles.coinsHeroText}>
            <h1 className={styles.coinsHeroTitle}>
              Discover Coins From
              <span> Around the World.</span>
            </h1>

            <p
              className={
                styles.coinsHeroDescription
              }
            >
              Browse historical and collectible coins
              across countries, periods, metals and
              conditions.
            </p>
          </div>

          <div className={styles.coinsHeroVisual}>
            <div
              className={
                styles.coinsHeroIconCircle
              }
            >
              <Coins
                size={34}
                strokeWidth={1.4}
              />
            </div>
          </div>
        </div>

        <div className={styles.coinsHeroSearch}>
          <Search
            size={18}
            strokeWidth={1.8}
            className={
              styles.coinsHeroSearchIcon
            }
          />

          <input
            type="search"
            placeholder="Search by coin name, country, year, ruler..."
            aria-label="Search coins"
            className={
              styles.coinsHeroSearchInput
            }
          />

          <button
            type="button"
            className={
              styles.coinsHeroSearchButton
            }
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoinsHero;