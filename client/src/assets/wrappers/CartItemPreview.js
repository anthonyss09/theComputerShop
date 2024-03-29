import styled from "styled-components";

const Wrapper = styled.aside`
  .counts {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
  .icon:hover {
    cursor: pointer;
  }
  .preview-card {
    width: 90vw;
    max-width: 600px;
    // border: 2px solid rgb(160, 160, 160);
    // background: rgb(30, 30, 30);
    // background: rgb(50, 50, 50);
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(60, 60, 60);
  }
  .preview-image {
    width: 100px;
  }
`;

export default Wrapper;
