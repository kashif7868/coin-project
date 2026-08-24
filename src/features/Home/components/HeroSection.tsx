"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import {
  Camera,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/home/HeroSection.module.css";

const HeroSection = () => {
  const router = useRouter();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const handleProtectedNavigation = (
    destination: string
  ) => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    router.push(destination);
  };

  const handleScanCoin = () => {
    handleProtectedNavigation("/scan");
  };

  const handleUploadCoin = () => {
    handleProtectedNavigation(
      "/scan?mode=upload"
    );
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroDesktopBackground}>
        <Image
          src="/images/home/hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBackgroundImage}
        />

        <div
          className={
            styles.heroBackgroundOverlayHorizontal
          }
        />

        <div
          className={
            styles.heroBackgroundOverlayVertical
          }
        />
      </div>

      <div className={styles.heroMobileBackground} />

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div
              className={
                styles.heroIdentificationBadge
              }
            >
              <Sparkles
                size={12}
                strokeWidth={1.8}
                className={
                  styles.heroIdentificationBadgeIcon
                }
              />

              <span>
                Instant Coin Identification
              </span>
            </div>

            <h1 className={styles.heroTitle}>
              Discover Rare Coins.
              <br />
              Own a Piece of{" "}
              <span>History.</span>
            </h1>

            <p className={styles.heroDescription}>
              Scan or upload a coin to discover its
              identity, history, details and estimated
              collectible value.
            </p>

            <div className={styles.heroActions}>
              <button
                type="button"
                onClick={handleScanCoin}
                className={styles.heroPrimaryAction}
                aria-label="Scan a coin"
              >
                <Camera
                  size={16}
                  strokeWidth={1.8}
                />

                <span>Scan a Coin</span>
              </button>

              <button
                type="button"
                onClick={handleUploadCoin}
                className={styles.heroSecondaryAction}
                aria-label="Upload coin images"
              >
                <Upload
                  size={16}
                  strokeWidth={1.8}
                />

                <span>Upload Images</span>
              </button>
            </div>

            <div className={styles.heroTrustGrid}>
              <TrustItem
                icon={
                  <Sparkles size={14} />
                }
                title="Smart Identification"
                subtitle="Fast Results"
              />

              <TrustItem
                icon={
                  <ShieldCheck size={14} />
                }
                title="Trusted Data"
                subtitle="Verified Sources"
              />

              <TrustItem
                icon={
                  <LockKeyhole size={14} />
                }
                title="Secure & Safe"
                subtitle="Protected Access"
              />

              <TrustItem
                icon={
                  <Globe2 size={14} />
                }
                title="Worldwide"
                subtitle="Collector Network"
              />
            </div>
          </div>

          <div className={styles.heroCoinArt}>
            <div className={styles.heroCoinGlow} />

            <div
              className={
                styles.heroCoinImageWrapper
              }
            >
              <Image
                src="/images/home/hero-coins.webp"
                alt="Historical collectible coins"
                fill
                priority
                sizes="(min-width: 1280px) 32vw, 0px"
                className={styles.heroCoinImage}
              />
            </div>
          </div>

          <div
            className={
              styles.heroIdentifierColumn
            }
          >
            <div
              className={
                styles.heroIdentifierCard
              }
            >
              <div
                className={
                  styles.heroIdentifierHeading
                }
              >
                <Sparkles
                  size={16}
                  strokeWidth={1.8}
                />

                <h2>Coin Identifier</h2>
              </div>

              <p
                className={
                  styles.heroIdentifierDescription
                }
              >
                Upload or scan your coin to instantly
                discover its identity, history and key
                details.
              </p>

              <div
                className={
                  styles.heroIdentifierDropzone
                }
              >
                <div
                  className={
                    styles.heroIdentifierCamera
                  }
                >
                  <Camera
                    size={24}
                    strokeWidth={1.6}
                  />
                </div>

                <p
                  className={
                    styles.heroIdentifierTitle
                  }
                >
                  Scan your coin
                </p>

                <p
                  className={
                    styles.heroIdentifierSubtitle
                  }
                >
                  or upload clear images
                  <br />
                  (Front &amp; Back)
                </p>

                <button
                  type="button"
                  onClick={handleScanCoin}
                  className={
                    styles.heroIdentifierButton
                  }
                >
                  Identify My Coin
                </button>
              </div>

              <p
                className={
                  styles.heroSupportedFormats
                }
              >
                Supported formats: JPG, PNG, WEBP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TrustItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

const TrustItem = ({
  icon,
  title,
  subtitle,
}: TrustItemProps) => {
  return (
    <div className={styles.heroTrustItem}>
      <div className={styles.heroTrustIcon}>
        {icon}
      </div>

      <div className={styles.heroTrustText}>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default HeroSection;