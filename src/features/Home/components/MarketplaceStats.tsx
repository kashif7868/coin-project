import {
  Coins,
  Globe2,
  ScanLine,
  Users,
} from "lucide-react";

import styles from "@/components/animations/css/home/MarketplaceStats.module.css";

const stats = [
  {
    label: "Coins Listed",
    value: "50K+",
    icon: Coins,
  },
  {
    label: "Happy Collectors",
    value: "10K+",
    icon: Users,
  },
  {
    label: "Countries Served",
    value: "100+",
    icon: Globe2,
  },
  {
    label: "Accurate Data",
    value: "99.9%",
    icon: ScanLine,
  },
];

const MarketplaceStats = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        Why Collectors Choose Us?
      </h2>

      <div className={styles.grid}>
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={styles.item}
            >
              <div className={styles.iconBox}>
                <Icon
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <div className={styles.text}>
                <p className={styles.value}>
                  {stat.value}
                </p>

                <p className={styles.label}>
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketplaceStats;