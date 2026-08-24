"use client";

import { Mail } from "lucide-react";
import {
  useState,
  type FormEvent,
} from "react";

import styles from "@/components/animations/css/footer/Newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return;
    }

    console.log(
      "Newsletter email:",
      trimmedEmail
    );

    // Later:
    // API request for newsletter subscription
  };

  return (
    <div className={styles.newsletterSection}>
      <h3 className={styles.newsletterTitle}>
        Stay Updated
      </h3>

      <p className={styles.newsletterDescription}>
        Get updates on rare coins, auctions, market insights
        and new collections.
      </p>

      <form
        onSubmit={handleSubmit}
        className={styles.newsletterForm}
      >
        <div className={styles.newsletterInputWrapper}>
          <Mail
            size={17}
            strokeWidth={1.8}
            className={styles.newsletterIcon}
          />

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Your email address"
            aria-label="Email address"
            autoComplete="email"
            className={styles.newsletterInput}
          />
        </div>

        <button
          type="submit"
          className={styles.newsletterButton}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;