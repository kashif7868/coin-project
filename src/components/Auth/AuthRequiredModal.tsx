"use client";

import Link from "next/link";
import {
  LockKeyhole,
  LogIn,
  UserPlus,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect } from "react";

import { useUIStore } from "@/store/uiStore";

import styles from "../animations/css/Auth/AuthRequiredModal.module.css";

const AuthRequiredModal = () => {
  const shouldReduceMotion = useReducedMotion();

  const isOpen = useUIStore(
    (state) => state.isAuthRequiredOpen
  );

  const close = useUIStore(
    (state) => state.closeAuthRequired
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.2,
          }}
          className={styles.overlay}
        >
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close authentication modal"
            onClick={close}
            className={styles.backdrop}
          />

          {/* MODAL POSITION */}
          <div className={styles.positioner}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 38,
                      scale: 0.98,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
              }
              exit={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 25,
                      scale: 0.98,
                    }
              }
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="auth-required-title"
              aria-describedby="auth-required-description"
              className={styles.modal}
            >
              {/* MOBILE HANDLE */}
              <div className={styles.handle} />

              {/* GOLD GLOW */}
              <div className={styles.glow} />

              {/* CLOSE BUTTON */}
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className={styles.close}
              >
                <X
                  size={17}
                  strokeWidth={1.8}
                />
              </button>

              {/* CONTENT */}
              <div className={styles.content}>
                <div className={styles.iconBox}>
                  <LockKeyhole
                    size={24}
                    strokeWidth={1.7}
                  />
                </div>

                <h2
                  id="auth-required-title"
                  className={styles.title}
                >
                  Sign in to continue
                </h2>

                <p
                  id="auth-required-description"
                  className={styles.description}
                >
                  Wishlist, cart, bidding and buying
                  features are available for registered
                  CoinHeritage members.
                </p>

                <div className={styles.actions}>
                  <Link
                    href="/login"
                    onClick={close}
                    className={styles.primary}
                  >
                    <LogIn
                      size={17}
                      strokeWidth={1.9}
                    />

                    <span>Sign In</span>
                  </Link>

                  <Link
                    href="/login?mode=register"
                    onClick={close}
                    className={styles.secondary}
                  >
                    <UserPlus
                      size={17}
                      strokeWidth={1.8}
                    />

                    <span>Create Account</span>
                  </Link>
                </div>

                <p className={styles.footer}>
                  Your wishlist, cart and marketplace
                  activity will stay linked to your account.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthRequiredModal;