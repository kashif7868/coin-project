import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} CoinHeritage. All rights reserved.
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link
          href="/privacy-policy"
          className="transition-colors duration-200 hover:text-amber-400"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          className="transition-colors duration-200 hover:text-amber-400"
        >
          Terms & Conditions
        </Link>

        <Link
          href="/shipping-policy"
          className="transition-colors duration-200 hover:text-amber-400"
        >
          Shipping Policy
        </Link>

        <Link
          href="/seller-policy"
          className="transition-colors duration-200 hover:text-amber-400"
        >
          Seller Policy
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;