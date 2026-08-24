"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./css/preloader/PagePreloader.module.css";

const PagePreloader = () => {
  const shouldReduceMotion = useReducedMotion();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 950);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.3,
          }}
          className={styles.overlay}
        >
          <div className={styles.content}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.9,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                      rotateY: [0, 180, 360],
                    }
              }
              transition={{
                opacity: {
                  duration: 0.25,
                },
                scale: {
                  duration: 0.25,
                },
                rotateY: {
                  duration: 0.95,
                  ease: "easeInOut",
                },
              }}
              className={styles.coin}
            >
              <div className={styles.coinInner} />

              <span className={styles.coinText}>
                CH
              </span>
            </motion.div>

            <div className={styles.brand}>
              <p className={styles.brandName}>
                Coin
                <span className={styles.gold}>
                  Heritage
                </span>
              </p>

              <p className={styles.tagline}>
                Discover. Collect. Own History.
              </p>
            </div>

            <div className={styles.progress}>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={styles.progressBar}
              />
            </div>

            <motion.p
              animate={{
                opacity: shouldReduceMotion
                  ? 0.5
                  : [0.3, 0.75, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: shouldReduceMotion
                  ? 0
                  : Infinity,
              }}
              className={styles.loadingText}
            >
              Loading your collection...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PagePreloader;