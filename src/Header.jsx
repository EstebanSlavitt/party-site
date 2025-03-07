import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Party Store
        </Link>
        <div>
          <Link to="/" className="mx-2">
            Home
          </Link>
          <Link to="/products" className="mx-2">
            Products
          </Link>
        </div>
      </nav>
    </header>
  );
}
