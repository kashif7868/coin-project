"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does the AI coin scanner work?",
    answer:
      "Upload clear images of both sides of the coin. The scanner analyzes visible text, symbols, portraits, year and denomination to help identify it.",
  },
  {
    question: "Can I sell my own coins?",
    answer:
      "Yes. Registered sellers can scan a coin, review the generated details, add quantity and price, then publish it to the marketplace.",
  },
  {
    question: "How is estimated value calculated?",
    answer:
      "The platform can use rarity, year, condition, metal, historical references and comparable market data to provide an estimated range.",
  },
  {
    question: "What images give the best scan results?",
    answer:
      "Use sharp, well-lit front and back images with minimal glare and a clear view of the coin surface.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1050px]">
        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#c88925]">
            Need Help?
          </p>

          <h2 className="mt-1 font-serif text-[22px] font-semibold text-neutral-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-5 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                >
                  <span className="text-[12px] font-semibold text-neutral-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={17}
                    className={`text-[#b87516] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-neutral-100 px-4 py-3">
                    <p className="text-[10px] leading-[16px] text-neutral-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;