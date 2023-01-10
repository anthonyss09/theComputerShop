import Wrapper from "../assets/wrappers/NavBar";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <Wrapper>
      {showSidebar && <Sidebar handleClick={handleClick} />}
      <nav className="nav-bar">
        <div className="nav-menus">
          <div className="flex-left">
            <FaBars
              className="icon icon-bars"
              size={30}
              onClick={handleClick}
            />
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                name=""
                placeholder="Search"
              />
              <button className="search-button" href="#">
                <FaSearch className="icon icon-search" size={25} />
                {/* <i class="material-icons">search</i> */}
              </button>
            </div>
          </div>
          <Link to="/" className="link flex-center">
            Computer Shop
          </Link>
          <div className="flex-right">
            <Link to="/register">
              <FaUserAlt className="icon icon-user" size={25} />
            </Link>

            <BiShoppingBag className=" icon icon-shopping-bag" size={25} />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
