"use client";

import Link from "next/link";
import {
  CircleUserRound,
  Heart,
  ShoppingCart,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

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
    <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-4">
      {/* Wishlist */}
      {isAuthenticated ? (
        <Link
          href="/wishlist"
          aria-label="Wishlist"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-200 hover:border-amber-400/30 hover:bg-white/[0.07] hover:text-amber-400"
        >
          <Heart size={18} strokeWidth={1.7} />
        </Link>
      ) : (
        <button
          type="button"
          aria-label="Wishlist"
          onClick={openAuthRequired}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-200 hover:border-amber-400/30 hover:bg-white/[0.07] hover:text-amber-400"
        >
          <Heart size={18} strokeWidth={1.7} />
        </button>
      )}

      {/* Cart */}
      {isAuthenticated ? (
        <Link
          href="/cart"
          aria-label="Cart"
          className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-200 hover:border-amber-400/30 hover:bg-white/[0.07] hover:text-amber-400"
        >
          <ShoppingCart size={19} strokeWidth={1.7} />

          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[8px] font-bold text-black ring-2 ring-[#090909]">
            0
          </span>
        </Link>
      ) : (
        <button
          type="button"
          aria-label="Cart"
          onClick={openAuthRequired}
          className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-200 hover:border-amber-400/30 hover:bg-white/[0.07] hover:text-amber-400"
        >
          <ShoppingCart size={19} strokeWidth={1.7} />

          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[8px] font-bold text-black ring-2 ring-[#090909]">
            0
          </span>
        </button>
      )}

      {/* Account / Login */}
      {isAuthenticated ? (
        <Link
          href="/account"
          className="flex max-w-[170px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-white transition-all duration-200 hover:border-amber-400/40 hover:bg-white/[0.07]"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
            <CircleUserRound
              size={18}
              strokeWidth={1.8}
            />
          </div>

          <div className="min-w-0 text-left">
            <p className="truncate text-[10px] font-semibold">
              {user?.name || "My Account"}
            </p>

            <p className="truncate text-[8px] text-white/40">
              View profile
            </p>
          </div>
        </Link>
      ) : (
        <Link
          href="/login"
          className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-amber-500 px-4 text-[12px] font-semibold text-black transition-all duration-200 hover:bg-amber-400 xl:h-10 xl:px-5 xl:text-[13px]"
        >
          Login / Sign Up
        </Link>
      )}
    </div>
  );
};

export default HeaderActions;