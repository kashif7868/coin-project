"use client";

import {
  Clock3,
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/auctions/AuctionsToolbar.module.css";

type ViewMode = "grid" | "list";

const AuctionsToolbar = () => {
  const [viewMode, setViewMode] =
    useState<ViewMode>("grid");

  const [status, setStatus] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("ending-soon");

  const handleOpenFilters = () => {
    window.dispatchEvent(
      new CustomEvent(
        "coinheritage:open-auctions-filters"
      )
    );
  };

  return (
    <section className={styles.auctionsToolbar}>
      <div className={styles.auctionsToolbarContainer}>
        <div className={styles.auctionsToolbarMeta}>
          <div className={styles.auctionsToolbarCountRow}>
            <p className={styles.auctionsToolbarCount}>
              24 auctions
            </p>

            <span className={styles.auctionsToolbarLive}>
              <Clock3
                size={12}
                strokeWidth={1.8}
              />
              Live marketplace
            </span>
          </div>

          <span className={styles.auctionsToolbarSubtext}>
            Bid on active and upcoming collectible coins
          </span>
        </div>

        <div className={styles.auctionsToolbarActions}>
          <button
            type="button"
            onClick={handleOpenFilters}
            className={styles.auctionsToolbarFilterButton}
          >
            <SlidersHorizontal
              size={16}
              strokeWidth={1.8}
            />
            <span>Filters</span>
          </button>

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
            aria-label="Auction status"
            className={styles.auctionsToolbarSelect}
          >
            <option value="all">
              All Auctions
            </option>

            <option value="live">
              Live Now
            </option>

            <option value="ending">
              Ending Soon
            </option>

            <option value="upcoming">
              Upcoming
            </option>

            <option value="ended">
              Ended
            </option>
          </select>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
            aria-label="Sort auctions"
            className={styles.auctionsToolbarSelect}
          >
            <option value="ending-soon">
              Ending Soon
            </option>

            <option value="newest">
              Newest
            </option>

            <option value="highest-bid">
              Highest Bid
            </option>

            <option value="lowest-bid">
              Lowest Bid
            </option>

            <option value="most-bids">
              Most Bids
            </option>
          </select>

          <div
            className={styles.auctionsToolbarViewToggle}
            aria-label="Change auction view"
          >
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
              onClick={() =>
                setViewMode("grid")
              }
              className={`${styles.auctionsToolbarViewButton} ${
                viewMode === "grid"
                  ? styles.auctionsToolbarViewButtonActive
                  : ""
              }`}
            >
              <Grid2X2
                size={16}
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              aria-label="List view"
              aria-pressed={viewMode === "list"}
              onClick={() =>
                setViewMode("list")
              }
              className={`${styles.auctionsToolbarViewButton} ${
                viewMode === "list"
                  ? styles.auctionsToolbarViewButtonActive
                  : ""
              }`}
            >
              <List
                size={17}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionsToolbar;