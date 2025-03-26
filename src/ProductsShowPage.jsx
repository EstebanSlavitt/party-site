import { useParams, useNavigate } from "react-router-dom";

export function ProductsShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Tables & Chairs",
      url: "https://images.pexels.com/photos/12919431/pexels-photo-12919431.jpeg",
      description: "Perfect for any event. Our tables and sturdy chairs are available in multiple styles.",
    },
    {
      id: 2,
      name: "Canopies & Tents",
      url: "https://images.pexels.com/photos/28937190/pexels-photo-28937190/free-photo-of-elegant-white-event-tent-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Stylish and durable. Stay shaded and dry at your outdoor events.",
    },
    {
      id: 3,
      name: "Round Tables w/ Umbrella",
      url: "https://www.theknot.com/tk-media/images/8bc34da8-fcb9-11e4-be0a-22000aa61a3e~rs_1458.h?quality=60",
      description: "Add elegance and comfort to your event with our shaded round tables.",
    },
    {
      id: 4,
      name: "Bounce House (Jumpers)",
      url: "https://files.sysers.com/cp/upload/909jumpers/gallery/full/3-2.jpg",
      description: "Fun, safe, and a hit with the kids. Perfect for birthdays and school events.",
    },
    {
      id: 5,
      name: "Balloons",
      url: "https://www.marthastewart.com/thmb/4mtjjqwTR-gDScS4K1xg9SaW_rY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/festive-balloon-wall-1E5A0619-0421-2000-3d31d376cad74e379ede993d2a700f54.jpg",
      description: "Colorful balloons in various styles. Great for decor or custom designs.",
    },
    {
      id: 6,
      name: "Piñatas",
      url: "https://www.mexperience.com/wp-content/uploads/Pinata-Party-Mexico-NBS-1200x800.jpg",
      description: "Exciting and fun — choose from many festive shapes and themes!",
    },
    {
      id: 7,
      name: "Candies",
      url: "https://mysillysquirts.com/wp-content/uploads/2023/03/Complete-Candy-Bouquet-1024x719.jpg",
      description: "Sweet treats for candy buffets, goody bags, or piñatas!",
    },
    {
      id: 8,
      name: "Party Paper Supplies",
      url: "https://partycorner.com/wp-content/uploads/2020/04/EV16_PT_TableInlineConfetti.jpg",
      description: "Cups, plates, napkins, and more — all in stylish and festive designs.",
    },
    {
      id: 9,
      name: "Helium Balloon Service",
      url: "https://b265479.smushcdn.com/265479/wp-content/uploads/2024/01/Balloon_HQ_Resize_1920x1080_where_to_get_balloons_filled_with_helium-980x551.png?lossy=2&strip=1&webp=1",
      description: "Let your balloons float! We fill both latex and foil balloons with helium.",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-gray-50 p-10">
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
