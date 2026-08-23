import { create } from "zustand";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthStore {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAuthLoading: boolean;

  setUser: (user: AuthUser | null) => void;
  setAuthLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  isAuthenticated: false,

  isAuthLoading: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: Boolean(user),
    }),

  setAuthLoading: (loading) =>
    set({
      isAuthLoading: loading,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));