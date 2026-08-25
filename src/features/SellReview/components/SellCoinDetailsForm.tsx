"use client";

import {
  BadgeCheck,
  CalendarDays,
  Coins,
  Crown,
  Gem,
  Globe2,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellReview/SellCoinDetailsForm.module.css";

const SellCoinDetailsForm = () => {
  const coinDetails =
    useSellerListingStore(
      (state) => state.coinDetails
    );

  const setCoinDetails =
    useSellerListingStore(
      (state) => state.setCoinDetails
    );

  const [name, setName] =
    useState(coinDetails.name);

  const [country, setCountry] =
    useState(coinDetails.country);

  const [year, setYear] =
    useState(coinDetails.year);

  const [denomination, setDenomination] =
    useState(coinDetails.denomination);

  const [metal, setMetal] =
    useState(coinDetails.metal);

  const [condition, setCondition] =
    useState(coinDetails.condition);

  const [rarity, setRarity] =
    useState(coinDetails.rarity);

  const [estimatedValue, setEstimatedValue] =
    useState(coinDetails.estimatedValue);

  const saveDetails = () => {
    setCoinDetails({
      name: name.trim(),
      country: country.trim(),
      year: year.trim(),
      denomination: denomination.trim(),
      metal: metal.trim(),
      condition: condition.trim(),
      rarity: rarity.trim(),
      estimatedValue:
        estimatedValue.trim(),
    });
  };

  return (
    <section className={styles.sellCoinDetails}>
      <div className={styles.sellCoinDetailsHeader}>
        <div>
          <p
            className={
              styles.sellCoinDetailsEyebrow
            }
          >
            Coin Information
          </p>

          <h2
            className={
              styles.sellCoinDetailsTitle
            }
          >
            Verify Identified Details
          </h2>

          <p
            className={
              styles.sellCoinDetailsDescription
            }
          >
            Review every field before continuing. These
            details will later appear on the marketplace
            listing.
          </p>
        </div>

        <div
          className={
            styles.sellCoinDetailsHeaderIcon
          }
        >
          <Sparkles
            size={19}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div className={styles.sellCoinDetailsNotice}>
        <ShieldCheck
          size={17}
          strokeWidth={1.8}
        />

        <div>
          <strong>
            Seller verification required
          </strong>

          <span>
            Scanner-assisted information should always be
            reviewed by the seller before publishing.
          </span>
        </div>
      </div>

      <div className={styles.sellCoinDetailsGrid}>
        <Field
          icon={Coins}
          label="Coin Name"
          placeholder="e.g. Morgan Silver Dollar"
          value={name}
          onChange={setName}
        />

        <Field
          icon={Globe2}
          label="Country"
          placeholder="e.g. United States"
          value={country}
          onChange={setCountry}
        />

        <Field
          icon={CalendarDays}
          label="Year"
          placeholder="e.g. 1921"
          value={year}
          onChange={setYear}
        />

        <Field
          icon={Landmark}
          label="Denomination"
          placeholder="e.g. 1 Dollar"
          value={denomination}
          onChange={setDenomination}
        />

        <Field
          icon={Gem}
          label="Metal"
          placeholder="e.g. Silver"
          value={metal}
          onChange={setMetal}
        />

        <Field
          icon={BadgeCheck}
          label="Condition"
          placeholder="e.g. Very Fine"
          value={condition}
          onChange={setCondition}
        />

        <Field
          icon={Crown}
          label="Rarity"
          placeholder="e.g. Common, Scarce, Rare"
          value={rarity}
          onChange={setRarity}
        />

        <Field
          icon={Coins}
          label="Estimated Value"
          placeholder="e.g. $80 - $120"
          value={estimatedValue}
          onChange={setEstimatedValue}
        />
      </div>

      <div className={styles.sellCoinDetailsFooter}>
        <div>
          <span>
            You can edit these details again before
            publishing.
          </span>
        </div>

        <button
          type="button"
          onClick={saveDetails}
          className={styles.sellCoinDetailsSave}
        >
          <BadgeCheck
            size={16}
            strokeWidth={1.8}
          />

          <span>Save Coin Details</span>
        </button>
      </div>
    </section>
  );
};

interface FieldProps {
  icon: typeof Coins;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Field = ({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
}: FieldProps) => {
  const fieldId = `seller-${label
    .toLowerCase()
    .replaceAll(" ", "-")}`;

  return (
    <div className={styles.sellCoinDetailsField}>
      <label htmlFor={fieldId}>
        <Icon
          size={14}
          strokeWidth={1.7}
        />

        <span>{label}</span>
      </label>

      <input
        id={fieldId}
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};

export default SellCoinDetailsForm;