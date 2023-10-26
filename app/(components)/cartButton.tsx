"use client";

// * UI
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// * Imports
import { useCart } from "../zustand/store";

export default function SheetDemo() {
  const cart = useCart();

  const handleRemoveFromCart = (productId: number) => {
    cart.removeItem(productId);
  };

  return (
    // * Cart products
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Cart</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart products</SheetTitle>
          <SheetDescription>
            Make changes to your cart here. Click to go back if necessary.
            Thanks for buying with us :)
          </SheetDescription>
        </SheetHeader>

        {/* products card */}
        {cart.items.length === 0 ? (
          <Alert className="mt-4">
            <AlertTitle>No products</AlertTitle>
            <AlertDescription>Check our newest products.</AlertDescription>
          </Alert>
        ) : (
          <ScrollArea className="h-72 w-full mt-4">
            {cart.items.map((product) => (
              <Alert key={product.id} className="my-2">
                <AlertTitle>{product.name}</AlertTitle>
                <AlertDescription>
                  R$ {product.price * product.quantity}
                </AlertDescription>
                <AlertDescription>qty. {product.quantity}</AlertDescription>
                <Button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="h-8 mt-3"
                >
                  Remove
                </Button>
              </Alert>
            ))}
          </ScrollArea>
        )}

        <SheetFooter className="mt-3">
          <SheetClose asChild>
            <Button type="submit">Go back to products</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
