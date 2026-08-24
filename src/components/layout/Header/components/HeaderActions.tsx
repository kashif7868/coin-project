"use client";

import Link from "next/link";
import {
  CircleUserRound,
  Heart,
  ShoppingCart,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/header/HeaderActions.module.css";

const HeaderActions = () => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const user = useAuthStore(
    (state) => state.user
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  return (
    <div className={styles.actions}>
      {/* Wishlist */}
      {isAuthenticated ? (
        <Link
          href="/wishlist"
          aria-label="Wishlist"
          className={styles.iconButton}
        >
          <Heart size={18} strokeWidth={1.7} />
        </Link>
      ) : (
        <button
          type="button"
          aria-label="Wishlist"
          onClick={openAuthRequired}
          className={styles.iconButton}
        >
          <Heart size={18} strokeWidth={1.7} />
        </button>
      )}

      {/* Cart */}
      {isAuthenticated ? (
        <Link
          href="/cart"
          aria-label="Cart"
          className={`${styles.iconButton} ${styles.cartButton}`}
        >
          <ShoppingCart size={19} strokeWidth={1.7} />

          <span className={styles.badge}>
            0
          </span>
        </Link>
      ) : (
        <button
          type="button"
          aria-label="Cart"
          onClick={openAuthRequired}
          className={`${styles.iconButton} ${styles.cartButton}`}
        >
          <ShoppingCart size={19} strokeWidth={1.7} />

          <span className={styles.badge}>
            0
          </span>
        </button>
      )}

      {/* Account / Login */}
      {isAuthenticated ? (
        <Link
          href="/account"
          className={styles.account}
        >
          <div className={styles.accountIcon}>
            <CircleUserRound
              size={18}
              strokeWidth={1.8}
            />
          </div>

          <div className={styles.accountText}>
            <p className={styles.accountName}>
              {user?.name || "My Account"}
            </p>

            <p className={styles.accountSubtext}>
              View profile
            </p>
          </div>
        </Link>
      ) : (
        <Link
          href="/login"
          className={styles.loginButton}
        >
          Login / Sign Up
        </Link>
      )}
    </div>
  );
};

export default HeaderActions;