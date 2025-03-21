import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { HomePage } from "./HomePage"; // ✅ Import HomePage
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";
import ServicesPage from "./ServicesPage"; // ✅ Fixed default import
import { Footer } from "./Footer";

const router = createBrowserRouter([
  {
    element: (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-grow container mx-auto p-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> }, // ✅ HomePage is now the default
      { path: "/products", element: <ProductsIndexPage /> },
      { path: "/products/:id", element: <ProductsShowPage /> },
      { path: "/services", element: <ServicesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
