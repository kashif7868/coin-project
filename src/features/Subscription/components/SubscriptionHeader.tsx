import {
  Crown,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/subscription/SubscriptionHeader.module.css";

const SubscriptionHeader = () => {
  return (
    <section className={styles.subscriptionHeader}>
      <div
        className={
          styles.subscriptionHeaderGlowLeft
        }
      />

      <div
        className={
          styles.subscriptionHeaderGlowRight
        }
      />

      <div
        className={
          styles.subscriptionHeaderContainer
        }
      >
        <div
          className={
            styles.subscriptionHeaderBadge
          }
        >
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>Seller Subscription</span>
        </div>

        <div
          className={
            styles.subscriptionHeaderContent
          }
        >
          <div>
            <h1>
              Grow Beyond Your
              <span> Free Listings.</span>
            </h1>

            <p>
              Your first 10 published coin listings are
              free. After that, choose the seller plan
              that best matches your listing volume.
            </p>
          </div>

          <div
            className={
              styles.subscriptionHeaderIcon
            }
          >
            <Crown
              size={28}
              strokeWidth={1.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionHeader;