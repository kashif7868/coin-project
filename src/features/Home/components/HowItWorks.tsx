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
    <section className="w-full min-w-0 bg-white">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <h2 className="shrink-0 font-serif text-[17px] font-semibold text-[#171717] sm:text-[18px]">
          How It Works
        </h2>

        <div className="h-px min-w-0 flex-1 bg-neutral-200" />
      </div>

      {/* Desktop */}
      <div className="mt-4 hidden min-w-0 grid-cols-2 gap-y-5 lg:grid xl:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative flex min-w-0 flex-col items-center px-3 text-center"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#fbf5ec] text-[#c57f18]">
                <Icon size={20} strokeWidth={1.7} />
              </div>

              {index < steps.length - 1 && index % 2 === 0 && (
                <ArrowRight
                  size={16}
                  strokeWidth={1.4}
                  className="absolute right-[-8px] top-[13px] hidden text-neutral-300 lg:block xl:hidden"
                />
              )}

              {index < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  strokeWidth={1.4}
                  className="absolute right-[-8px] top-[13px] hidden text-neutral-300 xl:block"
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

      {/* Mobile / Tablet */}
      <div className="mt-4 w-full min-w-0 overflow-x-auto pb-2 lg:hidden">
        <div className="flex w-max min-w-full snap-x snap-mandatory gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  w-[78vw]
                  min-w-[210px]
                  max-w-[260px]
                  shrink-0
                  snap-start
                  rounded-2xl
                  border border-neutral-200
                  bg-[#fffdf9]
                  p-4

                  sm:w-[240px]
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fbf5ec] text-[#c57f18]">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <p className="mt-3 text-[11px] font-semibold text-neutral-900">
                  {index + 1}. {step.title}
                </p>

                <p className="mt-1 text-[9px] leading-[15px] text-neutral-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;