import Wrapper from "../assets/wrappers/Landing";
import neonLaptop from "../assets/images/neonLaptop.jpg";
import ProductRow from "../features/products/ProductRow";
import laptops from "../utils/previewLaptops";
import desktops from "../utils/previewDesktops";
import { NavLink } from "react-router-dom";
import psController from "../assets/images/psController.jpg";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useSelector } from "react-redux";

export default function Landing() {
  const user = useSelector(selectCurrentUser);
  if (user) {
    console.log(user);
  }

  return (
    <Wrapper>
      <div className="promo">Fast and free holiday shipping</div>
      <section className="main-image-section">
        <div className="nav-links">
          <NavLink className="link nav-link">Desktops</NavLink>
          <NavLink className="link nav-link">Laptops/Notebooks</NavLink>
          <NavLink className="link nav-link">Gaming</NavLink>
          <NavLink className="link nav-link">Devices</NavLink>
          <NavLink className="link nav-link">Accessories</NavLink>
        </div>
        <div className="image-container">
          <img src={neonLaptop} alt="neon laptop" className="main-image" />
        </div>
      </section>
      <section className="preview-section">
        <ProductRow products={laptops} title="Laptops" />
      </section>
      <section className="sub-section">
        <div className="sub-text-container">
          <h1 className="sub-text">
            Explore <br />
            fan favorites
          </h1>
        </div>
        <div className="sub-image-container">
          <img src={psController} alt="ps controller" className="sub-image" />
        </div>
      </section>
      <section className="preview-section">
        <ProductRow products={desktops} title="Desktops" />
      </section>
    </Wrapper>
  );
}
