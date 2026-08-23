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
    <div className="hidden items-center gap-5 lg:flex">
      {/* Wishlist */}
      {isAuthenticated ? (
        <Link
          href="/wishlist"
          aria-label="Wishlist"
          className="text-white transition-colors duration-200 hover:text-amber-400"
        >
          <Heart size={22} strokeWidth={1.7} />
        </Link>
      ) : (
        <button
          type="button"
          aria-label="Wishlist"
          onClick={openAuthRequired}
          className="text-white transition-colors duration-200 hover:text-amber-400"
        >
          <Heart size={22} strokeWidth={1.7} />
        </button>
      )}

      {/* Cart */}
      {isAuthenticated ? (
        <Link
          href="/cart"
          aria-label="Cart"
          className="relative text-white transition-colors duration-200 hover:text-amber-400"
        >
          <ShoppingCart size={23} strokeWidth={1.7} />

          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-black">
            0
          </span>
        </Link>
      ) : (
        <button
          type="button"
          aria-label="Cart"
          onClick={openAuthRequired}
          className="relative text-white transition-colors duration-200 hover:text-amber-400"
        >
          <ShoppingCart size={23} strokeWidth={1.7} />

          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-black">
            0
          </span>
        </button>
      )}

      {/* Account / Login */}
      {isAuthenticated ? (
        <Link
          href="/account"
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white transition-all duration-200 hover:border-amber-400/40 hover:bg-white/[0.07]"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
            <CircleUserRound
              size={18}
              strokeWidth={1.8}
            />
          </div>

          <div className="text-left">
            <p className="max-w-[120px] truncate text-[11px] font-semibold">
              {user?.name || "My Account"}
            </p>

            <p className="text-[8px] text-white/40">
              View profile
            </p>
          </div>
        </Link>
      ) : (
        <Link
          href="/login"
          className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-amber-400"
        >
          Login / Sign Up
        </Link>
      )}
    </div>
  );
};

export default HeaderActions;