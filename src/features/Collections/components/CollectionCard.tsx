import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Coins,
} from "lucide-react";

import styles from "@/components/animations/css/collections/CollectionCard.module.css";

export interface CollectionCardData {
  id: string;
  title: string;
  description: string;
  category: string;
  coinCount: number;
  image: string;
  featured?: boolean;
}

interface CollectionCardProps {
  collection: CollectionCardData;
}

const CollectionCard = ({
  collection,
}: CollectionCardProps) => {
  return (
    <article className={styles.collectionCard}>
      <Link
        href={`/collections/${collection.id}`}
        className={styles.collectionCardImageArea}
        aria-label={`View ${collection.title}`}
      >
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className={styles.collectionCardImage}
        />

        <div
          className={styles.collectionCardOverlay}
        />

        {collection.featured && (
          <span
            className={styles.collectionCardFeatured}
          >
            Featured
          </span>
        )}

        <div
          className={styles.collectionCardImageContent}
        >
          <span
            className={styles.collectionCardCategory}
          >
            {collection.category}
          </span>

          <h2
            className={styles.collectionCardImageTitle}
          >
            {collection.title}
          </h2>
        </div>
      </Link>

      <div className={styles.collectionCardBody}>
        <p
          className={styles.collectionCardDescription}
        >
          {collection.description}
        </p>

        <div className={styles.collectionCardFooter}>
          <div
            className={styles.collectionCardCount}
          >
            <Coins
              size={15}
              strokeWidth={1.7}
            />

            <span>
              {collection.coinCount} coins
            </span>
          </div>

          <Link
            href={`/collections/${collection.id}`}
            className={styles.collectionCardAction}
            aria-label={`Explore ${collection.title}`}
          >
            <span>Explore</span>

            <ArrowRight
              size={14}
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CollectionCard;