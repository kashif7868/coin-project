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

const AuthRequiredModal = () => {
  const shouldReduceMotion = useReducedMotion();

  const isOpen = useUIStore(
    (state) => state.isAuthRequiredOpen
  );

  const close = useUIStore(
    (state) => state.closeAuthRequired
  );

  useEffect(() => {
    if (!isOpen) return;

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
              : 0.2,
          }}
          className="
            fixed inset-0
            z-[10020]
            bg-black/75
            backdrop-blur-sm
          "
        >
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close authentication modal"
            onClick={close}
            className="absolute inset-0 h-full w-full"
          />

          {/* MOBILE = BOTTOM SHEET
              DESKTOP = CENTER MODAL */}
          <div
            className="
              absolute inset-0
              flex
              items-end
              justify-center

              sm:items-center
              sm:px-5
              sm:py-8
            "
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
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
              exit={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              transition={{
                duration: 0.25,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="auth-required-title"
              aria-describedby="auth-required-description"
              className="
                relative
                z-10
                w-full
                min-w-0
                max-h-[88dvh]
                overflow-y-auto

                rounded-t-[26px]
                border-x
                border-t
                border-white/10

                bg-[#0b0b0b]
                text-white

                shadow-[0_-20px_70px_rgba(0,0,0,0.55)]

                sm:max-w-[420px]
                sm:rounded-[24px]
                sm:border
                sm:shadow-[0_30px_100px_rgba(0,0,0,0.65)]
              "
            >
              {/* MOBILE HANDLE */}
              <div className="flex justify-center pt-2.5 sm:hidden">
                <div className="h-1 w-10 rounded-full bg-white/15" />
              </div>

              {/* GOLD GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
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
                  absolute
                  right-4
                  top-4
                  z-20

                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]

                  text-white/60

                  transition

                  hover:bg-white/[0.08]
                  hover:text-white

                  active:scale-95
                "
              >
                <X size={17} />
              </button>

              {/* CONTENT */}
              <div
                className="
                  relative
                  px-5
                  pb-[max(20px,env(safe-area-inset-bottom))]
                  pt-5

                  sm:px-7
                  sm:pb-7
                  sm:pt-7
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl
                    border
                    border-[#d99a31]/15

                    bg-[#d99a31]/10
                    text-[#d99a31]

                    sm:h-14
                    sm:w-14
                  "
                >
                  <LockKeyhole
                    size={23}
                    strokeWidth={1.7}
                  />
                </div>

                {/* TITLE */}
                <h2
                  id="auth-required-title"
                  className="
                    mt-4
                    font-serif

                    text-[24px]
                    font-semibold
                    leading-tight

                    text-white

                    sm:mt-5
                    sm:text-[30px]
                  "
                >
                  Sign in to continue
                </h2>

                {/* DESCRIPTION */}
                <p
                  id="auth-required-description"
                  className="
                    mt-2.5
                    max-w-[340px]

                    text-[11px]
                    leading-[19px]

                    text-white/45

                    sm:mt-3
                    sm:text-[13px]
                    sm:leading-5
                  "
                >
                  Wishlist, cart, bidding and
                  buying features are available
                  for registered CoinHeritage
                  members.
                </p>

                {/* ACTIONS */}
                <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                  <Link
                    href="/login"
                    onClick={close}
                    className="
                      flex
                      h-11
                      w-full
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      bg-[#d99a31]

                      px-4

                      text-[12px]
                      font-semibold
                      text-black

                      shadow-[0_10px_30px_rgba(217,154,49,0.18)]

                      transition

                      hover:bg-[#e6aa43]

                      active:scale-[0.98]

                      sm:h-12
                      sm:text-[13px]
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
                      flex
                      h-11
                      w-full
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      border
                      border-white/10

                      bg-white/[0.035]

                      px-4

                      text-[12px]
                      font-semibold
                      text-white

                      transition

                      hover:border-[#d99a31]/35
                      hover:bg-white/[0.06]

                      active:scale-[0.98]

                      sm:h-12
                      sm:text-[13px]
                    "
                  >
                    <UserPlus
                      size={16}
                      strokeWidth={1.8}
                    />

                    Create Account
                  </Link>
                </div>

                {/* FOOTER */}
                <p
                  className="
                    mt-4
                    text-center
                    text-[8px]
                    leading-4
                    text-white/25

                    sm:mt-5
                    sm:text-[10px]
                  "
                >
                  Your wishlist, cart and
                  marketplace activity will stay
                  linked to your account.
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