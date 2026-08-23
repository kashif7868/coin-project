"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PagePreloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#060606]"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateY: [0, 180, 360],
              }}
              transition={{
                scale: {
                  duration: 0.35,
                },
                opacity: {
                  duration: 0.35,
                },
                rotateY: {
                  duration: 1.2,
                  ease: "easeInOut",
                },
              }}
              className="relative flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-[#a56d21] bg-[radial-gradient(circle_at_35%_30%,#f1c96f,#d99a31_38%,#8f5c19_75%)] shadow-[0_0_45px_rgba(217,154,49,0.28)]"
            >
              <div className="absolute inset-[7px] rounded-full border border-black/25" />

              <span className="relative font-serif text-lg font-bold text-black/65">
                CH
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mt-5 text-center"
            >
              <p className="font-serif text-xl font-semibold text-white">
                Coin
                <span className="text-[#d99a31]">
                  Heritage
                </span>
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/35">
                Discover. Collect. Own History.
              </p>
            </motion.div>

            <div className="mt-6 h-[3px] w-36 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#d99a31] to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              className="mt-4 text-[10px] text-white/35"
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