import Wrapper from "../assets/wrappers/NavBar";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, logoutUser } from "../features/auth/authSlice";
import { clearCart, selectCartCount } from "../features/cart/cartSlice";
import { useSearchProductsQuery } from "../features/products/extendedApiSlice";
import SearchMatches from "../features/products/SearchMatches";

export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLoginOut, setShowLoginOut] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { data: productMatches = [] } = useSearchProductsQuery(searchQuery);

  const user = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectCartCount);

  // const counts = user
  //   ? user.userCart.reduce((a, b) => {
  //       return a + b.count;
  //     }, 0)
  //   : 0;
  // console.log(counts);

  const dispatch = useDispatch();

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };
  const handleUserClick = () => {
    setShowLoginOut(!showLoginOut);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("localCart");
  };
  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  };
  const handleLinkClick = () => {
    setSearchQuery("");
  };

  let content;
  if (user) {
    content = (
      <div
        className="drop-item"
        onClick={() => {
          handleLogout();
          handleUserClick();
        }}
      >
        Logout
      </div>
    );
  } else {
    content = (
      <Link className="link" to="/register" onClick={handleUserClick}>
        Register
      </Link>
    );
  }
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
                value={searchQuery}
                placeholder="Search"
                onChange={handleSearch}
                onFocus={() => {
                  setIsSearching(true);
                }}
              />

              <button className="search-button" href="#">
                <FaSearch className="icon icon-search" size={25} />
                {/* <i class="material-icons">search</i> */}
              </button>
              {productMatches.length > 0 && isSearching && (
                <SearchMatches
                  matches={productMatches}
                  onClick={handleLinkClick}
                />
              )}
            </div>
          </div>
          <Link to="/" className="link flex-center">
            Computer Shop
          </Link>
          <div className="flex-right">
            <FaUserAlt
              className="icon icon-user"
              size={25}
              onClick={handleUserClick}
            />
            {showLoginOut && <div className="drop-menu">{content}</div>}
            <Link to="/cart">
              {" "}
              <div className="cart-count">{cartCount}</div>
              <div className="icon-shopping-bag">
                {" "}
                <BiShoppingBag className=" icon icon-shopping-bag" size={25} />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
