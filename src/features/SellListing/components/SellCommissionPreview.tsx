"use client";

import {
  BadgeDollarSign,
  CircleDollarSign,
  Info,
} from "lucide-react";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellListing/SellCommissionPreview.module.css";

const PLATFORM_COMMISSION_RATE = 0.05;

const SellCommissionPreview = () => {
  const price =
    useSellerListingStore(
      (state) => state.price
    );

  const quantity =
    useSellerListingStore(
      (state) => state.quantity
    );

  const grossSale =
    price * quantity;

  const platformFee =
    grossSale *
    PLATFORM_COMMISSION_RATE;

  const sellerReceives =
    Math.max(
      0,
      grossSale -
        platformFee
    );

  return (
    <section
      className={
        styles.sellCommissionPreview
      }
    >
      <div
        className={
          styles.sellCommissionPreviewHeader
        }
      >
        <div>
          <p
            className={
              styles.sellCommissionPreviewEyebrow
            }
          >
            Earnings Preview
          </p>

          <h2
            className={
              styles.sellCommissionPreviewTitle
            }
          >
            See What You Receive
          </h2>

          <p
            className={
              styles.sellCommissionPreviewDescription
            }
          >
            CoinHeritage deducts a 5% platform fee only
            after a successful sale.
          </p>
        </div>

        <div
          className={
            styles.sellCommissionPreviewIcon
          }
        >
          <CircleDollarSign
            size={19}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div
        className={
          styles.sellCommissionPreviewGrid
        }
      >
        <div
          className={
            styles.sellCommissionPreviewCard
          }
        >
          <span>
            Price per Coin
          </span>

          <strong>
            ${price.toFixed(2)}
          </strong>
        </div>

        <div
          className={
            styles.sellCommissionPreviewCard
          }
        >
          <span>
            Quantity
          </span>

          <strong>
            {quantity}
          </strong>
        </div>

        <div
          className={
            styles.sellCommissionPreviewCard
          }
        >
          <span>
            Potential Gross Sale
          </span>

          <strong>
            ${grossSale.toFixed(2)}
          </strong>
        </div>

        <div
          className={
            styles.sellCommissionPreviewCard
          }
        >
          <span>
            CoinHeritage Fee
          </span>

          <strong>
            ${platformFee.toFixed(2)}
          </strong>
        </div>
      </div>

      <div
        className={
          styles.sellCommissionPreviewNet
        }
      >
        <div>
          <BadgeDollarSign
            size={18}
            strokeWidth={1.8}
          />

          <div>
            <span>
              Estimated Seller Proceeds
            </span>

            <small>
              Before external payment, tax or shipping
              adjustments.
            </small>
          </div>
        </div>

        <strong>
          ${sellerReceives.toFixed(2)}
        </strong>
      </div>

      <div
        className={
          styles.sellCommissionPreviewNote
        }
      >
        <Info
          size={16}
          strokeWidth={1.8}
        />

        <span>
          Example: if one coin sells for $100,
          CoinHeritage receives $5 and the seller
          receives $95 before other applicable charges.
        </span>
      </div>
    </section>
  );
};

export default SellCommissionPreview;