import Image from "next/image";
import productImage from "../../images/product-image.jpg";

// * UI
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function Testing() {
  return (
    <main>
      <h1>Testing</h1>
      <Card className="w-[350px] h-[200px] rounded-xl">
        <Image
          className="product-image rounded-xl"
          width={290}
          height={40}
          priority
          alt="product test"
          src={productImage}
        />
        <CardHeader>
          <CardTitle>Tênis</CardTitle>
          <CardDescription>
            Tênis extremamente leve, com 245 gramas, com drop de 8mm e pisada
            neutra, que é ideal para aguentar o dia-a-dia e treino regular.
          </CardDescription>
          <CardTitle>R$100</CardTitle>
        </CardHeader>

        <CardFooter className="flex justify-end">
          <Button className="teste">Buy Now</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
