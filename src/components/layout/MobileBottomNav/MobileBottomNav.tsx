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

import styles from "@/components/animations/css/header/MobileBottomNav.module.css";

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
      className={styles.nav}
    >
      <div className={styles.inner}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = isActiveRoute(item.href);

          if (item.isPrimary) {
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={styles.primaryItem}
              >
                <div
                  className={`${styles.primaryButton} ${
                    isActive ? styles.primaryActive : ""
                  }`}
                >
                  <Icon size={24} strokeWidth={1.9} />
                </div>

                <span className={styles.primaryLabel}>
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
                className={styles.item}
              >
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className={styles.icon}
                />

                <span className={styles.label}>
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
              className={`${styles.item} ${
                isActive ? styles.activeItem : ""
              }`}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.1 : 1.7}
                className={`${styles.icon} ${
                  isActive ? styles.activeIcon : ""
                }`}
              />

              <span
                className={`${styles.label} ${
                  isActive ? styles.activeLabel : ""
                }`}
              >
                {item.label}
              </span>

              {isActive && (
                <span className={styles.activeDot} />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;