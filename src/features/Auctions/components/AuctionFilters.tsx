"use client";

import {
  RotateCcw,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import styles from "@/components/animations/css/auctions/AuctionFilters.module.css";

const statuses = [
  "All Status",
  "Live Now",
  "Ending Soon",
  "Upcoming",
  "Ended",
];

const countries = [
  "All Countries",
  "Pakistan",
  "India",
  "United Kingdom",
  "United States",
  "Saudi Arabia",
  "Turkey",
  "France",
  "Germany",
  "China",
  "Japan",
];

const metals = [
  "All Metals",
  "Gold",
  "Silver",
  "Copper",
  "Bronze",
  "Nickel",
  "Aluminium",
  "Other",
];

const AuctionFilters = () => {
  const [isMobileOpen, setIsMobileOpen] =
    useState(false);

  const [status, setStatus] =
    useState("All Status");

  const [country, setCountry] =
    useState("All Countries");

  const [metal, setMetal] =
    useState("All Metals");

  const [minBid, setMinBid] =
    useState("");

  const [maxBid, setMaxBid] =
    useState("");

  useEffect(() => {
    const handleOpenFilters = () => {
      setIsMobileOpen(true);
    };

    window.addEventListener(
      "coinheritage:open-auctions-filters",
      handleOpenFilters
    );

    return () => {
      window.removeEventListener(
        "coinheritage:open-auctions-filters",
        handleOpenFilters
      );
    };
  }, []);

  useEffect(() => {
    if (!isMobileOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isMobileOpen]);

  const resetFilters = () => {
    setStatus("All Status");
    setCountry("All Countries");
    setMetal("All Metals");
    setMinBid("");
    setMaxBid("");
  };

  const applyFilters = () => {
    setIsMobileOpen(false);

    // Later:
    // connect to URL search params
    // or backend auction query.
  };

  return (
    <>
      <aside
        className={
          styles.auctionFiltersDesktop
        }
      >
        <FilterContent
          status={status}
          setStatus={setStatus}
          country={country}
          setCountry={setCountry}
          metal={metal}
          setMetal={setMetal}
          minBid={minBid}
          setMinBid={setMinBid}
          maxBid={maxBid}
          setMaxBid={setMaxBid}
          onReset={resetFilters}
          onApply={applyFilters}
          showApplyButton={false}
        />
      </aside>

      <div
        className={`${styles.auctionFiltersMobileRoot} ${
          isMobileOpen
            ? styles.auctionFiltersMobileOpen
            : ""
        }`}
      >
        <button
          type="button"
          aria-label="Close auction filters"
          onClick={() =>
            setIsMobileOpen(false)
          }
          className={
            styles.auctionFiltersBackdrop
          }
        />

        <aside
          className={
            styles.auctionFiltersDrawer
          }
          aria-label="Auction filters"
        >
          <div
            className={
              styles.auctionFiltersDrawerHeader
            }
          >
            <div
              className={
                styles.auctionFiltersDrawerTitle
              }
            >
              <SlidersHorizontal
                size={17}
                strokeWidth={1.8}
              />

              <span>Filters</span>
            </div>

            <button
              type="button"
              aria-label="Close filters"
              onClick={() =>
                setIsMobileOpen(false)
              }
              className={
                styles.auctionFiltersClose
              }
            >
              <X
                size={17}
                strokeWidth={1.8}
              />
            </button>
          </div>

          <div
            className={
              styles.auctionFiltersDrawerBody
            }
          >
            <FilterContent
              status={status}
              setStatus={setStatus}
              country={country}
              setCountry={setCountry}
              metal={metal}
              setMetal={setMetal}
              minBid={minBid}
              setMinBid={setMinBid}
              maxBid={maxBid}
              setMaxBid={setMaxBid}
              onReset={resetFilters}
              onApply={applyFilters}
              showApplyButton
            />
          </div>
        </aside>
      </div>
    </>
  );
};

interface FilterContentProps {
  status: string;
  setStatus: (value: string) => void;

  country: string;
  setCountry: (value: string) => void;

  metal: string;
  setMetal: (value: string) => void;

  minBid: string;
  setMinBid: (value: string) => void;

  maxBid: string;
  setMaxBid: (value: string) => void;

  onReset: () => void;
  onApply: () => void;

  showApplyButton: boolean;
}

const FilterContent = ({
  status,
  setStatus,
  country,
  setCountry,
  metal,
  setMetal,
  minBid,
  setMinBid,
  maxBid,
  setMaxBid,
  onReset,
  onApply,
  showApplyButton,
}: FilterContentProps) => {
  return (
    <div className={styles.auctionFiltersCard}>
      <div
        className={
          styles.auctionFiltersHeader
        }
      >
        <div>
          <p
            className={
              styles.auctionFiltersTitle
            }
          >
            Refine Auctions
          </p>

          <span
            className={
              styles.auctionFiltersSubtitle
            }
          >
            Narrow listings by auction details
          </span>
        </div>

        <button
          type="button"
          onClick={onReset}
          className={
            styles.auctionFiltersReset
          }
        >
          <RotateCcw
            size={13}
            strokeWidth={1.8}
          />

          <span>Reset</span>
        </button>
      </div>

      <FilterSelect
        label="Auction Status"
        value={status}
        options={statuses}
        onChange={setStatus}
      />

      <FilterSelect
        label="Country"
        value={country}
        options={countries}
        onChange={setCountry}
      />

      <FilterSelect
        label="Metal"
        value={metal}
        options={metals}
        onChange={setMetal}
      />

      <div
        className={
          styles.auctionFiltersGroup
        }
      >
        <label
          className={
            styles.auctionFiltersLabel
          }
        >
          Bid Range
        </label>

        <div
          className={
            styles.auctionFiltersPriceGrid
          }
        >
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={minBid}
            onChange={(event) =>
              setMinBid(
                event.target.value
              )
            }
            placeholder="Min"
            className={
              styles.auctionFiltersInput
            }
          />

          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={maxBid}
            onChange={(event) =>
              setMaxBid(
                event.target.value
              )
            }
            placeholder="Max"
            className={
              styles.auctionFiltersInput
            }
          />
        </div>
      </div>

      {showApplyButton && (
        <button
          type="button"
          onClick={onApply}
          className={
            styles.auctionFiltersApply
          }
        >
          Apply Filters
        </button>
      )}
    </div>
  );
};

interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const FilterSelect = ({
  label,
  value,
  options,
  onChange,
}: FilterSelectProps) => {
  return (
    <div
      className={
        styles.auctionFiltersGroup
      }
    >
      <label
        className={
          styles.auctionFiltersLabel
        }
      >
        {label}
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className={
          styles.auctionFiltersSelect
        }
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AuctionFilters;