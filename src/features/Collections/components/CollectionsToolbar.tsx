"use client";

import {
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/collections/CollectionsToolbar.module.css";

type ViewMode = "grid" | "list";

const CollectionsToolbar = () => {
  const [viewMode, setViewMode] =
    useState<ViewMode>("grid");

  const [category, setCategory] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("featured");

  const handleOpenFilters = () => {
    window.dispatchEvent(
      new CustomEvent(
        "coinheritage:open-collections-filters"
      )
    );
  };

  return (
    <section className={styles.collectionsToolbar}>
      <div
        className={
          styles.collectionsToolbarContainer
        }
      >
        <div
          className={
            styles.collectionsToolbarMeta
          }
        >
          <p
            className={
              styles.collectionsToolbarCount
            }
          >
            36 collections
          </p>

          <span
            className={
              styles.collectionsToolbarSubtext
            }
          >
            Curated themes from across numismatic history
          </span>
        </div>

        <div
          className={
            styles.collectionsToolbarActions
          }
        >
          <button
            type="button"
            onClick={handleOpenFilters}
            className={
              styles.collectionsToolbarFilterButton
            }
          >
            <SlidersHorizontal
              size={16}
              strokeWidth={1.8}
            />

            <span>Filters</span>
          </button>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
            aria-label="Collection category"
            className={
              styles.collectionsToolbarSelect
            }
          >
            <option value="all">
              All Collections
            </option>

            <option value="countries">
              Countries
            </option>

            <option value="periods">
              Historical Periods
            </option>

            <option value="rulers">
              Rulers
            </option>

            <option value="metals">
              Metals
            </option>

            <option value="regions">
              Regions
            </option>
          </select>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
            aria-label="Sort collections"
            className={
              styles.collectionsToolbarSelect
            }
          >
            <option value="featured">
              Featured
            </option>

            <option value="largest">
              Most Coins
            </option>

            <option value="newest">
              Newest
            </option>

            <option value="az">
              Name A–Z
            </option>
          </select>

          <div
            className={
              styles.collectionsToolbarViewToggle
            }
            aria-label="Change collection view"
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
              className={`${styles.collectionsToolbarViewButton} ${
                viewMode === "grid"
                  ? styles.collectionsToolbarViewButtonActive
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
              className={`${styles.collectionsToolbarViewButton} ${
                viewMode === "list"
                  ? styles.collectionsToolbarViewButtonActive
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

export default CollectionsToolbar;