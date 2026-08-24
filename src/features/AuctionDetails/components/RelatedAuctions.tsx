import AuctionCard, {
  type AuctionCardData,
} from "@/features/Auctions/components/AuctionCard";

import styles from "@/components/animations/css/auctionDetails/RelatedAuctions.module.css";

const relatedAuctions: AuctionCardData[] = [
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
];

const RelatedAuctions = () => {
  return (
    <section className={styles.relatedAuctions}>
      <div className={styles.relatedAuctionsHeader}>
        <div>
          <p className={styles.relatedAuctionsEyebrow}>
            More to Explore
          </p>

          <h2 className={styles.relatedAuctionsTitle}>
            Related Auctions
          </h2>
        </div>
      </div>

      <div className={styles.relatedAuctionsGrid}>
        {relatedAuctions.map((auction) => (
          <AuctionCard
            key={auction.id}
            auction={auction}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedAuctions;