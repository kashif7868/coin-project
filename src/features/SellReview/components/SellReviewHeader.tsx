import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/sellReview/SellReviewHeader.module.css";

const SellReviewHeader = () => {
  return (
    <section className={styles.sellReviewHeader}>
      <div className={styles.sellReviewHeaderGlowLeft} />
      <div className={styles.sellReviewHeaderGlowRight} />

      <div className={styles.sellReviewHeaderContainer}>
        <div className={styles.sellReviewHeaderBadge}>
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>Seller Review</span>
        </div>

        <div className={styles.sellReviewHeaderContent}>
          <div>
            <h1>
              Review Your
              <span> Coin Details.</span>
            </h1>

            <p>
              Check the scanned coin images and verify the
              identified information before continuing to
              pricing and quantity.
            </p>
          </div>

          <div className={styles.sellReviewHeaderIcon}>
            <CheckCircle2
              size={28}
              strokeWidth={1.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellReviewHeader;