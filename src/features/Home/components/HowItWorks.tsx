import {
  ArrowRight,
  Camera,
  FileText,
  Sparkles,
  Tag,
} from "lucide-react";

import styles from "@/components/animations/css/home/HowItWorks.module.css";

const steps = [
  {
    title: "Scan or Upload",
    description: "Capture clear images of your coin (front & back).",
    icon: Camera,
  },
  {
    title: "AI Identification",
    description: "Our AI analyzes the coin and extracts accurate details.",
    icon: Sparkles,
  },
  {
    title: "Review Details",
    description: "Review AI generated details and edit if needed.",
    icon: FileText,
  },
  {
    title: "List for Sale",
    description: "Add quantity, set price and list your coin for sale.",
    icon: Tag,
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>
          How It Works
        </h2>

        <div className={styles.divider} />
      </div>

      <div className={styles.desktopGrid}>
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className={styles.desktopStep}
            >
              <div className={styles.iconBox}>
                <Icon size={20} strokeWidth={1.7} />
              </div>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  strokeWidth={1.4}
                  className={styles.arrow}
                />
              )}

              <p className={styles.stepTitle}>
                {index + 1}. {step.title}
              </p>

              <p className={styles.stepDescription}>
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className={styles.mobileScroller}>
        <div className={styles.mobileTrack}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className={styles.mobileCard}
              >
                <div className={styles.mobileIconBox}>
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <p className={styles.mobileTitle}>
                  {index + 1}. {step.title}
                </p>

                <p className={styles.mobileDescription}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;