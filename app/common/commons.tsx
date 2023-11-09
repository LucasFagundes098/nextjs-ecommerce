// * Types
import { Product } from "@/app/types/types";

function isProductEmpty(product: Product[]) {
  return (
    product === null ||
    product === undefined ||
    (Array.isArray(product) && product.length === 0)
  );
}

export { isProductEmpty };
