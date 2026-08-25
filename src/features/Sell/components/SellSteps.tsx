import {
  Camera,
  CheckCircle2,
  Coins,
  Upload,
} from "lucide-react";

import styles from "@/components/animations/css/sell/SellSteps.module.css";

const steps = [
  {
    number: "01",
    title: "Scan or Upload",
    description:
      "Capture clear front and back images of your coin or upload existing photos.",
    icon: Camera,
  },
  {
    number: "02",
    title: "Review Coin Details",
    description:
      "Review the identified coin information and correct anything before creating the listing.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Set Price & Quantity",
    description:
      "Choose how many coins you have available and set the selling price for the marketplace.",
    icon: Coins,
  },
  {
    number: "04",
    title: "Publish Listing",
    description:
      "Preview the final listing and publish it to CoinHeritage when everything looks correct.",
    icon: Upload,
  },
];

const SellSteps = () => {
  return (
    <section className={styles.sellSteps}>
      <div className={styles.sellStepsHeader}>
        <p className={styles.sellStepsEyebrow}>
          Seller Journey
        </p>

        <h2 className={styles.sellStepsTitle}>
          List your coin in four simple steps.
        </h2>

        <p className={styles.sellStepsDescription}>
          CoinHeritage reduces manual work by starting with
          your coin images and guiding you through the listing
          process.
        </p>
      </div>

      <div className={styles.sellStepsGrid}>
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.number}
              className={styles.sellStepCard}
            >
              <div className={styles.sellStepTop}>
                <div className={styles.sellStepIcon}>
                  <Icon
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                <span className={styles.sellStepNumber}>
                  {step.number}
                </span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SellSteps;