"use client";

import {
  Clock3,
  Eye,
  Gavel,
  Heart,
  Share2,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/auctionDetails/AuctionInfo.module.css";

interface AuctionInfoProps {
  auctionId: string;
}

const AuctionInfo = ({
  auctionId,
}: AuctionInfoProps) => {
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

    toast.success("Auction added to wishlist");
  };

  const handleShare = async () => {
    const shareUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "";

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Morgan Silver Dollar Auction",
          text: "View this collectible coin auction on CoinHeritage.",
          url: shareUrl,
        });

        return;
      }

      await navigator.clipboard.writeText(
        shareUrl
      );

      toast.success(
        "Auction link copied"
      );
    } catch {
      // Native share can be cancelled by user.
    }
  };

  return (
    <section className={styles.auctionInfo}>
      <div className={styles.auctionInfoTopRow}>
        <div className={styles.auctionInfoBadge}>
          <Sparkles
            size={12}
            strokeWidth={1.8}
          />

          <span>Live Collectible Auction</span>
        </div>

        <div className={styles.auctionInfoActions}>
          <button
            type="button"
            aria-label="Add auction to wishlist"
            onClick={handleWishlist}
            className={styles.auctionInfoActionButton}
          >
            <Heart
              size={16}
              strokeWidth={1.8}
            />
          </button>

          <button
            type="button"
            aria-label="Share auction"
            onClick={() =>
              void handleShare()
            }
            className={styles.auctionInfoActionButton}
          >
            <Share2
              size={16}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>

      <div className={styles.auctionInfoHeading}>
        <p className={styles.auctionInfoLocation}>
          United States · 1921
        </p>

        <h1 className={styles.auctionInfoTitle}>
          Morgan Silver Dollar
        </h1>

        <p className={styles.auctionInfoSubtitle}>
          Silver · Extremely Fine
        </p>
      </div>

      <div className={styles.auctionInfoStatusRow}>
        <div className={styles.auctionInfoLiveBadge}>
          <span className={styles.auctionInfoLiveDot} />
          Live
        </div>

        <div className={styles.auctionInfoTime}>
          <Clock3
            size={14}
            strokeWidth={1.8}
          />

          <span>
            Ends in 01h 42m
          </span>
        </div>
      </div>

      <div className={styles.auctionInfoStats}>
        <div className={styles.auctionInfoStat}>
          <Gavel
            size={17}
            strokeWidth={1.8}
          />

          <div>
            <span>Current Bid</span>
            <strong>$118</strong>
          </div>
        </div>

        <div className={styles.auctionInfoStat}>
          <Gavel
            size={17}
            strokeWidth={1.8}
          />

          <div>
            <span>Total Bids</span>
            <strong>14</strong>
          </div>
        </div>

        <div className={styles.auctionInfoStat}>
          <Eye
            size={17}
            strokeWidth={1.8}
          />

          <div>
            <span>Watching</span>
            <strong>32</strong>
          </div>
        </div>
      </div>

      <p className={styles.auctionInfoDescription}>
        A collectible Morgan silver dollar offered
        through a timed marketplace auction. Review the
        coin images, specifications and auction activity
        before placing a bid.
      </p>

      <div className={styles.auctionInfoReference}>
        <span>
          Auction Reference
        </span>

        <strong>
          {auctionId}
        </strong>
      </div>
    </section>
  );
};

export default AuctionInfo;