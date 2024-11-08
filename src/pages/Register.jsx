import React, { useState, FormEvent, ChangeEvent, useContext } from "react";
import { Button, Container, Form, FormLabel } from "react-bootstrap";
import { AuthContext } from "../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const redirectTo = useNavigate();
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    console.log("email::", email, "password:::", password);
    const registration = await register(email, password);
    if (registration === true) {
      alert("you registered successfully, login  now");
      await redirectTo("/login");
    } else {
      alert(registration);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center ">
      <h1>Register</h1>
      <Form onSubmit={handleRegisterSubmit}>
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
        <Button type="submit">Register</Button>
      </Form>
      <Link to={"/login"}> If you have an account, go to login</Link>
    </Container>
  );
}
export default Register;
