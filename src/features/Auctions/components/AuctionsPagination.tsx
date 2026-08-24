"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/auctions/AuctionsPagination.module.css";

const totalPages = 8;

const AuctionsPagination = () => {
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

  const visiblePages = [1, 2, 3, 4];

  return (
    <nav
      aria-label="Auctions pagination"
      className={styles.auctionsPagination}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() =>
          goToPage(currentPage - 1)
        }
        className={
          styles.auctionsPaginationArrow
        }
      >
        <ChevronLeft
          size={16}
          strokeWidth={1.8}
        />
      </button>

      <div
        className={
          styles.auctionsPaginationPages
        }
      >
        {visiblePages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() =>
              goToPage(page)
            }
            aria-current={
              currentPage === page
                ? "page"
                : undefined
            }
            className={`${styles.auctionsPaginationPage} ${
              currentPage === page
                ? styles.auctionsPaginationPageActive
                : ""
            }`}
          >
            {page}
          </button>
        ))}

        <span
          className={
            styles.auctionsPaginationEllipsis
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
          className={`${styles.auctionsPaginationPage} ${
            currentPage === totalPages
              ? styles.auctionsPaginationPageActive
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
        className={
          styles.auctionsPaginationArrow
        }
      >
        <ChevronRight
          size={16}
          strokeWidth={1.8}
        />
      </button>
    </nav>
  );
};

export default AuctionsPagination;