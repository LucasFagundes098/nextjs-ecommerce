"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const page = () => {
  const { toast } = useToast();

  function handleButtonClick() {
    toast({
      title: "Product has been added to cart",
      description: "Check your cart",
    });
  }

  return (
    <main>
      Enter
      <Button
        onClick={() => {
          handleButtonClick();
        }}
      >
        Buy Now
      </Button>
    </main>
  );
};

export default page;
