export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold tracking-wide">🎉 Party Land Rentals</h2>
          <p className="text-sm text-gray-400">Serving the Tri-Valley Bay Area, CA</p>
          <p className="text-xs text-gray-500 mt-1">© 2025 Party Land Rentals. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="/products" className="text-gray-300 hover:text-white transition">Products</a>
          <a href="/services" className="text-gray-300 hover:text-white transition">Services</a>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition">
            <i className="fab fa-facebook text-lg"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <i className="fab fa-twitter text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
