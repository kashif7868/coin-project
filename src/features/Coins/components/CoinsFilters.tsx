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

import styles from "@/components/animations/css/coins/CoinsFilters.module.css";

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
  "Italy",
  "China",
  "Japan",
];

const periods = [
  "All Periods",
  "Ancient",
  "Medieval",
  "Early Modern",
  "19th Century",
  "20th Century",
  "Modern",
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

const conditions = [
  "All Conditions",
  "Uncirculated",
  "Extremely Fine",
  "Very Fine",
  "Fine",
  "Good",
];

const CoinsFilters = () => {
  const [isMobileOpen, setIsMobileOpen] =
    useState(false);

  const [country, setCountry] =
    useState("All Countries");

  const [period, setPeriod] =
    useState("All Periods");

  const [metal, setMetal] =
    useState("All Metals");

  const [condition, setCondition] =
    useState("All Conditions");

  const [minPrice, setMinPrice] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

  useEffect(() => {
    const handleOpenFilters = () => {
      setIsMobileOpen(true);
    };

    window.addEventListener(
      "coinheritage:open-coins-filters",
      handleOpenFilters
    );

    return () => {
      window.removeEventListener(
        "coinheritage:open-coins-filters",
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
    setCountry("All Countries");
    setPeriod("All Periods");
    setMetal("All Metals");
    setCondition("All Conditions");
    setMinPrice("");
    setMaxPrice("");
  };

  const applyFilters = () => {
    setIsMobileOpen(false);

    // Later:
    // sync filter state with URL/search params
    // or query backend using these values.
  };

  return (
    <>
      <aside
        className={
          styles.coinsFiltersDesktop
        }
      >
        <FilterContent
          country={country}
          setCountry={setCountry}
          period={period}
          setPeriod={setPeriod}
          metal={metal}
          setMetal={setMetal}
          condition={condition}
          setCondition={setCondition}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          onReset={resetFilters}
          onApply={applyFilters}
          showApplyButton={false}
        />
      </aside>

      <div
        className={`${styles.coinsFiltersMobileRoot} ${
          isMobileOpen
            ? styles.coinsFiltersMobileOpen
            : ""
        }`}
      >
        <button
          type="button"
          aria-label="Close filters"
          onClick={() =>
            setIsMobileOpen(false)
          }
          className={
            styles.coinsFiltersBackdrop
          }
        />

        <aside
          className={
            styles.coinsFiltersDrawer
          }
          aria-label="Coin filters"
        >
          <div
            className={
              styles.coinsFiltersDrawerHeader
            }
          >
            <div
              className={
                styles.coinsFiltersDrawerTitle
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
                styles.coinsFiltersClose
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
              styles.coinsFiltersDrawerBody
            }
          >
            <FilterContent
              country={country}
              setCountry={setCountry}
              period={period}
              setPeriod={setPeriod}
              metal={metal}
              setMetal={setMetal}
              condition={condition}
              setCondition={setCondition}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
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
  country: string;
  setCountry: (value: string) => void;

  period: string;
  setPeriod: (value: string) => void;

  metal: string;
  setMetal: (value: string) => void;

  condition: string;
  setCondition: (value: string) => void;

  minPrice: string;
  setMinPrice: (value: string) => void;

  maxPrice: string;
  setMaxPrice: (value: string) => void;

  onReset: () => void;
  onApply: () => void;
  showApplyButton: boolean;
}

const FilterContent = ({
  country,
  setCountry,
  period,
  setPeriod,
  metal,
  setMetal,
  condition,
  setCondition,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  onReset,
  onApply,
  showApplyButton,
}: FilterContentProps) => {
  return (
    <div className={styles.coinsFiltersCard}>
      <div
        className={
          styles.coinsFiltersHeader
        }
      >
        <div>
          <p
            className={
              styles.coinsFiltersTitle
            }
          >
            Refine Results
          </p>

          <span
            className={
              styles.coinsFiltersSubtitle
            }
          >
            Narrow coins by key attributes
          </span>
        </div>

        <button
          type="button"
          onClick={onReset}
          className={
            styles.coinsFiltersReset
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
        label="Country"
        value={country}
        options={countries}
        onChange={setCountry}
      />

      <FilterSelect
        label="Period"
        value={period}
        options={periods}
        onChange={setPeriod}
      />

      <FilterSelect
        label="Metal"
        value={metal}
        options={metals}
        onChange={setMetal}
      />

      <FilterSelect
        label="Condition"
        value={condition}
        options={conditions}
        onChange={setCondition}
      />

      <div
        className={
          styles.coinsFiltersGroup
        }
      >
        <label
          className={
            styles.coinsFiltersLabel
          }
        >
          Price Range
        </label>

        <div
          className={
            styles.coinsFiltersPriceGrid
          }
        >
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={minPrice}
            onChange={(event) =>
              setMinPrice(
                event.target.value
              )
            }
            placeholder="Min"
            className={
              styles.coinsFiltersInput
            }
          />

          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={maxPrice}
            onChange={(event) =>
              setMaxPrice(
                event.target.value
              )
            }
            placeholder="Max"
            className={
              styles.coinsFiltersInput
            }
          />
        </div>
      </div>

      {showApplyButton && (
        <button
          type="button"
          onClick={onApply}
          className={
            styles.coinsFiltersApply
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
        styles.coinsFiltersGroup
      }
    >
      <label
        className={
          styles.coinsFiltersLabel
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
          styles.coinsFiltersSelect
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

export default CoinsFilters;