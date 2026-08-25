"use client";

import {
  BadgeCheck,
  CalendarDays,
  Coins,
  FileText,
  Gem,
  Globe2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import { useSellerListingStore } from "@/store/sellerListingStore";

import styles from "@/components/animations/css/sellPreview/SellPreviewDetails.module.css";

const SellPreviewDetails = () => {
  const coinDetails =
    useSellerListingStore(
      (state) => state.coinDetails
    );

  const description =
    useSellerListingStore(
      (state) => state.description
    );

  const details = [
    {
      label: "Coin Name",
      value:
        coinDetails.name ||
        "Not provided",
      icon: Coins,
    },
    {
      label: "Country",
      value:
        coinDetails.country ||
        "Not provided",
      icon: Globe2,
    },
    {
      label: "Year",
      value:
        coinDetails.year ||
        "Not provided",
      icon: CalendarDays,
    },
    {
      label: "Denomination",
      value:
        coinDetails.denomination ||
        "Not provided",
      icon: Landmark,
    },
    {
      label: "Metal",
      value:
        coinDetails.metal ||
        "Not provided",
      icon: Gem,
    },
    {
      label: "Condition",
      value:
        coinDetails.condition ||
        "Not provided",
      icon: BadgeCheck,
    },
    {
      label: "Rarity",
      value:
        coinDetails.rarity ||
        "Not specified",
      icon: ShieldCheck,
    },
    {
      label: "Estimated Value",
      value:
        coinDetails.estimatedValue ||
        "Not available",
      icon: Coins,
    },
  ];

  return (
    <section
      className={
        styles.sellPreviewDetails
      }
    >
      <div
        className={
          styles.sellPreviewDetailsHeader
        }
      >
        <div>
          <p
            className={
              styles.sellPreviewDetailsEyebrow
            }
          >
            Listing Information
          </p>

          <h2
            className={
              styles.sellPreviewDetailsTitle
            }
          >
            Review Coin Details
          </h2>

          <p
            className={
              styles.sellPreviewDetailsDescription
            }
          >
            These are the details that will appear with
            your marketplace listing.
          </p>
        </div>

        <div
          className={
            styles.sellPreviewDetailsHeaderIcon
          }
        >
          <FileText
            size={19}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div
        className={
          styles.sellPreviewDetailsGrid
        }
      >
        {details.map((detail) => {
          const Icon =
            detail.icon;

          return (
            <div
              key={
                detail.label
              }
              className={
                styles.sellPreviewDetailItem
              }
            >
              <div
                className={
                  styles.sellPreviewDetailIcon
                }
              >
                <Icon
                  size={16}
                  strokeWidth={1.7}
                />
              </div>

              <div
                className={
                  styles.sellPreviewDetailText
                }
              >
                <span>
                  {detail.label}
                </span>

                <strong>
                  {detail.value}
                </strong>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={
          styles.sellPreviewDescription
        }
      >
        <div
          className={
            styles.sellPreviewDescriptionHeader
          }
        >
          <FileText
            size={15}
            strokeWidth={1.7}
          />

          <span>
            Seller Description
          </span>
        </div>

        <p>
          {description.trim()
            ? description
            : "No seller description has been added."}
        </p>
      </div>
    </section>
  );
};

export default SellPreviewDetails;