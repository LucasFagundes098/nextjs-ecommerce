"use client";

// * Types
import { Product } from "@/app/types/types";

import {
  useState,
  useEffect,
  useSearchParams,
  Image,
  Link,
  useCart,
  useToast,
  fetchAllData,
  isProductEmpty,
  productImage,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@/app/utils/utils";

function findProductsBySearchTerm(searchTerm: string, productList: Product[]) {
  const searchResults = productList.filter((product) => {
    if (product.name) {
      const normalizedProductName = product.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      return normalizedProductName.includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return searchResults;
}

export default function SearchPage() {
  const [dbProduct, setDbProduct] = useState<Product[]>([]);
  const searchParams = useSearchParams().get("q");
  const product = findProductsBySearchTerm(searchParams || "", dbProduct);
  const cart = useCart();
  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllData();
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
