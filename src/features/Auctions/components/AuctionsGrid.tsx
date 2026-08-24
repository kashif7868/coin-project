import AuctionCard, {
  type AuctionCardData,
} from "./AuctionCard";

import styles from "@/components/animations/css/auctions/AuctionsGrid.module.css";

const auctions: AuctionCardData[] = [
  {
    id: "morgan-dollar-1921",
    title: "Morgan Silver Dollar",
    country: "United States",
    year: "1921",
    metal: "Silver",
    currentBid: "$118",
    bids: 14,
    timeLeft: "01h 42m",
    image: "/images/coins/coin-7.jpg",
    status: "live",
  },
  {
    id: "victoria-half-crown-1887",
    title: "Victoria Half Crown",
    country: "United Kingdom",
    year: "1887",
    metal: "Silver",
    currentBid: "$146",
    bids: 9,
    timeLeft: "03h 18m",
    image: "/images/coins/coin-4.jpg",
    status: "live",
  },
  {
    id: "mughal-silver-rupee",
    title: "Mughal Silver Rupee",
    country: "Mughal Empire",
    year: "17th Century",
    metal: "Silver",
    currentBid: "$235",
    bids: 21,
    timeLeft: "05h 06m",
    image: "/images/coins/coin-6.jpg",
    status: "live",
  },
  {
    id: "ottoman-kurush-1909",
    title: "Ottoman 20 Kurush",
    country: "Ottoman Empire",
    year: "1909",
    metal: "Silver",
    currentBid: "$129",
    bids: 11,
    timeLeft: "Tomorrow",
    image: "/images/coins/coin-3.jpg",
    status: "upcoming",
  },
  {
    id: "saudi-riyal-1954",
    title: "Saudi Arabian Riyal",
    country: "Saudi Arabia",
    year: "1954",
    metal: "Silver",
    currentBid: "$82",
    bids: 7,
    timeLeft: "2 days",
    image: "/images/coins/coin-5.jpg",
    status: "upcoming",
  },
  {
    id: "british-india-rupee-1918",
    title: "British India One Rupee",
    country: "British India",
    year: "1918",
    metal: "Silver",
    currentBid: "$96",
    bids: 18,
    timeLeft: "Ended",
    image: "/images/coins/coin-1.jpg",
    status: "ended",
  },
];

const AuctionsGrid = () => {
  return (
    <div className={styles.auctionsGrid}>
      {auctions.map((auction) => (
        <AuctionCard
          key={auction.id}
          auction={auction}
        />
      ))}
    </div>
  );
};

export default AuctionsGrid;