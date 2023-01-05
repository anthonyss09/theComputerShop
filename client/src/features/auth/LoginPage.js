import FormLogin from "./FormLogin";
import { useState } from "react";
import { useLoginUserMutation } from "../api/apiSlice";
import { useToast, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginUserMutation();

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
      const user = await login({ email, password });
      navigate("/");
    } catch (error) {
      toast({
        position: "top-right",
        title: "error",
        description: "error",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
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

  return <section className="center page-height">{content}</section>;
}
