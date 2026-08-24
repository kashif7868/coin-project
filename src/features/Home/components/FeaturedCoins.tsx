"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useState,
  type MouseEvent,
} from "react";
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

  const [wishlistedIds, setWishlistedIds] =
    useState<number[]>([]);

  const handleWishlist = (coin: Coin) => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    if (wishlistedIds.includes(coin.id)) {
      toast.info("Already in wishlist", {
        description: coin.name,
      });

      return;
    }

    setWishlistedIds((current) => [
      ...current,
      coin.id,
    ]);

    toast.success("Added to wishlist", {
      description: coin.name,
    });
  };

  const handleAddToCart = (coin: Coin) => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    toast.success("Added to cart", {
      description: `${coin.name} · Quantity 1`,
    });
  };

  return (
    <div className="w-full min-w-0 rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.04)] sm:p-4">
      <div className="flex min-w-0 items-center justify-between gap-3">
        <h2 className="truncate font-serif text-[17px] font-semibold text-neutral-900 sm:text-[18px]">
          Featured Coins
        </h2>

        <Link
          href="/coins"
          className="shrink-0 text-[9px] font-medium text-neutral-500 transition-colors hover:text-[#b87516] sm:text-[10px]"
        >
          View All Coins →
        </Link>
      </div>

      {/* Desktop / Laptop */}
      <div className="mt-3 hidden min-w-0 gap-3 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {coins.map((coin, index) => (
          <motion.div
            key={coin.id}
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-w-0"
          >
            <CoinCard
              coin={coin}
              isWishlisted={wishlistedIds.includes(
                coin.id
              )}
              onWishlist={handleWishlist}
              onAddToCart={handleAddToCart}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile / Tablet */}
      <div className="mt-3 w-full min-w-0 overflow-x-auto pb-2 lg:hidden">
        <div className="flex w-max min-w-full snap-x snap-mandatory gap-3">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="w-[72vw] min-w-[180px] max-w-[230px] shrink-0 snap-start sm:w-[210px]"
            >
              <CoinCard
                coin={coin}
                isWishlisted={wishlistedIds.includes(
                  coin.id
                )}
                onWishlist={handleWishlist}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CoinCardProps {
  coin: Coin;
  isWishlisted: boolean;
  onWishlist: (coin: Coin) => void;
  onAddToCart: (coin: Coin) => void;
}

const CoinCard = ({
  coin,
  isWishlisted,
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
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.99,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 20,
      }}
      className="group relative flex h-full min-w-0 cursor-pointer flex-col rounded-xl border border-neutral-200 bg-white p-3 outline-none transition-all duration-300 hover:border-[#d6a051]/60 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] focus-visible:ring-2 focus-visible:ring-[#d99a31]/40"
    >
      {/* Wishlist */}
      <motion.button
        type="button"
        aria-label={
          isWishlisted
            ? `${coin.name} is in wishlist`
            : `Add ${coin.name} to wishlist`
        }
        onClick={(event) =>
          stopAndRun(event, () => onWishlist(coin))
        }
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className={`absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border bg-white shadow-sm transition-colors ${
          isWishlisted
            ? "border-red-200 text-red-500"
            : "border-neutral-200 text-neutral-500 hover:border-red-200 hover:text-red-500"
        }`}
      >
        <Heart
          size={13}
          strokeWidth={1.8}
          fill={
            isWishlisted
              ? "currentColor"
              : "none"
          }
        />
      </motion.button>

      {/* Coin */}
      <div className="relative flex h-[100px] min-w-0 items-center justify-center overflow-hidden rounded-lg bg-[radial-gradient(circle_at_center,rgba(217,154,49,0.08),transparent_65%)]">
        <motion.div
          whileHover={{
            scale: 1.06,
            rotate: 2,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
          className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#8f5d25] bg-[radial-gradient(circle_at_35%_30%,#e5c07c,#bb7f39_42%,#74451f_78%)] shadow-[0_8px_16px_rgba(0,0,0,0.20)]"
        >
          <div className="absolute inset-[5px] rounded-full border border-black/20" />
          <div className="absolute inset-[10px] rounded-full border border-black/10" />

          <span className="relative font-serif text-[9px] font-semibold text-black/50">
            {coin.label}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="mt-2 flex flex-1 flex-col">
        <h3 className="text-[10px] font-semibold leading-[14px] text-neutral-900 transition-colors group-hover:text-[#a66a17]">
          {coin.name}
          {coin.year ? ` ${coin.year}` : ""}
        </h3>

        {coin.subtitle && (
          <p className="mt-1 text-[8px] text-neutral-500">
            {coin.subtitle}
          </p>
        )}

        {coin.condition && (
          <p className="mt-1 truncate text-[8px] text-neutral-400">
            {coin.condition}
          </p>
        )}

        <div className="mt-auto pt-3">
          <div className="border-t border-neutral-100 pt-2">
            <div className="flex items-end justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-[#c07c1d]">
                  {coin.price}
                </p>

                <p className="mt-0.5 text-[8px] text-neutral-500">
                  {coin.stock} in stock
                </p>
              </div>

              <span className="shrink-0 translate-x-1 text-[8px] font-medium text-[#a66a17] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                View →
              </span>
            </div>

            <motion.button
              type="button"
              onClick={(event) =>
                stopAndRun(event, () =>
                  onAddToCart(coin)
                )
              }
              whileTap={{
                scale: 0.96,
              }}
              className="mt-2 flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-[#11171c] px-3 text-[9px] font-semibold text-white transition-colors hover:bg-[#d99a31] hover:text-black"
            >
              <ShoppingCart
                size={12}
                strokeWidth={1.8}
              />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedCoins;