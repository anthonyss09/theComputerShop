import Wrapper from "../assets/wrappers/Footer";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Wrapper>
      <section className="footer">
        <NavLink className="nav-link">Desktops</NavLink>
        <NavLink className="nav-link">Laptops/Notebooks</NavLink>
        <NavLink className="nav-link">Gaming</NavLink>
        <NavLink className="nav-link">Devices</NavLink>
        <NavLink className="nav-link">Accessories</NavLink>
      </section>
    </Wrapper>
  );
}
