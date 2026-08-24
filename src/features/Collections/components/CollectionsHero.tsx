import {
  Archive,
  Layers3,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/collections/CollectionsHero.module.css";

const CollectionsHero = () => {
  return (
    <section className={styles.collectionsHero}>
      <div
        className={
          styles.collectionsHeroGlowLeft
        }
      />

      <div
        className={
          styles.collectionsHeroGlowRight
        }
      />

      <div
        className={
          styles.collectionsHeroContainer
        }
      >
        <div
          className={
            styles.collectionsHeroBadge
          }
        >
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>
            Curated Coin Collections
          </span>
        </div>

        <div
          className={
            styles.collectionsHeroContent
          }
        >
          <div
            className={
              styles.collectionsHeroText
            }
          >
            <h1
              className={
                styles.collectionsHeroTitle
              }
            >
              Explore Coins by
              <span>
                {" "}
                Collection &amp; Theme.
              </span>
            </h1>

            <p
              className={
                styles.collectionsHeroDescription
              }
            >
              Browse curated groups of historical
              coins by country, era, ruler, metal,
              region and collector theme.
            </p>

            <div
              className={
                styles.collectionsHeroStats
              }
            >
              <div
                className={
                  styles.collectionsHeroStat
                }
              >
                <Layers3
                  size={17}
                  strokeWidth={1.7}
                />

                <div>
                  <strong>36</strong>
                  <span>
                    Collections
                  </span>
                </div>
              </div>

              <div
                className={
                  styles.collectionsHeroStat
                }
              >
                <Archive
                  size={17}
                  strokeWidth={1.7}
                />

                <div>
                  <strong>1.2K+</strong>
                  <span>
                    Curated Coins
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              styles.collectionsHeroVisual
            }
          >
            <div
              className={
                styles.collectionsHeroVisualCircle
              }
            >
              <Layers3
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

export default CollectionsHero;