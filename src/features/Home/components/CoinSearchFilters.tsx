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
      toast.info("Enter a coin name, country, year or emperor.");
      return;
    }

    toast.info("Search ready", {
      description:
        "Search API will be connected with the backend later.",
    });
  };

  return (
    <div className="h-full w-full min-w-0 rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_14px_36px_rgba(0,0,0,0.09)] sm:p-4">
      {/* Search Row */}
      <form
        onSubmit={handleSubmit}
        className="flex min-w-0 items-center gap-2 sm:gap-3"
      >
        <div className="relative min-w-0 flex-1">
          <Search
            size={18}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
          />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search coins by name, country, emperor, year..."
            className="h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-10 pr-3 text-[12px] text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10 sm:h-12 sm:pl-11 sm:pr-4 sm:text-[13px]"
          />
        </div>

        {/* Desktop Search */}
        <button
          type="submit"
          className="hidden h-11 shrink-0 items-center justify-center rounded-xl bg-[#dfa02d] px-5 text-[12px] font-semibold text-black transition-colors hover:bg-[#e9ad43] lg:inline-flex xl:h-12 xl:px-7 xl:text-[13px]"
        >
          Search
        </button>

        {/* Mobile Filter Toggle */}
        <button
          type="button"
          aria-label="Toggle filters"
          aria-expanded={showMobileFilters}
          onClick={() =>
            setShowMobileFilters((current) => !current)
          }
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition sm:h-12 sm:w-12 lg:hidden ${
            showMobileFilters
              ? "border-[#d99a31]/40 bg-[#fff8ec] text-[#b87516]"
              : "border-neutral-200 bg-white text-neutral-700"
          }`}
        >
          <SlidersHorizontal
            size={18}
            strokeWidth={1.8}
          />
        </button>
      </form>

      {/* Mobile Filters */}
      <div
        className={`grid transition-all duration-200 lg:hidden ${
          showMobileFilters
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {mobileFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="flex h-9 min-w-0 items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-white px-3 text-[10px] font-medium text-neutral-600 transition hover:border-[#d9a354]"
              >
                <span className="truncate">
                  {filter}
                </span>

                <ChevronDown
                  size={13}
                  strokeWidth={1.8}
                  className="shrink-0"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="mt-3 hidden min-w-0 gap-2 lg:grid lg:grid-cols-2 xl:grid-cols-4 xl:gap-3">
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
      className="flex h-10 min-w-0 items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-white px-3 text-[10px] font-medium text-neutral-700 transition-colors hover:border-[#d9a354] xl:px-4 xl:text-[11px]"
    >
      <span className="truncate">
        {label}
      </span>

      <ChevronDown
        size={14}
        strokeWidth={1.8}
        className="shrink-0"
      />
    </button>
  );
};

export default CoinSearchFilters;