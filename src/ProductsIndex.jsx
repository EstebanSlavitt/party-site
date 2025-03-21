export function ProductsIndex({ products, onShow }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <img
            src={product.url}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-sky-700 mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <button
            onClick={() => onShow(product)}
            className="mt-4 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg shadow transition"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
