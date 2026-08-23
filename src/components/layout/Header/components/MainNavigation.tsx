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
    <nav className="hidden lg:flex items-center gap-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "text-amber-400"
                : "text-white/85 hover:text-amber-400"
            }`}
          >
            {item.label}

            {isActive && (
              <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-amber-400" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNavigation;