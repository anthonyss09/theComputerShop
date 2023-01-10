import styled from "styled-components";

const Wrapper = styled.aside`
  .close-button {
    margin-top: 1rem;
    margin-left: 1rem;
    background: rgb(30, 30, 30);
    padding: 0.4rem;
    align-self: flex-start;
    border: none;
  }
  .sidebar-container {
    background: rgb(30, 30, 30);
    position: absolute;
    width: 94%;
    max-width: 880px;
    height: 60vh;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    z-index: 3;
  }
`;

export default Wrapper;
