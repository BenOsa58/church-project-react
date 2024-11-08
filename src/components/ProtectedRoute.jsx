import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import { Badge } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [message, setMessage] = useState("");
  const [redirectRoute, setRedirectRoute] = useState("");
  const redirectTo = useNavigate();
  const { pathname } = useLocation();
  console.log("location :>> ", location);
  console.log("children :>> ", children);
  const { user } = useContext(AuthContext);
  const isLogged = user ? true : false;
  useEffect(() => {
    if (isLogged) {
      if (pathname.includes("login")) {
        setMessage("You are already logged in, click here to go to Home");
        // setTimeout(() => {
        //   redirectTo("/")
        // })
        setRedirectRoute("/");
      }
      if (pathname.includes("register")) {
        setMessage("You  already have an account, click here to go to Home");
        setRedirectRoute("/");
      }
    }
  }, [user?.email, pathname]);

  return (
    <>
      {!isLogged ? (
        children
      ) : (
        <LoginFirst redirectRoute={redirectRoute} message={message} />
      )}
    </>
  );
}

export default ProtectedRoute;

export function LoginFirst({ redirectRoute, message }) {
  return (
    <Link to={`${redirectRoute}`} className="d-flex justify-content-center">
      <Badge bg="primary" className="badge-size">
        {message}
      </Badge>
    </Link>
  );
}
