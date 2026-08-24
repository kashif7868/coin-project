import CoinGallery from "./components/CoinGallery";
import CoinHistory from "./components/CoinHistory";
import CoinInfo from "./components/CoinInfo";
import CoinPurchasePanel from "./components/CoinPurchasePanel";
import CoinSpecifications from "./components/CoinSpecifications";
import RelatedCoins from "./components/RelatedCoins";

import styles from "@/components/animations/css/coinDetails/CoinDetailsPage.module.css";

interface CoinDetailsPageProps {
  coinId: string;
}

const CoinDetailsPage = ({
  coinId,
}: CoinDetailsPageProps) => {
  return (
    <main className={styles.coinDetailsPage}>
      <div className={styles.coinDetailsContainer}>
        <div className={styles.coinDetailsTopGrid}>
          <div className={styles.coinDetailsGalleryColumn}>
            <CoinGallery coinId={coinId} />
          </div>

          <div className={styles.coinDetailsInfoColumn}>
            <CoinInfo coinId={coinId} />

            <CoinPurchasePanel coinId={coinId} />
          </div>
        </div>

        <div className={styles.coinDetailsBottomGrid}>
          <CoinSpecifications coinId={coinId} />

          <CoinHistory coinId={coinId} />
        </div>

        <RelatedCoins />
      </div>
    </main>
  );
};

export default CoinDetailsPage;