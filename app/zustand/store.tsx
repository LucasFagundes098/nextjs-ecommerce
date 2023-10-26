import { create } from "zustand";
import { Product } from "../types/types";

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        return { items: [...state.items] };
      } else {
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
}));
