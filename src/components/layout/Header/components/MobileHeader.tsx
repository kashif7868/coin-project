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

  const user = useAuthStore((state) => state.user);

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  /* ---------------------------------------------------------
     BODY SCROLL LOCK
     --------------------------------------------------------- */

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  /* ---------------------------------------------------------
     CLOSE DRAWER AFTER ROUTE CHANGE
     --------------------------------------------------------- */

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  /* ---------------------------------------------------------
     ESC KEY
     --------------------------------------------------------- */

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const openProtectedFeature = () => {
    if (isAuthenticated) {
      return;
    }

    setIsMenuOpen(false);
    openAuthRequired();
  };

  const isRouteActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* =====================================================
          MOBILE HEADER ACTIONS
          ===================================================== */}

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
        {isAuthenticated ? (
          <Link
            href="/wishlist"
            aria-label="Open wishlist"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 transition duration-200 hover:border-[#d99a31]/30 hover:text-[#d99a31] active:scale-95"
          >
            <Heart size={17} strokeWidth={1.8} />
          </Link>
        ) : (
          <button
            type="button"
            aria-label="Open wishlist"
            onClick={openProtectedFeature}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 transition duration-200 hover:border-[#d99a31]/30 hover:text-[#d99a31] active:scale-95"
          >
            <Heart size={17} strokeWidth={1.8} />
          </button>
        )}

        {isAuthenticated ? (
          <Link
            href="/cart"
            aria-label="Open cart"
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 transition duration-200 hover:border-[#d99a31]/30 hover:text-[#d99a31] active:scale-95"
          >
            <ShoppingCart size={18} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#d99a31] px-1 text-[8px] font-bold leading-none text-black ring-2 ring-[#090909]">
              0
            </span>
          </Link>
        ) : (
          <button
            type="button"
            aria-label="Open cart"
            onClick={openProtectedFeature}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80 transition duration-200 hover:border-[#d99a31]/30 hover:text-[#d99a31] active:scale-95"
          >
            <ShoppingCart size={18} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#d99a31] px-1 text-[8px] font-bold leading-none text-black ring-2 ring-[#090909]">
              0
            </span>
          </button>
        )}

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setIsMenuOpen(true)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d99a31] text-black shadow-[0_5px_18px_rgba(217,154,49,0.25)] transition duration-200 hover:bg-[#e4a641] active:scale-95"
        >
          <Menu size={19} strokeWidth={2} />
        </button>
      </div>

      {/* =====================================================
          MOBILE DRAWER
          ===================================================== */}

      <div
        className={`fixed inset-0 z-[9999] lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        {/* Backdrop */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 h-full w-full bg-black/75 backdrop-blur-[3px] transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}

        <aside
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-dvh w-[min(88vw,360px)] min-w-0 flex-col overflow-hidden border-l border-white/10 bg-[#090909] shadow-[-24px_0_70px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* BRAND */}

          <div className="shrink-0 border-b border-white/[0.08] px-4 pb-4 pt-[max(16px,env(safe-area-inset-top))] sm:px-5">
            <div className="flex min-w-0 items-center justify-between gap-3">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex min-w-0 items-center gap-2.5 sm:gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d99a31]/40 bg-gradient-to-br from-[#f0bd5e] via-[#d99a31] to-[#885612] shadow-[0_0_22px_rgba(217,154,49,0.14)] sm:h-11 sm:w-11">
                  <span className="font-serif text-[12px] font-bold text-black sm:text-[13px]">
                    CH
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="whitespace-nowrap font-serif text-[17px] font-semibold leading-none text-white sm:text-[19px]">
                    Coin
                    <span className="text-[#d99a31]">
                      Heritage
                    </span>
                  </p>

                  <p className="mt-1.5 hidden whitespace-nowrap text-[7px] font-medium tracking-[0.08em] text-white/35 min-[340px]:block sm:text-[8px]">
                    DISCOVER. COLLECT. OWN HISTORY.
                  </p>
                </div>
              </Link>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/[0.08] hover:text-white active:scale-95 sm:h-10 sm:w-10"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* SCROLLABLE CONTENT */}

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {/* AI SCANNER */}

            <div className="px-4 pt-4 sm:px-5 sm:pt-5">
              <Link
                href="/scan"
                onClick={() => setIsMenuOpen(false)}
                className="relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-[#d99a31]/25 bg-gradient-to-r from-[#1a140b] to-[#0e0d0b] p-3.5 sm:gap-4 sm:p-4"
              >
                <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#d99a31]/10 blur-2xl" />

                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d99a31] text-black sm:h-11 sm:w-11">
                  <ScanLine
                    size={21}
                    strokeWidth={1.9}
                  />
                </div>

                <div className="relative min-w-0 flex-1">
                  <div className="flex min-w-0 items-center gap-1.5">
                    <p className="truncate text-[12px] font-semibold text-white sm:text-[13px]">
                      AI Coin Scanner
                    </p>

                    <Sparkles
                      size={12}
                      className="shrink-0 text-[#d99a31]"
                    />
                  </div>

                  <p className="mt-1 text-[9px] leading-4 text-white/45 sm:text-[10px]">
                    Scan a coin and identify it instantly.
                  </p>
                </div>

                <ChevronRight
                  size={17}
                  className="relative shrink-0 text-[#d99a31]"
                />
              </Link>
            </div>

            {/* NAVIGATION */}

            <nav className="px-3 pb-4 pt-4 sm:px-4">
              <p className="px-2 pb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/25">
                Explore
              </p>

              <div className="space-y-1">
                {mobileLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = isRouteActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={`flex min-h-12 min-w-0 items-center gap-3 rounded-xl px-3 transition-colors ${
                        isActive
                          ? "bg-[#d99a31]/10 text-[#e2a643]"
                          : "text-white/70 hover:bg-white/[0.04] hover:text-white active:bg-white/[0.06]"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          isActive
                            ? "bg-[#d99a31]/15 text-[#d99a31]"
                            : "bg-white/[0.04] text-white/55"
                        }`}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                        />
                      </div>

                      <span className="min-w-0 flex-1 truncate text-[13px] font-medium">
                        {item.label}
                      </span>

                      <ChevronRight
                        size={16}
                        className={
                          isActive
                            ? "shrink-0 text-[#d99a31]"
                            : "shrink-0 text-white/20"
                        }
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* ACCOUNT FOOTER */}

          <div className="shrink-0 border-t border-white/[0.08] bg-[#070707] px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className="mb-3 flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 transition hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d99a31]/10 text-[#d99a31]">
                    <CircleUserRound size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] font-semibold text-white">
                      {user?.name || "My Account"}
                    </p>

                    <p className="mt-0.5 truncate text-[9px] text-white/35">
                      {user?.email ||
                        "Orders, listings & profile"}
                    </p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="shrink-0 text-white/25"
                  />
                </Link>

                <Link
                  href="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#d99a31] px-4 text-[13px] font-semibold text-black shadow-[0_8px_24px_rgba(217,154,49,0.16)] transition hover:bg-[#e4a641] active:scale-[0.98]"
                >
                  <CircleUserRound size={16} />
                  Open Account
                </Link>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={openProtectedFeature}
                  className="mb-3 flex w-full min-w-0 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-left transition hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/65">
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
                    className="shrink-0 text-white/25"
                  />
                </button>

                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#d99a31] px-4 text-[13px] font-semibold text-black shadow-[0_8px_24px_rgba(217,154,49,0.16)] transition hover:bg-[#e4a641] active:scale-[0.98]"
                >
                  <LogIn
                    size={16}
                    strokeWidth={1.9}
                  />
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