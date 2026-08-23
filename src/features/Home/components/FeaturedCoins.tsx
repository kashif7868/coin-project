"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

interface Coin {
  id: number;
  name: string;
  year: string;
  subtitle: string;
  condition: string;
  price: string;
  stock: number;
  label: string;
}

const coins: Coin[] = [
  {
    id: 1,
    name: "British India 1 Rupee",
    year: "1918",
    subtitle: "George V",
    condition: "VF (Very Fine)",
    price: "$75.00",
    stock: 125,
    label: "1918",
  },
  {
    id: 2,
    name: "Mughal Empire Rupee",
    year: "",
    subtitle: "Shah Alam II",
    condition: "XF (Extremely Fine)",
    price: "$120.00",
    stock: 34,
    label: "M",
  },
  {
    id: 3,
    name: "Victoria Empress 1 Rupee",
    year: "1895",
    subtitle: "",
    condition: "VF (Very Fine)",
    price: "$85.00",
    stock: 32,
    label: "1895",
  },
  {
    id: 4,
    name: "Ottoman Empire 20 Kurush",
    year: "1293",
    subtitle: "",
    condition: "",
    price: "$95.00",
    stock: 28,
    label: "1293",
  },
  {
    id: 5,
    name: "Republic India 2 Rupees",
    year: "1942",
    subtitle: "",
    condition: "UNC (Uncirculated)",
    price: "$150.00",
    stock: 19,
    label: "1942",
  },
];

const FeaturedCoins = () => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const handleWishlist = (coin: Coin) => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    // Later:
    // wishlistMutation.mutate(coin.id);

    toast.success("Added to wishlist", {
      description: coin.name,
    });
  };

  const handleAddToCart = (coin: Coin) => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    // Later:
    // cartMutation.mutate({
    //   coinId: coin.id,
    //   quantity: 1,
    // });

    toast.success("Added to cart", {
      description: `${coin.name} · Quantity 1`,
    });
  };

  return (
    <div className="min-w-0 rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-[17px] font-semibold text-neutral-900">
          Featured Coins
        </h2>

        <Link
          href="/coins"
          className="text-[9px] font-medium text-neutral-500 transition-colors hover:text-[#b87516]"
        >
          View All Coins →
        </Link>
      </div>

      {/* Desktop */}
      <div className="mt-3 hidden grid-cols-5 gap-2 lg:grid">
        {coins.map((coin, index) => (
          <motion.div
            key={coin.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CoinCard
              coin={coin}
              onWishlist={handleWishlist}
              onAddToCart={handleAddToCart}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile */}
      <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 lg:hidden">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="min-w-[175px] snap-start"
          >
            <CoinCard
              coin={coin}
              onWishlist={handleWishlist}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface CoinCardProps {
  coin: Coin;
  onWishlist: (coin: Coin) => void;
  onAddToCart: (coin: Coin) => void;
}

const CoinCard = ({
  coin,
  onWishlist,
  onAddToCart,
}: CoinCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/coins/${coin.id}`);
  };

  const stopAndRun = (
    event: MouseEvent<HTMLButtonElement>,
    action: () => void
  ) => {
    event.stopPropagation();
    action();
  };

  return (
    <motion.article
      role="link"
      tabIndex={0}
      aria-label={`View details for ${coin.name}`}
      onClick={handleCardClick}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          handleCardClick();
        }
      }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 20,
      }}
      className="group relative min-w-0 cursor-pointer rounded-lg border border-neutral-200 bg-white p-2.5 outline-none transition-all duration-300 hover:border-[#d6a051]/60 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] focus-visible:ring-2 focus-visible:ring-[#d99a31]/40"
    >
      <motion.button
        type="button"
        aria-label={`Add ${coin.name} to wishlist`}
        onClick={(event) =>
          stopAndRun(event, () => onWishlist(coin))
        }
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-sm transition-colors hover:border-red-200 hover:text-red-500"
      >
        <Heart size={13} strokeWidth={1.8} />
      </motion.button>

      <div className="relative flex h-[90px] items-center justify-center overflow-hidden rounded-lg bg-[radial-gradient(circle_at_center,rgba(217,154,49,0.08),transparent_65%)]">
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 2,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
          className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border-[4px] border-[#8f5d25] bg-[radial-gradient(circle_at_35%_30%,#e5c07c,#bb7f39_42%,#74451f_78%)] shadow-[0_8px_16px_rgba(0,0,0,0.20)]"
        >
          <div className="absolute inset-[5px] rounded-full border border-black/20" />
          <div className="absolute inset-[10px] rounded-full border border-black/10" />

          <span className="relative font-serif text-[9px] font-semibold text-black/50">
            {coin.label}
          </span>
        </motion.div>
      </div>

      <h3 className="mt-1 min-h-[28px] text-[9px] font-semibold leading-[13px] text-neutral-900 transition-colors group-hover:text-[#a66a17]">
        {coin.name}
        {coin.year ? ` ${coin.year}` : ""}
      </h3>

      {coin.subtitle && (
        <p className="mt-0.5 text-[7px] text-neutral-500">
          {coin.subtitle}
        </p>
      )}

      {coin.condition && (
        <p className="mt-0.5 truncate text-[7px] text-neutral-400">
          {coin.condition}
        </p>
      )}

      <div className="mt-2 border-t border-neutral-100 pt-2">
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="text-[11px] font-semibold text-[#c07c1d]">
              {coin.price}
            </p>

            <p className="mt-0.5 text-[7px] text-neutral-500">
              {coin.stock} in stock
            </p>
          </div>

          <span className="translate-x-1 text-[7px] font-medium text-[#a66a17] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            View →
          </span>
        </div>

        <motion.button
          type="button"
          onClick={(event) =>
            stopAndRun(event, () => onAddToCart(coin))
          }
          whileTap={{ scale: 0.96 }}
          className="mt-2 flex h-8 w-full items-center justify-center gap-1.5 rounded-md bg-[#11171c] text-[9px] font-semibold text-white transition-colors hover:bg-[#d99a31] hover:text-black"
        >
          <ShoppingCart
            size={12}
            strokeWidth={1.8}
          />
          Add to Cart
        </motion.button>
      </div>
    </motion.article>
  );
};

export default FeaturedCoins;