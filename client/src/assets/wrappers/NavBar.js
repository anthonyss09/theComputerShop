import styled from "styled-components";

const Wrapper = styled.nav`
  .drop-item:hover {
    cursor: pointer;
  }
  .drop-menu {
    position: absolute;
    top: 3.6rem;
  }
  .flex-center {
    letter-spacing: 0.08rem;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Bangers", cursive;
  }
  .flex-left {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .flex-right {
    display: flex;
    gap: 1rem;
  }
  .icon {
    color: white;
  }
  .icon:hover {
    cursor: pointer;
  }
  .nav-bar {
    background: rgb(20, 20, 20);
  }
  .nav-link {
    color: rgb(240, 240, 240);
  }
  .nav-links {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 1rem 1rem;
  }
  .nav-menus {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .promo {
    color: white;
    color: lightYellow;
    background: rgb(40, 40, 40);
    text-align: center;
    padding: 1rem;
    font-weight: bold;
    letter-spacing: 0.08rem;
  }
  .search-box {
    background: #2f3640;
    height: 15px;
    border-radius: 15px;
    padding: 10px;
  }
  .search-box:hover > .search-input {
    width: 240px;
    padding: 0 6px;
  }
  .search-box:hover > {
    background: white;
    color: #2f3640;
  }
  .search-button {
    color: white;
    float: right;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    border: none;
  }
  .search-input {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 20px;
    width: 0px;
  }
  @media screen and (max-width: 620px) {
    .searchBox:hover > .searchInput {
      width: 150px;
      padding: 0 6px;
    }
  }
`;
export default Wrapper;
