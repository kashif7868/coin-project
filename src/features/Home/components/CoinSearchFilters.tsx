"use client";

import {
  ChevronDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import {
  useState,
  type FormEvent,
} from "react";
import { toast } from "sonner";

import styles from "@/components/animations/css/home/CoinSearchFilters.module.css";

const mobileFilters = [
  "Country",
  "Period",
  "Metal",
  "Condition",
];

const CoinSearchFilters = () => {
  const [search, setSearch] = useState("");
  const [showMobileFilters, setShowMobileFilters] =
    useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const value = search.trim();

    if (!value) {
      toast.info(
        "Enter a coin name, country, year or emperor."
      );
      return;
    }

    toast.info("Search ready", {
      description:
        "Search API will be connected with the backend later.",
    });
  };

  return (
    <div className={styles.card}>
      <form
        onSubmit={handleSubmit}
        className={styles.searchRow}
      >
        <div className={styles.searchField}>
          <Search
            size={18}
            strokeWidth={1.8}
            className={styles.searchIcon}
          />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search coins by name, country, emperor, year..."
            className={styles.input}
          />
        </div>

        <button
          type="submit"
          className={styles.desktopSearchButton}
        >
          Search
        </button>

        <button
          type="button"
          aria-label="Toggle filters"
          aria-expanded={showMobileFilters}
          onClick={() =>
            setShowMobileFilters(
              (current) => !current
            )
          }
          className={`${styles.mobileFilterToggle} ${
            showMobileFilters
              ? styles.mobileFilterToggleActive
              : ""
          }`}
        >
          <SlidersHorizontal
            size={18}
            strokeWidth={1.8}
          />
        </button>
      </form>

      <div
        className={`${styles.mobileFilters} ${
          showMobileFilters
            ? styles.mobileFiltersOpen
            : ""
        }`}
      >
        <div className={styles.mobileFiltersInner}>
          <div className={styles.mobileFilterGrid}>
            {mobileFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={styles.mobileFilterButton}
              >
                <span>{filter}</span>

                <ChevronDown
                  size={13}
                  strokeWidth={1.8}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.desktopFilters}>
        <FilterButton label="All Countries" />
        <FilterButton label="All Periods" />
        <FilterButton label="All Metals" />
        <FilterButton label="All Conditions" />
      </div>
    </div>
  );
};

interface FilterButtonProps {
  label: string;
}

const FilterButton = ({
  label,
}: FilterButtonProps) => {
  return (
    <button
      type="button"
      className={styles.desktopFilterButton}
    >
      <span>{label}</span>

      <ChevronDown
        size={14}
        strokeWidth={1.8}
      />
    </button>
  );
};

export default CoinSearchFilters;