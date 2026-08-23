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
} from "framer-motion";

import { useUIStore } from "@/store/uiStore";

const AuthRequiredModal = () => {
  const isOpen = useUIStore(
    (state) => state.isAuthRequiredOpen
  );

  const close = useUIStore(
    (state) => state.closeAuthRequired
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[10000]
            overflow-y-auto
            bg-black/75
            backdrop-blur-sm
          "
        >
          {/* BACKDROP CLICK AREA */}
          <button
            type="button"
            aria-label="Close authentication modal"
            onClick={close}
            className="fixed inset-0 h-full w-full cursor-default"
          />

          {/* MOBILE-SAFE POSITIONING */}
          <div
            className="
              relative z-10
              flex min-h-full w-full
              items-center justify-center
              px-4 py-6
              sm:px-6 sm:py-8
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                y: 10,
              }}
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-full
                max-w-[420px]
                overflow-hidden
                rounded-[24px]
                border border-white/10
                bg-[#0b0b0b]
                text-white
                shadow-[0_30px_100px_rgba(0,0,0,0.65)]
              "
            >
              {/* GOLD GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute -right-16 -top-16
                  h-40 w-40
                  rounded-full
                  bg-[#d99a31]/10
                  blur-3xl
                "
              />

              {/* CLOSE */}
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="
                  absolute right-4 top-4 z-20
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  text-white/60
                  transition
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <X size={17} />
              </button>

              <div className="relative px-5 py-6 sm:px-7 sm:py-7">
                {/* ICON */}
                <div
                  className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    border border-[#d99a31]/15
                    bg-[#d99a31]/10
                    text-[#d99a31]
                  "
                >
                  <LockKeyhole
                    size={25}
                    strokeWidth={1.7}
                  />
                </div>

                {/* TITLE */}
                <h2
                  className="
                    mt-5
                    font-serif
                    text-[26px]
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-[30px]
                  "
                >
                  Sign in to continue
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[340px]
                    text-[12px]
                    leading-5
                    text-white/45
                    sm:text-[13px]
                  "
                >
                  Wishlist, cart, bidding and buying
                  features are available for registered
                  CoinHeritage members.
                </p>

                {/* BUTTONS */}
                <div className="mt-6 space-y-3">
                  <Link
                    href="/login"
                    onClick={close}
                    className="
                      flex h-12 w-full
                      items-center justify-center
                      gap-2
                      rounded-xl
                      bg-[#d99a31]
                      px-4
                      text-[13px]
                      font-semibold
                      text-black
                      shadow-[0_10px_30px_rgba(217,154,49,0.18)]
                      transition
                      hover:bg-[#e6aa43]
                      active:scale-[0.98]
                    "
                  >
                    <LogIn
                      size={16}
                      strokeWidth={1.9}
                    />
                    Sign In
                  </Link>

                  <Link
                    href="/login?mode=register"
                    onClick={close}
                    className="
                      flex h-12 w-full
                      items-center justify-center
                      gap-2
                      rounded-xl
                      border border-white/10
                      bg-white/[0.035]
                      px-4
                      text-[13px]
                      font-semibold
                      text-white
                      transition
                      hover:border-[#d99a31]/35
                      hover:bg-white/[0.06]
                      active:scale-[0.98]
                    "
                  >
                    <UserPlus
                      size={16}
                      strokeWidth={1.8}
                    />
                    Create Account
                  </Link>
                </div>

                <p
                  className="
                    mt-5
                    text-center
                    text-[9px]
                    leading-4
                    text-white/25
                    sm:text-[10px]
                  "
                >
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