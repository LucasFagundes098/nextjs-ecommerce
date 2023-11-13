// * Types
import { Product } from "@/app/types/types";
import { CartState } from "../zustand/store";

function isProductEmpty(product: Product[]) {
  return (
    product === null ||
    product === undefined ||
    (Array.isArray(product) && product.length === 0)
  );
}

function handleAddToCart(product: Product , cart : CartState, toast : any) {
  toast({
    title: "Product has been added to cart",
    description: "Check your cart",
  });
  cart.addItem(product);
}

export { isProductEmpty, handleAddToCart };
