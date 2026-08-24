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

import styles from "@/components/animations/css/collections/CollectionsFilters.module.css";

const categories = [
  "All Categories",
  "Countries",
  "Empires",
  "Rulers",
  "Periods",
  "Metals",
  "Regions",
  "Themes",
];

const regions = [
  "All Regions",
  "South Asia",
  "Middle East",
  "Europe",
  "East Asia",
  "North America",
  "Africa",
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
];

const CollectionsFilters = () => {
  const [isMobileOpen, setIsMobileOpen] =
    useState(false);

  const [category, setCategory] =
    useState("All Categories");

  const [region, setRegion] =
    useState("All Regions");

  const [period, setPeriod] =
    useState("All Periods");

  const [metal, setMetal] =
    useState("All Metals");

  const [minCoins, setMinCoins] =
    useState("");

  const [maxCoins, setMaxCoins] =
    useState("");

  useEffect(() => {
    const handleOpenFilters = () => {
      setIsMobileOpen(true);
    };

    window.addEventListener(
      "coinheritage:open-collections-filters",
      handleOpenFilters
    );

    return () => {
      window.removeEventListener(
        "coinheritage:open-collections-filters",
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

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isMobileOpen]);

  const resetFilters = () => {
    setCategory("All Categories");
    setRegion("All Regions");
    setPeriod("All Periods");
    setMetal("All Metals");
    setMinCoins("");
    setMaxCoins("");
  };

  const applyFilters = () => {
    setIsMobileOpen(false);

    // Later:
    // connect filter state with URL search params
    // and backend collection queries.
  };

  return (
    <>
      <aside
        className={
          styles.collectionsFiltersDesktop
        }
      >
        <FilterContent
          category={category}
          setCategory={setCategory}
          region={region}
          setRegion={setRegion}
          period={period}
          setPeriod={setPeriod}
          metal={metal}
          setMetal={setMetal}
          minCoins={minCoins}
          setMinCoins={setMinCoins}
          maxCoins={maxCoins}
          setMaxCoins={setMaxCoins}
          onReset={resetFilters}
          onApply={applyFilters}
          showApplyButton={false}
        />
      </aside>

      <div
        className={`${styles.collectionsFiltersMobileRoot} ${
          isMobileOpen
            ? styles.collectionsFiltersMobileOpen
            : ""
        }`}
      >
        <button
          type="button"
          aria-label="Close collection filters"
          onClick={() =>
            setIsMobileOpen(false)
          }
          className={
            styles.collectionsFiltersBackdrop
          }
        />

        <aside
          className={
            styles.collectionsFiltersDrawer
          }
          aria-label="Collection filters"
        >
          <div
            className={
              styles.collectionsFiltersDrawerHeader
            }
          >
            <div
              className={
                styles.collectionsFiltersDrawerTitle
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
                styles.collectionsFiltersClose
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
              styles.collectionsFiltersDrawerBody
            }
          >
            <FilterContent
              category={category}
              setCategory={setCategory}
              region={region}
              setRegion={setRegion}
              period={period}
              setPeriod={setPeriod}
              metal={metal}
              setMetal={setMetal}
              minCoins={minCoins}
              setMinCoins={setMinCoins}
              maxCoins={maxCoins}
              setMaxCoins={setMaxCoins}
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
  category: string;
  setCategory: (value: string) => void;

  region: string;
  setRegion: (value: string) => void;

  period: string;
  setPeriod: (value: string) => void;

  metal: string;
  setMetal: (value: string) => void;

  minCoins: string;
  setMinCoins: (value: string) => void;

  maxCoins: string;
  setMaxCoins: (value: string) => void;

  onReset: () => void;
  onApply: () => void;

  showApplyButton: boolean;
}

const FilterContent = ({
  category,
  setCategory,
  region,
  setRegion,
  period,
  setPeriod,
  metal,
  setMetal,
  minCoins,
  setMinCoins,
  maxCoins,
  setMaxCoins,
  onReset,
  onApply,
  showApplyButton,
}: FilterContentProps) => {
  return (
    <div
      className={
        styles.collectionsFiltersCard
      }
    >
      <div
        className={
          styles.collectionsFiltersHeader
        }
      >
        <div>
          <p
            className={
              styles.collectionsFiltersTitle
            }
          >
            Refine Collections
          </p>

          <span
            className={
              styles.collectionsFiltersSubtitle
            }
          >
            Browse by theme and historical attributes
          </span>
        </div>

        <button
          type="button"
          onClick={onReset}
          className={
            styles.collectionsFiltersReset
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
        label="Category"
        value={category}
        options={categories}
        onChange={setCategory}
      />

      <FilterSelect
        label="Region"
        value={region}
        options={regions}
        onChange={setRegion}
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

      <div
        className={
          styles.collectionsFiltersGroup
        }
      >
        <label
          className={
            styles.collectionsFiltersLabel
          }
        >
          Collection Size
        </label>

        <div
          className={
            styles.collectionsFiltersRangeGrid
          }
        >
          <input
            type="number"
            min="0"
            inputMode="numeric"
            value={minCoins}
            onChange={(event) =>
              setMinCoins(
                event.target.value
              )
            }
            placeholder="Min coins"
            className={
              styles.collectionsFiltersInput
            }
          />

          <input
            type="number"
            min="0"
            inputMode="numeric"
            value={maxCoins}
            onChange={(event) =>
              setMaxCoins(
                event.target.value
              )
            }
            placeholder="Max coins"
            className={
              styles.collectionsFiltersInput
            }
          />
        </div>
      </div>

      {showApplyButton && (
        <button
          type="button"
          onClick={onApply}
          className={
            styles.collectionsFiltersApply
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
        styles.collectionsFiltersGroup
      }
    >
      <label
        className={
          styles.collectionsFiltersLabel
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
          styles.collectionsFiltersSelect
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

export default CollectionsFilters;