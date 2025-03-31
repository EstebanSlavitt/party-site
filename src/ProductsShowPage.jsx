import { useParams, useNavigate } from "react-router-dom";

export function ProductsShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Tables & Chairs",
      url: "https://images.pexels.com/photos/12919431/pexels-photo-12919431.jpeg",
      description:
        "Perfect for weddings, birthdays, and backyard events — our tables and sturdy chairs come in multiple styles, ensuring comfort and elegance for any celebration setup.",
    },
    {
      id: 2,
      name: "Canopies & Tents",
      url: "https://images.pexels.com/photos/28937190/pexels-photo-28937190/free-photo-of-elegant-white-event-tent-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Stylish, spacious, and weather-resistant. Our canopies and tents offer shade and shelter for all-day fun, whether it’s sunny or drizzly outside.",
    },
    {
      id: 3,
      name: "Round Tables w/ Umbrella",
      url: "https://www.theknot.com/tk-media/images/8bc34da8-fcb9-11e4-be0a-22000aa61a3e~rs_1458.h?quality=60",
      description:
        "Round tables with umbrellas are a charming way to provide shaded comfort and a cozy gathering spot for guests at your outdoor event.",
    },
    {
      id: 4,
      name: "Bounce House (Jumpers)",
      url: "https://files.sysers.com/cp/upload/909jumpers/gallery/full/3-2.jpg",
      description:
        "A kid-favorite! Our vibrant bounce houses are clean, secure, and bring pure excitement to any birthday party, school event, or community celebration.",
    },
    {
      id: 5,
      name: "Balloons",
      url: "https://www.marthastewart.com/thmb/4mtjjqwTR-gDScS4K1xg9SaW_rY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/festive-balloon-wall-1E5A0619-0421-2000-3d31d376cad74e379ede993d2a700f54.jpg",
      description:
        "We offer a wide range of balloons — standard, custom, foil, and latex — in colors and designs that will brighten up your celebration like never before!",
    },
    {
      id: 6,
      name: "Piñatas",
      url: "https://www.mexperience.com/wp-content/uploads/Pinata-Party-Mexico-NBS-1200x800.jpg",
      description:
        "Choose from a variety of themed piñatas filled with surprises. They’re perfect for bringing laughter and excitement to your next fiesta!",
    },
    {
      id: 7,
      name: "Candies",
      url: "https://mysillysquirts.com/wp-content/uploads/2023/03/Complete-Candy-Bouquet-1024x719.jpg",
      description:
        "Our sweet selection includes bulk candies, custom mixes, and favorites for party bags, piñatas, or a sweet tooth corner at your event.",
    },
    {
      id: 8,
      name: "Party Paper Supplies",
      url: "https://partycorner.com/wp-content/uploads/2020/04/EV16_PT_TableInlineConfetti.jpg",
      description:
        "Plates, cups, napkins, table covers — all in stunning and fun designs to match your party theme. Make cleanup easy while keeping it cute!",
    },
    {
      id: 9,
      name: "Helium Balloon Service",
      url: "https://b265479.smushcdn.com/265479/wp-content/uploads/2024/01/Balloon_HQ_Resize_1920x1080_where_to_get_balloons_filled_with_helium-980x551.png?lossy=2&strip=1&webp=1",
      description:
        "Make your balloons float high! We provide helium services for latex and foil balloons. Great for DIY decorating or balloon drop ideas.",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-slate-100 to-gray-50 p-10">
      {product ? (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center">
          <img
            src={product.url}
            alt={product.name}
            className="w-full md:w-2/3 h-80 object-cover rounded-xl shadow-md mb-6"
          />
          <h1 className="text-4xl font-extrabold text-sky-700 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">{product.description}</p>
          <button
            onClick={() => navigate("/products")}
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg shadow transition"
          >
            ← Back to Products
          </button>
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold text-gray-800">Product not found.</p>
      )}

      {/* 🎊 Confetti overlay (optional playful touch) */}
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-10 bg-[url('https://www.transparenttextures.com/patterns/confetti.png')] bg-repeat"></div>
    </div>
  );
}
