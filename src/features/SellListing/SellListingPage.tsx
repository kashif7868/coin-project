import SellCommissionPreview from "./components/SellCommissionPreview";
import SellDescriptionForm from "./components/SellDescriptionForm";
import SellListingActions from "./components/SellListingActions";
import SellListingHeader from "./components/SellListingHeader";
import SellPricePanel from "./components/SellPricePanel";
import SellQuantityPanel from "./components/SellQuantityPanel";

import styles from "@/components/animations/css/sellListing/SellListingPage.module.css";

const SellListingPage = () => {
  return (
    <main className={styles.sellListingPage}>
      <SellListingHeader />

      <section className={styles.sellListingContent}>
        <div className={styles.sellListingContainer}>
          <SellPricePanel />

          <SellQuantityPanel />

          <SellDescriptionForm />

          <SellCommissionPreview />

          <SellListingActions />
        </div>
      </section>
    </main>
  );
};

export default SellListingPage;