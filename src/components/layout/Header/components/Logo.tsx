import Link from "next/link";

import styles from "@/components/animations/css/header/Logo.module.css";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="CoinHeritage home"
      className={styles.logo}
    >
      <div className={styles.coinMark}>
        CH
      </div>

      <div className={styles.textWrap}>
        <div className={styles.brandName}>
          Coin
          <span className={styles.gold}>
            Heritage
          </span>
        </div>

        <div className={styles.tagline}>
          Discover. Collect. Own History.
        </div>
      </div>
    </Link>
  );
};

export default Logo;