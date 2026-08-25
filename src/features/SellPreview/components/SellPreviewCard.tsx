"use client";

import {
  BadgeCheck,
  CalendarDays,
  Coins,
  Gem,
  Globe2,
  Layers3,
} from "lucide-react";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellPreview/SellPreviewCard.module.css";

const SellPreviewCard = () => {
  const frontImage =
    useSellerListingStore(
      (state) => state.frontImage
    );

  const coinDetails =
    useSellerListingStore(
      (state) => state.coinDetails
    );

  const price =
    useSellerListingStore(
      (state) => state.price
    );

  const quantity =
    useSellerListingStore(
      (state) => state.quantity
    );

  return (
    <section className={styles.sellPreviewCard}>
      <div className={styles.sellPreviewCardImageArea}>
        {frontImage ? (
          <img
            src={frontImage}
            alt={
              coinDetails.name
                ? `${coinDetails.name} preview`
                : "Seller coin preview"
            }
            className={styles.sellPreviewCardImage}
          />
        ) : (
          <div className={styles.sellPreviewCardPlaceholder}>
            <Coins
              size={38}
              strokeWidth={1.4}
            />

            <span>
              Coin image unavailable
            </span>
          </div>
        )}

        <div className={styles.sellPreviewCardBadge}>
          <BadgeCheck
            size={13}
            strokeWidth={1.8}
          />

          <span>Seller Listing Preview</span>
        </div>
      </div>

      <div className={styles.sellPreviewCardBody}>
        <div className={styles.sellPreviewCardTop}>
          <div>
            <p className={styles.sellPreviewCardCountry}>
              {coinDetails.country || "Country not set"}
            </p>

            <h2 className={styles.sellPreviewCardTitle}>
              {coinDetails.name || "Untitled Coin"}
            </h2>
          </div>

          <div className={styles.sellPreviewCardPrice}>
            <span>Price</span>

            <strong>
              ${price.toFixed(2)}
            </strong>
          </div>
        </div>

        <div className={styles.sellPreviewCardFacts}>
          <Fact
            icon={CalendarDays}
            label="Year"
            value={coinDetails.year || "—"}
          />

          <Fact
            icon={Layers3}
            label="Denomination"
            value={coinDetails.denomination || "—"}
          />

          <Fact
            icon={Gem}
            label="Metal"
            value={coinDetails.metal || "—"}
          />

          <Fact
            icon={Globe2}
            label="Condition"
            value={coinDetails.condition || "—"}
          />
        </div>

        <div className={styles.sellPreviewCardFooter}>
          <div>
            <span>Available Quantity</span>

            <strong>
              {quantity}
            </strong>
          </div>

          <div>
            <span>Rarity</span>

            <strong>
              {coinDetails.rarity || "Not specified"}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FactProps {
  icon: typeof Coins;
  label: string;
  value: string;
}

const Fact = ({
  icon: Icon,
  label,
  value,
}: FactProps) => {
  return (
    <div className={styles.sellPreviewCardFact}>
      <Icon
        size={15}
        strokeWidth={1.7}
      />

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
};

export default SellPreviewCard;