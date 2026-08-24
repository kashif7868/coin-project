import CoinCard, {
  type CoinCardData,
} from "@/features/Coins/components/CoinCard";

import styles from "@/components/animations/css/collectionDetails/CollectionCoinsGrid.module.css";

interface CollectionCoinsGridProps {
  collectionId: string;
}

const collectionCoins: CoinCardData[] = [
  {
    id: "british-india-rupee-1918",
    name: "British India One Rupee",
    country: "British India",
    year: "1918",
    metal: "Silver",
    condition: "Very Fine",
    price: "$86",
    image: "/images/coins/coin-1.jpg",
    featured: true,
  },
  {
    id: "victoria-rupee-1887",
    name: "Victoria One Rupee",
    country: "British India",
    year: "1887",
    metal: "Silver",
    condition: "Fine",
    price: "$112",
    image: "/images/coins/coin-4.jpg",
  },
  {
    id: "edward-vii-rupee-1906",
    name: "Edward VII One Rupee",
    country: "British India",
    year: "1906",
    metal: "Silver",
    condition: "Very Fine",
    price: "$94",
    image: "/images/coins/coin-3.jpg",
  },
  {
    id: "george-v-rupee-1919",
    name: "George V One Rupee",
    country: "British India",
    year: "1919",
    metal: "Silver",
    condition: "Extremely Fine",
    price: "$128",
    image: "/images/coins/coin-7.jpg",
  },
  {
    id: "british-india-half-rupee",
    name: "British India Half Rupee",
    country: "British India",
    year: "1936",
    metal: "Silver",
    condition: "Fine",
    price: "$61",
    image: "/images/coins/coin-5.jpg",
  },
  {
    id: "british-india-quarter-rupee",
    name: "British India Quarter Rupee",
    country: "British India",
    year: "1944",
    metal: "Silver",
    condition: "Very Fine",
    price: "$39",
    image: "/images/coins/coin-2.jpg",
  },
];

const CollectionCoinsGrid = ({
  collectionId,
}: CollectionCoinsGridProps) => {
  return (
    <section className={styles.collectionCoins}>
      <div className={styles.collectionCoinsHeader}>
        <div>
          <p className={styles.collectionCoinsEyebrow}>
            Collection Inventory
          </p>

          <h2 className={styles.collectionCoinsTitle}>
            Coins in This Collection
          </h2>

          <p className={styles.collectionCoinsDescription}>
            Browse representative coins from this
            collection. Listing availability and pricing
            will later come from marketplace data.
          </p>
        </div>

        <div className={styles.collectionCoinsCount}>
          <strong>84</strong>
          <span>Total Coins</span>
        </div>
      </div>

      <div className={styles.collectionCoinsGrid}>
        {collectionCoins.map((coin) => (
          <CoinCard
            key={coin.id}
            coin={coin}
          />
        ))}
      </div>

      <div className={styles.collectionCoinsReference}>
        Collection inventory: {collectionId}
      </div>
    </section>
  );
};

export default CollectionCoinsGrid;