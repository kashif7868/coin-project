"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeHelp,
  ChevronRight,
  CircleUserRound,
  Coins,
  ContactRound,
  Gavel,
  Heart,
  Info,
  Layers3,
  LogIn,
  Menu,
  ScanLine,
  ShoppingCart,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

const mobileLinks = [
  {
    label: "Coins",
    href: "/coins",
    icon: Coins,
  },
  {
    label: "Auctions",
    href: "/auctions",
    icon: Gavel,
  },
  {
    label: "Collections",
    href: "/collections",
    icon: Layers3,
  },
  {
    label: "How It Works",
    href: "/how-it-works",
    icon: BadgeHelp,
  },
  {
    label: "About Us",
    href: "/about-us",
    icon: Info,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: ContactRound,
  },
];

const MobileHeader = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const user = useAuthStore(
    (state) => state.user
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleProtectedAction = (
    callback?: () => void
  ) => {
    if (!isAuthenticated) {
      setIsMenuOpen(false);
      openAuthRequired();
      return;
    }

    callback?.();
  };

  return (
    <>
      {/* MOBILE HEADER ACTIONS */}
      <div className="flex items-center gap-2 lg:hidden">
        {isAuthenticated ? (
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 transition-all duration-200 active:scale-95"
          >
            <Heart size={18} strokeWidth={1.8} />
          </Link>
        ) : (
          <button
            type="button"
            aria-label="Wishlist"
            onClick={() => handleProtectedAction()}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 transition-all duration-200 active:scale-95"
          >
            <Heart size={18} strokeWidth={1.8} />
          </button>
        )}

        {isAuthenticated ? (
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 transition-all duration-200 active:scale-95"
          >
            <ShoppingCart size={18} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#d99a31] px-1 text-[8px] font-bold text-black ring-2 ring-black">
              0
            </span>
          </Link>
        ) : (
          <button
            type="button"
            aria-label="Cart"
            onClick={() => handleProtectedAction()}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 transition-all duration-200 active:scale-95"
          >
            <ShoppingCart size={18} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#d99a31] px-1 text-[8px] font-bold text-black ring-2 ring-black">
              0
            </span>
          </button>
        )}

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d99a31] text-black shadow-[0_5px_18px_rgba(217,154,49,0.25)] transition-all duration-200 active:scale-95"
        >
          <Menu size={20} strokeWidth={2} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[9999] transition ${
          isMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        } lg:hidden`}
      >
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/75 backdrop-blur-[3px] transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-dvh w-[88%] max-w-[360px] flex-col overflow-hidden border-l border-white/10 bg-[#090909] shadow-[-24px_0_70px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* TOP BRAND */}
          <div className="border-b border-white/[0.08] px-5 pb-4 pt-5">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d99a31]/40 bg-gradient-to-br from-[#f0bd5e] via-[#d99a31] to-[#885612] shadow-[0_0_22px_rgba(217,154,49,0.14)]">
                  <span className="font-serif text-[13px] font-bold text-black">
                    CH
                  </span>
                </div>

                <div>
                  <p className="font-serif text-[19px] font-semibold leading-none text-white">
                    Coin
                    <span className="text-[#d99a31]">
                      Heritage
                    </span>
                  </p>

                  <p className="mt-1.5 text-[8px] font-medium tracking-[0.08em] text-white/35">
                    DISCOVER. COLLECT. OWN HISTORY.
                  </p>
                </div>
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-colors active:bg-white/10"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          {/* AI SCANNER CTA */}
          <div className="px-5 pt-5">
            <Link
              href="/scan"
              onClick={() => setIsMenuOpen(false)}
              className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#d99a31]/25 bg-gradient-to-r from-[#1a140b] to-[#0e0d0b] p-4"
            >
              <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#d99a31]/10 blur-2xl" />

              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d99a31] text-black">
                <ScanLine size={22} strokeWidth={1.9} />
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-[13px] font-semibold text-white">
                    AI Coin Scanner
                  </p>

                  <Sparkles
                    size={12}
                    className="text-[#d99a31]"
                  />
                </div>

                <p className="mt-1 text-[10px] leading-4 text-white/45">
                  Scan a coin and identify it instantly.
                </p>
              </div>

              <ChevronRight
                size={18}
                className="relative shrink-0 text-[#d99a31]"
              />
            </Link>
          </div>

          {/* NAVIGATION */}
          <nav className="mt-4 flex-1 overflow-y-auto px-4 pb-5">
            <p className="px-2 pb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/25">
              Explore
            </p>

            <div className="space-y-1">
              {mobileLinks.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex h-[50px] items-center gap-3 rounded-xl px-3 transition-colors ${
                      isActive
                        ? "bg-[#d99a31]/10 text-[#e2a643]"
                        : "text-white/70 active:bg-white/[0.05]"
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isActive
                          ? "bg-[#d99a31]/15 text-[#d99a31]"
                          : "bg-white/[0.04] text-white/55"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <span className="flex-1 text-[13px] font-medium">
                      {item.label}
                    </span>

                    <ChevronRight
                      size={16}
                      className={
                        isActive
                          ? "text-[#d99a31]"
                          : "text-white/20"
                      }
                    />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* ACCOUNT */}
          <div className="border-t border-white/[0.08] bg-[#070707] p-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className="mb-3 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d99a31]/10 text-[#d99a31]">
                    <CircleUserRound size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] font-semibold text-white">
                      {user?.name || "My Account"}
                    </p>

                    <p className="mt-0.5 truncate text-[9px] text-white/35">
                      {user?.email || "Orders, listings & profile"}
                    </p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-white/25"
                  />
                </Link>

                <Link
                  href="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#d99a31] text-[13px] font-semibold text-black shadow-[0_8px_24px_rgba(217,154,49,0.16)] transition active:scale-[0.98]"
                >
                  <CircleUserRound size={16} />
                  Open Account
                </Link>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() =>
                    handleProtectedAction()
                  }
                  className="mb-3 flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] text-white/65">
                    <CircleUserRound size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold text-white">
                      My Account
                    </p>

                    <p className="mt-0.5 text-[9px] text-white/35">
                      Login required
                    </p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-white/25"
                  />
                </button>

                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#d99a31] text-[13px] font-semibold text-black shadow-[0_8px_24px_rgba(217,154,49,0.16)] transition active:scale-[0.98]"
                >
                  <LogIn size={16} strokeWidth={1.9} />
                  Login / Sign Up
                </Link>
              </>
            )}
          </div>
        </aside>
      </div>
    </>
  );
};

export default MobileHeader;