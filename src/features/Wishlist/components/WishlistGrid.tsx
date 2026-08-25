import WishlistEmpty from "./WishlistEmpty";
import WishlistItem, {
  type WishlistItemData,
} from "./WishlistItem";

import styles from "@/components/animations/css/wishlist/WishlistGrid.module.css";

const wishlistItems: WishlistItemData[] = [
  {
    id: "british-india-rupee-1918",
    title: "British India One Rupee",
    country: "British India",
    year: "1918",
    metal: "Silver",
    condition: "Very Fine",
    price: "$86",
    image: "/images/coins/coin-1.jpg",
  },
  {
    id: "morgan-dollar-1921",
    title: "Morgan Silver Dollar",
    country: "United States",
    year: "1921",
    metal: "Silver",
    condition: "Extremely Fine",
    price: "$118",
    image: "/images/coins/coin-7.jpg",
  },
  {
    id: "victoria-half-crown-1887",
    title: "Victoria Half Crown",
    country: "United Kingdom",
    year: "1887",
    metal: "Silver",
    condition: "Fine",
    price: "$146",
    image: "/images/coins/coin-4.jpg",
  },
];

const WishlistGrid = () => {
  if (wishlistItems.length === 0) {
    return <WishlistEmpty />;
  }

  return (
    <section className={styles.wishlistGridSection}>
      <div className={styles.wishlistGridTop}>
        <div>
          <p className={styles.wishlistGridEyebrow}>
            Saved Items
          </p>

          <h2 className={styles.wishlistGridTitle}>
            {wishlistItems.length} coins saved
          </h2>
        </div>
      </div>

      <div className={styles.wishlistGrid}>
        {wishlistItems.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default WishlistGrid;