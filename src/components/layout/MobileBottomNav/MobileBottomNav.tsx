"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CircleUserRound,
  Coins,
  Gavel,
  Home,
  ScanLine,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Coins",
    href: "/coins",
    icon: Coins,
  },
  {
    label: "Scan",
    href: "/scan",
    icon: ScanLine,
    isPrimary: true,
  },
  {
    label: "Auctions",
    href: "/auctions",
    icon: Gavel,
  },
  {
    label: "Account",
    href: "/account",
    icon: CircleUserRound,
    protected: true,
  },
];

const MobileBottomNav = () => {
  const pathname = usePathname();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="
        fixed inset-x-0 bottom-0 z-[9998]
        border-t border-black/10
        bg-white/95
        px-2
        pt-2
        pb-[max(8px,env(safe-area-inset-bottom))]
        shadow-[0_-10px_30px_rgba(0,0,0,0.10)]
        backdrop-blur-xl
        lg:hidden
      "
    >
      <div className="mx-auto grid w-full max-w-md grid-cols-5 items-end">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = isActiveRoute(item.href);

          if (item.isPrimary) {
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="relative flex min-w-0 flex-col items-center justify-end"
              >
                <div
                  className={`
                    -mt-6
                    flex h-14 w-14
                    items-center justify-center
                    rounded-full
                    border-[4px] border-white
                    bg-[#d99a31]
                    text-black
                    shadow-[0_8px_24px_rgba(217,154,49,0.35)]
                    transition-all duration-200
                    active:scale-95
                    sm:-mt-7
                    sm:h-16 sm:w-16
                    sm:border-[5px]
                    ${
                      isActive
                        ? "ring-2 ring-[#d99a31]/30"
                        : ""
                    }
                  `}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.9}
                    className="sm:h-[27px] sm:w-[27px]"
                  />
                </div>

                <span className="mt-1 truncate text-[9px] font-semibold text-[#8f5c13] sm:text-[10px]">
                  {item.label}
                </span>
              </Link>
            );
          }

          if (item.protected && !isAuthenticated) {
            return (
              <button
                key={item.href}
                type="button"
                onClick={openAuthRequired}
                aria-label={`Open ${item.label}`}
                className="relative flex min-h-[52px] min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 transition active:bg-neutral-100 sm:min-h-[54px]"
              >
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className="text-neutral-500 sm:h-[21px] sm:w-[21px]"
                />

                <span className="max-w-full truncate text-[9px] font-medium text-neutral-500 sm:text-[10px]">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="relative flex min-h-[52px] min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 transition active:bg-neutral-100 sm:min-h-[54px]"
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.1 : 1.7}
                className={
                  isActive
                    ? "text-[#c27e1f] sm:h-[21px] sm:w-[21px]"
                    : "text-neutral-500 sm:h-[21px] sm:w-[21px]"
                }
              />

              <span
                className={`max-w-full truncate text-[9px] font-medium sm:text-[10px] ${
                  isActive
                    ? "text-[#a96d18]"
                    : "text-neutral-500"
                }`}
              >
                {item.label}
              </span>

              {isActive && (
                <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-[#d99a31]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;