import { Link } from "react-router-dom";

export function ProductsIndexPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-gray-50 py-10 px-4">
      <h1 className="text-5xl font-extrabold text-center text-sky-700 mb-12 tracking-tight">
        🎈 Party Rentals & Supplies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden"
          >
            <img src={product.url} alt={product.name} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-sky-700 mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <Link
                to={`/products/${product.id}`}
                className="mt-4 inline-block bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md shadow transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
