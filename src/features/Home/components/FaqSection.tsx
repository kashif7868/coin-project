"use client";

import { AnimatePresence, motion } from "framer-motion";
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
    <section className="w-full min-w-0 bg-white px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full min-w-0 max-w-[1050px]">
        <div className="text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#c88925] sm:text-[9px] sm:tracking-[0.16em]">
            Need Help?
          </p>

          <h2 className="mx-auto mt-1 max-w-[700px] font-serif text-[20px] font-semibold leading-tight text-neutral-900 sm:text-[22px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-5 space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="min-w-0 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.025)]"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full min-w-0 items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-[#fffdf9] sm:gap-4 sm:px-5 sm:py-3.5"
                >
                  <span className="min-w-0 flex-1 text-[11px] font-semibold leading-5 text-neutral-900 sm:text-[12px]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                    className={`shrink-0 text-[#b87516] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="min-w-0 overflow-hidden"
                    >
                      <div className="border-t border-neutral-100 px-4 py-3 sm:px-5 sm:py-4">
                        <p className="text-[10px] leading-[17px] text-neutral-500 sm:text-[11px] sm:leading-[18px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;