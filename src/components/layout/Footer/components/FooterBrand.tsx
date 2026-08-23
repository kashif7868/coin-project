import Link from "next/link";

const FooterBrand = () => {
  return (
    <div>
      <Link href="/" className="inline-flex flex-col">
        <span className="font-serif text-2xl font-semibold text-white">
          Coin<span className="text-amber-400">Heritage</span>
        </span>

        <span className="mt-1 text-[10px] tracking-wide text-white/45">
          Discover. Collect. Own History.
        </span>
      </Link>

      <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
        Discover, scan, collect and trade remarkable coins from around the
        world through an intelligent numismatic marketplace.
      </p>
    </div>
  );
};

export default FooterBrand;