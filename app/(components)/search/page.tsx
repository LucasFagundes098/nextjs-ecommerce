"use client";

// * Firebase
import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";

// * Types
import { Product } from "@/app/types/types";

// * Hooks
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import productImage from "../../images/product-image.jpg";
import Link from "next/link";
import { useCart } from "@/app/zustand/store";
import { useToast } from "@/components/ui/use-toast";

// * UI
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "product"));

  const data: Product[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as unknown as Product);
  });

  return data;
}

function findProductsBySearchTerm(searchTerm: string, productList: Product[]) {
  const searchResults = productList.filter((product) => {
    const normalizedProductName = product.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    return normalizedProductName.includes(searchTerm);
  });

  return searchResults;
}

function isProductEmpty(product: Product[]) {
  return (
    product === null ||
    product === undefined ||
    (Array.isArray(product) && product.length === 0)
  );
}

export default function SearchPage() {
  const [dbProduct, setDbProduct] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const productArray = dbProduct || [];
  const product = findProductsBySearchTerm(search || "", productArray);
  const cart = useCart();
  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setDbProduct(data);
    }
    fetchData();
  }, []);

  if (isProductEmpty(product)) {
    return (
      <main>
        <h1>Product not found</h1>
      </main>
    );
  }
  
  const handleButtonClick = (product: Product) => {
    toast({
      title: "Product has been added to cart",
      description: "Check your cart",
    });
    cart.addItem(product);
  };

  return (
    <main className="product-page">
      {product.map((product) => {
        return (
          <div className="product-main-container" key={product.id}>
            <Card className="w-[350px] rounded-xl">
              <Link href={`/products/${product.id}`}>
                <Image
                  className="product-image rounded-xl"
                  width={290}
                  height={40}
                  priority
                  alt="products"
                  src={productImage}
                />
              </Link>
              <CardHeader>
                <Link href={`/products/${product.id}`}>
                  <CardTitle>{product.name}</CardTitle>
                </Link>
                <CardDescription>{product.content}</CardDescription>
                <CardTitle>
                  {product.currency}
                  {product.price}
                </CardTitle>
              </CardHeader>

              <CardFooter className="flex justify-end">
                <Button onClick={() => handleButtonClick(product)}>
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </main>
  );
}
