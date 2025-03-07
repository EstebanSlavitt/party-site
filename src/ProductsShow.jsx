import { useState } from "react";

export function ProductsShow({ product, onUpdate, onDestroy }) {
  const [name, setName] = useState(product.name);
  const [url, setUrl] = useState(product.url);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(product.id, { name, url, price });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block">Name:</label>
          <input
            className="border p-2 rounded w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block">Image URL:</label>
          <input
            className="border p-2 rounded w-full"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block">Price:</label>
          <input
            className="border p-2 rounded w-full"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Product</button>
      </form>
      <button
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600"
        onClick={() => onDestroy(product.id)}
      >
        Delete Product
      </button>
    </div>
  );
}
