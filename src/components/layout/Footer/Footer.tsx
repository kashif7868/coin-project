import FooterBottom from "./components/FooterBottom";
import FooterBrand from "./components/FooterBrand";
import FooterLinks from "./components/FooterLinks";
import Newsletter from "./components/Newsletter";

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
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto w-full max-w-[1540px] px-5 py-14 sm:px-7 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <FooterBrand />
          </div>

          <FooterLinks
            title="Marketplace"
            links={marketplaceLinks}
          />

          <FooterLinks
            title="Company"
            links={companyLinks}
          />

          <div className="space-y-10">
            <FooterLinks
              title="Support"
              links={supportLinks}
            />

            <Newsletter />
          </div>
        </div>

        <div className="mt-12">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;