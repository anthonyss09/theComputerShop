import Wrapper from "../../assets/wrappers/Alert";

export default function Alert({ alertType, alertMessage }) {
  return (
    <Wrapper>
      <div className={alertType + " alert"}>{alertMessage}</div>
    </Wrapper>
  );
}
