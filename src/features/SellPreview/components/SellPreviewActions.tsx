"use client";

import {
  ArrowLeft,
  CheckCircle2,
  Upload,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellPreview/SellPreviewActions.module.css";

const FREE_LISTING_LIMIT = 10;

// Frontend testing only.
// Later backend se seller profile ke andar se ayega.
const usedFreeListings = 10;

const SellPreviewActions = () => {
  const router = useRouter();

  const frontImage =
    useSellerListingStore(
      (state) => state.frontImage
    );

  const backImage =
    useSellerListingStore(
      (state) => state.backImage
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

  const handleBack = () => {
    router.push("/sell-listing");
  };

  const handlePublish = () => {
    if (
      !frontImage ||
      !backImage
    ) {
      toast.error(
        "Coin images are missing."
      );

      return;
    }

    if (
      !coinDetails.name.trim() ||
      !coinDetails.country.trim() ||
      !coinDetails.year.trim() ||
      !coinDetails.denomination.trim()
    ) {
      toast.error(
        "Required coin details are incomplete."
      );

      return;
    }

    if (
      !Number.isFinite(price) ||
      price <= 0
    ) {
      toast.error(
        "Please enter a valid selling price."
      );

      return;
    }

    if (
      !Number.isInteger(quantity) ||
      quantity < 1
    ) {
      toast.error(
        "Please enter a valid quantity."
      );

      return;
    }

    const freeListingLimitReached =
      usedFreeListings >=
      FREE_LISTING_LIMIT;

    if (freeListingLimitReached) {
      toast.info(
        "Free listing allowance completed",
        {
          description:
            "Choose a seller subscription plan to publish additional listings.",
        }
      );

      router.push(
        "/subscription"
      );

      return;
    }

    toast.success(
      "Listing published",
      {
        description:
          "This listing used one of your free seller listings.",
      }
    );

    /*
     * Later backend flow:
     *
     * 1. POST listing
     * 2. Increment usedFreeListings
     * 3. Create seller inventory record
     * 4. Return listing ID
     * 5. Redirect to seller listing detail
     */
  };

  return (
    <section
      className={
        styles.sellPreviewActions
      }
    >
      <div
        className={
          styles.sellPreviewActionsInfo
        }
      >
        <div
          className={
            styles.sellPreviewActionsStep
          }
        >
          <CheckCircle2
            size={14}
            strokeWidth={1.8}
          />

          <span>
            Step 4 of 4
          </span>
        </div>

        <p>
          Confirm your listing before
          publishing it to the
          CoinHeritage marketplace.
        </p>
      </div>

      <div
        className={
          styles.sellPreviewActionsButtons
        }
      >
        <button
          type="button"
          onClick={handleBack}
          className={
            styles.sellPreviewBack
          }
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Back to Listing
          </span>
        </button>

        <button
          type="button"
          onClick={handlePublish}
          className={
            styles.sellPreviewPublish
          }
        >
          <Upload
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Publish Listing
          </span>
        </button>
      </div>
    </section>
  );
};

export default SellPreviewActions;