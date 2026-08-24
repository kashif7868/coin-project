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

import styles from "@/components/animations/css/home/FeaturedCoins.module.css";

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
    <section className={styles.featuredCoinsSection}>
      <div className={styles.featuredCoinsHeader}>
        <h2 className={styles.featuredCoinsHeading}>
          Featured Coins
        </h2>

        <Link
          href="/coins"
          className={styles.featuredCoinsViewAll}
        >
          View All Coins →
        </Link>
      </div>

      <div className={styles.featuredCoinsDesktopGrid}>
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
            className={styles.featuredCoinsGridItem}
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

      <div className={styles.featuredCoinsMobileScroller}>
        <div className={styles.featuredCoinsMobileTrack}>
          {coins.map((coin) => (
            <div
              key={coin.id}
              className={styles.featuredCoinsMobileItem}
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
    </section>
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
      className={styles.featuredCoinCard}
    >
      <motion.button
        type="button"
        aria-label={
          isWishlisted
            ? `${coin.name} is in wishlist`
            : `Add ${coin.name} to wishlist`
        }
        onClick={(event) =>
          stopAndRun(event, () =>
            onWishlist(coin)
          )
        }
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className={`${styles.featuredCoinWishlistButton} ${
          isWishlisted
            ? styles.featuredCoinWishlistActive
            : ""
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

      <div className={styles.featuredCoinVisual}>
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
          className={styles.featuredCoinDisc}
        >
          <div className={styles.featuredCoinRingOuter} />
          <div className={styles.featuredCoinRingInner} />

          <span className={styles.featuredCoinLabel}>
            {coin.label}
          </span>
        </motion.div>
      </div>

      <div className={styles.featuredCoinContent}>
        <h3 className={styles.featuredCoinName}>
          {coin.name}
          {coin.year ? ` ${coin.year}` : ""}
        </h3>

        <div className={styles.featuredCoinMetadata}>
          {coin.subtitle && (
            <p className={styles.featuredCoinSubtitle}>
              {coin.subtitle}
            </p>
          )}

          {coin.condition && (
            <p className={styles.featuredCoinCondition}>
              {coin.condition}
            </p>
          )}
        </div>

        <div className={styles.featuredCoinFooter}>
          <div className={styles.featuredCoinPriceArea}>
            <div className={styles.featuredCoinPriceRow}>
              <div className={styles.featuredCoinPriceDetails}>
                <p className={styles.featuredCoinPrice}>
                  {coin.price}
                </p>

                <p className={styles.featuredCoinStock}>
                  {coin.stock} in stock
                </p>
              </div>

              <span className={styles.featuredCoinViewIndicator}>
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
              className={styles.featuredCoinCartButton}
            >
              <ShoppingCart
                size={12}
                strokeWidth={1.8}
              />

              <span>Add to Cart</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedCoins;