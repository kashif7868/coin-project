import Image from "next/image";
import {
  CalendarDays,
  Coins,
  Globe2,
  Layers3,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/collectionDetails/CollectionHero.module.css";

interface CollectionHeroProps {
  collectionId: string;
}

const CollectionHero = ({
  collectionId,
}: CollectionHeroProps) => {
  return (
    <section className={styles.collectionHero}>
      <div className={styles.collectionHeroGlowLeft} />
      <div className={styles.collectionHeroGlowRight} />

      <div className={styles.collectionHeroContainer}>
        <div className={styles.collectionHeroContent}>
          <div className={styles.collectionHeroText}>
            <div className={styles.collectionHeroBadge}>
              <Sparkles
                size={13}
                strokeWidth={1.8}
              />

              <span>Curated Collection</span>
            </div>

            <p className={styles.collectionHeroCategory}>
              Empire Collection
            </p>

            <h1 className={styles.collectionHeroTitle}>
              British India
              <span> Coin Collection</span>
            </h1>

            <p className={styles.collectionHeroDescription}>
              Explore a curated selection of coins from
              British India, spanning silver rupees,
              fractional denominations, royal portrait
              issues and historically significant mint
              varieties.
            </p>

            <div className={styles.collectionHeroStats}>
              <div className={styles.collectionHeroStat}>
                <Coins
                  size={17}
                  strokeWidth={1.7}
                />

                <div>
                  <strong>84</strong>
                  <span>Coins</span>
                </div>
              </div>

              <div className={styles.collectionHeroStat}>
                <CalendarDays
                  size={17}
                  strokeWidth={1.7}
                />

                <div>
                  <strong>1835–1947</strong>
                  <span>Period</span>
                </div>
              </div>

              <div className={styles.collectionHeroStat}>
                <Globe2
                  size={17}
                  strokeWidth={1.7}
                />

                <div>
                  <strong>South Asia</strong>
                  <span>Region</span>
                </div>
              </div>

              <div className={styles.collectionHeroStat}>
                <Layers3
                  size={17}
                  strokeWidth={1.7}
                />

                <div>
                  <strong>Silver</strong>
                  <span>Primary Metal</span>
                </div>
              </div>
            </div>

            <span className={styles.collectionHeroReference}>
              Collection: {collectionId}
            </span>
          </div>

          <div className={styles.collectionHeroVisual}>
            <div className={styles.collectionHeroVisualGlow} />

            <div className={styles.collectionHeroImageWrap}>
              <Image
                src="/images/coins/coin-1.jpg"
                alt="Representative British India coin"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 360px"
                className={styles.collectionHeroImage}
              />
            </div>

            <div className={styles.collectionHeroVisualBadge}>
              <Coins
                size={14}
                strokeWidth={1.8}
              />

              <span>
                Historical Collection
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionHero;