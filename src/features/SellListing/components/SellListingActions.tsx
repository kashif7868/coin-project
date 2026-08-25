"use client";

import {
  ArrowLeft,
  ArrowRight,
  Eye,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellListing/SellListingActions.module.css";

const SellListingActions = () => {
  const router = useRouter();

  const price =
    useSellerListingStore(
      (state) => state.price
    );

  const quantity =
    useSellerListingStore(
      (state) => state.quantity
    );

  const handleBack = () => {
    router.push("/sell-review");
  };

  const handleContinue = () => {
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

    router.push("/sell-preview");
  };

  return (
    <section
      className={
        styles.sellListingActions
      }
    >
      <div
        className={
          styles.sellListingActionsInfo
        }
      >
        <div
          className={
            styles.sellListingActionsStep
          }
        >
          <Eye
            size={14}
            strokeWidth={1.8}
          />

          <span>Step 3 of 4</span>
        </div>

        <p>
          Next you will review the complete
          marketplace listing before submitting
          it for publication.
        </p>
      </div>

      <div
        className={
          styles.sellListingActionsButtons
        }
      >
        <button
          type="button"
          onClick={handleBack}
          className={
            styles.sellListingBack
          }
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Back to Details
          </span>
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className={
            styles.sellListingContinue
          }
        >
          <span>
            Preview Listing
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

export default SellListingActions;