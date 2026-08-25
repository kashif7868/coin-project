"use client";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellReview/SellReviewActions.module.css";

const SellReviewActions = () => {
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

  const handleBack = () => {
    router.push("/scan?mode=sell");
  };

  const handleContinue = () => {
    if (
      !frontImage ||
      !backImage
    ) {
      toast.error(
        "Front and back images are required."
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
        "Please complete the required coin details."
      );

      return;
    }

    router.push(
      "/sell-listing"
    );
  };

  return (
    <section
      className={
        styles.sellReviewActions
      }
    >
      <div
        className={
          styles.sellReviewActionsInfo
        }
      >
        <span>
          Step 2 of 4
        </span>

        <p>
          Once the coin details are verified, continue to
          quantity and pricing.
        </p>
      </div>

      <div
        className={
          styles.sellReviewActionsButtons
        }
      >
        <button
          type="button"
          onClick={handleBack}
          className={
            styles.sellReviewBack
          }
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Back to Scan
          </span>
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className={
            styles.sellReviewContinue
          }
        >
          <span>
            Continue to Listing
          </span>

          <ArrowRight
            size={16}
            strokeWidth={1.8}
          />
        </button>
      </div>
    </section>
  );
};

export default SellReviewActions;