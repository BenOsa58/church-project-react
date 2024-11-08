import React, { useState, FormEvent, ChangeEvent, useContext } from "react";
import { Button, Container, Form, FormLabel } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

function Login() {
  const redirectTo = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    // console.log("email::", email, "password:::", password);
    const loginProcess = await login(email, password);
    console.log("loginProcess :>> ", loginProcess);
    if (loginProcess === true) {
      alert("you logged in successfully, you will be redirected to Home");
      await redirectTo("/", { replace: true });
    } else {
      alert(loginProcess);
    }
  };

  return (
    <>
      <Container className="d-flex flex-column align-items-center ">
        <h1>Login</h1>

        <Form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button type="submit">Login</Button>
        </Form>
        <Link to={"/register"}>
          {" "}
          If you don't have an account, register first
        </Link>
      </Container>
      {/* <ToastContainer autoClose={1000} /> */}
    </>
  );
}
export default Login;
