import { Link } from "react-router-dom";

export function ProductsIndexPage() {
  const products = [
    {
      id: 1,
      name: "Tables & Chairs",
      url: "https://jumppartytexas.com/wp-content/uploads/2015/05/Jump-Party-Texas-8-Rectangle-Table-3.jpg",
      price: "$15 per set",
    },
    {
      id: 2,
      name: "Canopies & Tents",
      url: "https://cdn.toolots.com/media/catalog/product/e/c/ecs6fmkul_4625976.jpg",
      price: "$50 per tent",
    },
    {
      id: 3,
      name: "Round Tables w/ Umbrella",
      url: "https://just4funpartyrentals.com/wp-content/uploads/2016/04/Seats-8-10-scaled.jpg",
      price: "$20 each",
    },
    {
      id: 4,
      name: "Bounce House (Jumpers)",
      url: "https://files.sysers.com/cp/upload/909jumpers/gallery/full/Upland7.jpeg",
      price: "$100 per day",
    },
    {
      id: 5,
      name: "Balloons",
      url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1046596358-scaled.jpg",
      price: "$5 per pack",
    },
    {
      id: 6,
      name: "Piñatas",
      url: "https://i0.wp.com/onesimpleparty.com/wp-content/uploads/2022/04/kidhittingpinata1.jpg?resize=1024%2C576&ssl=1",
      price: "$25 each",
    },
    {
      id: 7,
      name: "Candies",
      url: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/2489ccab6d4921c8b6ef0ba76d6cde5c.jpg",
      price: "$10 per bag",
    },
    {
      id: 8,
      name: "Party Paper Supplies",
      url: "https://todayscreativelife.com/wp-content/uploads/2015/02/party-pantry-Pin-it-600x782.jpg",
      price: "Varies",
    },
    {
      id: 9,
      name: "Helium Balloon Service",
      url: "https://www.balloontime.com/wp-content/uploads/2021/07/inflate-step-2.jpg",
      price: "$3 per balloon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-yellow-200 p-10">
      <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-10">🎉 Our Party Rentals & Supplies 🎉</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
          >
            <img src={product.url} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-3xl font-bold text-pink-600">{product.name}</h2>
            <p className="text-xl text-gray-700 font-semibold">{product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
