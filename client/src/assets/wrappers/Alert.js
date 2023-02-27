import styled from "styled-components";

const Wrapper = styled.aside`
  position: absolute;
  top: 6rem;
  .danger {
    background: pink;
    color: red;
  }
  .success {
    background: lightBlue;
    color: blue;
  }
  .alert {
    width: 300px;
    text-align: center;
    padding: 0.6rem;
  }
`;

export default Wrapper;
