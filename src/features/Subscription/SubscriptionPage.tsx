import FreeListingStatus from "./components/FreeListingStatus";
import SubscriptionHeader from "./components/SubscriptionHeader";
import SubscriptionPlans from "./components/SubscriptionPlans";

import styles from "@/components/animations/css/subscription/SubscriptionPage.module.css";

const SubscriptionPage = () => {
  return (
    <main className={styles.subscriptionPage}>
      <SubscriptionHeader />

      <section className={styles.subscriptionContent}>
        <div className={styles.subscriptionContainer}>
          <FreeListingStatus />

          <SubscriptionPlans />
        </div>
      </section>
    </main>
  );
};

export default SubscriptionPage;