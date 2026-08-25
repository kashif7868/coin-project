"use client";

import {
  ImageIcon,
  RefreshCcw,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellReview/SellCoinImages.module.css";

const SellCoinImages = () => {
  const router = useRouter();

  const frontImage =
    useSellerListingStore(
      (state) => state.frontImage
    );

  const backImage =
    useSellerListingStore(
      (state) => state.backImage
    );

  const handleRescan = () => {
    router.push(
      "/scan?mode=sell"
    );
  };

  return (
    <section className={styles.sellCoinImages}>
      <div className={styles.sellCoinImagesHeader}>
        <div>
          <p
            className={
              styles.sellCoinImagesEyebrow
            }
          >
            Coin Images
          </p>

          <h2
            className={
              styles.sellCoinImagesTitle
            }
          >
            Review Front &amp; Back
          </h2>

          <p
            className={
              styles.sellCoinImagesDescription
            }
          >
            Make sure both images are clear,
            centered and show the complete coin
            before continuing.
          </p>
        </div>

        <button
          type="button"
          onClick={handleRescan}
          className={
            styles.sellCoinImagesRescan
          }
        >
          <RefreshCcw
            size={15}
            strokeWidth={1.8}
          />

          <span>Rescan</span>
        </button>
      </div>

      <div
        className={
          styles.sellCoinImagesGrid
        }
      >
        <CoinImageCard
          label="Front"
          image={frontImage}
        />

        <CoinImageCard
          label="Back"
          image={backImage}
        />
      </div>
    </section>
  );
};

interface CoinImageCardProps {
  label: string;
  image: string | null;
}

const CoinImageCard = ({
  label,
  image,
}: CoinImageCardProps) => {
  return (
    <article
      className={
        styles.sellCoinImageCard
      }
    >
      <div
        className={
          styles.sellCoinImageCardTop
        }
      >
        <span>{label}</span>
      </div>

      <div
        className={
          styles.sellCoinImageViewport
        }
      >
        {image ? (
          <img
            src={image}
            alt={`${label} side of seller coin`}
            className={
              styles.sellCoinImage
            }
          />
        ) : (
          <div
            className={
              styles.sellCoinImageMissing
            }
          >
            <ImageIcon
              size={28}
              strokeWidth={1.5}
            />

            <strong>
              No {label.toLowerCase()} image
            </strong>

            <span>
              Return to the scanner and
              capture this side.
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default SellCoinImages;