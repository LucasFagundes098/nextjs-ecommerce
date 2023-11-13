import { create } from "zustand";
import { Product } from "../types/types";

export interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  addQuantityProduct: (product: Product) => void;
  removeQuantityProduct: (product: Product) => void;
}

interface State {
  items: Product[];
}

type UpdateQuantityFunction = (
  product: Product,
  quantityDelta: number
) => (state: State) => State;

const updateQuantity: UpdateQuantityFunction =
  (product, quantityDelta) => (state) => {
    const existingProductIndex = state.items.findIndex(
      (item) => item.id === product.id
    );

    const updatedItems = [...state.items];

    if (existingProductIndex !== -1) {
      updatedItems[existingProductIndex] = {
        ...updatedItems[existingProductIndex],
        quantity: updatedItems[existingProductIndex].quantity + quantityDelta,
      };
    } else {
      updatedItems.push({ ...product, quantity: 1 });
    }

    return { items: updatedItems };
  };

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

  addQuantityProduct: (product) => set(updateQuantity(product, 1)),

  removeQuantityProduct: (product) => set(updateQuantity(product, -1)),
}));
