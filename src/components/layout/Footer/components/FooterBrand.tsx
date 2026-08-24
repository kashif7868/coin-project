import Link from "next/link";

import styles from "@/components/animations/css/footer/FooterBrand.module.css";

const FooterBrand = () => {
  return (
    <div className={styles.footerBrand}>
      <Link
        href="/"
        className={styles.brandLink}
        aria-label="CoinHeritage home"
      >
        <span className={styles.brandName}>
          Coin
          <span className={styles.brandHighlight}>
            Heritage
          </span>
        </span>

        <span className={styles.brandTagline}>
          Discover. Collect. Own History.
        </span>
      </Link>

      <p className={styles.brandDescription}>
        Discover remarkable coins from around the world,
        explore their history, build your collection and
        trade with confidence through CoinHeritage.
      </p>
    </div>
  );
};

export default FooterBrand;