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

import styles from "@/components/animations/css/header/MobileHeader.module.css";

const mobileLinks = [
  { label: "Coins", href: "/coins", icon: Coins },
  { label: "Auctions", href: "/auctions", icon: Gavel },
  { label: "Collections", href: "/collections", icon: Layers3 },
  { label: "How It Works", href: "/how-it-works", icon: BadgeHelp },
  { label: "About Us", href: "/about-us", icon: Info },
  { label: "Contact", href: "/contact", icon: ContactRound },
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

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

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
    if (isAuthenticated) return;

    setIsMenuOpen(false);
    openAuthRequired();
  };

  const isRouteActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className={styles.mobileActions}>
        {isAuthenticated ? (
          <Link
            href="/wishlist"
            aria-label="Open wishlist"
            className={styles.headerIconButton}
          >
            <Heart size={17} strokeWidth={1.8} />
          </Link>
        ) : (
          <button
            type="button"
            aria-label="Open wishlist"
            onClick={openProtectedFeature}
            className={styles.headerIconButton}
          >
            <Heart size={17} strokeWidth={1.8} />
          </button>
        )}

        {isAuthenticated ? (
          <Link
            href="/cart"
            aria-label="Open cart"
            className={`${styles.headerIconButton} ${styles.cartButton}`}
          >
            <ShoppingCart size={18} strokeWidth={1.8} />
            <span className={styles.cartBadge}>0</span>
          </Link>
        ) : (
          <button
            type="button"
            aria-label="Open cart"
            onClick={openProtectedFeature}
            className={`${styles.headerIconButton} ${styles.cartButton}`}
          >
            <ShoppingCart size={18} strokeWidth={1.8} />
            <span className={styles.cartBadge}>0</span>
          </button>
        )}

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setIsMenuOpen(true)}
          className={styles.menuButton}
        >
          <Menu size={19} strokeWidth={2} />
        </button>
      </div>

      <div
        className={`${styles.drawerRoot} ${
          isMenuOpen ? styles.drawerOpen : styles.drawerClosed
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className={`${styles.backdrop} ${
            isMenuOpen ? styles.backdropOpen : ""
          }`}
        />

        <aside
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className={`${styles.drawer} ${
            isMenuOpen ? styles.drawerVisible : ""
          }`}
        >
          <div className={styles.drawerHeader}>
            <div className={styles.drawerHeaderInner}>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={styles.drawerBrand}
              >
                <div className={styles.drawerLogo}>
                  <span>CH</span>
                </div>

                <div className={styles.brandText}>
                  <p className={styles.brandName}>
                    Coin<span>Heritage</span>
                  </p>

                  <p className={styles.brandTagline}>
                    DISCOVER. COLLECT. OWN HISTORY.
                  </p>
                </div>
              </Link>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className={styles.closeButton}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className={styles.drawerContent}>
            <div className={styles.scannerWrapper}>
              <Link
                href="/scan"
                onClick={() => setIsMenuOpen(false)}
                className={styles.scannerCard}
              >
                <div className={styles.scannerGlow} />

                <div className={styles.scannerIcon}>
                  <ScanLine size={21} strokeWidth={1.9} />
                </div>

                <div className={styles.scannerText}>
                  <div className={styles.scannerTitleRow}>
                    <p>AI Coin Scanner</p>
                    <Sparkles size={12} />
                  </div>

                  <span>
                    Scan a coin and identify it instantly.
                  </span>
                </div>

                <ChevronRight
                  size={17}
                  className={styles.scannerArrow}
                />
              </Link>
            </div>

            <nav className={styles.navigation}>
              <p className={styles.navigationTitle}>Explore</p>

              <div className={styles.navigationLinks}>
                {mobileLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = isRouteActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`${styles.navLink} ${
                        isActive ? styles.navLinkActive : ""
                      }`}
                    >
                      <div
                        className={`${styles.navIcon} ${
                          isActive ? styles.navIconActive : ""
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.7} />
                      </div>

                      <span className={styles.navLabel}>
                        {item.label}
                      </span>

                      <ChevronRight
                        size={16}
                        className={`${styles.navArrow} ${
                          isActive ? styles.navArrowActive : ""
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          <div className={styles.accountFooter}>
            {isAuthenticated ? (
              <>
                <Link
                  href="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className={styles.accountCard}
                >
                  <div className={styles.accountIcon}>
                    <CircleUserRound size={21} />
                  </div>

                  <div className={styles.accountText}>
                    <p>{user?.name || "My Account"}</p>
                    <span>
                      {user?.email || "Orders, listings & profile"}
                    </span>
                  </div>

                  <ChevronRight
                    size={16}
                    className={styles.accountArrow}
                  />
                </Link>

                <Link
                  href="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className={styles.accountButton}
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
                  className={styles.accountCard}
                >
                  <div className={styles.guestIcon}>
                    <CircleUserRound size={21} />
                  </div>

                  <div className={styles.accountText}>
                    <p>My Account</p>
                    <span>Login required</span>
                  </div>

                  <ChevronRight
                    size={16}
                    className={styles.accountArrow}
                  />
                </button>

                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={styles.accountButton}
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