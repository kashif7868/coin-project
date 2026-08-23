import {
  BadgeCheck,
  CreditCard,
  PackageCheck,
  Tag,
} from "lucide-react";

const trustItems = [
  {
    title: "Authentic Coins",
    description: "100% genuine & verified",
    icon: BadgeCheck,
  },
  {
    title: "Best Prices",
    description: "Competitive market prices",
    icon: Tag,
  },
  {
    title: "Secure Payments",
    description: "Safe & encrypted transactions",
    icon: CreditCard,
  },
  {
    title: "Fast Shipping",
    description: "Worldwide delivery",
    icon: PackageCheck,
  },
];

const TrustSection = () => {
  return (
    <div className="grid overflow-hidden rounded-xl border border-neutral-200 bg-[#fffdf9] sm:grid-cols-2 lg:grid-cols-4">
      {trustItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`flex min-h-[64px] items-center gap-3 px-4 py-3 ${
              index !== trustItems.length - 1
                ? "border-b border-neutral-200 sm:border-b-0 lg:border-r"
                : ""
            }`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fbf5ec] text-[#c57f18]">
              <Icon size={16} strokeWidth={1.7} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-neutral-900">
                {item.title}
              </p>

              <p className="mt-0.5 text-[8px] text-neutral-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrustSection;