import Wrapper from "../assets/wrappers/NavBar";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Wrapper>
      <nav className="nav-bar">
        <div className="nav-menus">
          <div className="flex-left">
            <FaBars className="icon bars-icon" size={30} />
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                name=""
                placeholder="Search"
              />
              <button className="search-button" href="#">
                <FaSearch className="icon search-icon" size={25} />
                {/* <i class="material-icons">search</i> */}
              </button>
            </div>
          </div>
          <Link to="/" className="link flex-center">
            Computer Shop
          </Link>
          <div className="flex-right">
            <Link to="/register">
              <FaUserAlt className="icon user-icon" size={25} />
            </Link>

            <BiShoppingBag className=" icon shopping-bag-icon" size={25} />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
