"use client";

import Image from "next/image";
import {
  Maximize2,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/auctionDetails/AuctionGallery.module.css";

interface AuctionGalleryProps {
  auctionId: string;
}

type AuctionView = "front" | "back";

const AuctionGallery = ({
  auctionId,
}: AuctionGalleryProps) => {
  const [activeView, setActiveView] =
    useState<AuctionView>("front");

  const images = {
    front: "/images/coins/coin-7.jpg",
    back: "/images/coins/coin-4.jpg",
  };

  const activeImage =
    images[activeView];

  return (
    <section className={styles.auctionGallery}>
      <div className={styles.auctionGalleryHeader}>
        <div>
          <p
            className={
              styles.auctionGalleryEyebrow
            }
          >
            Auction Images
          </p>

          <h2
            className={
              styles.auctionGalleryTitle
            }
          >
            Front &amp; Back View
          </h2>
        </div>

        <button
          type="button"
          aria-label="Reset auction image view"
          onClick={() =>
            setActiveView("front")
          }
          className={
            styles.auctionGalleryResetButton
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
          styles.auctionGalleryMainImage
        }
      >
        <Image
          src={activeImage}
          alt={`${auctionId} ${activeView} side`}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 560px"
          className={
            styles.auctionGalleryImage
          }
        />

        <div
          className={
            styles.auctionGalleryImageBadge
          }
        >
          {activeView === "front"
            ? "Front"
            : "Back"}
        </div>

        <button
          type="button"
          aria-label="View larger auction image"
          className={
            styles.auctionGalleryZoomButton
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
          styles.auctionGalleryThumbnails
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
          className={`${styles.auctionGalleryThumbnail} ${
            activeView === "front"
              ? styles.auctionGalleryThumbnailActive
              : ""
          }`}
        >
          <div
            className={
              styles.auctionGalleryThumbnailImage
            }
          >
            <Image
              src={images.front}
              alt="Front side thumbnail"
              fill
              sizes="90px"
              className={
                styles.auctionGalleryThumbImage
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
          className={`${styles.auctionGalleryThumbnail} ${
            activeView === "back"
              ? styles.auctionGalleryThumbnailActive
              : ""
          }`}
        >
          <div
            className={
              styles.auctionGalleryThumbnailImage
            }
          >
            <Image
              src={images.back}
              alt="Back side thumbnail"
              fill
              sizes="90px"
              className={
                styles.auctionGalleryThumbImage
              }
            />
          </div>

          <span>Back</span>
        </button>
      </div>
    </section>
  );
};

export default AuctionGallery;