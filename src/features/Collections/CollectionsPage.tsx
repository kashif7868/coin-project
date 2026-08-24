import CollectionsFilters from "./components/CollectionsFilters";
import CollectionsGrid from "./components/CollectionsGrid";
import CollectionsHero from "./components/CollectionsHero";
import CollectionsPagination from "./components/CollectionsPagination";
import CollectionsToolbar from "./components/CollectionsToolbar";

import styles from "@/components/animations/css/collections/CollectionsPage.module.css";

const CollectionsPage = () => {
  return (
    <main className={styles.collectionsPage}>
      <CollectionsHero />

      <CollectionsToolbar />

      <section className={styles.collectionsPageContent}>
        <div className={styles.collectionsPageContentInner}>
          <aside className={styles.collectionsPageSidebar}>
            <CollectionsFilters />
          </aside>

          <section className={styles.collectionsPageResults}>
            <CollectionsGrid />

            <CollectionsPagination />
          </section>
        </div>
      </section>
    </main>
  );
};

export default CollectionsPage;