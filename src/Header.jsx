import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      {/* Policies Link Banner */}
      <div className="bg-gray-100 text-center text-sm font-medium py-2">
        <Link
          to={import.meta.env.BASE_URL + "policies"}
          className="text-blue-600 hover:underline"
        >
          View Our Rental Policies & Terms →
        </Link>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand / Logo */}
        <Link
          to={import.meta.env.BASE_URL}
          className="text-3xl font-bold tracking-tight text-gray-800 hover:text-blue-600 transition"
        >
          Party Land Rentals
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 text-gray-700 font-medium text-base">
          <Link to={import.meta.env.BASE_URL} className="hover:text-blue-500 transition duration-200">
            Home
          </Link>
          <Link to={import.meta.env.BASE_URL + "products"} className="hover:text-blue-500 transition duration-200">
            Products
          </Link>
          <Link to={import.meta.env.BASE_URL + "services"} className="hover:text-blue-500 transition duration-200">
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
