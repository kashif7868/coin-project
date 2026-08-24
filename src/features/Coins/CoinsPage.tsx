import CoinsFilters from "./components/CoinsFilters";
import CoinsGrid from "./components/CoinsGrid";
import CoinsHero from "./components/CoinsHero";
import CoinsPagination from "./components/CoinsPagination";
import CoinsToolbar from "./components/CoinsToolbar";

import styles from "@/components/animations/css/coins/CoinsPage.module.css";

const CoinsPage = () => {
  return (
    <main className={styles.coinsPage}>
      <CoinsHero />

      <CoinsToolbar />

      <section
        className={styles.coinsPageContent}
      >
        <div
          className={
            styles.coinsPageContentInner
          }
        >
          <aside
            className={
              styles.coinsPageSidebar
            }
          >
            <CoinsFilters />
          </aside>

          <section
            className={
              styles.coinsPageResults
            }
          >
            <CoinsGrid />

            <CoinsPagination />
          </section>
        </div>
      </section>
    </main>
  );
};

export default CoinsPage;