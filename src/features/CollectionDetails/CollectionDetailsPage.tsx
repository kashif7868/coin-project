import CollectionCoinsGrid from "./components/CollectionCoinsGrid";
import CollectionHero from "./components/CollectionHero";
import CollectionOverview from "./components/CollectionOverview";
import CollectionStats from "./components/CollectionStats";
import RelatedCollections from "./components/RelatedCollections";

import styles from "@/components/animations/css/collectionDetails/CollectionDetailsPage.module.css";

interface CollectionDetailsPageProps {
  collectionId: string;
}

const CollectionDetailsPage = ({
  collectionId,
}: CollectionDetailsPageProps) => {
  return (
    <main
      className={
        styles.collectionDetailsPage
      }
    >
      <CollectionHero
        collectionId={collectionId}
      />

      <div
        className={
          styles.collectionDetailsContainer
        }
      >
        <div
          className={
            styles.collectionDetailsTopGrid
          }
        >
          <CollectionOverview
            collectionId={collectionId}
          />

          <CollectionStats
            collectionId={collectionId}
          />
        </div>

        <CollectionCoinsGrid
          collectionId={collectionId}
        />

        <RelatedCollections />
      </div>
    </main>
  );
};

export default CollectionDetailsPage;