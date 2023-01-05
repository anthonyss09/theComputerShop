import Wrapper from "../assets/wrappers/Footer";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Wrapper>
      <section className="footer">
        <NavLink className="link nav-link">Home</NavLink>
        <NavLink className="link nav-link">Desktops</NavLink>
        <NavLink className="link nav-link">Laptops/Notebooks</NavLink>
        <NavLink className="link nav-link">Gaming</NavLink>
        <NavLink className="link nav-link">Devices</NavLink>
        <NavLink className="link nav-link">Accessories</NavLink>
      </section>
    </Wrapper>
  );
}
