import Wrapper from "../assets/wrappers/Footer";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Wrapper>
      <section className="footer">
        <NavLink to="/" className="link nav-link">
          Home
        </NavLink>
        <NavLink to="/products/desktops" className="link nav-link">
          Desktops
        </NavLink>
        <NavLink to="/products/laptops" className="link nav-link">
          Laptops/Notebooks
        </NavLink>
        <NavLink to="/products/gaming" className="link nav-link">
          Gaming
        </NavLink>
        <NavLink to="/products/devices" className="link nav-link">
          Devices
        </NavLink>
        <NavLink to="/products/accessories" className="link nav-link">
          Accessories
        </NavLink>
      </section>
    </Wrapper>
  );
}
