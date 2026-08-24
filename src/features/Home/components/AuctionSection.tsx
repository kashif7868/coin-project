"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gavel } from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/home/AuctionSection.module.css";

const AUCTION_END = new Date(
  "2026-08-26T23:59:59+05:00"
).getTime();

const AuctionSection = () => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());

    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const remaining = useMemo(() => {
    if (now === null) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        ended: false,
      };
    }

    const difference = Math.max(
      AUCTION_END - now,
      0
    );

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
      ended: difference === 0,
    };
  }, [now]);

  const handleBid = () => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    if (remaining.ended) {
      toast.error("This auction has ended");
      return;
    }

    toast.info("Bidding panel coming next", {
      description:
        "British India 1/2 Anna · Current bid $42.00",
    });
  };

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={styles.auctionSection}
    >
      <div className={styles.auctionLayout}>
        <div className={styles.auctionContent}>
          <div className={styles.auctionLiveBadge}>
            <span className={styles.auctionLiveDot}>
              <span
                className={
                  styles.auctionLivePulse
                }
              />
            </span>

            <Gavel
              size={12}
              strokeWidth={1.8}
            />

            <span>Live Auction</span>
          </div>

          <div className={styles.auctionTimerGrid}>
            <TimeBox
              value={remaining.days}
              label="Days"
            />

            <TimeBox
              value={remaining.hours}
              label="Hours"
            />

            <TimeBox
              value={remaining.minutes}
              label="Min"
            />

            <TimeBox
              value={remaining.seconds}
              label="Sec"
            />
          </div>

          <div className={styles.auctionDetails}>
            <h3 className={styles.auctionTitle}>
              British India 1/2 Anna
            </h3>

            <p className={styles.auctionMeta}>
              1943 · George VI
            </p>

            <p className={styles.auctionRarity}>
              Rare Find
            </p>
          </div>

          <div className={styles.auctionBidSummary}>
            <div className={styles.auctionBidValue}>
              <p>Current Bid</p>
              <strong>$42.00</strong>
            </div>

            <div className={styles.auctionBidCount}>
              <p>Total Bids</p>
              <strong>18</strong>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={handleBid}
            whileTap={{
              scale: 0.97,
            }}
            disabled={remaining.ended}
            className={styles.auctionBidButton}
          >
            {remaining.ended
              ? "Auction Ended"
              : "Place a Bid"}
          </motion.button>
        </div>

        <div className={styles.auctionImageArea}>
          <motion.div
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className={styles.auctionImageWrapper}
          >
            <Image
              src="/images/home/auction-coin.webp"
              alt="British India Half Anna live auction"
              fill
              sizes="(max-width: 1279px) 100vw, 20vw"
              className={styles.auctionImage}
            />
          </motion.div>

          <div
            className={
              styles.auctionImageOverlay
            }
          />

          <div
            className={
              styles.auctionVerifiedBadge
            }
          >
            Verified Auction
          </div>
        </div>
      </div>

      <div className={styles.auctionPagination}>
        <span
          className={
            styles.auctionPaginationActive
          }
        />
        <span />
        <span />
      </div>
    </motion.section>
  );
};

interface TimeBoxProps {
  value: number;
  label: string;
}

const TimeBox = ({
  value,
  label,
}: TimeBoxProps) => {
  return (
    <div className={styles.auctionTimeBox}>
      <motion.p
        key={value}
        initial={{
          opacity: 0.4,
          y: -2,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className={styles.auctionTimeValue}
      >
        {String(value).padStart(2, "0")}
      </motion.p>

      <p className={styles.auctionTimeLabel}>
        {label}
      </p>
    </div>
  );
};

export default AuctionSection;