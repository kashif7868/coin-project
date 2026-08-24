import {
  Coins,
  Globe2,
  ScanLine,
  Users,
} from "lucide-react";

const stats = [
  {
    label: "Coins Listed",
    value: "50K+",
    icon: Coins,
  },
  {
    label: "Happy Collectors",
    value: "10K+",
    icon: Users,
  },
  {
    label: "Countries Served",
    value: "100+",
    icon: Globe2,
  },
  {
    label: "Accurate Data",
    value: "99.9%",
    icon: ScanLine,
  },
];

const MarketplaceStats = () => {
  return (
    <div className="hidden h-full w-full min-w-0 rounded-2xl border border-neutral-200 bg-[#fffdf9] px-4 py-4 shadow-[0_12px_34px_rgba(0,0,0,0.05)] lg:flex lg:flex-col lg:justify-center xl:px-5">
      <h2 className="text-center text-[13px] font-semibold text-neutral-900 xl:text-[14px]">
        Why Collectors Choose Us?
      </h2>

      <div className="mt-4 grid min-w-0 grid-cols-2 gap-3 xl:mt-5 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex min-w-0 items-center gap-2 rounded-xl bg-white/50 px-2 py-2 xl:justify-center xl:bg-transparent xl:px-0 xl:py-0"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fbf5ec] text-[#c57f18]">
                <Icon
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[14px] font-bold leading-none text-neutral-900 xl:text-[15px]">
                  {stat.value}
                </p>

                <p className="mt-1 truncate text-[8px] text-neutral-500">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketplaceStats;