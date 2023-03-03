import styled from "styled-components";

const Wrapper = styled.aside`
  position: absolute;
  // top: 6rem;
  top: 2rem;
  left: 20%;
  .danger {
    background: pink;
    // color: red;
  }
  .success {
    background: lightBlue;
  }
  .alert {
    width: 300px;
    text-align: center;
    color: rgb(40, 40, 40);
    padding: 0.6rem;
    font-weight: bold;
  }
`;

export default Wrapper;
