import AuctionFilters from "./components/AuctionFilters";
import AuctionsGrid from "./components/AuctionsGrid";
import AuctionsHero from "./components/AuctionsHero";
import AuctionsPagination from "./components/AuctionsPagination";
import AuctionsToolbar from "./components/AuctionsToolbar";

import styles from "@/components/animations/css/auctions/AuctionsPage.module.css";

const AuctionsPage = () => {
  return (
    <main className={styles.auctionsPage}>
      <AuctionsHero />

      <AuctionsToolbar />

      <section className={styles.auctionsPageContent}>
        <div className={styles.auctionsPageContentInner}>
          <aside className={styles.auctionsPageSidebar}>
            <AuctionFilters />
          </aside>

          <section className={styles.auctionsPageResults}>
            <AuctionsGrid />

            <AuctionsPagination />
          </section>
        </div>
      </section>
    </main>
  );
};

export default AuctionsPage;