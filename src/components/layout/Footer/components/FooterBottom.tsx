import Link from "next/link";

import styles from "@/components/animations/css/footer/FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <p className={styles.footerCopyright}>
        © {new Date().getFullYear()} CoinHeritage. All rights reserved.
      </p>

      <div className={styles.footerPolicyLinks}>
        <Link
          href="/privacy-policy"
          className={styles.footerPolicyLink}
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          className={styles.footerPolicyLink}
        >
          Terms &amp; Conditions
        </Link>

        <Link
          href="/shipping-policy"
          className={styles.footerPolicyLink}
        >
          Shipping Policy
        </Link>

        <Link
          href="/seller-policy"
          className={styles.footerPolicyLink}
        >
          Seller Policy
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;