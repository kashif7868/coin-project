"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HeartOff,
  ShoppingCart,
} from "lucide-react";
import { toast } from "sonner";

import styles from "@/components/animations/css/wishlist/WishlistItem.module.css";

export interface WishlistItemData {
  id: string;
  title: string;
  country: string;
  year: string;
  metal: string;
  condition: string;
  price: string;
  image: string;
}

interface WishlistItemProps {
  item: WishlistItemData;
}

const WishlistItem = ({
  item,
}: WishlistItemProps) => {
  const handleRemove = () => {
    toast.success(
      "Removed from wishlist"
    );

    // Later:
    // wishlistStore.remove(item.id)
  };

  const handleAddToCart = () => {
    toast.success(
      "Added to cart"
    );

    // Later:
    // cartStore.add(item)
  };

  return (
    <article className={styles.wishlistItem}>
      <div className={styles.wishlistItemImageArea}>
        <Link
          href={`/coins/${item.id}`}
          className={styles.wishlistItemImageLink}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
            className={styles.wishlistItemImage}
          />
        </Link>

        <button
          type="button"
          aria-label={`Remove ${item.title} from wishlist`}
          onClick={handleRemove}
          className={styles.wishlistItemRemove}
        >
          <HeartOff
            size={15}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <div className={styles.wishlistItemBody}>
        <div className={styles.wishlistItemMeta}>
          <span>{item.country}</span>
          <span>{item.year}</span>
        </div>

        <Link
          href={`/coins/${item.id}`}
          className={styles.wishlistItemTitle}
        >
          {item.title}
        </Link>

        <div className={styles.wishlistItemTags}>
          <span>{item.metal}</span>
          <span>{item.condition}</span>
        </div>

        <div className={styles.wishlistItemFooter}>
          <strong>{item.price}</strong>

          <button
            type="button"
            onClick={handleAddToCart}
            className={styles.wishlistItemCart}
          >
            <ShoppingCart
              size={15}
              strokeWidth={1.8}
            />

            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default WishlistItem;