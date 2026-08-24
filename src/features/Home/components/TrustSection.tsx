import {
  BadgeCheck,
  CreditCard,
  PackageCheck,
  Tag,
} from "lucide-react";

import styles from "@/components/animations/css/home/TrustSection.module.css";

const trustItems = [
  {
    title: "Authentic Coins",
    description: "Verified listings & trusted details",
    icon: BadgeCheck,
  },
  {
    title: "Fair Pricing",
    description: "Transparent collectible pricing",
    icon: Tag,
  },
  {
    title: "Secure Payments",
    description: "Protected transactions",
    icon: CreditCard,
  },
  {
    title: "Reliable Delivery",
    description: "Worldwide collector shipping",
    icon: PackageCheck,
  },
];

const TrustSection = () => {
  return (
    <section
      className={styles.trustSection}
      aria-label="CoinHeritage marketplace benefits"
    >
      {trustItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={styles.trustSectionItem}
          >
            <div className={styles.trustSectionIconBox}>
              <Icon
                size={16}
                strokeWidth={1.7}
              />
            </div>

            <div className={styles.trustSectionText}>
              <p className={styles.trustSectionTitle}>
                {item.title}
              </p>

              <p
                className={
                  styles.trustSectionDescription
                }
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TrustSection;