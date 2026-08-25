import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Coins,
} from "lucide-react";

import styles from "@/components/animations/css/sell/SellCTA.module.css";

const SellCTA = () => {
  return (
    <section className={styles.sellCTA}>
      <div className={styles.sellCTAContent}>
        <div className={styles.sellCTAIcon}>
          <Coins
            size={24}
            strokeWidth={1.7}
          />
        </div>

        <div className={styles.sellCTAText}>
          <p className={styles.sellCTAEyebrow}>
            Ready to Sell?
          </p>

          <h2>
            Start with your coin images.
          </h2>

          <p>
            Use the existing CoinHeritage scanner to identify
            your coin, then continue through the seller listing
            flow.
          </p>
        </div>

        <div className={styles.sellCTAActions}>
          <Link
            href="/scan?mode=sell"
            className={styles.sellCTAPrimary}
          >
            <Camera
              size={16}
              strokeWidth={1.8}
            />

            <span>Scan a Coin</span>
          </Link>

          <Link
            href="/scan?mode=sell&source=upload"
            className={styles.sellCTASecondary}
          >
            <span>Upload Images</span>

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>

      <div className={styles.sellCTAFooter}>
        <span>
          First 10 published coin listings are free.
        </span>

        <span>
          5% platform commission on successful sales.
        </span>
      </div>
    </section>
  );
};

export default SellCTA;