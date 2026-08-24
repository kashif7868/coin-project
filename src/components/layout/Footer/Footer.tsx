import FooterBottom from "./components/FooterBottom";
import FooterBrand from "./components/FooterBrand";
import FooterLinks from "./components/FooterLinks";
import Newsletter from "./components/Newsletter";

import styles from "@/components/animations/css/footer/Footer.module.css";

const marketplaceLinks = [
  { label: "Browse Coins", href: "/coins" },
  { label: "Live Auctions", href: "/auctions" },
  { label: "Collections", href: "/collections" },
  { label: "Sell a Coin", href: "/sell" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Buyer Protection", href: "/buyer-protection" },
  { label: "Seller Guide", href: "/seller-guide" },
  { label: "Report a Listing", href: "/report-listing" },
];

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandColumn}>
            <FooterBrand />
          </div>

          <div className={styles.footerLinksColumn}>
            <FooterLinks
              title="Marketplace"
              links={marketplaceLinks}
            />
          </div>

          <div className={styles.footerLinksColumn}>
            <FooterLinks
              title="Company"
              links={companyLinks}
            />
          </div>

          <div className={styles.footerSupportColumn}>
            <FooterLinks
              title="Support"
              links={supportLinks}
            />

            <div className={styles.footerNewsletterBlock}>
              <Newsletter />
            </div>
          </div>
        </div>

        <div className={styles.footerBottomWrapper}>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;