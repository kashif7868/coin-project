"use client";

import {
  Minus,
  PackageCheck,
  Plus,
} from "lucide-react";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellListing/SellQuantityPanel.module.css";

const SellQuantityPanel = () => {
  const quantity =
    useSellerListingStore(
      (state) => state.quantity
    );

  const setQuantity =
    useSellerListingStore(
      (state) => state.setQuantity
    );

  const decreaseQuantity = () => {
    setQuantity(
      Math.max(1, quantity - 1)
    );
  };

  const increaseQuantity = () => {
    setQuantity(
      quantity + 1
    );
  };

  return (
    <section className={styles.sellQuantityPanel}>
      <div className={styles.sellQuantityPanelHeader}>
        <div>
          <p className={styles.sellQuantityPanelEyebrow}>
            Available Quantity
          </p>

          <h2 className={styles.sellQuantityPanelTitle}>
            How Many Coins Are You Selling?
          </h2>

          <p className={styles.sellQuantityPanelDescription}>
            Enter the number of identical coins available in
            this listing. Quantity can be updated later from
            your seller inventory.
          </p>
        </div>

        <div className={styles.sellQuantityPanelHeaderIcon}>
          <PackageCheck
            size={19}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div className={styles.sellQuantityPanelBody}>
        <div className={styles.sellQuantityControl}>
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus
              size={18}
              strokeWidth={1.8}
            />
          </button>

          <div className={styles.sellQuantityValue}>
            <strong>{quantity}</strong>

            <span>
              {quantity === 1
                ? "coin"
                : "coins"}
            </span>
          </div>

          <button
            type="button"
            aria-label="Increase quantity"
            onClick={increaseQuantity}
          >
            <Plus
              size={18}
              strokeWidth={1.8}
            />
          </button>
        </div>

        <div className={styles.sellQuantityManual}>
          <label htmlFor="seller-quantity">
            Or enter quantity manually
          </label>

          <input
            id="seller-quantity"
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            value={quantity}
            onChange={(event) => {
              const value =
                Number(
                  event.target.value
                );

              if (
                !Number.isFinite(value)
              ) {
                return;
              }

              setQuantity(
                Math.max(
                  1,
                  Math.floor(value)
                )
              );
            }}
          />
        </div>
      </div>

      <div className={styles.sellQuantityPanelNote}>
        <PackageCheck
          size={17}
          strokeWidth={1.8}
        />

        <div>
          <strong>
            One listing, one coin type
          </strong>

          <span>
            Use one quantity only for identical coins with
            the same year, denomination and condition.
          </span>
        </div>
      </div>
    </section>
  );
};

export default SellQuantityPanel;