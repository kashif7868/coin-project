import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full min-w-0 bg-[#fafafa] px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full min-w-0 max-w-[1540px]">
        <div className="flex min-w-0 items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-[8px] font-semibold uppercase tracking-[0.14em] text-[#c88925] sm:text-[9px] sm:tracking-[0.16em]">
              Knowledge &amp; History
            </p>

            <h2 className="mt-1 font-serif text-[20px] font-semibold text-neutral-900 sm:text-[22px]">
              From Our Blog
            </h2>
          </div>

          <Link
            href="/blog"
            className="shrink-0 whitespace-nowrap text-[9px] font-medium text-neutral-500 transition-colors hover:text-[#b87516] sm:text-[10px]"
          >
            View All Articles →
          </Link>
        </div>

        <div className="mt-5 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group min-w-0 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
            >
              <Link
                href={`/blog/${article.id}`}
                aria-label={`Read ${article.title}`}
                className="relative block aspect-[16/9] min-w-0 overflow-hidden bg-neutral-100"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="min-w-0 p-4">
                <p className="text-[9px] text-neutral-400">
                  {article.date}
                </p>

                <Link href={`/blog/${article.id}`}>
                  <h3 className="mt-1.5 line-clamp-2 text-[13px] font-semibold leading-5 text-neutral-900 transition-colors group-hover:text-[#a66a17] sm:text-[14px]">
                    {article.title}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-2 text-[10px] leading-[16px] text-neutral-500">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.id}`}
                  className="mt-3 inline-flex text-[10px] font-semibold text-[#b87516] transition-colors hover:text-[#8f5c13]"
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