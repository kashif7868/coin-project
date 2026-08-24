import Image from "next/image";
import Link from "next/link";

import styles from "@/components/animations/css/home/BlogSection.module.css";

const articles = [
  {
    id: 1,
    title: "Collecting Coins as an Investment",
    excerpt:
      "Understand what makes historical coins valuable and how collectors assess long-term potential.",
    date: "June 12, 2026",
    image: "/images/home/blog-1.webp",
  },
  {
    id: 2,
    title: "Top Rare Coins Worth Thousands",
    excerpt:
      "Explore rare issues, minting errors and historical pieces that attract serious collector demand.",
    date: "June 8, 2026",
    image: "/images/home/blog-2.webp",
  },
  {
    id: 3,
    title: "How to Identify Authentic Coins",
    excerpt:
      "Learn the key signs of authenticity and what collectors should inspect before buying or selling.",
    date: "June 5, 2026",
    image: "/images/home/blog-3.webp",
  },
];

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <div className={styles.blogHeaderText}>
            <p className={styles.blogEyebrow}>
              Knowledge &amp; History
            </p>

            <h2 className={styles.blogHeading}>
              From Our Blog
            </h2>
          </div>

          <Link
            href="/blog"
            className={styles.blogViewAll}
          >
            View All Articles →
          </Link>
        </div>

        <div className={styles.blogGrid}>
          {articles.map((article) => (
            <article
              key={article.id}
              className={styles.blogCard}
            >
              <Link
                href={`/blog/${article.id}`}
                aria-label={`Read ${article.title}`}
                className={styles.blogImageLink}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className={styles.blogImage}
                />
              </Link>

              <div className={styles.blogCardContent}>
                <p className={styles.blogDate}>
                  {article.date}
                </p>

                <Link
                  href={`/blog/${article.id}`}
                  className={styles.blogTitleLink}
                >
                  <h3 className={styles.blogCardTitle}>
                    {article.title}
                  </h3>
                </Link>

                <p className={styles.blogExcerpt}>
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.id}`}
                  className={styles.blogReadMore}
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;