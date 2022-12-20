import styled from "styled-components";

const Wrapper = styled.aside`
  img {
    border-radius: 5%;
  }
  .preview-card {
    width: 150px;
    height: 160px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background: rgb(45, 45, 45);
    background: rgb(180, 180, 180);
    background: black;
    padding: 0.4rem;
    border-radius: 5%;
  }
  .preview-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .preview-image {
    width: 100%;
    max-height: 100px;
  }
  .preview-text {
    color: black;
    color: white;
    color: rgb(190, 190, 190);
    font-weight: 500;
  }
`;

export default Wrapper;
