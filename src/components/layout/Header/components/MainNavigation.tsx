"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Coins", href: "/coins" },
  { label: "Auctions", href: "/auctions" },
  { label: "Collections", href: "/collections" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const MainNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="relative z-10 hidden min-w-0 items-center gap-4 lg:flex xl:gap-6 2xl:gap-8">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative whitespace-nowrap text-[13px] font-medium transition-colors duration-200 xl:text-[14px] ${
              isActive
                ? "text-[#E5A12B]"
                : "text-[#E8E8E8] hover:text-[#E5A12B]"
            }`}
          >
            {item.label}

            {isActive && (
              <span className="absolute -bottom-[14px] left-0 h-[2px] w-full rounded-full bg-[#E5A12B]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNavigation;