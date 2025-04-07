import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Pages/Store/Store";
import Laptops from "./Pages/Laptops/Laptops";
import Computers from "./Pages/Computers/Computers";
import Iphones from "./Pages/iPhones/Iphones";
import Mac from "./Pages/Mac/Mac";
import Monitors from "./Pages/Monitors/Monitors";
import KeyboardsMouse from "./Pages/KeyboardsMouse/KeyboardsMouse";
import Accessories from "./Pages/Accessories/Accessories";
import Casings from "./Pages/Casings/Casings";
import AllProducts from "./Pages/AllProducts/AllProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="/iphones" element={<Iphones />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/monitors" element={<Monitors />} />
          <Route path="/keyboards-mouse" element={<KeyboardsMouse />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/casings" element={<Casings />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
