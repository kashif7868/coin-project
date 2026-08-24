import Link from "next/link";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

import styles from "@/components/animations/css/Auth/AuthCard.module.css";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footerText?: string;
  footerLinkText?: string;
  footerHref?: string;
}

const AuthCard = ({
  title,
  description,
  children,
  footerText,
  footerLinkText,
  footerHref,
}: AuthCardProps) => {
  return (
    <div className={styles.authCardWrapper}>
      <div className={styles.authCard}>
        <div className={styles.authCardBrandHeader}>
          <Link
            href="/"
            className={styles.authCardBrandLink}
            aria-label="CoinHeritage home"
          >
            <div className={styles.authCardLogo}>
              <span>CH</span>
            </div>

            <div className={styles.authCardBrandText}>
              <p className={styles.authCardBrandName}>
                Coin
                <span>Heritage</span>
              </p>

              <p className={styles.authCardTagline}>
                Discover. Collect. Own History.
              </p>
            </div>
          </Link>
        </div>

        <div className={styles.authCardContent}>
          <div className={styles.authCardIntro}>
            <div className={styles.authCardBadge}>
              <Sparkles
                size={12}
                strokeWidth={1.8}
              />

              <span>CoinHeritage Account</span>
            </div>

            <h1 className={styles.authCardTitle}>
              {title}
            </h1>

            <p className={styles.authCardDescription}>
              {description}
            </p>
          </div>

          {children}
        </div>

        {footerText &&
          footerLinkText &&
          footerHref && (
            <div className={styles.authCardFooter}>
              <span>{footerText} </span>

              <Link
                href={footerHref}
                className={styles.authCardFooterLink}
              >
                {footerLinkText}
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default AuthCard;