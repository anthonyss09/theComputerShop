import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavBar from "./app/NavBar";
import Footer from "./app/Footer";
import RegisterPage from "./features/auth/RegisterPage";
import LoginPage from "./features/auth/LoginPage";
import AddProductPage from "./features/products/AddProductPage";
import ProductsPage from "./features/products/ProductsPage";
import SingleProductPage from "./features/products/SingleProductPage";
import CartView from "./features/cart/CartView";
import CheckoutPage from "./pages/CheckoutPage";
import OrderStatus from "./pages/OrderStatus";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/add-product" element={<AddProductPage />} />
          <Route
            exact
            path="/products/:productType"
            element={<ProductsPage />}
          />
          <Route exact path="/cart" element={<CartView />} />
          <Route exact path="/:id" element={<SingleProductPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/order/order-status" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
