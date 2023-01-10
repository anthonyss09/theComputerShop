import Wrapper from "../../assets/wrappers/Form";
import FormRow from "../../components/FormRow";
import { Link } from "react-router-dom";

export default function FormLogin({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
}) {
  return (
    <Wrapper>
      <form className="form" onSubmit={handleLogin}>
        <h3 className="header">Login to your account</h3>
        <FormRow
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <FormRow
          id="password"
          name="password"
          type="text"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="button">Login</button>
        <span className="form-text">
          Not yet a member?{" "}
          <Link to="/register" className="link link-login">
            Register
          </Link>
        </span>
      </form>
    </Wrapper>
  );
}
