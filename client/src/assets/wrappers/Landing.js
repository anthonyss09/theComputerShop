import styled from "styled-components";

const Wrapper = styled.section`
  .image-container {
    display: flex;
    justify-content: center;
  }
  .main-image-section {
    background: black;
    display: flex;
    justify-content: center;
  }
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
    display: none;
  }
  .preview-section {
    margin: 2rem;
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
  .sub-section {
    display: flex;
    margin: 0 2rem;
    height: 35vh;
    background: rgb(30, 30, 30);
  }
  .sub-text {
    letter-spacing: 0.1rem;
    font-size: 2rem;
    color: lightYellow;
    text-align: center;
  }
  .sub-text-container {
    width: 50%;
    display: grid;
    place-items: center;
  }
  .sub-image {
    border-radius: 5%;
    height: 80%;
    width: 90%;
    max-width: 250px;
  }
  .sub-image-container {
    width: 50%;
    // margin: 1rem 1rem;
    display: grid;
    place-items: center;
  }

  @media (min-width: 760px) {
    .image-container {
      width: 70%;
    }
    .main-image-section {
      justify-content: flex-start;
    }
    .nav-links {
      margin-top: 0.6rem;
      display: flex;
      width: 40%;
    }
  }
`;

export default Wrapper;
