import HeaderActions from "./components/HeaderActions";
import Logo from "./components/Logo";
import MainNavigation from "./components/MainNavigation";
import MobileHeader from "./components/MobileHeader";

import styles from "@/components/animations/css/header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSlot}>
          <Logo />
        </div>

        <div className={styles.desktopNav}>
          <MainNavigation />
        </div>

        <div className={styles.desktopActions}>
          <HeaderActions />
        </div>

        <div className={styles.mobileActions}>
          <MobileHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;