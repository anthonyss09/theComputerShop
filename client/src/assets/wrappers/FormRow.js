import styled from "styled-components";

const Wrapper = styled.aside`
  .form-input {
    height: 2.6rem;
    background: rgb(20, 20, 20);
    border: 1px solid lightBlue;
    border: 1px solid rgb(140, 140, 140);
    border-radius: 2.2%;
    padding-left: 0.8rem;
    font-size: 1rem;
  }
  .form-input:focus {
  }
  .form-label {
    position: absolute;
    top: -0.6rem;
    left: 0.4rem;
    background: black;
    padding: 0 0.2rem;
    text-transform: capitalize;
    color: rgb(200, 200, 200);
    color: rgb(150, 150, 150);
    // color: gray;
  }
  .form-row {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    position: relative;
  }
`;

export default Wrapper;
