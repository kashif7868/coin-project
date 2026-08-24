import CoinCard, {
  type CoinCardData,
} from "@/features/Coins/components/CoinCard";

import styles from "@/components/animations/css/coinDetails/RelatedCoins.module.css";

const relatedCoins: CoinCardData[] = [
  {
    id: "pakistan-one-rupee-1948",
    name: "Pakistan One Rupee",
    country: "Pakistan",
    year: "1948",
    metal: "Nickel",
    condition: "Fine",
    price: "$42",
    image: "/images/coins/coin-2.jpg",
  },
  {
    id: "saudi-riyal-1954",
    name: "Saudi Arabian Riyal",
    country: "Saudi Arabia",
    year: "1954",
    metal: "Silver",
    condition: "Very Fine",
    price: "$74",
    image: "/images/coins/coin-5.jpg",
  },
  {
    id: "us-morgan-dollar-1921",
    name: "Morgan Silver Dollar",
    country: "United States",
    year: "1921",
    metal: "Silver",
    condition: "Extremely Fine",
    price: "$95",
    image: "/images/coins/coin-7.jpg",
  },
  {
    id: "victoria-half-crown-1887",
    name: "Victoria Half Crown",
    country: "United Kingdom",
    year: "1887",
    metal: "Silver",
    condition: "Fine",
    price: "$138",
    image: "/images/coins/coin-4.jpg",
  },
];

const RelatedCoins = () => {
  return (
    <section className={styles.relatedCoins}>
      <div className={styles.relatedCoinsHeader}>
        <div>
          <p className={styles.relatedCoinsEyebrow}>
            You May Also Like
          </p>

          <h2 className={styles.relatedCoinsTitle}>
            Related Coins
          </h2>
        </div>
      </div>

      <div className={styles.relatedCoinsGrid}>
        {relatedCoins.map((coin) => (
          <CoinCard
            key={coin.id}
            coin={coin}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedCoins;