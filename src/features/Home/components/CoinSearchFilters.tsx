"use client";

import {
  ChevronDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

const mobileFilters = [
  "Country",
  "Period",
  "Metal",
  "Condition",
];

const CoinSearchFilters = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="h-full min-w-0 rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_14px_36px_rgba(0,0,0,0.09)] sm:p-4">
      {/* SEARCH */}
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative min-w-0 flex-1">
          <Search
            size={18}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search coins by name, country, emperor, year..."
            className="h-12 w-full min-w-0 rounded-xl border border-neutral-200 bg-white pl-11 pr-4 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[#d99a31] focus:ring-2 focus:ring-[#d99a31]/10"
          />
        </div>

        {/* DESKTOP SEARCH */}
        <button
          type="button"
          className="hidden h-12 w-[120px] shrink-0 items-center justify-center rounded-xl bg-[#dfa02d] text-[13px] font-semibold text-black transition-colors hover:bg-[#e9ad43] lg:inline-flex"
        >
          Search
        </button>

        {/* MOBILE FILTER */}
        <button
          type="button"
          aria-label="Open filters"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 lg:hidden"
        >
          <SlidersHorizontal size={19} />
        </button>
      </div>

      {/* MOBILE FILTER CHIPS */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {mobileFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-4 text-[11px] font-medium text-neutral-600"
          >
            {filter}
            <ChevronDown size={13} />
          </button>
        ))}
      </div>

      {/* DESKTOP FILTERS */}
      <div className="mt-3 hidden grid-cols-4 gap-3 lg:grid">
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

const FilterButton = ({ label }: FilterButtonProps) => {
  return (
    <button
      type="button"
      className="flex h-10 min-w-0 items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-white px-4 text-[11px] font-medium text-neutral-700 transition-colors hover:border-[#d9a354]"
    >
      <span className="truncate">{label}</span>

      <ChevronDown
        size={14}
        strokeWidth={1.8}
        className="shrink-0"
      />
    </button>
  );
};

export default CoinSearchFilters;