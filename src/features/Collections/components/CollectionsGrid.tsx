import CollectionCard, {
  type CollectionCardData,
} from "./CollectionCard";

import styles from "@/components/animations/css/collections/CollectionsGrid.module.css";

const collections: CollectionCardData[] = [
  {
    id: "british-india",
    title: "British India",
    description:
      "Explore rupees and historical issues from the British Indian monetary era.",
    category: "Country",
    coinCount: 84,
    image: "/images/coins/coin-1.jpg",
    featured: true,
  },
  {
    id: "mughal-empire",
    title: "Mughal Empire",
    description:
      "Discover silver and gold coinage from one of South Asia's most influential empires.",
    category: "Empire",
    coinCount: 57,
    image: "/images/coins/coin-6.jpg",
    featured: true,
  },
  {
    id: "ottoman-coins",
    title: "Ottoman Coinage",
    description:
      "Browse collectible Ottoman issues spanning rulers, mints and denominations.",
    category: "Empire",
    coinCount: 42,
    image: "/images/coins/coin-3.jpg",
  },
  {
    id: "silver-coins",
    title: "Historic Silver",
    description:
      "A curated selection of silver coins from different countries and historical periods.",
    category: "Metal",
    coinCount: 136,
    image: "/images/coins/coin-7.jpg",
  },
  {
    id: "pakistan-coins",
    title: "Pakistan Coinage",
    description:
      "Follow the evolution of Pakistan's coinage from early independence issues onward.",
    category: "Country",
    coinCount: 69,
    image: "/images/coins/coin-2.jpg",
  },
  {
    id: "royal-britain",
    title: "Royal Britain",
    description:
      "Coins featuring British monarchs and historic royal portraiture.",
    category: "Rulers",
    coinCount: 91,
    image: "/images/coins/coin-4.jpg",
  },
];

const CollectionsGrid = () => {
  return (
    <div className={styles.collectionsGrid}>
      {collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          collection={collection}
        />
      ))}
    </div>
  );
};

export default CollectionsGrid;