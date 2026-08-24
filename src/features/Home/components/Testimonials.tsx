import {
  Quote,
  Star,
} from "lucide-react";

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
    <section className="w-full min-w-0 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full min-w-0 max-w-[1540px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#c88925] sm:text-[10px] sm:tracking-[0.16em] lg:text-[11px]">
            Collector Experiences
          </p>

          <h2 className="mt-2 font-serif text-[24px] font-semibold leading-tight text-neutral-900 sm:text-[28px] lg:text-[30px]">
            Trusted by Coin Collectors
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[11px] leading-5 text-neutral-500 sm:text-[12px] sm:leading-6 lg:text-sm">
            See what collectors and sellers think about discovering,
            valuing and trading coins through CoinHeritage.
          </p>
        </div>

        <div className="mt-6 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 xl:grid-cols-3 xl:gap-5">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative flex min-w-0 flex-col rounded-2xl border border-neutral-200 bg-[#fffdf9] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.07)] sm:p-6"
            >
              <Quote
                size={26}
                strokeWidth={1.5}
                className="absolute right-4 top-4 text-[#d8aa61]/35 sm:right-5 sm:top-5 sm:h-7 sm:w-7"
              />

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill="currentColor"
                    strokeWidth={1.5}
                    className="text-[#d79b32] sm:h-[15px] sm:w-[15px]"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-[11px] leading-5 text-neutral-600 sm:mt-5 sm:text-[12px] sm:leading-6 lg:text-[13px]">
                “{testimonial.review}”
              </p>

              <div className="mt-5 border-t border-neutral-200 pt-4 sm:mt-6">
                <p className="truncate text-[13px] font-semibold text-neutral-900 sm:text-[14px]">
                  {testimonial.name}
                </p>

                <p className="mt-1 truncate text-[10px] text-neutral-500 sm:text-[11px]">
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