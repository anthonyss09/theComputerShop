import styled from "styled-components";

const Wrapper = styled.section`
  p {
    color: rgb(190, 190, 190);
    font-size: 1.4rem;
  }
  h3 {
    // border-bottom: 1px solid lightGrey;
    font-style: italic;
  }
  li {
    font-size: 0.8rem;
    margin: 0.4rem 0;
    color: rgb(190, 190, 190);
  }
  section {
    padding: 1rem;
    padding-bottom: 4rem;
  }
  img {
    width: 100%;
    min-width: 250px;
    max-width: 400px;
    margin: 1rem auto;
  }

  .button {
    width: 100%;
    height: 3rem;
    background: orange;
    background: var(--mintGreen);
    font-weight: bold;
    margin: 1rem 0;
    color: rgb(20, 20, 20);
    border-radius: 2%;
  }
  .product-specs {
    padding: 1rem 2rem;
    max-width: 350px;
    color: rgb(190, 190, 190);
  }
  .product-title {
    line-height: 1.8rem;
    // padding: 1rem;
  }
  @media (min-width: 800px) {
    img {
      width: 250px;
      grid-row: 1/3;
      grid-column: 1/2;
      margin: 0;
    }
    section {
      min-height: 60vh;
      padding: 2rem;
    }
    .button {
      margin: 0;
    }
    .single-item-container {
      display: grid;
      gap: 2rem;
      grid-template-rows: max-content;
      padding: 2rem;
    }
    .product-title {
      grid-row: 2/3;
      grid-column: 1/2;
      padding-left: rem;
      height: min-content;
    }
    .product-specs {
      grid-row: 1;
      grid-column: 2/3;
      border-left: 1px solid lightGrey;
    }
  }
`;
export default Wrapper;
