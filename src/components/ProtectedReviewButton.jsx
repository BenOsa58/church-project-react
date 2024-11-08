import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import { Badge } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ProtectedReviewButton({ children }) {
  const redirectRoute = "/login";
  const message = "Sign in with your account to write a review";
  const { user } = useContext(AuthContext);
  const isLogged = user ? true : false;

  return (
    <>
      {isLogged ? (
        children
      ) : (
        <LoginFirst redirectRoute={redirectRoute} message={message} />
      )}
    </>
  );
}

export default ProtectedReviewButton;

export function LoginFirst({ redirectRoute, message }) {
  return (
    <Link to={`${redirectRoute}`}>
      <Badge bg="primary" className="badge-size">
        {message}
      </Badge>
    </Link>
  );
}
