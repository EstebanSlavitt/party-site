import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-gray-800 hover:text-blue-600 transition"
        >
          Party Land Rentals
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 text-gray-700 font-medium text-base">
          <Link
            to="/"
            className="hover:text-blue-500 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-blue-500 transition duration-200"
          >
            Products
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-500 transition duration-200"
          >
            Services
          </Link>
        </nav>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 text-blue-800 text-center py-2 text-sm font-semibold tracking-wide">
        Serving the Tri-Valley: Dublin • Livermore • Pleasanton • San Ramon • Danville
      </div>
    </header>
  );
}
