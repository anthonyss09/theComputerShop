import styled from "styled-components";

const Wrapper = styled.section`
  .button {
    background: var(--mintGreen);
    border: none;
    color: black;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 0.8rem;
  }
  .form {
    // background: rgb(75, 75, 75);
    padding: 2rem 2rem;
    padding: 2rem;
    margin: 1rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    gap: 1.2rem;
    width: 75vw;
    max-width: 260px;
  }
  .form-text {
    color: var(--200-black);
    text-align: center;
  }
  .header {
    text-align: center;
    margin-bottom: 1rem;
    color: lightYellow;
    color: lightBlue;
    color: lightGray;
    // color: gray;
    font-weight: 800;
  }
  .link-login {
    text-decoration: underline;
  }
`;

export default Wrapper;
