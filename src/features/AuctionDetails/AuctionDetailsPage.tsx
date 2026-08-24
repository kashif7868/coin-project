import AuctionBidPanel from "./components/AuctionBidPanel";
import AuctionGallery from "./components/AuctionGallery";
import AuctionInfo from "./components/AuctionInfo";
import AuctionSpecifications from "./components/AuctionSpecifications";
import AuctionTimeline from "./components/AuctionTimeline";
import RelatedAuctions from "./components/RelatedAuctions";

import styles from "@/components/animations/css/auctionDetails/AuctionDetailsPage.module.css";

interface AuctionDetailsPageProps {
  auctionId: string;
}

const AuctionDetailsPage = ({
  auctionId,
}: AuctionDetailsPageProps) => {
  return (
    <main className={styles.auctionDetailsPage}>
      <div className={styles.auctionDetailsContainer}>
        <div className={styles.auctionDetailsTopGrid}>
          <div className={styles.auctionDetailsGalleryColumn}>
            <AuctionGallery auctionId={auctionId} />
          </div>

          <div className={styles.auctionDetailsInfoColumn}>
            <AuctionInfo auctionId={auctionId} />

            <AuctionBidPanel auctionId={auctionId} />
          </div>
        </div>

        <div className={styles.auctionDetailsBottomGrid}>
          <AuctionSpecifications auctionId={auctionId} />

          <AuctionTimeline auctionId={auctionId} />
        </div>

        <RelatedAuctions />
      </div>
    </main>
  );
};

export default AuctionDetailsPage;