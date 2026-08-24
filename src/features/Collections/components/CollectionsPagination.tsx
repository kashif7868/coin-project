"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/collections/CollectionsPagination.module.css";

const totalPages = 6;

const CollectionsPagination = () => {
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
      aria-label="Collections pagination"
      className={
        styles.collectionsPagination
      }
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() =>
          goToPage(currentPage - 1)
        }
        className={
          styles.collectionsPaginationArrow
        }
      >
        <ChevronLeft
          size={16}
          strokeWidth={1.8}
        />
      </button>

      <div
        className={
          styles.collectionsPaginationPages
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
            className={`${styles.collectionsPaginationPage} ${
              currentPage === page
                ? styles.collectionsPaginationPageActive
                : ""
            }`}
          >
            {page}
          </button>
        ))}

        <span
          className={
            styles.collectionsPaginationEllipsis
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
          className={`${styles.collectionsPaginationPage} ${
            currentPage === totalPages
              ? styles.collectionsPaginationPageActive
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
          styles.collectionsPaginationArrow
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

export default CollectionsPagination;