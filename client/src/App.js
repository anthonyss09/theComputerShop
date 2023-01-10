import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavBar from "./app/NavBar";
import Footer from "./app/Footer";
import RegisterPage from "./features/auth/RegisterPage";
import LoginPage from "./features/auth/LoginPage";
import AddProductPage from "./features/products/AddProductPage";
import ProductsPage from "./features/products/ProductsPage";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
