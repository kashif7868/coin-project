import {
  BookOpen,
  Compass,
  Crown,
  Landmark,
  ScrollText,
} from "lucide-react";

import styles from "@/components/animations/css/collectionDetails/CollectionOverview.module.css";

interface CollectionOverviewProps {
  collectionId: string;
}

const overviewItems = [
  {
    label: "Historical Scope",
    value: "British India",
    description:
      "Coins issued across the British Indian monetary period, including imperial portrait issues and regional mint variations.",
    icon: Landmark,
  },
  {
    label: "Primary Theme",
    value: "Colonial Coinage",
    description:
      "A collection focused on circulating denominations, silver rupees and historically significant royal issues.",
    icon: Crown,
  },
  {
    label: "Geographic Focus",
    value: "South Asia",
    description:
      "Coinage linked to the Indian subcontinent and major minting centres active during the period.",
    icon: Compass,
  },
  {
    label: "Collector Focus",
    value: "History & Variants",
    description:
      "Suitable for collectors exploring mint marks, rulers, dates, metals and denomination variants.",
    icon: ScrollText,
  },
];

const CollectionOverview = ({
  collectionId,
}: CollectionOverviewProps) => {
  return (
    <section className={styles.collectionOverview}>
      <div className={styles.collectionOverviewHeader}>
        <div>
          <p className={styles.collectionOverviewEyebrow}>
            Collection Profile
          </p>

          <h2 className={styles.collectionOverviewTitle}>
            About This Collection
          </h2>
        </div>

        <div className={styles.collectionOverviewHeaderIcon}>
          <BookOpen
            size={18}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <p className={styles.collectionOverviewIntro}>
        This collection brings together historically
        significant coins associated with British India,
        presenting representative issues across rulers,
        denominations, metals and minting periods.
      </p>

      <div className={styles.collectionOverviewGrid}>
        {overviewItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={styles.collectionOverviewItem}
            >
              <div
                className={
                  styles.collectionOverviewItemIcon
                }
              >
                <Icon
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <div
                className={
                  styles.collectionOverviewItemText
                }
              >
                <span>{item.label}</span>

                <strong>{item.value}</strong>

                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.collectionOverviewNote}>
        <span>Collector Note</span>

        <p>
          Collection contents will later be generated from
          verified marketplace listings and collection
          metadata rather than static frontend data.
        </p>
      </div>

      <div className={styles.collectionOverviewReference}>
        Collection reference: {collectionId}
      </div>
    </section>
  );
};

export default CollectionOverview;