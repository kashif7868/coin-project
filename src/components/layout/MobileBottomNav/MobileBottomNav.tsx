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
  },
];

const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-[9998] border-t border-black/10 bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-[0_-10px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 items-end">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          if (item.isPrimary) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-end"
              >
                <div className="-mt-7 flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-white bg-[#d99a31] text-black shadow-[0_8px_24px_rgba(217,154,49,0.35)] transition-transform duration-200 active:scale-95">
                  <Icon size={27} strokeWidth={1.9} />
                </div>

                <span className="mt-1 text-[10px] font-semibold text-[#8f5c13]">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-[54px] flex-col items-center justify-center gap-1 rounded-xl"
            >
              <Icon
                size={21}
                strokeWidth={isActive ? 2.1 : 1.7}
                className={
                  isActive
                    ? "text-[#c27e1f]"
                    : "text-neutral-500"
                }
              />

              <span
                className={`text-[10px] font-medium ${
                  isActive
                    ? "text-[#a96d18]"
                    : "text-neutral-500"
                }`}
              >
                {item.label}
              </span>

              {isActive && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-[#d99a31]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;