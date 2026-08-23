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
    <div className="hidden h-full rounded-2xl border border-neutral-200 bg-[#fffdf9] px-5 py-4 shadow-[0_12px_34px_rgba(0,0,0,0.05)] lg:block">
      <h2 className="text-center text-[14px] font-semibold text-neutral-900">
        Why Collectors Choose Us?
      </h2>

      <div className="mt-5 grid grid-cols-4 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex min-w-0 items-center justify-center gap-2.5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fbf5ec] text-[#c57f18]">
                <Icon size={17} strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <p className="whitespace-nowrap text-[15px] font-bold leading-none text-neutral-900">
                  {stat.value}
                </p>

                <p className="mt-1 whitespace-nowrap text-[8px] text-neutral-500">
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