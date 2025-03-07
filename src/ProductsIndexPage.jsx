import { useNavigate } from "react-router-dom";
import { ProductsIndex } from "./ProductsIndex";

export function ProductsIndexPage() {
  const products = [
    { id: 1, name: "Balloons", url: "https://via.placeholder.com/150", price: "$5" },
    { id: 2, name: "Party Hats", url: "https://via.placeholder.com/150", price: "$8" },
  ];

  const navigate = useNavigate();

  const handleShow = (product) => {
    console.log("handleShow", product);
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="container mx-auto p-8">
      <ProductsIndex products={products} onShow={handleShow} />
    </div>
  );
}
