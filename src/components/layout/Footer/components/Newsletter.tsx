"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) return;

    console.log("Newsletter email:", trimmedEmail);

    // Later:
    // API request for newsletter subscription
  };

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
        Stay Updated
      </h3>

      <p className="mt-4 text-sm leading-6 text-white/55">
        Get updates on rare coins, auctions, market insights and new
        collections.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col gap-3 sm:flex-row xl:flex-col"
      >
        <div className="relative flex-1">
          <Mail
            size={17}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          />

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            aria-label="Email address"
            className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] pl-10 pr-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/35 hover:border-white/20 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"
          />
        </div>

        <button
          type="submit"
          className="h-11 rounded-lg bg-amber-500 px-5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-amber-400"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;