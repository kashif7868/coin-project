import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="CoinHeritage home"
      className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/40 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-[11px] font-bold text-black shadow-[0_0_20px_rgba(245,158,11,0.16)] sm:h-10 sm:w-10 sm:text-sm">
        CH
      </div>

      <div className="min-w-0 leading-tight">
        <div className="whitespace-nowrap font-serif text-[17px] font-semibold tracking-tight text-white sm:text-[20px]">
          Coin
          <span className="text-amber-400">Heritage</span>
        </div>

        <div className="mt-0.5 hidden whitespace-nowrap text-[8px] font-medium tracking-wide text-white/55 sm:block sm:text-[9px]">
          Discover. Collect. Own History.
        </div>
      </div>
    </Link>
  );
};

export default Logo;