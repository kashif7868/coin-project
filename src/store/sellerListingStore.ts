import { create } from "zustand";

export interface SellerCoinDetails {
  name: string;
  country: string;
  year: string;
  denomination: string;
  metal: string;
  condition: string;
  rarity: string;
  estimatedValue: string;
}

interface SellerListingState {
  frontImage: string | null;
  backImage: string | null;

  coinDetails: SellerCoinDetails;

  quantity: number;
  price: number;
  description: string;

  setImages: (
    frontImage: string | null,
    backImage: string | null
  ) => void;

  setCoinDetails: (
    details: Partial<SellerCoinDetails>
  ) => void;

  setQuantity: (quantity: number) => void;
  setPrice: (price: number) => void;
  setDescription: (description: string) => void;

  resetListing: () => void;
}

const initialCoinDetails: SellerCoinDetails = {
  name: "",
  country: "",
  year: "",
  denomination: "",
  metal: "",
  condition: "",
  rarity: "",
  estimatedValue: "",
};

export const useSellerListingStore =
  create<SellerListingState>((set) => ({
    frontImage: null,
    backImage: null,

    coinDetails: initialCoinDetails,

    quantity: 1,
    price: 0,
    description: "",

    setImages: (
      frontImage,
      backImage
    ) => {
      set({
        frontImage,
        backImage,
      });
    },

    setCoinDetails: (details) => {
      set((state) => ({
        coinDetails: {
          ...state.coinDetails,
          ...details,
        },
      }));
    },

    setQuantity: (quantity) => {
      set({
        quantity: Math.max(1, quantity),
      });
    },

    setPrice: (price) => {
      set({
        price: Math.max(0, price),
      });
    },

    setDescription: (description) => {
      set({
        description,
      });
    },

    resetListing: () => {
      set({
        frontImage: null,
        backImage: null,
        coinDetails: initialCoinDetails,
        quantity: 1,
        price: 0,
        description: "",
      });
    },
  }));