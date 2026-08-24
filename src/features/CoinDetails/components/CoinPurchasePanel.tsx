"use client";

import {
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/coinDetails/CoinPurchasePanel.module.css";

interface CoinPurchasePanelProps {
  coinId: string;
}

const CoinPurchasePanel = ({
  coinId,
}: CoinPurchasePanelProps) => {
  const [quantity, setQuantity] = useState(1);

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const availableStock = 4;
  const unitPrice = 86;

  const decreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(1, current - 1)
    );
  };

  const increaseQuantity = () => {
    setQuantity((current) =>
      Math.min(availableStock, current + 1)
    );
  };

  const ensureAuthenticated = () => {
    if (isAuthenticated) {
      return true;
    }

    openAuthRequired();
    return false;
  };

  const handleAddToCart = () => {
    if (!ensureAuthenticated()) {
      return;
    }

    toast.success("Added to cart", {
      description: `${quantity} item${
        quantity > 1 ? "s" : ""
      } added.`,
    });

    // Later:
    // cartStore.addItem({
    //   coinId,
    //   quantity,
    // });
  };

  const handleBuyNow = () => {
    if (!ensureAuthenticated()) {
      return;
    }

    toast.info("Checkout ready", {
      description:
        "Checkout flow will be connected later.",
    });

    // Later:
    // router.push(`/checkout?coin=${coinId}&qty=${quantity}`);
  };

  return (
    <section className={styles.purchasePanel}>
      <div className={styles.purchasePriceRow}>
        <div>
          <span className={styles.purchasePriceLabel}>
            Price
          </span>

          <p className={styles.purchasePrice}>
            ${unitPrice}
          </p>
        </div>

        <span className={styles.purchaseStock}>
          {availableStock} available
        </span>
      </div>

      <div className={styles.purchaseDivider} />

      <div className={styles.purchaseQuantitySection}>
        <div>
          <p className={styles.purchaseSectionLabel}>
            Quantity
          </p>

          <span className={styles.purchaseQuantityHint}>
            Select up to {availableStock}
          </span>
        </div>

        <div className={styles.purchaseQuantityControl}>
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className={styles.purchaseQuantityButton}
          >
            <Minus
              size={14}
              strokeWidth={1.9}
            />
          </button>

          <span className={styles.purchaseQuantityValue}>
            {quantity}
          </span>

          <button
            type="button"
            aria-label="Increase quantity"
            onClick={increaseQuantity}
            disabled={quantity >= availableStock}
            className={styles.purchaseQuantityButton}
          >
            <Plus
              size={14}
              strokeWidth={1.9}
            />
          </button>
        </div>
      </div>

      <div className={styles.purchaseTotalRow}>
        <span>Total</span>

        <strong>
          ${unitPrice * quantity}
        </strong>
      </div>

      <div className={styles.purchaseActions}>
        <button
          type="button"
          onClick={handleAddToCart}
          className={styles.purchaseCartButton}
        >
          <ShoppingCart
            size={17}
            strokeWidth={1.8}
          />

          <span>Add to Cart</span>
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          className={styles.purchaseBuyButton}
        >
          <Zap
            size={17}
            strokeWidth={1.8}
          />

          <span>Buy Now</span>
        </button>
      </div>

      <div className={styles.purchaseTrust}>
        <div className={styles.purchaseTrustIcon}>
          <ShieldCheck
            size={18}
            strokeWidth={1.8}
          />
        </div>

        <div className={styles.purchaseTrustText}>
          <strong>
            Buyer Protection
          </strong>

          <span>
            Secure marketplace purchase with verified
            listing information.
          </span>
        </div>
      </div>

      <div className={styles.purchaseSeller}>
        <span className={styles.purchaseSellerLabel}>
          Seller
        </span>

        <div className={styles.purchaseSellerInfo}>
          <div className={styles.purchaseSellerAvatar}>
            CH
          </div>

          <div className={styles.purchaseSellerText}>
            <strong>
              CoinHeritage
            </strong>

            <span>
              Verified Marketplace Seller
            </span>
          </div>
        </div>
      </div>

      <span className={styles.purchaseReference}>
        Listing: {coinId}
      </span>
    </section>
  );
};

export default CoinPurchasePanel;