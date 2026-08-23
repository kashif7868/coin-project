import HeaderActions from "./components/HeaderActions";
import Logo from "./components/Logo";
import MainNavigation from "./components/MainNavigation";
import MobileHeader from "./components/MobileHeader";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1540px] items-center justify-between px-5 sm:px-7 lg:px-8">
        <Logo />

        <div className="flex flex-1 items-center justify-center">
          <MainNavigation />
        </div>

        <HeaderActions />
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;