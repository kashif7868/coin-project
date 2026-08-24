"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import styles from "@/components/animations/css/home/FaqSection.module.css";

const faqs = [
  {
    question: "How does coin identification work?",
    answer:
      "Upload clear images of both sides of the coin. The platform analyzes visible text, symbols, portraits, year and denomination to help identify it.",
  },
  {
    question: "Can I sell my own coins?",
    answer:
      "Yes. Registered sellers can scan or upload a coin, review the generated details, add quantity and price, then publish it to the marketplace.",
  },
  {
    question: "How is estimated value calculated?",
    answer:
      "The platform can use rarity, year, condition, metal, historical references and comparable market data to provide an estimated range.",
  },
  {
    question: "What images give the best results?",
    answer:
      "Use sharp, well-lit front and back images with minimal glare and a clear view of the coin surface.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <p className={styles.faqEyebrow}>
            Need Help?
          </p>

          <h2 className={styles.faqHeading}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className={`${styles.faqItem} ${
                  isOpen ? styles.faqItemOpen : ""
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className={styles.faqQuestionButton}
                >
                  <span className={styles.faqQuestion}>
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                    className={`${styles.faqChevron} ${
                      isOpen
                        ? styles.faqChevronOpen
                        : ""
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
                      className={styles.faqAnswerWrapper}
                    >
                      <div className={styles.faqAnswerInner}>
                        <p className={styles.faqAnswer}>
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