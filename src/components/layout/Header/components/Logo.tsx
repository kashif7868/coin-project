import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/40 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-sm font-bold text-black shadow-[0_0_24px_rgba(245,158,11,0.16)]">
        CH
      </div>

      <div className="leading-tight">
        <div className="font-serif text-[20px] font-semibold tracking-tight text-white">
          Coin
          <span className="text-amber-400">Heritage</span>
        </div>

        <div className="mt-0.5 text-[9px] font-medium tracking-wide text-white/55">
          Discover. Collect. Own History.
        </div>
      </div>
    </Link>
  );
};

export default Logo;