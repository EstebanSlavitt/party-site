export function ProductsShow({ product }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.url} alt={product.name} className="w-full h-auto rounded" />
      <p className="mt-2 text-lg font-medium">Price: {product.price}</p>
    </div>
  );
}
