// * Types
import { Product } from "@/app/types/types";
import React, { useEffect, useState } from "react";
import { getProductPage, Image, productImage } from "@/app/utils/utils";

function productDetails({ id }: { id: number }) {
  const [product, setProduct] = useState<Product | undefined>(undefined);

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
        <main className="teste-container">
          <div className="div1"></div>
          <div className="div2">
            <Image
              src={productImage}
              width={500}
              height={500}
              alt="Picture of the author"
              className="product-image-main"
            />
          </div>
          <div className="div3">
            <h2>{product.name}</h2>
            <p className="justify-text">{product.content}</p>
            <p className="justify-text">{product.content}</p>
            <p>{product.price}</p>
          </div>
        </main>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </>
  );
}

export default productDetails;
