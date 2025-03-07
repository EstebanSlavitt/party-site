import { useState } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Balloons", url: "https://via.placeholder.com/150", price: "$5" },
    { id: 2, name: "Party Hats", url: "https://via.placeholder.com/150", price: "$8" },
  ]);

  const handleCreate = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <main className="container mx-auto p-8">
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} />
    </main>
  );
}
