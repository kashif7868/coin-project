import { Quote, Star } from "lucide-react";

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
    <section className="bg-white px-5 py-12 sm:px-7 lg:px-8">
      <div className="mx-auto w-full max-w-[1540px]">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c88925]">
            Collector Experiences
          </p>

          <h2 className="mt-2 font-serif text-3xl font-semibold text-neutral-900">
            Trusted by Coin Collectors
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
            See what collectors and sellers think about discovering, valuing and
            trading coins through CoinHeritage.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-2xl border border-neutral-200 bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <Quote
                size={28}
                strokeWidth={1.5}
                className="absolute right-5 top-5 text-[#d8aa61]/40"
              />

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                    strokeWidth={1.5}
                    className="text-[#d79b32]"
                  />
                ))}
              </div>

              <p className="mt-5 text-[13px] leading-6 text-neutral-600">
                “{testimonial.review}”
              </p>

              <div className="mt-6 border-t border-neutral-200 pt-4">
                <p className="text-[14px] font-semibold text-neutral-900">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[11px] text-neutral-500">
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