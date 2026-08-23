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
    <section className="bg-[#fafafa] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1540px]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#c88925]">
              Knowledge & History
            </p>

            <h2 className="mt-1 font-serif text-[22px] font-semibold text-neutral-900">
              From Our Blog
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-[10px] font-medium text-neutral-500 hover:text-[#b87516]"
          >
            View All Articles →
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            >
              <Link
                href={`/blog/${article.id}`}
                className="relative block aspect-[16/8.8] overflow-hidden bg-neutral-100"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="p-4">
                <p className="text-[9px] text-neutral-400">
                  {article.date}
                </p>

                <Link href={`/blog/${article.id}`}>
                  <h3 className="mt-1.5 text-[14px] font-semibold leading-5 text-neutral-900">
                    {article.title}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-2 text-[10px] leading-[16px] text-neutral-500">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.id}`}
                  className="mt-3 inline-flex text-[10px] font-semibold text-[#b87516]"
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