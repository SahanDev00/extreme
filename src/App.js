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
import SearchedProducts from "./Pages/SearchedProducts/SearchedProducts";
import AccountPage from "./Pages/Profile/AccountPage";
import LoginPage from "./Pages/Profile/LoginPage";
import SignIn from "./Components/Profile/SignIn";
import { ToastContainer } from "react-toastify";
import ProductView from "./Pages/ProductView/ProductView";
import Cart from "./Pages/Cart/Cart";
import CheckoutPage from "./Pages/Cart/CheckoutPage";
import OrdersPage from "./Pages/Orders/OrdersPage";
import ContactUsPage from "./Pages/Support/ContactUsPage";
import AboutUsPage from "./Pages/Support/AboutUsPage";
import ForgotPassword from "./Components/Profile/ForgotPassword";
import ResetPassword from "./Components/Profile/ResetPassword";

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
          <Route path="search/:q" element={<SearchedProducts />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/items/:itemID" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:tokenID" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
