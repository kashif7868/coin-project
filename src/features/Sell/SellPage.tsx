import SellBenefits from "./components/SellBenefits";
import SellCTA from "./components/SellCTA";
import SellHero from "./components/SellHero";
import SellSteps from "./components/SellSteps";

import styles from "@/components/animations/css/sell/SellPage.module.css";

const SellPage = () => {
  return (
    <main className={styles.sellPage}>
      <SellHero />

      <section className={styles.sellPageContent}>
        <div className={styles.sellPageContainer}>
          <SellSteps />

          <SellBenefits />

          <SellCTA />
        </div>
      </section>
    </main>
  );
};

export default SellPage;