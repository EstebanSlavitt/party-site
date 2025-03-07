import { useState } from "react";

export function ProductsNew({ onCreate }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { id: Date.now(), name, url, price };
    onCreate(newProduct);
    setName("");
    setUrl("");
    setPrice("");
  };

  return (
    <div className="p-4 border rounded shadow">
      <h1 className="text-2xl font-bold">Add a New Product</h1>
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Product</button>
      </form>
    </div>
  );
}
