// * Types
import { Product } from "@/app/types/types";
import React, { useEffect, useState } from "react";
import { getProductPage, Image, productImage, Button, handleAddToCart, useCart, useToast } from "@/app/utils/utils";

function ProductDetails({ id }: { id: number }) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const cart = useCart()
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProductPage(id);
        setProduct(result);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setProduct(undefined);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {product ? (
        <main className="productDetail-container">
          <div className="productDetail-div1">
            <div className="flex-1 mb-3">
            <Image
              src={productImage}
              width={500}
              height={500}
              alt="Picture of the author"
              className="product-image-main"
            />
            </div>
            <div className="flex-1 mb-3">
            <Image
              src={productImage}
              width={500}
              height={500}
              alt="Picture of the author"
              className="product-image-main"
            />
            </div>
            <div className="flex-1 mb-3">
            <Image
              src={productImage}
              width={500}
              height={500}
              alt="Picture of the author"
              className="product-image-main"
            />
            </div>
          </div>
          <div className="productDetail-div2">
            <Image
              src={productImage}
              width={500}
              height={500}
              alt="Picture of the author"
              className="product-image-main"
            />
          </div>
          <div className="productDetail-div3">
            <h2>{product.name}</h2>
            <p className="justify-text my-2">{product.content}</p>
            <h2 className="my-2">R${product.price}</h2>
            <Button onClick={()=> handleAddToCart(product, cart, toast)}>Add to cart</Button>
          </div>
        </main>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </>
  );
}

export default ProductDetails;
