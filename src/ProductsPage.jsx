import { useState } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Balloons", url: "https://via.placeholder.com/150", price: "$5" },
    { id: 2, name: "Party Hats", url: "https://via.placeholder.com/150", price: "$8" },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleCreate = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleShow = (product) => {
    setCurrentProduct(product);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <main className="container mx-auto p-8">
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isModalVisible} onClose={handleClose}>
        {currentProduct && <ProductsShow product={currentProduct} />}
      </Modal>
    </main>
  );
}
