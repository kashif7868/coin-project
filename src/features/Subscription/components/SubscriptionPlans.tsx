"use client";

import { toast } from "sonner";

import SubscriptionPlanCard, {
  type SubscriptionPlanData,
} from "./SubscriptionPlanCard";

import styles from "@/components/animations/css/subscription/SubscriptionPlans.module.css";

const plans: SubscriptionPlanData[] = [
  {
    id: "starter",
    name: "Starter",
    price: 9,
    billingLabel: "/ month",
    listingLimit: "25 / month",
    scanLimit: "50 scans",
    description:
      "For casual sellers who want to continue listing beyond the free allowance.",
    features: [
      "Up to 25 coin listings per month",
      "Up to 50 scanner uses per month",
      "Standard seller dashboard access",
      "Marketplace listing management",
      "5% commission on successful sales",
    ],
  },
  {
    id: "collector-pro",
    name: "Collector Pro",
    price: 19,
    billingLabel: "/ month",
    listingLimit: "75 / month",
    scanLimit: "150 scans",
    description:
      "For active collectors and regular marketplace sellers.",
    features: [
      "Up to 75 coin listings per month",
      "Up to 150 scanner uses per month",
      "Priority listing management tools",
      "Advanced seller dashboard features",
      "5% commission on successful sales",
    ],
    popular: true,
  },
  {
    id: "dealer",
    name: "Dealer",
    price: 39,
    billingLabel: "/ month",
    listingLimit: "250 / month",
    scanLimit: "500 scans",
    description:
      "For high-volume sellers, dealers and professional coin businesses.",
    features: [
      "Up to 250 coin listings per month",
      "Up to 500 scanner uses per month",
      "High-volume seller inventory tools",
      "Priority seller support",
      "5% commission on successful sales",
    ],
  },
];

const SubscriptionPlans = () => {
  const handleSelectPlan = (
    plan: SubscriptionPlanData
  ) => {
    toast.success(
      `${plan.name} selected`,
      {
        description:
          "Subscription checkout will be connected after the seller flow is fully tested.",
      }
    );

    /*
     * Later:
     *
     * router.push(
     *   `/subscription/checkout?plan=${plan.id}`
     * );
     */
  };

  return (
    <section className={styles.subscriptionPlans}>
      <div className={styles.subscriptionPlansHeader}>
        <p className={styles.subscriptionPlansEyebrow}>
          Seller Packages
        </p>

        <h2 className={styles.subscriptionPlansTitle}>
          Choose the plan that fits your selling volume.
        </h2>

        <p className={styles.subscriptionPlansDescription}>
          All plans extend your listing and scanner
          allowance after the first 10 free listings.
          CoinHeritage continues to charge a 5% platform
          commission on successful sales.
        </p>
      </div>

      <div className={styles.subscriptionPlansGrid}>
        {plans.map((plan) => (
          <SubscriptionPlanCard
            key={plan.id}
            plan={plan}
            onSelect={
              handleSelectPlan
            }
          />
        ))}
      </div>

      <div className={styles.subscriptionPlansNote}>
        <strong>
          Important
        </strong>

        <span>
          Package prices and limits are frontend placeholders
          for now. Before payment integration, we can finalize
          the exact monthly prices, scan limits and listing
          limits for all three packages.
        </span>
      </div>
    </section>
  );
};

export default SubscriptionPlans;