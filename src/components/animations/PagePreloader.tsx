"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

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
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="
            fixed inset-0 z-[10000]
            flex min-h-dvh w-full min-w-0
            items-center justify-center
            bg-[#050505]
            px-4
            pb-[env(safe-area-inset-bottom)]
            pt-[env(safe-area-inset-top)]
          "
        >
          <div className="flex w-full max-w-[280px] min-w-0 flex-col items-center text-center sm:max-w-[340px]">
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      scale: 0.9,
                      opacity: 0,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1,
                      opacity: 1,
                      rotateY: [0, 180, 360],
                    }
              }
              transition={{
                scale: {
                  duration: 0.28,
                },
                opacity: {
                  duration: 0.28,
                },
                rotateY: {
                  duration: 0.95,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                flex h-14 w-14
                shrink-0
                items-center justify-center
                rounded-full
                border-[4px] border-[#a56d21]
                bg-[radial-gradient(circle_at_35%_30%,#f1c96f,#d99a31_38%,#8f5c19_75%)]
                shadow-[0_0_28px_rgba(217,154,49,0.24)]

                sm:h-16 sm:w-16
                sm:shadow-[0_0_32px_rgba(217,154,49,0.25)]

                lg:h-20 lg:w-20
                lg:border-[5px]
              "
            >
              <div className="absolute inset-[5px] rounded-full border border-black/25 sm:inset-[6px] lg:inset-[7px]" />

              <span className="relative font-serif text-[13px] font-bold text-black/65 sm:text-[15px] lg:text-lg">
                CH
              </span>
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 8,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                delay: 0.1,
                duration: 0.3,
              }}
              className="mt-4 lg:mt-5"
            >
              <p className="font-serif text-[16px] font-semibold text-white sm:text-[18px] lg:text-xl">
                Coin
                <span className="text-[#d99a31]">
                  Heritage
                </span>
              </p>

              <p className="mt-1 whitespace-nowrap text-[6px] uppercase tracking-[0.12em] text-white/35 sm:text-[7px] lg:text-[9px] lg:tracking-[0.18em]">
                Discover. Collect. Own History.
              </p>
            </motion.div>

            <div className="mt-4 h-[3px] w-24 overflow-hidden rounded-full bg-white/10 sm:w-28 lg:mt-6 lg:w-36">
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#d99a31] to-transparent"
              />
            </div>

            <motion.p
              initial={{
                opacity: 0,
              }}
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
              className="mt-3 text-[7px] text-white/30 sm:text-[8px] lg:mt-4 lg:text-[10px]"
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