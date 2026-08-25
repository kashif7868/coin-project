import {
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/cart/CartHeader.module.css";

const CartHeader = () => {
  return (
    <section className={styles.cartHeader}>
      <div className={styles.cartHeaderGlowLeft} />
      <div className={styles.cartHeaderGlowRight} />

      <div className={styles.cartHeaderContainer}>
        <div className={styles.cartHeaderBadge}>
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>Your Shopping Cart</span>
        </div>

        <div className={styles.cartHeaderContent}>
          <div>
            <h1>
              Your
              <span> Cart.</span>
            </h1>

            <p>
              Review selected coins, update quantities and
              continue to checkout when you are ready.
            </p>
          </div>

          <div className={styles.cartHeaderIcon}>
            <ShoppingCart
              size={28}
              strokeWidth={1.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartHeader;