"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/coins/CoinCard.module.css";

export interface CoinCardData {
  id: string;
  name: string;
  country: string;
  year: string;
  metal: string;
  condition: string;
  price: string;
  image: string;
  featured?: boolean;
}

interface CoinCardProps {
  coin: CoinCardData;
}

const CoinCard = ({
  coin,
}: CoinCardProps) => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const openAuthRequired = useUIStore(
    (state) => state.openAuthRequired
  );

  const handleProtectedAction = () => {
    if (!isAuthenticated) {
      openAuthRequired();
      return;
    }

    // Later:
    // wishlist/cart store action
  };

  return (
    <article className={styles.coinCard}>
      <div className={styles.coinCardImageArea}>
        <Link
          href={`/coins/${coin.id}`}
          className={styles.coinCardImageLink}
          aria-label={`View ${coin.name}`}
        >
          <Image
            src={coin.image}
            alt={coin.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
            className={styles.coinCardImage}
          />
        </Link>

        {coin.featured && (
          <span className={styles.coinCardFeatured}>
            Featured
          </span>
        )}

        <button
          type="button"
          aria-label={`Add ${coin.name} to wishlist`}
          onClick={handleProtectedAction}
          className={styles.coinCardWishlist}
        >
          <Heart
            size={16}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <div className={styles.coinCardBody}>
        <div className={styles.coinCardMeta}>
          <span>{coin.country}</span>
          <span>{coin.year}</span>
        </div>

        <Link
          href={`/coins/${coin.id}`}
          className={styles.coinCardTitle}
        >
          {coin.name}
        </Link>

        <div className={styles.coinCardAttributes}>
          <span>{coin.metal}</span>
          <span>{coin.condition}</span>
        </div>

        <div className={styles.coinCardFooter}>
          <div>
            <span className={styles.coinCardPriceLabel}>
              Price
            </span>

            <p className={styles.coinCardPrice}>
              {coin.price}
            </p>
          </div>

          <button
            type="button"
            onClick={handleProtectedAction}
            className={styles.coinCardCartButton}
            aria-label={`Add ${coin.name} to cart`}
          >
            <ShoppingCart
              size={16}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CoinCard;