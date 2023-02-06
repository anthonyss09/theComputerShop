import styled from "styled-components";

const Wrapper = styled.section`
  .button {
    background: var(--mintGreen);
    width: 60%;
    color: rgb(20, 20, 20);
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .cart-view {
    display: flex;
    flex-direction: column;
    // gap: 1rem;
    align-items: center;
    padding-top: 2rem;
  }
  .cart-summary {
    width: 60%;
    padding: 1rem;
    line-height: 2.6rem;
    text-align: center;
  }
  .total {
    border-top: 1px solid rgb(60, 60, 60);
    font-size: 1.2rem;
  }
`;

export default Wrapper;
