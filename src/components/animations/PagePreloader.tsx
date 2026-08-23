"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PagePreloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="
            fixed inset-0 z-[10000]
            flex items-center justify-center
            bg-[#050505]
            px-4
          "
        >
          <div className="flex w-full max-w-[320px] flex-col items-center text-center sm:max-w-[380px]">
            <motion.div
              initial={{
                scale: 0.88,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateY: [0, 180, 360],
              }}
              transition={{
                scale: {
                  duration: 0.3,
                },
                opacity: {
                  duration: 0.3,
                },
                rotateY: {
                  duration: 1.05,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                flex h-16 w-16
                items-center justify-center
                rounded-full
                border-[4px] border-[#a56d21]
                bg-[radial-gradient(circle_at_35%_30%,#f1c96f,#d99a31_38%,#8f5c19_75%)]
                shadow-[0_0_32px_rgba(217,154,49,0.25)]

                sm:h-20 sm:w-20 sm:border-[5px]
              "
            >
              <div className="absolute inset-[6px] rounded-full border border-black/25 sm:inset-[7px]" />

              <span className="relative font-serif text-[15px] font-bold text-black/65 sm:text-lg">
                CH
              </span>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.12,
                duration: 0.35,
              }}
              className="mt-4 sm:mt-5"
            >
              <p className="font-serif text-[18px] font-semibold text-white sm:text-xl">
                Coin
                <span className="text-[#d99a31]">
                  Heritage
                </span>
              </p>

              <p
                className="
                  mt-1
                  text-[7px]
                  uppercase
                  tracking-[0.13em]
                  text-white/35

                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
              >
                Discover. Collect. Own History.
              </p>
            </motion.div>

            <div
              className="
                mt-5
                h-[3px]
                w-28
                overflow-hidden
                rounded-full
                bg-white/10

                sm:mt-6
                sm:w-36
              "
            >
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 0.85,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#d99a31] to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.75, 0.3],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
              }}
              className="mt-3 text-[8px] text-white/30 sm:mt-4 sm:text-[10px]"
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