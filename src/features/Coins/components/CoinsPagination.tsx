"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/coins/CoinsPagination.module.css";

const totalPages = 12;

const CoinsPagination = () => {
  const [currentPage, setCurrentPage] =
    useState(1);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const visiblePages = [
    1,
    2,
    3,
    4,
    5,
  ];

  return (
    <nav
      aria-label="Coins pagination"
      className={styles.pagination}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() =>
          goToPage(currentPage - 1)
        }
        className={styles.paginationArrow}
      >
        <ChevronLeft
          size={16}
          strokeWidth={1.8}
        />
      </button>

      <div className={styles.paginationPages}>
        {visiblePages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => goToPage(page)}
            aria-current={
              currentPage === page
                ? "page"
                : undefined
            }
            className={`${styles.paginationPage} ${
              currentPage === page
                ? styles.paginationPageActive
                : ""
            }`}
          >
            {page}
          </button>
        ))}

        <span
          className={
            styles.paginationEllipsis
          }
        >
          …
        </span>

        <button
          type="button"
          onClick={() =>
            goToPage(totalPages)
          }
          aria-current={
            currentPage === totalPages
              ? "page"
              : undefined
          }
          className={`${styles.paginationPage} ${
            currentPage === totalPages
              ? styles.paginationPageActive
              : ""
          }`}
        >
          {totalPages}
        </button>
      </div>

      <button
        type="button"
        aria-label="Next page"
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          goToPage(currentPage + 1)
        }
        className={styles.paginationArrow}
      >
        <ChevronRight
          size={16}
          strokeWidth={1.8}
        />
      </button>
    </nav>
  );
};

export default CoinsPagination;