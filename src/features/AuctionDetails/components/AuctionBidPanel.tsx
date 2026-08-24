"use client";

import {
  Bell,
  Gavel,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/auctionDetails/AuctionBidPanel.module.css";

interface AuctionBidPanelProps {
  auctionId: string;
}

const AuctionBidPanel = ({
  auctionId,
}: AuctionBidPanelProps) => {
  const currentBid = 118;
  const minimumIncrement = 5;
  const minimumNextBid =
    currentBid + minimumIncrement;

  const [bidAmount, setBidAmount] =
    useState(
      minimumNextBid.toString()
    );

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const ensureAuthenticated = () => {
    if (isAuthenticated) {
      return true;
    }

    openAuthRequired();
    return false;
  };

  const handlePlaceBid = () => {
    if (!ensureAuthenticated()) {
      return;
    }

    const amount =
      Number(bidAmount);

    if (
      !Number.isFinite(amount) ||
      amount < minimumNextBid
    ) {
      toast.error(
        `Minimum bid is $${minimumNextBid}.`
      );
      return;
    }

    toast.success(
      "Bid is ready",
      {
        description:
          "Auction bidding service will be connected later.",
      }
    );

    // Later:
    // bidMutation.mutate({
    //   auctionId,
    //   amount,
    // });
  };

  const handleWatchAuction = () => {
    if (!ensureAuthenticated()) {
      return;
    }

    toast.success(
      "Auction added to your watchlist"
    );
  };

  return (
    <section className={styles.auctionBidPanel}>
      <div
        className={
          styles.auctionBidPanelHeader
        }
      >
        <div>
          <span
            className={
              styles.auctionBidPanelLabel
            }
          >
            Current Bid
          </span>

          <p
            className={
              styles.auctionBidPanelCurrent
            }
          >
            ${currentBid}
          </p>
        </div>

        <div
          className={
            styles.auctionBidPanelIncrement
          }
        >
          <TrendingUp
            size={14}
            strokeWidth={1.8}
          />

          <span>
            +${minimumIncrement} minimum
          </span>
        </div>
      </div>

      <div
        className={
          styles.auctionBidPanelDivider
        }
      />

      <div
        className={
          styles.auctionBidPanelField
        }
      >
        <label
          htmlFor="auction-bid"
          className={
            styles.auctionBidPanelFieldLabel
          }
        >
          Your Bid
        </label>

        <div
          className={
            styles.auctionBidPanelInputWrap
          }
        >
          <span
            className={
              styles.auctionBidPanelCurrency
            }
          >
            $
          </span>

          <input
            id="auction-bid"
            type="number"
            min={minimumNextBid}
            step={minimumIncrement}
            inputMode="decimal"
            value={bidAmount}
            onChange={(event) =>
              setBidAmount(
                event.target.value
              )
            }
            className={
              styles.auctionBidPanelInput
            }
          />
        </div>

        <span
          className={
            styles.auctionBidPanelHint
          }
        >
          Minimum next bid: $
          {minimumNextBid}
        </span>
      </div>

      <button
        type="button"
        onClick={handlePlaceBid}
        className={
          styles.auctionBidPanelPrimaryButton
        }
      >
        <Gavel
          size={17}
          strokeWidth={1.9}
        />

        <span>Place Bid</span>
      </button>

      <button
        type="button"
        onClick={handleWatchAuction}
        className={
          styles.auctionBidPanelWatchButton
        }
      >
        <Bell
          size={16}
          strokeWidth={1.8}
        />

        <span>Watch Auction</span>
      </button>

      <div
        className={
          styles.auctionBidPanelTrust
        }
      >
        <div
          className={
            styles.auctionBidPanelTrustIcon
          }
        >
          <ShieldCheck
            size={18}
            strokeWidth={1.8}
          />
        </div>

        <div
          className={
            styles.auctionBidPanelTrustText
          }
        >
          <strong>
            Secure Bidding
          </strong>

          <span>
            Your bid activity will remain linked
            to your CoinHeritage account.
          </span>
        </div>
      </div>

      <div
        className={
          styles.auctionBidPanelReference
        }
      >
        Auction: {auctionId}
      </div>
    </section>
  );
};

export default AuctionBidPanel;