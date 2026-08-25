"use client";

import {
  BadgeDollarSign,
  CheckCircle2,
  Coins,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellPreview/SellPublishSummary.module.css";

const PLATFORM_COMMISSION_RATE = 0.05;

const SellPublishSummary = () => {
  const price =
    useSellerListingStore(
      (state) => state.price
    );

  const quantity =
    useSellerListingStore(
      (state) => state.quantity
    );

  const grossPotential =
    price * quantity;

  const platformFee =
    grossPotential *
    PLATFORM_COMMISSION_RATE;

  const sellerReceives =
    Math.max(
      0,
      grossPotential -
        platformFee
    );

  return (
    <section
      className={
        styles.sellPublishSummary
      }
    >
      <div
        className={
          styles.sellPublishSummaryHeader
        }
      >
        <div>
          <p
            className={
              styles.sellPublishSummaryEyebrow
            }
          >
            Final Summary
          </p>

          <h2
            className={
              styles.sellPublishSummaryTitle
            }
          >
            Ready for Publication
          </h2>

          <p
            className={
              styles.sellPublishSummaryDescription
            }
          >
            Review the final commercial terms
            before publishing this listing.
          </p>
        </div>

        <div
          className={
            styles.sellPublishSummaryIcon
          }
        >
          <CheckCircle2
            size={19}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div
        className={
          styles.sellPublishSummaryGrid
        }
      >
        <SummaryCard
          icon={BadgeDollarSign}
          label="Price per Coin"
          value={`$${price.toFixed(2)}`}
        />

        <SummaryCard
          icon={PackageCheck}
          label="Quantity"
          value={String(quantity)}
        />

        <SummaryCard
          icon={Coins}
          label="Potential Gross"
          value={`$${grossPotential.toFixed(2)}`}
        />

        <SummaryCard
          icon={ShieldCheck}
          label="CoinHeritage Fee"
          value={`$${platformFee.toFixed(2)}`}
        />
      </div>

      <div
        className={
          styles.sellPublishSummaryNet
        }
      >
        <div>
          <span>
            Estimated Seller Proceeds
          </span>

          <small>
            Based on the full listed quantity being
            sold successfully.
          </small>
        </div>

        <strong>
          ${sellerReceives.toFixed(2)}
        </strong>
      </div>

      <div
        className={
          styles.sellPublishSummaryNote
        }
      >
        <CheckCircle2
          size={16}
          strokeWidth={1.8}
        />

        <span>
          Your first 10 published listings are free.
          After the free allowance is used,
          subscription access will be required.
        </span>
      </div>
    </section>
  );
};

interface SummaryCardProps {
  icon: typeof Coins;
  label: string;
  value: string;
}

const SummaryCard = ({
  icon: Icon,
  label,
  value,
}: SummaryCardProps) => {
  return (
    <div
      className={
        styles.sellPublishSummaryCard
      }
    >
      <div
        className={
          styles.sellPublishSummaryCardIcon
        }
      >
        <Icon
          size={16}
          strokeWidth={1.7}
        />
      </div>

      <div
        className={
          styles.sellPublishSummaryCardText
        }
      >
        <span>{label}</span>

        <strong>{value}</strong>
      </div>
    </div>
  );
};

export default SellPublishSummary;