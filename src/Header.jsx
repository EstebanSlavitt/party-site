import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / Title */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide flex items-center">
          🎈 <span className="ml-2">Party Land</span>
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-yellow-300 transition duration-300">
            Products
          </Link>
          <Link to="/services" className="hover:text-yellow-300 transition duration-300">
            Services
          </Link>
        </nav>
      </div>

      {/* Sub-header for extra detail */}
      <div className="bg-yellow-400 text-black text-center py-2 font-bold tracking-wider">
        🎊 Special Offer: Get 10% off on your first rental! 🎊
      </div>
    </header>
  );
}
