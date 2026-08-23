"use client";

import Link from "next/link";
import { LockKeyhole, LogIn, UserPlus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
          className="fixed inset-0 z-[10000] flex items-center justify-center px-4"
        >
          <button
            type="button"
            aria-label="Close authentication dialog"
            onClick={close}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0c] text-white shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d99a31]/10 blur-3xl" />

            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-colors hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="relative p-6 sm:p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d99a31]/10 text-[#d99a31]">
                <LockKeyhole size={26} strokeWidth={1.7} />
              </div>

              <h2 className="mt-5 font-serif text-2xl font-semibold">
                Sign in to continue
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Wishlist, cart and buying features are available for registered
                CoinHeritage members.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/login"
                  onClick={close}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#d99a31] text-sm font-semibold text-black transition-colors hover:bg-[#e7aa43]"
                >
                  <LogIn size={17} />
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={close}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white transition-colors hover:border-[#d99a31]/35 hover:bg-white/[0.07]"
                >
                  <UserPlus size={17} />
                  Create Account
                </Link>
              </div>

              <p className="mt-5 text-center text-[10px] leading-4 text-white/30">
                Your cart, wishlist and marketplace activity will be linked to
                your account.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthRequiredModal;