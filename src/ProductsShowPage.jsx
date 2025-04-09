import { useParams, useNavigate } from "react-router-dom";
import TablesAndChairs from "./assets/tables-and-chairs.jpg";
import TablesAndChairs2 from "./assets/tables-and-chairs2.jpg";
import TablesAndChairs3 from "./assets/tables-and-chairs3.jpg";
import TablesAndChairs4 from "./assets/tables-and-chairs4.jpg";
import TablesAndChairs5 from "./assets/tables-and-chairs5.jpg";
import Tents1 from "./assets/tents1.jpg"
import Tents2 from "./assets/tents2.jpg"
import Tents3 from "./assets/tents3.jpg"
import Tents4 from "./assets/tents4.jpg"
import Tents5 from "./assets/tents5.jpg"
import Round1 from "./assets/round1.jpg"
import Round2 from "./assets/round2.jpg"
import Round3 from "./assets/round3.jpg"
import Jumper1 from "./assets/jumper1.jpg"
import Jumper2 from "./assets/jumper2.jpg"
import Jumper3 from "./assets/Jumper3.jpg"
import Jumper4 from "./assets/jumper4.jpg"
import Jumper5 from "./assets/jumper5.jpg"
import Balloon1 from "./assets/balloon1.jpg"
import Balloon2 from "./assets/balloon2.jpg"
import Balloon3 from "./assets/balloon3.jpg"
import Balloon4 from "./assets/balloon4.jpg"
import Balloon5 from "./assets/balloon5.jpg"
import Pinata1 from "./assets/pinata1.jpg"
import Pinata2 from "./assets/pinata2.jpg"
import Pinata3 from "./assets/pinata3.jpg"
import Pinata4 from "./assets/pinata4.jpg"
import Candy1 from "./assets/candy1.jpg"
import Candy2 from "./assets/candy2.jpg"
import Candy3 from "./assets/candy3.jpg"
import Candy4 from "./assets/candy4.jpg"
import Supplies1 from "./assets/supplies1.jpg"
import Supplies2 from "./assets/supplies2.jpg"
import Supplies3 from "./assets/Supplies3.jpg"
import Supplies4 from "./assets/supplies4.jpg"
import Helium1 from "./assets/helium1.jpg"
import Helium2 from "./assets/helium2.jpg"
import Helium3 from "./assets/helium3.jpg"
import Helium4 from "./assets/helium4.jpg"


export function ProductsShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Tables & Chairs",
      url: "https://images.pexels.com/photos/12919431/pexels-photo-12919431.jpeg",
      description:
        "Perfect for weddings, birthdays, and backyard events. Our tables and sturdy chairs offer both comfort and class, available in multiple styles to fit your theme.",
      gallery: [
        TablesAndChairs,
        TablesAndChairs2,
        TablesAndChairs3,
        TablesAndChairs4,
        TablesAndChairs5,
      ],
    },
    {
      id: 2,
      name: "Canopies & Tents",
      url: "https://images.pexels.com/photos/28937190/pexels-photo-28937190/free-photo-of-elegant-white-event-tent-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Stay shaded and stylish with our professional-grade tents. Perfect for keeping your guests comfortable at any outdoor celebration.",
      gallery: [
        Tents1,
        Tents2,
        Tents3,
        Tents4,
        Tents5,
      ],
    },
    {
      id: 3,
      name: "Round Tables w/ Umbrella",
      url: "https://www.theknot.com/tk-media/images/8bc34da8-fcb9-11e4-be0a-22000aa61a3e~rs_1458.h?quality=60",
      description:
        "Elegant round tables paired with umbrellas to provide shade and a polished look to your event space.",
      gallery: [
       Round1,
       Round2,
       Round3,
      ],
    },
    {
      id: 4,
      name: "Bounce House (Jumpers)",
      url: "https://files.sysers.com/cp/upload/909jumpers/gallery/full/3-2.jpg",
      description:
        "Bring the fun! Our colorful bounce houses are safe, clean, and an absolute hit at kids' parties and community events.",
        gallery: [
          Jumper1,
          Jumper2,
          Jumper3,
          Jumper4,
          Jumper5,
        ],
    },
    {
      id: 5,
      name: "Balloons",
      url: "https://www.marthastewart.com/thmb/4mtjjqwTR-gDScS4K1xg9SaW_rY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/festive-balloon-wall-1E5A0619-0421-2000-3d31d376cad74e379ede993d2a700f54.jpg",
      description:
        "We offer a full range of balloons — from helium-filled to custom arches and arrangements to liven up your party decor.",
        gallery: [
          Balloon1,
          Balloon2,
          Balloon3,
          Balloon4,
          Balloon5,
        ],
    },
    {
      id: 6,
      name: "Piñatas",
      url: "https://www.mexperience.com/wp-content/uploads/Pinata-Party-Mexico-NBS-1200x800.jpg",
      description:
        "Bursting with fun! Choose from a variety of shapes and themes to add extra excitement to your party.",
        gallery: [
          Pinata1,
          Pinata2,
          Pinata3,
          Pinata4,
        ],
    },
    {
      id: 7,
      name: "Candies",
      url: "https://mysillysquirts.com/wp-content/uploads/2023/03/Complete-Candy-Bouquet-1024x719.jpg",
      description:
        "Treat your guests to a colorful selection of candies, perfect for piñatas, candy buffets, or favor bags.",
        gallery: [
          Candy1,
          Candy2,
          Candy3,
          Candy4,
        ],
    },
    {
      id: 8,
      name: "Party Paper Supplies",
      url: "https://partycorner.com/wp-content/uploads/2020/04/EV16_PT_TableInlineConfetti.jpg",
      description:
        "We carry plates, napkins, cups, and table covers in a wide range of styles and colors to match your celebration.",
        gallery: [
          Supplies1,
          Supplies2,
          Supplies3,
          Supplies4,
        ],
    },
    {
      id: 9,
      name: "Helium Balloon Service",
      url: "https://b265479.smushcdn.com/265479/wp-content/uploads/2024/01/Balloon_HQ_Resize_1920x1080_where_to_get_balloons_filled_with_helium-980x551.png?lossy=2&strip=1&webp=1",
      description:
        "Bring your balloons to life with our helium service for latex and foil balloons. Great for decorations or party giveaways!",
        gallery: [
          Helium1,
          Helium2,
          Helium3,
          Helium4,
        ],
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-gray-50 p-6">
      {product ? (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 text-center">
          <img
            src={product.url}
            alt={product.name}
            className="mx-auto mb-6 rounded-lg shadow-md object-cover h-80 w-full max-w-2xl"
          />
          <h1 className="text-4xl font-bold text-sky-700 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            {product.description}
          </p>

          {product.gallery && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="rounded-lg shadow-sm object-cover h-48 w-full"
                />
              ))}
            </div>
          )}

          <button
            onClick={() => navigate(import.meta.env.BASE_URL + "products")} 
            className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow transition"
          >
            ← Back to Products
          </button>
        </div>
      ) : (
        <p className="text-center text-2xl text-gray-800">Product not found.</p>
      )}
    </div>
  );
}
