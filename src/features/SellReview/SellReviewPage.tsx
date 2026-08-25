import SellCoinDetailsForm from "./components/SellCoinDetailsForm";
import SellCoinImages from "./components/SellCoinImages";
import SellReviewActions from "./components/SellReviewActions";
import SellReviewHeader from "./components/SellReviewHeader";

import styles from "@/components/animations/css/sellReview/SellReviewPage.module.css";

const SellReviewPage = () => {
  return (
    <main className={styles.sellReviewPage}>
      <SellReviewHeader />

      <section className={styles.sellReviewContent}>
        <div className={styles.sellReviewContainer}>
          <SellCoinImages />

          <SellCoinDetailsForm />

          <SellReviewActions />
        </div>
      </section>
    </main>
  );
};

export default SellReviewPage;