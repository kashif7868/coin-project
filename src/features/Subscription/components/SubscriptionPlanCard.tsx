"use client";

import {
  Check,
  Crown,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/subscription/SubscriptionPlanCard.module.css";

export interface SubscriptionPlanData {
  id: string;
  name: string;
  price: number;
  billingLabel: string;
  listingLimit: string;
  scanLimit: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlanData;
  onSelect: (
    plan: SubscriptionPlanData
  ) => void;
}

const SubscriptionPlanCard = ({
  plan,
  onSelect,
}: SubscriptionPlanCardProps) => {
  return (
    <article
      className={`${styles.subscriptionPlanCard} ${
        plan.popular
          ? styles.subscriptionPlanCardPopular
          : ""
      }`}
    >
      {plan.popular && (
        <div
          className={
            styles.subscriptionPlanPopularBadge
          }
        >
          <Sparkles
            size={12}
            strokeWidth={1.8}
          />

          <span>Most Popular</span>
        </div>
      )}

      <div
        className={
          styles.subscriptionPlanCardHeader
        }
      >
        <div
          className={
            styles.subscriptionPlanCardIcon
          }
        >
          <Crown
            size={20}
            strokeWidth={1.7}
          />
        </div>

        <div>
          <span
            className={
              styles.subscriptionPlanCardLabel
            }
          >
            Seller Plan
          </span>

          <h3
            className={
              styles.subscriptionPlanCardName
            }
          >
            {plan.name}
          </h3>
        </div>
      </div>

      <p
        className={
          styles.subscriptionPlanCardDescription
        }
      >
        {plan.description}
      </p>

      <div
        className={
          styles.subscriptionPlanCardPrice
        }
      >
        <strong>
          ${plan.price}
        </strong>

        <span>
          {plan.billingLabel}
        </span>
      </div>

      <div
        className={
          styles.subscriptionPlanCardLimits
        }
      >
        <div>
          <span>Listings</span>

          <strong>
            {plan.listingLimit}
          </strong>
        </div>

        <div>
          <span>Scanner Usage</span>

          <strong>
            {plan.scanLimit}
          </strong>
        </div>
      </div>

      <div
        className={
          styles.subscriptionPlanFeatures
        }
      >
        {plan.features.map(
          (feature) => (
            <div
              key={feature}
              className={
                styles.subscriptionPlanFeature
              }
            >
              <div
                className={
                  styles.subscriptionPlanFeatureIcon
                }
              >
                <Check
                  size={12}
                  strokeWidth={2}
                />
              </div>

              <span>
                {feature}
              </span>
            </div>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() =>
          onSelect(plan)
        }
        className={
          plan.popular
            ? styles.subscriptionPlanPrimaryButton
            : styles.subscriptionPlanButton
        }
      >
        Choose {plan.name}
      </button>
    </article>
  );
};

export default SubscriptionPlanCard;