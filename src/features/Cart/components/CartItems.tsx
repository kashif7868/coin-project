import CartEmpty from "./CartEmpty";
import CartItem, {
  type CartItemData,
} from "./CartItem";

import styles from "@/components/animations/css/cart/CartItems.module.css";

const cartItems: CartItemData[] = [
  {
    id: "british-india-rupee-1918",
    title: "British India One Rupee",
    country: "British India",
    year: "1918",
    metal: "Silver",
    condition: "Very Fine",
    price: 86,
    quantity: 1,
    available: 4,
    image: "/images/coins/coin-1.jpg",
  },
  {
    id: "morgan-dollar-1921",
    title: "Morgan Silver Dollar",
    country: "United States",
    year: "1921",
    metal: "Silver",
    condition: "Extremely Fine",
    price: 118,
    quantity: 1,
    available: 2,
    image: "/images/coins/coin-7.jpg",
  },
];

const CartItems = () => {
  if (cartItems.length === 0) {
    return <CartEmpty />;
  }

  return (
    <section className={styles.cartItems}>
      <div className={styles.cartItemsHeader}>
        <div>
          <p className={styles.cartItemsEyebrow}>
            Selected Coins
          </p>

          <h2 className={styles.cartItemsTitle}>
            {cartItems.length} items in your cart
          </h2>
        </div>
      </div>

      <div className={styles.cartItemsList}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default CartItems;