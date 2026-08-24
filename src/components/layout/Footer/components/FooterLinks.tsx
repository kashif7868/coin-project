import Link from "next/link";

import styles from "@/components/animations/css/footer/FooterLinks.module.css";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks = ({
  title,
  links,
}: FooterLinksProps) => {
  return (
    <div className={styles.footerLinksGroup}>
      <h3 className={styles.footerLinksTitle}>
        {title}
      </h3>

      <div className={styles.footerLinksList}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.footerLinksItem}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;