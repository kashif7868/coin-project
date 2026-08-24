import {
  BookOpen,
  Crown,
  Landmark,
  ScrollText,
} from "lucide-react";

import styles from "@/components/animations/css/coinDetails/CoinHistory.module.css";

interface CoinHistoryProps {
  coinId: string;
}

const CoinHistory = ({
  coinId,
}: CoinHistoryProps) => {
  return (
    <section className={styles.coinHistory}>
      <div className={styles.coinHistoryHeader}>
        <div>
          <p className={styles.coinHistoryEyebrow}>
            Historical Context
          </p>

          <h2 className={styles.coinHistoryTitle}>
            Story Behind the Coin
          </h2>
        </div>

        <div className={styles.coinHistoryHeaderIcon}>
          <BookOpen
            size={18}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div className={styles.coinHistoryIntro}>
        <p>
          This one-rupee coin dates from the reign of
          King George V and reflects the monetary system
          used across British India during the early
          twentieth century.
        </p>
      </div>

      <div className={styles.coinHistoryTimeline}>
        <div className={styles.coinHistoryItem}>
          <div className={styles.coinHistoryItemIcon}>
            <Crown
              size={16}
              strokeWidth={1.7}
            />
          </div>

          <div className={styles.coinHistoryItemText}>
            <span>Ruler</span>

            <strong>
              King George V
            </strong>

            <p>
              Coins issued during his reign carried
              imperial portraiture and standardized
              colonial monetary designs.
            </p>
          </div>
        </div>

        <div className={styles.coinHistoryItem}>
          <div className={styles.coinHistoryItemIcon}>
            <Landmark
              size={16}
              strokeWidth={1.7}
            />
          </div>

          <div className={styles.coinHistoryItemText}>
            <span>Mint &amp; Issue</span>

            <strong>
              Calcutta Mint · 1918
            </strong>

            <p>
              The Calcutta Mint was one of the principal
              mints producing circulating coinage for
              British India.
            </p>
          </div>
        </div>

        <div className={styles.coinHistoryItem}>
          <div className={styles.coinHistoryItemIcon}>
            <ScrollText
              size={16}
              strokeWidth={1.7}
            />
          </div>

          <div className={styles.coinHistoryItemText}>
            <span>Collector Note</span>

            <strong>
              Historical Silver Issue
            </strong>

            <p>
              Surviving examples are collected for their
              historical relevance, silver content,
              portrait design and mint variations.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.coinHistoryProvenance}>
        <span className={styles.coinHistoryProvenanceLabel}>
          Provenance
        </span>

        <p>
          Seller-provided provenance and ownership
          history will appear here when available.
        </p>
      </div>

      <div className={styles.coinHistoryReference}>
        Reference: {coinId}
      </div>
    </section>
  );
};

export default CoinHistory;