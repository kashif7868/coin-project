import {
  BadgeDollarSign,
  Coins,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

import styles from "@/components/animations/css/sell/SellBenefits.module.css";

const benefits = [
  {
    title: "First 10 Listings Free",
    description:
      "Start selling without a subscription. Your first 10 published coin listings are free.",
    icon: Coins,
  },
  {
    title: "5% Success Fee",
    description:
      "CoinHeritage charges a 5% platform commission only when your coin is successfully sold.",
    icon: BadgeDollarSign,
  },
  {
    title: "Scanner-Assisted Listing",
    description:
      "Use the existing coin scanner to help identify important coin details before creating your listing.",
    icon: ScanLine,
  },
  {
    title: "Seller-Controlled Details",
    description:
      "Review and edit the identified information before anything is published to the marketplace.",
    icon: ShieldCheck,
  },
];

const SellBenefits = () => {
  return (
    <section className={styles.sellBenefits}>
      <div className={styles.sellBenefitsHeader}>
        <p className={styles.sellBenefitsEyebrow}>
          Seller Benefits
        </p>

        <h2 className={styles.sellBenefitsTitle}>
          Built to make selling collectible coins simpler.
        </h2>
      </div>

      <div className={styles.sellBenefitsGrid}>
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              key={benefit.title}
              className={styles.sellBenefitCard}
            >
              <div className={styles.sellBenefitIcon}>
                <Icon
                  size={20}
                  strokeWidth={1.7}
                />
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          );
        })}
      </div>

      <div className={styles.sellBenefitsCommission}>
        <div>
          <span>Example Sale</span>

          <strong>$100</strong>
        </div>

        <div className={styles.sellBenefitsCommissionDivider} />

        <div>
          <span>CoinHeritage 5%</span>

          <strong>$5</strong>
        </div>

        <div className={styles.sellBenefitsCommissionDivider} />

        <div>
          <span>Seller Receives</span>

          <strong>$95</strong>
        </div>
      </div>
    </section>
  );
};

export default SellBenefits;