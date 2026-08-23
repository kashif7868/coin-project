import {
  ArrowRight,
  Camera,
  FileText,
  Sparkles,
  Tag,
} from "lucide-react";

const steps = [
  {
    title: "Scan or Upload",
    description: "Capture clear images of your coin (front & back).",
    icon: Camera,
  },
  {
    title: "AI Identification",
    description: "Our AI analyzes the coin and extracts accurate details.",
    icon: Sparkles,
  },
  {
    title: "Review Details",
    description: "Review AI generated details and edit if needed.",
    icon: FileText,
  },
  {
    title: "List for Sale",
    description: "Add quantity, set price and list your coin for sale.",
    icon: Tag,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 font-serif text-[18px] font-semibold text-[#171717]">
          How It Works
        </h2>

        <div className="h-px flex-1 bg-neutral-200" />
      </div>

      {/* Desktop */}
      <div className="mt-4 hidden grid-cols-4 lg:grid">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative flex flex-col items-center px-3 text-center"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#fbf5ec] text-[#c57f18]">
                <Icon size={20} strokeWidth={1.7} />
              </div>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  strokeWidth={1.4}
                  className="absolute right-[-8px] top-[13px] text-neutral-300"
                />
              )}

              <p className="mt-2.5 text-[11px] font-semibold text-neutral-900">
                {index + 1}. {step.title}
              </p>

              <p className="mt-1 max-w-[165px] text-[9px] leading-[14px] text-neutral-500">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="-mx-4 mt-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 lg:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="min-w-[190px] snap-start rounded-2xl border border-neutral-200 bg-[#fffdf9] p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fbf5ec] text-[#c57f18]">
                <Icon size={19} />
              </div>

              <p className="mt-3 text-[11px] font-semibold">
                {index + 1}. {step.title}
              </p>

              <p className="mt-1 text-[9px] leading-[15px] text-neutral-500">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;