"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import styles from "@/components/animations/css/cart/CartItem.module.css";

export interface CartItemData {
  id: string;
  title: string;
  country: string;
  year: string;
  metal: string;
  condition: string;
  price: number;
  quantity: number;
  available: number;
  image: string;
}

interface CartItemProps {
  item: CartItemData;
}

const CartItem = ({
  item,
}: CartItemProps) => {
  const [quantity, setQuantity] =
    useState(item.quantity);

  const decreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(1, current - 1)
    );
  };

  const increaseQuantity = () => {
    setQuantity((current) =>
      Math.min(item.available, current + 1)
    );
  };

  const handleRemove = () => {
    toast.success("Removed from cart");

    // Later:
    // cartStore.remove(item.id)
  };

  const handleMoveToWishlist = () => {
    toast.success("Moved to wishlist");

    // Later:
    // wishlistStore.add(item)
    // cartStore.remove(item.id)
  };

  const total =
    item.price * quantity;

  return (
    <article className={styles.cartItem}>
      <Link
        href={`/coins/${item.id}`}
        className={styles.cartItemImageLink}
      >
        <div className={styles.cartItemImageArea}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="110px"
            className={styles.cartItemImage}
          />
        </div>
      </Link>

      <div className={styles.cartItemContent}>
        <div className={styles.cartItemTop}>
          <div className={styles.cartItemInfo}>
            <div className={styles.cartItemMeta}>
              <span>{item.country}</span>
              <span>{item.year}</span>
            </div>

            <Link
              href={`/coins/${item.id}`}
              className={styles.cartItemTitle}
            >
              {item.title}
            </Link>

            <div className={styles.cartItemTags}>
              <span>{item.metal}</span>
              <span>{item.condition}</span>
            </div>
          </div>

          <div className={styles.cartItemPrice}>
            <span>Price</span>

            <strong>
              ${item.price}
            </strong>
          </div>
        </div>

        <div className={styles.cartItemBottom}>
          <div className={styles.cartItemQuantityArea}>
            <span className={styles.cartItemQuantityLabel}>
              Quantity
            </span>

            <div className={styles.cartItemQuantity}>
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus
                  size={14}
                  strokeWidth={1.8}
                />
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                aria-label="Increase quantity"
                onClick={increaseQuantity}
                disabled={
                  quantity >= item.available
                }
              >
                <Plus
                  size={14}
                  strokeWidth={1.8}
                />
              </button>
            </div>

            <span className={styles.cartItemStock}>
              {item.available} available
            </span>
          </div>

          <div className={styles.cartItemActions}>
            <button
              type="button"
              onClick={handleMoveToWishlist}
              className={styles.cartItemSecondaryAction}
            >
              <Heart
                size={15}
                strokeWidth={1.8}
              />

              <span>Wishlist</span>
            </button>

            <button
              type="button"
              onClick={handleRemove}
              className={styles.cartItemRemoveAction}
            >
              <Trash2
                size={15}
                strokeWidth={1.8}
              />

              <span>Remove</span>
            </button>
          </div>

          <div className={styles.cartItemTotal}>
            <span>Item Total</span>

            <strong>
              ${total}
            </strong>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;