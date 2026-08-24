import {
  Quote,
  Star,
} from "lucide-react";

import styles from "@/components/animations/css/home/Testimonials.module.css";

const testimonials = [
  {
    name: "James Walker",
    role: "Coin Collector",
    review:
      "CoinHeritage made identification much easier. I uploaded a coin, reviewed the information and found similar listings within minutes.",
  },
  {
    name: "Ahmed Khan",
    role: "Numismatic Seller",
    review:
      "The marketplace structure is clean and practical. Listing coins with proper details, quantity and pricing feels much faster than traditional platforms.",
  },
  {
    name: "Sophia Martin",
    role: "Historical Coin Enthusiast",
    review:
      "I particularly like the historical context. It makes every coin feel like more than a product and helps collectors understand what they are buying.",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsHeader}>
          <p className={styles.testimonialsEyebrow}>
            Collector Experiences
          </p>

          <h2 className={styles.testimonialsHeading}>
            Trusted by Coin Collectors
          </h2>

          <p className={styles.testimonialsIntro}>
            See what collectors and sellers think about
            discovering, valuing and trading coins through
            CoinHeritage.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={styles.testimonialCard}
            >
              <Quote
                size={26}
                strokeWidth={1.5}
                className={styles.testimonialQuote}
              />

              <div className={styles.testimonialStars}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className={styles.testimonialReview}>
                “{testimonial.review}”
              </p>

              <div className={styles.testimonialFooter}>
                <p className={styles.testimonialName}>
                  {testimonial.name}
                </p>

                <p className={styles.testimonialRole}>
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;