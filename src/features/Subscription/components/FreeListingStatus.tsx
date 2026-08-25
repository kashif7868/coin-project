"use client";

import {
  CheckCircle2,
  Coins,
  Gauge,
  LockKeyhole,
} from "lucide-react";

import styles from "@/components/animations/css/subscription/FreeListingStatus.module.css";

const FREE_LISTING_LIMIT = 10;

// Abhi testing ke liye static value.
// Backend connect hone ke baad seller profile se aayegi.
const usedFreeListings = 7;

const FreeListingStatus = () => {
  const remainingListings =
    Math.max(
      0,
      FREE_LISTING_LIMIT -
        usedFreeListings
    );

  const progress =
    Math.min(
      100,
      Math.round(
        (
          usedFreeListings /
          FREE_LISTING_LIMIT
        ) *
          100
      )
    );

  const freeLimitUsed =
    remainingListings === 0;

  return (
    <section
      className={
        styles.freeListingStatus
      }
    >
      <div
        className={
          styles.freeListingStatusHeader
        }
      >
        <div>
          <p
            className={
              styles.freeListingStatusEyebrow
            }
          >
            Free Seller Allowance
          </p>

          <h2
            className={
              styles.freeListingStatusTitle
            }
          >
            Your First 10 Listings Are Free
          </h2>

          <p
            className={
              styles.freeListingStatusDescription
            }
          >
            Every seller can publish up to 10 coin
            listings before a subscription plan is
            required.
          </p>
        </div>

        <div
          className={
            styles.freeListingStatusIcon
          }
        >
          <Coins
            size={19}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div
        className={
          styles.freeListingStatusStats
        }
      >
        <StatusCard
          icon={Gauge}
          label="Used"
          value={`${usedFreeListings} / ${FREE_LISTING_LIMIT}`}
        />

        <StatusCard
          icon={Coins}
          label="Remaining"
          value={String(
            remainingListings
          )}
        />

        <StatusCard
          icon={
            freeLimitUsed
              ? LockKeyhole
              : CheckCircle2
          }
          label="Status"
          value={
            freeLimitUsed
              ? "Plan Required"
              : "Free Access"
          }
        />
      </div>

      <div
        className={
          styles.freeListingStatusProgress
        }
      >
        <div
          className={
            styles.freeListingStatusProgressTop
          }
        >
          <span>
            Free listing usage
          </span>

          <strong>
            {progress}%
          </strong>
        </div>

        <div
          className={
            styles.freeListingStatusProgressTrack
          }
        >
          <div
            className={
              styles.freeListingStatusProgressBar
            }
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div
        className={
          freeLimitUsed
            ? styles.freeListingStatusNoticeLocked
            : styles.freeListingStatusNotice
        }
      >
        {freeLimitUsed ? (
          <LockKeyhole
            size={17}
            strokeWidth={1.8}
          />
        ) : (
          <CheckCircle2
            size={17}
            strokeWidth={1.8}
          />
        )}

        <div>
          <strong>
            {freeLimitUsed
              ? "Free listing allowance completed"
              : `${remainingListings} free ${
                  remainingListings ===
                  1
                    ? "listing"
                    : "listings"
                } remaining`}
          </strong>

          <span>
            {freeLimitUsed
              ? "Choose a seller subscription plan to publish additional coin listings."
              : "You can continue publishing without a subscription until all 10 free listings have been used."}
          </span>
        </div>
      </div>
    </section>
  );
};

interface StatusCardProps {
  icon: typeof Coins;
  label: string;
  value: string;
}

const StatusCard = ({
  icon: Icon,
  label,
  value,
}: StatusCardProps) => {
  return (
    <div
      className={
        styles.freeListingStatusCard
      }
    >
      <div
        className={
          styles.freeListingStatusCardIcon
        }
      >
        <Icon
          size={16}
          strokeWidth={1.7}
        />
      </div>

      <div
        className={
          styles.freeListingStatusCardText
        }
      >
        <span>{label}</span>

        <strong>{value}</strong>
      </div>
    </div>
  );
};

export default FreeListingStatus;