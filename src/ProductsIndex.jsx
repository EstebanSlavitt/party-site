export function ProductsIndex({ products }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <img src={product.url} alt={product.name} className="w-full h-auto rounded" />
            <p className="mt-2 text-lg font-medium">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
