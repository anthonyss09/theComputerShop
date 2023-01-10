import styled from "styled-components";

const Wrapper = styled.aside`
  .nav-link {
    display: grid;
    place-items: center;
    background: rgb(20, 20, 20);
    border: 2px solid rgb(20, 20, 20);
    border: 2px solid black;
    height: 100%;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // padding: 0 1rem 1rem 1rem;
    // display: none;
    margin-top: 0.6rem;
    height: 38vw;
    width: 40vw;
    display: none;
  }
  @media (min-width: 760px) {
    .nav-links {
      display: flex;
    }
  }
`;
export default Wrapper;
