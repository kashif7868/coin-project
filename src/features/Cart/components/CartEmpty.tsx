import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/cart/CartEmpty.module.css";

const CartEmpty = () => {
  return (
    <section className={styles.cartEmpty}>
      <div className={styles.cartEmptyIcon}>
        <ShoppingCart
          size={30}
          strokeWidth={1.6}
        />
      </div>

      <div className={styles.cartEmptyBadge}>
        <Sparkles
          size={12}
          strokeWidth={1.8}
        />

        <span>Your Cart</span>
      </div>

      <h2 className={styles.cartEmptyTitle}>
        Your cart is empty.
      </h2>

      <p className={styles.cartEmptyDescription}>
        Browse collectible coins and add the pieces you want
        to review or purchase.
      </p>

      <Link
        href="/coins"
        className={styles.cartEmptyAction}
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

export default CartEmpty;