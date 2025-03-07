import { useParams, useNavigate } from "react-router-dom";

export function ProductsShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Tables & Chairs",
      url: "https://jumppartytexas.com/wp-content/uploads/2015/05/Jump-Party-Texas-8-Rectangle-Table-3.jpg",
      price: "$15 per set",
      description:
        "Our high-quality folding tables and sturdy chairs are perfect for any party or event. Available in multiple sizes to suit your needs.",
    },
    {
      id: 2,
      name: "Canopies & Tents",
      url: "https://cdn.toolots.com/media/catalog/product/e/c/ecs6fmkul_4625976.jpg",
      price: "$50 per tent",
      description:
        "Stay shaded and protected with our durable tents and canopies, perfect for outdoor events, weddings, and celebrations.",
    },
    {
      id: 3,
      name: "Round Tables w/ Umbrella",
      url: "https://just4funpartyrentals.com/wp-content/uploads/2016/04/Seats-8-10-scaled.jpg",
      price: "$20 each",
      description:
        "Our round tables come with stylish umbrellas to provide shade and elegance for outdoor gatherings and picnics.",
    },
    {
      id: 4,
      name: "Bounce House (Jumpers)",
      url: "https://files.sysers.com/cp/upload/909jumpers/gallery/full/Upland7.jpeg",
      price: "$100 per day",
      description:
        "Make your party unforgettable with our fun and safe bounce houses, available in multiple themes for kids to enjoy!",
    },
    {
      id: 5,
      name: "Balloons",
      url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1046596358-scaled.jpg",
      price: "$5 per pack",
      description:
        "Vibrant, high-quality balloons available in various colors and styles. Perfect for decorations, bouquets, or parties!",
    },
    {
      id: 6,
      name: "Piñatas",
      url: "https://i0.wp.com/onesimpleparty.com/wp-content/uploads/2022/04/kidhittingpinata1.jpg?resize=1024%2C576&ssl=1",
      price: "$25 each",
      description:
        "Add excitement to your party with a festive piñata! Available in a variety of shapes and sizes, ready to be filled with candy!",
    },
    {
      id: 7,
      name: "Candies",
      url: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/2489ccab6d4921c8b6ef0ba76d6cde5c.jpg",
      price: "$10 per bag",
      description:
        "A delicious assortment of party candies perfect for filling piñatas, goody bags, or candy stations!",
    },
    {
      id: 8,
      name: "Party Paper Supplies",
      url: "https://todayscreativelife.com/wp-content/uploads/2015/02/party-pantry-Pin-it-600x782.jpg",
      price: "Varies",
      description:
        "From plates and cups to napkins and table covers, we have all the paper supplies needed to complete your party setup.",
    },
    {
      id: 9,
      name: "Helium Balloon Service",
      url: "https://www.balloontime.com/wp-content/uploads/2021/07/inflate-step-2.jpg",
      price: "$3 per balloon",
      description:
        "Get your balloons filled with helium for an extra floating effect! Available for latex and foil balloons.",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const handleUpdate = () => {
    console.log("handleUpdate");
    navigate("/products");
  };

  const handleDestroy = () => {
    console.log("handleDestroy");
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-yellow-300 p-10">
      {product ? (
        <div className="max-w-xl bg-white p-8 rounded-lg shadow-lg text-center">
          <img src={product.url} alt={product.name} className="w-64 h-64 mx-auto mb-4 rounded-lg shadow-md" />
          <h1 className="text-4xl font-extrabold text-pink-600 mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 font-semibold">{product.price}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
          <div className="mt-6">
            <button
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition ml-4"
              onClick={handleDestroy}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p className="text-2xl font-semibold text-gray-800">Product not found.</p>
      )}
    </div>
  );
}
