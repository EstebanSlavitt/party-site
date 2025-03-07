import { Header } from "./Header";
import { HomePage } from "./HomePage"; // Updated import
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <HomePage /> {/* Updated Component */}
      <Footer />
    </div>
  );
}

export default App;
