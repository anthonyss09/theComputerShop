import Wrapper from "../assets/wrappers/Landing";
import neonLaptop from "../assets/images/neonLaptop.jpg";
import ProductRow from "../features/products/ProductRow";
import BigSidebar from "../components/BigSidebar";
import laptops from "../utils/previewLaptops";
import desktops from "../utils/previewDesktops";
import psController from "../assets/images/psController.jpg";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
// import { useFetchUserDataQuery } from "../features/api/apiSlice";

export default function Landing() {
  const user = useSelector(selectCurrentUser);
  // const { data: currentUser } = useFetchUserDataQuery();
  if (user) {
    console.log("there is a user among us");
  }

  return (
    <Wrapper>
      <div className="banner">Fast and free holiday shipping</div>
      <section className="main-image-section">
        {/* <div className="nav-links">
          <NavLink className="link nav-link">Desktops</NavLink>
          <NavLink className="link nav-link">Laptops/Notebooks</NavLink>
          <NavLink className="link nav-link">Gaming</NavLink>
          <NavLink className="link nav-link">Devices</NavLink>
          <NavLink className="link nav-link">Accessories</NavLink>
        </div> */}
        <BigSidebar className="sidebar" />
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
      <section className="preview-section desktops-row">
        <ProductRow products={desktops} title="Desktops" />
      </section>
    </Wrapper>
  );
}
