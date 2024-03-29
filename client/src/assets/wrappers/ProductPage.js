import styled from "styled-components";

const Wrapper = styled.section`
  .banner {
    color: lightBlue;
  }
  .products-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .products-page {
    display: flex;
  }
  .product-previews {
    display: flex;
    flex-wrap: wrap;
    margin: 0 2rem 2rem 2rem;
  }
  .sidebar {
    // margin-top: 3.2rem;
  }
  // .single-preview {
  //   padding: 1rem;
  //   background: rgb(30, 30, 30);
  //   width: fit-content;
  //   border-radius: 5%;
  // }
  .single-preview-container {
    border-bottom: 1px solid rgb(60, 60, 60);
    padding: 1rem;
    flex-grow: 1;
  }
  .spinner {
    margin-top: 1rem;
    min-height: 150px;
    min-width: 150px;
    margin-left: -1rem;
  }
  .title {
    text-transform: capitalize;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: lightYellow;
  }
`;
export default Wrapper;
