"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

import styles from "@/components/animations/css/cart/CartSummary.module.css";

const CartSummary = () => {
  const subtotal = 204;
  const shipping = 12;
  const serviceFee = 6;
  const total =
    subtotal +
    shipping +
    serviceFee;

  const handleCheckout = () => {
    toast.info(
      "Checkout",
      {
        description:
          "Checkout and payment integration will be connected later.",
      }
    );

    // Later:
    // router.push("/checkout")
  };

  return (
    <section className={styles.cartSummary}>
      <div className={styles.cartSummaryHeader}>
        <div>
          <p className={styles.cartSummaryEyebrow}>
            Order Summary
          </p>

          <h2 className={styles.cartSummaryTitle}>
            Review Your Total
          </h2>
        </div>
      </div>

      <div className={styles.cartSummaryRows}>
        <div className={styles.cartSummaryRow}>
          <span>Subtotal</span>

          <strong>
            ${subtotal}
          </strong>
        </div>

        <div className={styles.cartSummaryRow}>
          <span>Estimated Shipping</span>

          <strong>
            ${shipping}
          </strong>
        </div>

        <div className={styles.cartSummaryRow}>
          <span>Marketplace Fee</span>

          <strong>
            ${serviceFee}
          </strong>
        </div>
      </div>

      <div className={styles.cartSummaryTotal}>
        <div>
          <span>Total</span>

          <small>
            Taxes, if applicable, calculated at checkout.
          </small>
        </div>

        <strong>
          ${total}
        </strong>
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        className={styles.cartSummaryCheckout}
      >
        <CreditCard
          size={17}
          strokeWidth={1.8}
        />

        <span>Proceed to Checkout</span>
      </button>

      <Link
        href="/coins"
        className={styles.cartSummaryContinue}
      >
        <ArrowLeft
          size={15}
          strokeWidth={1.8}
        />

        <span>Continue Shopping</span>
      </Link>

      <div className={styles.cartSummaryTrust}>
        <div className={styles.cartSummaryTrustItem}>
          <ShieldCheck
            size={17}
            strokeWidth={1.8}
          />

          <div>
            <strong>
              Buyer Protection
            </strong>

            <span>
              Marketplace checkout will support protected transactions.
            </span>
          </div>
        </div>

        <div className={styles.cartSummaryTrustItem}>
          <LockKeyhole
            size={17}
            strokeWidth={1.8}
          />

          <div>
            <strong>
              Secure Checkout
            </strong>

            <span>
              Payment details will be handled through the secure payment provider.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;