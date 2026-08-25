"use client";

import {
  FileText,
  Info,
} from "lucide-react";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellListing/SellDescriptionForm.module.css";

const MAX_DESCRIPTION_LENGTH = 800;

const SellDescriptionForm = () => {
  const description =
    useSellerListingStore(
      (state) => state.description
    );

  const setDescription =
    useSellerListingStore(
      (state) => state.setDescription
    );

  const remainingCharacters =
    MAX_DESCRIPTION_LENGTH -
    description.length;

  return (
    <section className={styles.sellDescriptionForm}>
      <div className={styles.sellDescriptionHeader}>
        <div>
          <p
            className={
              styles.sellDescriptionEyebrow
            }
          >
            Listing Description
          </p>

          <h2
            className={
              styles.sellDescriptionTitle
            }
          >
            Tell Buyers About Your Coin
          </h2>

          <p
            className={
              styles.sellDescriptionDescription
            }
          >
            Add useful seller notes such as visible
            condition details, provenance, packaging or
            anything a buyer should know before purchasing.
          </p>
        </div>

        <div
          className={
            styles.sellDescriptionHeaderIcon
          }
        >
          <FileText
            size={19}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div className={styles.sellDescriptionField}>
        <label htmlFor="seller-description">
          Seller Description
        </label>

        <textarea
          id="seller-description"
          value={description}
          onChange={(event) => {
            const value =
              event.target.value.slice(
                0,
                MAX_DESCRIPTION_LENGTH
              );

            setDescription(value);
          }}
          rows={7}
          placeholder="Example: Original collectible coin with clear details on both sides. Light circulation marks visible. Please review the uploaded images carefully before purchase."
        />

        <div className={styles.sellDescriptionMeta}>
          <span>
            Optional, but recommended for buyer confidence.
          </span>

          <strong
            className={
              remainingCharacters < 80
                ? styles.sellDescriptionLimit
                : ""
            }
          >
            {remainingCharacters} characters left
          </strong>
        </div>
      </div>

      <div className={styles.sellDescriptionTip}>
        <Info
          size={17}
          strokeWidth={1.8}
        />

        <div>
          <strong>
            Keep the description factual
          </strong>

          <span>
            Avoid unsupported authenticity, rarity or
            condition claims. Buyers should be able to
            compare your description with the coin images
            and verified listing details.
          </span>
        </div>
      </div>
    </section>
  );
};

export default SellDescriptionForm;