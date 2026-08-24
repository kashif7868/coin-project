import CollectionCard, {
  type CollectionCardData,
} from "@/features/Collections/components/CollectionCard";

import styles from "@/components/animations/css/collectionDetails/RelatedCollections.module.css";

const relatedCollections: CollectionCardData[] = [
  {
    id: "mughal-empire",
    title: "Mughal Empire",
    description:
      "Explore silver and gold issues from the Mughal period across rulers, mints and denominations.",
    category: "Empire",
    coinCount: 57,
    image: "/images/coins/coin-6.jpg",
    featured: true,
  },
  {
    id: "ottoman-coins",
    title: "Ottoman Coinage",
    description:
      "Browse Ottoman coinage across rulers, regions, mints and historical denominations.",
    category: "Empire",
    coinCount: 42,
    image: "/images/coins/coin-3.jpg",
  },
  {
    id: "pakistan-coins",
    title: "Pakistan Coinage",
    description:
      "Follow Pakistan's coinage from the early independence period through modern issues.",
    category: "Country",
    coinCount: 69,
    image: "/images/coins/coin-2.jpg",
  },
  {
    id: "historic-silver",
    title: "Historic Silver",
    description:
      "A curated group of silver coins from different countries, rulers and historical periods.",
    category: "Metal",
    coinCount: 136,
    image: "/images/coins/coin-7.jpg",
  },
];

const RelatedCollections = () => {
  return (
    <section className={styles.relatedCollections}>
      <div className={styles.relatedCollectionsHeader}>
        <div>
          <p className={styles.relatedCollectionsEyebrow}>
            Continue Exploring
          </p>

          <h2 className={styles.relatedCollectionsTitle}>
            Related Collections
          </h2>

          <p className={styles.relatedCollectionsDescription}>
            Discover other curated themes with similar historical,
            geographic or numismatic connections.
          </p>
        </div>
      </div>

      <div className={styles.relatedCollectionsGrid}>
        {relatedCollections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedCollections;