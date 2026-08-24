"use client";

import {
  Heart,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/coinDetails/CoinInfo.module.css";

interface CoinInfoProps {
  coinId: string;
}

const CoinInfo = ({
  coinId,
}: CoinInfoProps) => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const handleWishlist = () => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    toast.success("Added to wishlist");
  };

  const handleShare = async () => {
    const shareUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "";

    try {
      if (navigator.share) {
        await navigator.share({
          title: "British India One Rupee 1918",
          text: "View this collectible coin on CoinHeritage.",
          url: shareUrl,
        });

        return;
      }

      await navigator.clipboard.writeText(
        shareUrl
      );

      toast.success(
        "Coin link copied"
      );
    } catch {
      // User may cancel native share dialog.
    }
  };

  return (
    <section className={styles.coinInfo}>
      <div className={styles.coinInfoTopRow}>
        <div className={styles.coinInfoBadge}>
          <Sparkles
            size={12}
            strokeWidth={1.8}
          />

          <span>
            Historical Collectible
          </span>
        </div>

        <div className={styles.coinInfoActions}>
          <button
            type="button"
            aria-label="Add coin to wishlist"
            onClick={handleWishlist}
            className={styles.coinInfoActionButton}
          >
            <Heart
              size={16}
              strokeWidth={1.8}
            />
          </button>

          <button
            type="button"
            aria-label="Share coin"
            onClick={() =>
              void handleShare()
            }
            className={styles.coinInfoActionButton}
          >
            <Share2
              size={16}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>

      <div className={styles.coinInfoHeading}>
        <p className={styles.coinInfoLocation}>
          British India · 1918
        </p>

        <h1 className={styles.coinInfoTitle}>
          British India One Rupee
        </h1>

        <p className={styles.coinInfoSubtitle}>
          George V · Calcutta Mint
        </p>
      </div>

      <div className={styles.coinInfoTags}>
        <span>Silver</span>
        <span>Very Fine</span>
        <span>1 Rupee</span>
      </div>

      <div className={styles.coinInfoRarity}>
        <div className={styles.coinInfoRarityIcon}>
          <ShieldCheck
            size={18}
            strokeWidth={1.7}
          />
        </div>

        <div className={styles.coinInfoRarityText}>
          <span>Rarity</span>

          <strong>
            Uncommon
          </strong>
        </div>
      </div>

      <p className={styles.coinInfoDescription}>
        A historical silver one-rupee coin from the
        reign of King George V. This listing includes
        clear front and reverse views along with key
        numismatic information for collectors.
      </p>

      <div className={styles.coinInfoReference}>
        <span>
          Listing Reference
        </span>

        <strong>
          {coinId}
        </strong>
      </div>
    </section>
  );
};

export default CoinInfo;