"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import CartHeader from "./components/CartHeader";
import CartItems from "./components/CartItems";
import CartSummary from "./components/CartSummary";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/cart/CartPage.module.css";

const CartPage = () => {
  const router = useRouter();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }

    openAuthRequired();
    router.replace("/");
  }, [
    isAuthenticated,
    openAuthRequired,
    router,
  ]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className={styles.cartPage}>
      <CartHeader />

      <section className={styles.cartContent}>
        <div className={styles.cartContainer}>
          <div className={styles.cartLayout}>
            <section className={styles.cartItemsColumn}>
              <CartItems />
            </section>

            <aside className={styles.cartSummaryColumn}>
              <CartSummary />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;