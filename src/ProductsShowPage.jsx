import { useParams, useNavigate } from "react-router-dom";

export function ProductsShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Tables & Chairs",
      url: "https://jumppartytexas.com/wp-content/uploads/2015/05/Jump-Party-Texas-8-Rectangle-Table-3.jpg",
      description:
        "Perfect for any party or event, our high-quality tables and sturdy chairs are available in multiple sizes and styles.",
    },
    {
      id: 2,
      name: "Canopies & Tents",
      url: "https://cdn.toolots.com/media/catalog/product/e/c/ecs6fmkul_4625976.jpg",
      description:
        "Keep your guests shaded and dry with our stylish and durable tents, perfect for weddings and outdoor gatherings.",
    },
    {
      id: 3,
      name: "Round Tables w/ Umbrella",
      url: "https://just4funpartyrentals.com/wp-content/uploads/2016/04/Seats-8-10-scaled.jpg",
      description:
        "Add elegance and comfort to your outdoor event with our round tables and matching umbrellas.",
    },
    {
      id: 4,
      name: "Bounce House (Jumpers)",
      url: "https://files.sysers.com/cp/upload/909jumpers/gallery/full/Upland7.jpeg",
      description:
        "Our fun and safe jumpers are a hit with kids and perfect for birthdays or school events!",
    },
    {
      id: 5,
      name: "Balloons",
      url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1046596358-scaled.jpg",
      description:
        "From standard balloons to custom designs, we offer colorful, high-quality balloon options for any occasion.",
    },
    {
      id: 6,
      name: "Piñatas",
      url: "https://i0.wp.com/onesimpleparty.com/wp-content/uploads/2022/04/kidhittingpinata1.jpg?resize=1024%2C576&ssl=1",
      description:
        "Our festive piñatas bring fun and excitement to your party. Available in many shapes and themes!",
    },
    {
      id: 7,
      name: "Candies",
      url: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/2489ccab6d4921c8b6ef0ba76d6cde5c.jpg",
      description:
        "Yummy treats for candy buffets, piñatas, or goodie bags—our candy selection is always a hit!",
    },
    {
      id: 8,
      name: "Party Paper Supplies",
      url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
      description:
        "Everything you need from plates and napkins to cups and table covers in fun party themes!",
    },
    {
      id: 9,
      name: "Helium Balloon Service",
      url: "https://www.balloontime.com/wp-content/uploads/2021/07/inflate-step-2.jpg",
      description:
        "Let your balloons float with our helium fill-up service—available for both latex and foil!",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50 p-10">
      {product ? (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">
          <img
            src={product.url}
            alt={product.name}
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="text-left md:w-1/2">
            <h1 className="text-4xl font-extrabold text-sky-700 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
            <button
              onClick={() => navigate("/products")}
              className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              ← Back to Products
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl text-gray-700">Product not found.</p>
      )}
    </div>
  );
}
