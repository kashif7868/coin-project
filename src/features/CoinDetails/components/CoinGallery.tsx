"use client";

import Image from "next/image";
import {
  Maximize2,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/coinDetails/CoinGallery.module.css";

interface CoinGalleryProps {
  coinId: string;
}

type CoinView = "front" | "back";

const CoinGallery = ({
  coinId,
}: CoinGalleryProps) => {
  const [activeView, setActiveView] =
    useState<CoinView>("front");

  const images = {
    front: "/images/coins/coin-1.jpg",
    back: "/images/coins/coin-2.jpg",
  };

  const activeImage =
    images[activeView];

  return (
    <section className={styles.coinGallery}>
      <div className={styles.coinGalleryHeader}>
        <div>
          <p className={styles.coinGalleryEyebrow}>
            Coin Images
          </p>

          <h2 className={styles.coinGalleryTitle}>
            Front &amp; Back View
          </h2>
        </div>

        <button
          type="button"
          aria-label="Reset coin image view"
          onClick={() =>
            setActiveView("front")
          }
          className={
            styles.coinGalleryResetButton
          }
        >
          <RotateCcw
            size={15}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <div
        className={
          styles.coinGalleryMainImage
        }
      >
        <Image
          src={activeImage}
          alt={`${coinId} ${activeView} side`}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 560px"
          className={
            styles.coinGalleryImage
          }
        />

        <div
          className={
            styles.coinGalleryImageBadge
          }
        >
          {activeView === "front"
            ? "Front"
            : "Back"}
        </div>

        <button
          type="button"
          aria-label="View larger coin image"
          className={
            styles.coinGalleryZoomButton
          }
        >
          <Maximize2
            size={16}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <div
        className={
          styles.coinGalleryThumbnails
        }
      >
        <button
          type="button"
          onClick={() =>
            setActiveView("front")
          }
          aria-pressed={
            activeView === "front"
          }
          className={`${styles.coinGalleryThumbnail} ${
            activeView === "front"
              ? styles.coinGalleryThumbnailActive
              : ""
          }`}
        >
          <div
            className={
              styles.coinGalleryThumbnailImage
            }
          >
            <Image
              src={images.front}
              alt="Front side thumbnail"
              fill
              sizes="90px"
              className={
                styles.coinGalleryThumbImage
              }
            />
          </div>

          <span>Front</span>
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveView("back")
          }
          aria-pressed={
            activeView === "back"
          }
          className={`${styles.coinGalleryThumbnail} ${
            activeView === "back"
              ? styles.coinGalleryThumbnailActive
              : ""
          }`}
        >
          <div
            className={
              styles.coinGalleryThumbnailImage
            }
          >
            <Image
              src={images.back}
              alt="Back side thumbnail"
              fill
              sizes="90px"
              className={
                styles.coinGalleryThumbImage
              }
            />
          </div>

          <span>Back</span>
        </button>
      </div>
    </section>
  );
};

export default CoinGallery;