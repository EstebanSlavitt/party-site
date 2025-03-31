import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";
import ServicesPage from "./ServicesPage";
import PoliciesPage from "./PoliciesPage"; 

const router = createBrowserRouter([
  {
    element: (
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    ),
    children: [
      { path: import.meta.env.BASE_URL, element: <HomePage /> },
      { path: import.meta.env.BASE_URL + "products", element: <ProductsIndexPage /> },
      { path: import.meta.env.BASE_URL + "products/:id", element: <ProductsShowPage /> },
      { path: import.meta.env.BASE_URL + "services", element: <ServicesPage /> },
      { path: import.meta.env.BASE_URL + "policies", element: <PoliciesPage /> }, 
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
