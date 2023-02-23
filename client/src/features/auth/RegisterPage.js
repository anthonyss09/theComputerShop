import FormRegister from "./FormRegister";
import { useState } from "react";
import { useRegisterUserMutation } from "../api/apiSlice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

export default function RegisterPage() {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };
  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        firstName,
        lastName,
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem(
        "localCart",
        JSON.stringify(response.data.user.userCart)
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else {
    content = (
      <FormRegister
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleRegister={handleRegister}
      />
    );
  }
  return <section className="center page-height">{content}</section>;
}
