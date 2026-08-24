"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/components/animations/css/header/MainNavigation.module.css";

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
    <nav className={styles.nav}>
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`${styles.link} ${
              isActive ? styles.active : ""
            }`}
          >
            {item.label}

            {isActive && (
              <span className={styles.indicator} />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNavigation;