"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import WishlistGrid from "./components/WishlistGrid";
import WishlistHeader from "./components/WishlistHeader";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/wishlist/WishlistPage.module.css";

const WishlistPage = () => {
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
    <main className={styles.wishlistPage}>
      <WishlistHeader />

      <section className={styles.wishlistContent}>
        <div className={styles.wishlistContainer}>
          <WishlistGrid />
        </div>
      </section>
    </main>
  );
};

export default WishlistPage;