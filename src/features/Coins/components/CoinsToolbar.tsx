"use client";

import {
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/coins/CoinsToolbar.module.css";

type ViewMode = "grid" | "list";

const CoinsToolbar = () => {
  const [viewMode, setViewMode] =
    useState<ViewMode>("grid");

  const [sortBy, setSortBy] =
    useState("featured");

  const handleOpenFilters = () => {
    window.dispatchEvent(
      new CustomEvent(
        "coinheritage:open-coins-filters"
      )
    );
  };

  return (
    <section className={styles.coinsToolbar}>
      <div className={styles.coinsToolbarContainer}>
        <div className={styles.coinsToolbarMeta}>
          <p className={styles.coinsToolbarCount}>
            248 coins found
          </p>

          <span
            className={
              styles.coinsToolbarSubtext
            }
          >
            Browse verified collectible listings
          </span>
        </div>

        <div className={styles.coinsToolbarActions}>
          <button
            type="button"
            onClick={handleOpenFilters}
            className={
              styles.coinsToolbarFilterButton
            }
          >
            <SlidersHorizontal
              size={16}
              strokeWidth={1.8}
            />
            <span>Filters</span>
          </button>

          <div
            className={
              styles.coinsToolbarSortWrap
            }
          >
            <label
              htmlFor="coins-sort"
              className={
                styles.coinsToolbarSortLabel
              }
            >
              Sort
            </label>

            <select
              id="coins-sort"
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value)
              }
              className={
                styles.coinsToolbarSort
              }
            >
              <option value="featured">
                Featured
              </option>

              <option value="newest">
                Newest
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="year-oldest">
                Year: Oldest
              </option>

              <option value="year-newest">
                Year: Newest
              </option>
            </select>
          </div>

          <div
            className={
              styles.coinsToolbarViewToggle
            }
            aria-label="Change coin view"
          >
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={
                viewMode === "grid"
              }
              onClick={() =>
                setViewMode("grid")
              }
              className={`${styles.coinsToolbarViewButton} ${
                viewMode === "grid"
                  ? styles.coinsToolbarViewButtonActive
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
              aria-pressed={
                viewMode === "list"
              }
              onClick={() =>
                setViewMode("list")
              }
              className={`${styles.coinsToolbarViewButton} ${
                viewMode === "list"
                  ? styles.coinsToolbarViewButtonActive
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

export default CoinsToolbar;