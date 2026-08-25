import Link from "next/link";
import {
  Heart,
  Search,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/wishlist/WishlistEmpty.module.css";

const WishlistEmpty = () => {
  return (
    <section className={styles.wishlistEmpty}>
      <div className={styles.wishlistEmptyIcon}>
        <Heart
          size={30}
          strokeWidth={1.6}
        />
      </div>

      <div className={styles.wishlistEmptyBadge}>
        <Sparkles
          size={12}
          strokeWidth={1.8}
        />

        <span>Your Wishlist</span>
      </div>

      <h2 className={styles.wishlistEmptyTitle}>
        No saved coins yet.
      </h2>

      <p className={styles.wishlistEmptyDescription}>
        Save interesting coins while browsing and they will
        appear here for easy access later.
      </p>

      <Link
        href="/coins"
        className={styles.wishlistEmptyAction}
      >
        <Search
          size={16}
          strokeWidth={1.8}
        />

        <span>Browse Coins</span>
      </Link>
    </section>
  );
};

export default WishlistEmpty;