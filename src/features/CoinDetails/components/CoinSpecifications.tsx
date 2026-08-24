import {
  CircleDot,
  Diameter,
  Disc3,
  Gauge,
  Landmark,
  Medal,
  Scale,
  ShieldCheck,
} from "lucide-react";

import styles from "@/components/animations/css/coinDetails/CoinSpecifications.module.css";

interface CoinSpecificationsProps {
  coinId: string;
}

const specifications = [
  {
    label: "Denomination",
    value: "1 Rupee",
    icon: Medal,
  },
  {
    label: "Year",
    value: "1918",
    icon: Landmark,
  },
  {
    label: "Ruler",
    value: "George V",
    icon: ShieldCheck,
  },
  {
    label: "Mint",
    value: "Calcutta",
    icon: Landmark,
  },
  {
    label: "Metal",
    value: "Silver",
    icon: Disc3,
  },
  {
    label: "Weight",
    value: "11.66 g",
    icon: Scale,
  },
  {
    label: "Diameter",
    value: "30.5 mm",
    icon: Diameter,
  },
  {
    label: "Thickness",
    value: "Approx. 1.8 mm",
    icon: Gauge,
  },
  {
    label: "Edge",
    value: "Reeded",
    icon: CircleDot,
  },
  {
    label: "Condition",
    value: "Very Fine",
    icon: ShieldCheck,
  },
];

const CoinSpecifications = ({
  coinId,
}: CoinSpecificationsProps) => {
  return (
    <section className={styles.coinSpecifications}>
      <div className={styles.coinSpecificationsHeader}>
        <div>
          <p
            className={
              styles.coinSpecificationsEyebrow
            }
          >
            Coin Details
          </p>

          <h2
            className={
              styles.coinSpecificationsTitle
            }
          >
            Specifications
          </h2>
        </div>

        <span
          className={
            styles.coinSpecificationsReference
          }
        >
          {coinId}
        </span>
      </div>

      <div
        className={
          styles.coinSpecificationsGrid
        }
      >
        {specifications.map(
          (specification) => {
            const Icon =
              specification.icon;

            return (
              <div
                key={specification.label}
                className={
                  styles.coinSpecificationItem
                }
              >
                <div
                  className={
                    styles.coinSpecificationIcon
                  }
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                  />
                </div>

                <div
                  className={
                    styles.coinSpecificationText
                  }
                >
                  <span>
                    {specification.label}
                  </span>

                  <strong>
                    {specification.value}
                  </strong>
                </div>
              </div>
            );
          }
        )}
      </div>

      <p
        className={
          styles.coinSpecificationsNote
        }
      >
        Specifications are shown for collector reference
        and will later be populated from verified listing
        and identification data.
      </p>
    </section>
  );
};

export default CoinSpecifications;