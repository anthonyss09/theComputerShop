import FormLogin from "./FormLogin";
import { useState } from "react";
import { useLoginUserMutation } from "../api/apiSlice";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { clearAlert, selectAlertsInfo } from "../alerts/alertsSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../alerts/Alert";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginUserMutation();
  const { showAlert, alertMessage, alertType } = useSelector(selectAlertsInfo);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem(
        "localCart",
        JSON.stringify(response.data.user.userCart)
      );
      navigate("/");
    } catch (error) {}
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
  };
  let content;
  if (isLoading) {
    content = <Spinner />;
  } else {
    content = (
      <FormLogin
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <section className="center page-height">
      {showAlert && <Alert alertType={alertType} alertMessage={alertMessage} />}
      {content}
    </section>
  );
}
