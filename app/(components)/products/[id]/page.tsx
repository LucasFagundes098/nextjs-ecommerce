'use client'

import React from "react";
import ProductDetails from "./productDetails"; 

export default function ProductPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div>
      <ProductDetails id={params.id} />
    </div>
  );
}
