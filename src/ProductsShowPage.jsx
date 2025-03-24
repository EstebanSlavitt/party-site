import { useParams, useNavigate } from "react-router-dom";

export function ProductsShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Tables & Chairs",
      url: "https://images.unsplash.com/photo-1587582423112-ec5f6fefb3c3?q=80&w=1400&auto=format&fit=crop",
      description: "Perfect for any party or event, our high-quality tables and sturdy chairs are available in multiple sizes and styles.",
    },
    {
      id: 2,
      name: "Canopies & Tents",
      url: "https://images.unsplash.com/photo-1551121403-1b4d7f3c11e8?q=80&w=1400&auto=format&fit=crop",
      description: "Keep your guests shaded and dry with our stylish and durable tents, perfect for weddings and outdoor gatherings.",
    },
    {
      id: 3,
      name: "Round Tables w/ Umbrella",
      url: "https://images.unsplash.com/photo-1622737133823-964892e28929?q=80&w=1400&auto=format&fit=crop",
      description: "Add elegance and comfort to your outdoor event with our round tables and matching umbrellas.",
    },
    {
      id: 4,
      name: "Bounce House (Jumpers)",
      url: "https://images.unsplash.com/photo-1625489173650-75c94bcb43ea?q=80&w=1400&auto=format&fit=crop",
      description: "Our fun and safe jumpers are a hit with kids and perfect for birthdays or school events!",
    },
    {
      id: 5,
      name: "Balloons",
      url: "https://images.unsplash.com/photo-1604035092691-3d10b7d4904b?q=80&w=1400&auto=format&fit=crop",
      description: "From standard balloons to custom designs, we offer colorful, high-quality balloon options for any occasion.",
    },
    {
      id: 6,
      name: "Piñatas",
      url: "https://images.unsplash.com/photo-1626908674589-8cb0d4d10a62?q=80&w=1400&auto=format&fit=crop",
      description: "Our festive piñatas bring fun and excitement to your party. Available in many shapes and themes!",
    },
    {
      id: 7,
      name: "Candies",
      url: "https://images.unsplash.com/photo-1612197596216-d7f55e2c318d?q=80&w=1400&auto=format&fit=crop",
      description: "Yummy treats for candy buffets, piñatas, or goodie bags—our candy selection is always a hit!",
    },
    {
      id: 8,
      name: "Party Paper Supplies",
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1400&auto=format&fit=crop",
      description: "Everything you need from plates and napkins to cups and table covers in fun party themes!",
    },
    {
      id: 9,
      name: "Helium Balloon Service",
      url: "https://images.unsplash.com/photo-1496637721836-f46d116e6d34?q=80&w=1400&auto=format&fit=crop",
      description: "Let your balloons float with our helium fill-up service—available for both latex and foil!",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-pink-50 p-10">
      {product ? (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col lg:flex-row items-center gap-10">
          <img
            src={product.url}
            alt={product.name}
            className="w-full lg:w-1/2 h-80 object-cover rounded-xl shadow-md"
          />
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-sky-700 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
            <button
              onClick={() => navigate("/products")}
              className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg shadow transition"
            >
              ← Back to Products
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold text-gray-800">Product not found.</p>
      )}
    </div>
  );
}
