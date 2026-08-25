import SellPreviewActions from "./components/SellPreviewActions";
import SellPreviewCard from "./components/SellPreviewCard";
import SellPreviewDetails from "./components/SellPreviewDetails";
import SellPreviewHeader from "./components/SellPreviewHeader";
import SellPublishSummary from "./components/SellPublishSummary";

import styles from "@/components/animations/css/sellPreview/SellPreviewPage.module.css";

const SellPreviewPage = () => {
  return (
    <main className={styles.sellPreviewPage}>
      <SellPreviewHeader />

      <section className={styles.sellPreviewContent}>
        <div className={styles.sellPreviewContainer}>
          <SellPreviewCard />

          <SellPreviewDetails />

          <SellPublishSummary />

          <SellPreviewActions />
        </div>
      </section>
    </main>
  );
};

export default SellPreviewPage;