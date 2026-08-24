import CoinCard, {
  type CoinCardData,
} from "./CoinCard";

import styles from "@/components/animations/css/coins/CoinsGrid.module.css";

const coins: CoinCardData[] = [
  {
    id: "british-india-rupee-1918",
    name: "British India One Rupee",
    country: "British India",
    year: "1918",
    metal: "Silver",
    condition: "Very Fine",
    price: "$86",
    image: "/images/coins/coin-1.webp",
    featured: true,
  },
  {
    id: "pakistan-one-rupee-1948",
    name: "Pakistan One Rupee",
    country: "Pakistan",
    year: "1948",
    metal: "Nickel",
    condition: "Fine",
    price: "$42",
    image: "/images/coins/coin-2.webp",
  },
  {
    id: "ottoman-kurush-1909",
    name: "Ottoman 20 Kurush",
    country: "Ottoman Empire",
    year: "1909",
    metal: "Silver",
    condition: "Very Fine",
    price: "$115",
    image: "/images/coins/coin-3.webp",
  },
  {
    id: "victoria-half-crown-1887",
    name: "Victoria Half Crown",
    country: "United Kingdom",
    year: "1887",
    metal: "Silver",
    condition: "Fine",
    price: "$138",
    image: "/images/coins/coin-4.webp",
  },
  {
    id: "saudi-riyal-1954",
    name: "Saudi Arabian Riyal",
    country: "Saudi Arabia",
    year: "1954",
    metal: "Silver",
    condition: "Very Fine",
    price: "$74",
    image: "/images/coins/coin-5.webp",
  },
  {
    id: "mughal-rupee",
    name: "Mughal Silver Rupee",
    country: "Mughal Empire",
    year: "17th Century",
    metal: "Silver",
    condition: "Fine",
    price: "$210",
    image: "/images/coins/coin-6.webp",
    featured: true,
  },
  {
    id: "us-morgan-dollar-1921",
    name: "Morgan Silver Dollar",
    country: "United States",
    year: "1921",
    metal: "Silver",
    condition: "Extremely Fine",
    price: "$95",
    image: "/images/coins/coin-7.webp",
  },
  {
    id: "french-franc-1916",
    name: "French One Franc",
    country: "France",
    year: "1916",
    metal: "Silver",
    condition: "Very Fine",
    price: "$58",
    image: "/images/coins/coin-8.webp",
  },
];

const CoinsGrid = () => {
  return (
    <div className={styles.coinsGrid}>
      {coins.map((coin) => (
        <CoinCard
          key={coin.id}
          coin={coin}
        />
      ))}
    </div>
  );
};

export default CoinsGrid;