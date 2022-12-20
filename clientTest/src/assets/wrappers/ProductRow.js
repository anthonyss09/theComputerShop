import styled from "styled-components";

const Wrapper = styled.section`
  .container-main {
    position: relative;
  }
  .plus-circle {
    color: rgb(190, 190, 190);
    color: black;
  }
  .plus-circle-container {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    position: absolute;
    right: 0;
    top: 0;
    color: lightYellow;
    color: lightBlue;
    color: rgb(240, 240, 240);
  }
  .plus-circle-container:hover {
    cursor: pointer;
  }
  .preview-row {
    // background: rgb(20, 20, 20);
    // width: 94vw;
    display: flex;
    flex-wrap: no-wrap;
    overflow: hidden;
    justify-content: space-between;
    gap: 1rem;
  }
  .row-title {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
`;

export default Wrapper;
