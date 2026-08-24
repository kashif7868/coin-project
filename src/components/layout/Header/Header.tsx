import HeaderActions from "./components/HeaderActions";
import Logo from "./components/Logo";
import MainNavigation from "./components/MainNavigation";
import MobileHeader from "./components/MobileHeader";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#090909]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] w-full max-w-[1540px] min-w-0 items-center justify-between px-4 sm:h-[64px] sm:px-6 lg:h-[72px] lg:px-8">
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <MainNavigation />
        </div>

        <div className="hidden shrink-0 lg:block">
          <HeaderActions />
        </div>

        <div className="shrink-0 lg:hidden">
          <MobileHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;