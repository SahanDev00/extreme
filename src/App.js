import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Pages/Store/Store";
import Laptops from "./Pages/Laptops/Laptops";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/laptops" element={<Laptops />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
