import {
  CalendarRange,
  Coins,
  Crown,
  Landmark,
  Layers3,
  ShoppingBag,
} from "lucide-react";

import styles from "@/components/animations/css/collectionDetails/CollectionStats.module.css";

interface CollectionStatsProps {
  collectionId: string;
}

const stats = [
  {
    label: "Total Coins",
    value: "84",
    icon: Coins,
  },
  {
    label: "Date Range",
    value: "1835–1947",
    icon: CalendarRange,
  },
  {
    label: "Major Mints",
    value: "3",
    icon: Landmark,
  },
  {
    label: "Primary Metals",
    value: "Silver",
    icon: Layers3,
  },
  {
    label: "Key Rulers",
    value: "6",
    icon: Crown,
  },
  {
    label: "For Sale",
    value: "21",
    icon: ShoppingBag,
  },
];

const CollectionStats = ({
  collectionId,
}: CollectionStatsProps) => {
  return (
    <section className={styles.collectionStats}>
      <div className={styles.collectionStatsHeader}>
        <div>
          <p className={styles.collectionStatsEyebrow}>
            Collection Summary
          </p>

          <h2 className={styles.collectionStatsTitle}>
            At a Glance
          </h2>
        </div>
      </div>

      <div className={styles.collectionStatsGrid}>
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={styles.collectionStatsItem}
            >
              <div className={styles.collectionStatsIcon}>
                <Icon
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <div className={styles.collectionStatsText}>
                <span>{stat.label}</span>

                <strong>{stat.value}</strong>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.collectionStatsHighlight}>
        <span>Collection Highlight</span>

        <strong>
          Silver Rupees of British India
        </strong>

        <p>
          The strongest representation in this collection
          comes from silver rupee issues across multiple
          rulers, years and mint variations.
        </p>
      </div>

      <div className={styles.collectionStatsReference}>
        Collection: {collectionId}
      </div>
    </section>
  );
};

export default CollectionStats;