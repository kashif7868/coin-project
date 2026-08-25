"use client";

import {
  BadgeDollarSign,
  CircleDollarSign,
  Sparkles,
} from "lucide-react";
import { useMemo } from "react";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellListing/SellPricePanel.module.css";

const PLATFORM_COMMISSION_RATE = 0.05;

const SellPricePanel = () => {
  const price =
    useSellerListingStore(
      (state) => state.price
    );

  const setPrice =
    useSellerListingStore(
      (state) => state.setPrice
    );

  const platformFee =
    useMemo(
      () =>
        price *
        PLATFORM_COMMISSION_RATE,
      [price]
    );

  const sellerReceives =
    useMemo(
      () =>
        Math.max(
          0,
          price - platformFee
        ),
      [price, platformFee]
    );

  return (
    <section className={styles.sellPricePanel}>
      <div className={styles.sellPricePanelHeader}>
        <div>
          <p className={styles.sellPricePanelEyebrow}>
            Selling Price
          </p>

          <h2 className={styles.sellPricePanelTitle}>
            Set Your Marketplace Price
          </h2>

          <p className={styles.sellPricePanelDescription}>
            Enter the price for one coin. CoinHeritage takes
            a 5% platform commission only after a successful
            sale.
          </p>
        </div>

        <div className={styles.sellPricePanelHeaderIcon}>
          <BadgeDollarSign
            size={19}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div className={styles.sellPricePanelBody}>
        <div className={styles.sellPriceField}>
          <label htmlFor="seller-price">
            Price per Coin
          </label>

          <div className={styles.sellPriceInputWrap}>
            <span>$</span>

            <input
              id="seller-price"
              type="number"
              min="0"
              step="0.01"
              inputMode="decimal"
              value={
                price === 0
                  ? ""
                  : price
              }
              onChange={(event) => {
                const value =
                  Number(
                    event.target.value
                  );

                setPrice(
                  Number.isFinite(value)
                    ? value
                    : 0
                );
              }}
              placeholder="0.00"
            />
          </div>

          <small>
            Enter the amount the buyer will pay for one coin.
          </small>
        </div>

        <div className={styles.sellPriceSummary}>
          <div className={styles.sellPriceSummaryBadge}>
            <Sparkles
              size={12}
              strokeWidth={1.8}
            />

            <span>
              5% Success Commission
            </span>
          </div>

          <div className={styles.sellPriceSummaryRows}>
            <div className={styles.sellPriceSummaryRow}>
              <span>Sale Price</span>

              <strong>
                ${price.toFixed(2)}
              </strong>
            </div>

            <div className={styles.sellPriceSummaryRow}>
              <span>
                CoinHeritage Fee
              </span>

              <strong>
                -${platformFee.toFixed(2)}
              </strong>
            </div>

            <div
              className={`${styles.sellPriceSummaryRow} ${styles.sellPriceSummaryTotal}`}
            >
              <span>
                Seller Receives
              </span>

              <strong>
                ${sellerReceives.toFixed(2)}
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sellPricePanelExample}>
        <CircleDollarSign
          size={17}
          strokeWidth={1.8}
        />

        <div>
          <strong>
            Example: $100 sale
          </strong>

          <span>
            CoinHeritage receives $5 and the seller receives
            $95 before any external payment, shipping or tax
            adjustments.
          </span>
        </div>
      </div>
    </section>
  );
};

export default SellPricePanel;