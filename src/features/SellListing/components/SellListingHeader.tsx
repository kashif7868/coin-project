import {
  BadgeDollarSign,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/sellListing/SellListingHeader.module.css";

const SellListingHeader = () => {
  return (
    <section className={styles.sellListingHeader}>
      <div
        className={
          styles.sellListingHeaderGlowLeft
        }
      />

      <div
        className={
          styles.sellListingHeaderGlowRight
        }
      />

      <div
        className={
          styles.sellListingHeaderContainer
        }
      >
        <div
          className={
            styles.sellListingHeaderBadge
          }
        >
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>Seller Listing</span>
        </div>

        <div
          className={
            styles.sellListingHeaderContent
          }
        >
          <div>
            <h1>
              Set Your
              <span> Price &amp; Quantity.</span>
            </h1>

            <p>
              Choose how many coins you are selling, set
              your marketplace price and review the
              CoinHeritage commission before continuing.
            </p>
          </div>

          <div
            className={
              styles.sellListingHeaderIcon
            }
          >
            <BadgeDollarSign
              size={28}
              strokeWidth={1.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellListingHeader;