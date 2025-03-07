import { useParams, useNavigate } from "react-router-dom";
import { ProductsShow } from "./ProductsShow";

export function ProductsShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Balloons", url: "https://via.placeholder.com/150", price: "$5" },
    { id: 2, name: "Party Hats", url: "https://via.placeholder.com/150", price: "$8" },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const handleUpdate = (id, params) => {
    console.log("handleUpdate", params);
    navigate("/products");
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    navigate("/products");
  };

  return (
    <div className="container mx-auto p-8">
      {product ? (
        <ProductsShow product={product} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
