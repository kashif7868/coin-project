"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Gavel,
  Heart,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/auctions/AuctionCard.module.css";

export interface AuctionCardData {
  id: string;
  title: string;
  country: string;
  year: string;
  metal: string;
  currentBid: string;
  bids: number;
  timeLeft: string;
  image: string;
  status: "live" | "upcoming" | "ended";
}

interface AuctionCardProps {
  auction: AuctionCardData;
}

const AuctionCard = ({
  auction,
}: AuctionCardProps) => {
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

    // Later: wishlist action
  };

  const handleBid = () => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    // Later: open bid modal / auction detail
  };

  return (
    <article className={styles.auctionCard}>
      <div className={styles.auctionCardImageArea}>
        <Link
          href={`/auctions/${auction.id}`}
          className={styles.auctionCardImageLink}
          aria-label={`View ${auction.title}`}
        >
          <Image
            src={auction.image}
            alt={auction.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
            className={styles.auctionCardImage}
          />
        </Link>

        <span
          className={`${styles.auctionCardStatus} ${
            auction.status === "live"
              ? styles.auctionCardStatusLive
              : auction.status === "upcoming"
              ? styles.auctionCardStatusUpcoming
              : styles.auctionCardStatusEnded
          }`}
        >
          {auction.status === "live"
            ? "Live"
            : auction.status === "upcoming"
            ? "Upcoming"
            : "Ended"}
        </span>

        <button
          type="button"
          aria-label={`Add ${auction.title} to wishlist`}
          onClick={handleWishlist}
          className={styles.auctionCardWishlist}
        >
          <Heart
            size={16}
            strokeWidth={1.8}
          />
        </button>

        <div className={styles.auctionCardTime}>
          <Clock3
            size={13}
            strokeWidth={1.8}
          />

          <span>{auction.timeLeft}</span>
        </div>
      </div>

      <div className={styles.auctionCardBody}>
        <div className={styles.auctionCardMeta}>
          <span>{auction.country}</span>
          <span>{auction.year}</span>
        </div>

        <Link
          href={`/auctions/${auction.id}`}
          className={styles.auctionCardTitle}
        >
          {auction.title}
        </Link>

        <div className={styles.auctionCardTags}>
          <span>{auction.metal}</span>
          <span>{auction.bids} bids</span>
        </div>

        <div className={styles.auctionCardFooter}>
          <div>
            <span className={styles.auctionCardBidLabel}>
              Current Bid
            </span>

            <p className={styles.auctionCardBid}>
              {auction.currentBid}
            </p>
          </div>

          <button
            type="button"
            onClick={handleBid}
            disabled={auction.status === "ended"}
            className={styles.auctionCardBidButton}
          >
            <Gavel
              size={15}
              strokeWidth={1.8}
            />

            <span>
              {auction.status === "ended"
                ? "Ended"
                : "Bid"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default AuctionCard;