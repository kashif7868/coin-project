import {
  Heart,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/wishlist/WishlistHeader.module.css";

const WishlistHeader = () => {
  return (
    <section className={styles.wishlistHeader}>
      <div className={styles.wishlistHeaderGlowLeft} />
      <div className={styles.wishlistHeaderGlowRight} />

      <div className={styles.wishlistHeaderContainer}>
        <div className={styles.wishlistHeaderBadge}>
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>Your Saved Coins</span>
        </div>

        <div className={styles.wishlistHeaderContent}>
          <div>
            <h1>
              Your
              <span> Wishlist.</span>
            </h1>

            <p>
              Keep track of collectible coins you want
              to revisit, compare or buy later.
            </p>
          </div>

          <div className={styles.wishlistHeaderIcon}>
            <Heart
              size={28}
              strokeWidth={1.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistHeader;