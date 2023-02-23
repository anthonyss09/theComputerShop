import Wrapper from "../assets/wrappers/Sidebar";
import { NavLink } from "react-router-dom";
import { CloseButton } from "@chakra-ui/react";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useSelector } from "react-redux";

export default function Sidebar({ handleClick }) {
  const user = useSelector(selectCurrentUser);
  const isAdmin = user ? user.admin : false;

  return (
    <Wrapper>
      <section className="sidebar-container">
        <CloseButton className="close-button" onClick={handleClick} />
        <NavLink to="/" className="link nav-link" onClick={handleClick}>
          Home
        </NavLink>
        <NavLink
          to="/products/desktops"
          className="link nav-link top-link"
          onClick={handleClick}
        >
          Desktops
        </NavLink>
        <NavLink
          to="/products/laptops"
          className="link nav-link"
          onClick={handleClick}
        >
          Laptops/Notebooks
        </NavLink>
        <NavLink
          to="/products/gaming"
          className="link nav-link"
          onClick={handleClick}
        >
          Gaming
        </NavLink>
        <NavLink
          to="/products/devices"
          className="link nav-link"
          onClick={handleClick}
        >
          Devices
        </NavLink>
        <NavLink
          to="/products/accessories"
          className="link nav-link"
          onClick={handleClick}
        >
          Accessories
        </NavLink>
        {isAdmin && (
          <NavLink
            to="/add-product"
            className="link nav-link"
            onClick={handleClick}
          >
            Add product
          </NavLink>
        )}
      </section>
    </Wrapper>
  );
}
