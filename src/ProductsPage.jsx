import { ProductsIndex } from "./ProductsIndex";

export function ProductsPage() {
  const products = [
    { id: 1, name: "Balloons", url: "https://via.placeholder.com/150", price: "$5" },
    { id: 2, name: "Party Hats", url: "https://via.placeholder.com/150", price: "$8" },
    { id: 3, name: "Streamers", url: "https://via.placeholder.com/150", price: "$6" },
    { id: 4, name: "Confetti", url: "https://via.placeholder.com/150", price: "$4" },
  ];

  return (
    <main className="container mx-auto p-8">
      <ProductsIndex products={products} />
    </main>
  );
}
