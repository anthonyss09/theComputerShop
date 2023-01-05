import FormRow from "../../components/FormRow";
import Wrapper from "../../assets/wrappers/Form";
import { Link } from "react-router-dom";

export default function RegisterPage({
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleRegister,
}) {
  return (
    <Wrapper>
      <form className="form" onSubmit={handleRegister}>
        <h3 className="header">Create your account</h3>
        <FormRow
          name="firstName"
          id="first name"
          onChange={handleFirstNameChange}
        />
        <FormRow
          name="lastName"
          id="last name"
          onChange={handleLastNameChange}
        />
        <FormRow name="email" onChange={handleEmailChange} />
        <FormRow name="password" onChange={handlePasswordChange} />
        <button className="button">Register</button>
        <span className="form-text">
          Aready a member?{" "}
          <Link to="/login" className="link link-login">
            Login
          </Link>
        </span>
      </form>
    </Wrapper>
  );
}
