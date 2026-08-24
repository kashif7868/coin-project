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

import styles from "@/components/animations/css/Auth/AuthRequiredModal.module.css";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.18,
          }}
          className={styles.authRequiredOverlay}
        >
          <button
            type="button"
            aria-label="Close authentication modal"
            onClick={close}
            className={styles.authRequiredBackdrop}
          />

          <div className={styles.authRequiredPositioner}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                      scale: 0.985,
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
                      y: 16,
                      scale: 0.985,
                    }
              }
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="auth-required-title"
              aria-describedby="auth-required-description"
              className={styles.authRequiredModal}
            >
              <div
                className={
                  styles.authRequiredHandle
                }
              />

              <div
                className={
                  styles.authRequiredGlow
                }
              />

              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className={
                  styles.authRequiredClose
                }
              >
                <X
                  size={16}
                  strokeWidth={1.8}
                />
              </button>

              <div
                className={
                  styles.authRequiredContent
                }
              >
                <div
                  className={
                    styles.authRequiredIconBox
                  }
                >
                  <LockKeyhole
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <h2
                  id="auth-required-title"
                  className={
                    styles.authRequiredTitle
                  }
                >
                  Sign in to continue
                </h2>

                <p
                  id="auth-required-description"
                  className={
                    styles.authRequiredDescription
                  }
                >
                  Sign in to use your wishlist, cart,
                  auctions and marketplace account.
                </p>

                <div
                  className={
                    styles.authRequiredActions
                  }
                >
                  <Link
                    href="/login"
                    onClick={close}
                    className={
                      styles.authRequiredPrimary
                    }
                  >
                    <LogIn
                      size={16}
                      strokeWidth={1.9}
                    />

                    <span>Sign In</span>
                  </Link>

                  <Link
                    href="/login?mode=register"
                    onClick={close}
                    className={
                      styles.authRequiredSecondary
                    }
                  >
                    <UserPlus
                      size={16}
                      strokeWidth={1.8}
                    />

                    <span>Create Account</span>
                  </Link>
                </div>

                <p
                  className={
                    styles.authRequiredFooter
                  }
                >
                  Your saved activity stays linked to
                  your CoinHeritage account.
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