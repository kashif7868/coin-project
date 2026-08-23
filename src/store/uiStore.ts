import { create } from "zustand";

interface UIStore {
  isAuthRequiredOpen: boolean;
  isMobileMenuOpen: boolean;
  isCartDrawerOpen: boolean;

  openAuthRequired: () => void;
  closeAuthRequired: () => void;

  openMobileMenu: () => void;
  closeMobileMenu: () => void;

  openCartDrawer: () => void;
  closeCartDrawer: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isAuthRequiredOpen: false,
  isMobileMenuOpen: false,
  isCartDrawerOpen: false,

  openAuthRequired: () =>
    set({
      isAuthRequiredOpen: true,
    }),

  closeAuthRequired: () =>
    set({
      isAuthRequiredOpen: false,
    }),

  openMobileMenu: () =>
    set({
      isMobileMenuOpen: true,
    }),

  closeMobileMenu: () =>
    set({
      isMobileMenuOpen: false,
    }),

  openCartDrawer: () =>
    set({
      isCartDrawerOpen: true,
    }),

  closeCartDrawer: () =>
    set({
      isCartDrawerOpen: false,
    }),
}));