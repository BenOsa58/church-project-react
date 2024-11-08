import React, { Fragment, useContext } from "react";
import "../styles/generalStyles.css";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CircleUserRound, LogOut, UserX } from "lucide-react";
import { AuthContext } from "../context/Authcontext";

function MyNavbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <Navbar expand="sm" className="bg-body-tertiary pb-0">
      <Container>
        <Navbar.Brand href="/" className="mr-1 ml-0" as={Link}>
          <img src="./churchIconSvg.svg" alt="" style={{ width: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>

            <Nav.Link to="/services" as={NavLink}>
              Services
            </Nav.Link>
            <Nav.Link to="/reviews" as={NavLink}>
              ReviewsPage
            </Nav.Link>
            <Nav.Link to="/register" as={NavLink}>
              Register
            </Nav.Link>
            <Nav.Link to="/login" as={NavLink}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {!user && (
          <Nav.Link
            to="/login"
            as={Link}
            className="d-flex flex-column  align-items-center"
          >
            <UserX color="red" />
            no user
          </Nav.Link>
        )}
        {user && (
          <div className="d-flex flex-row  justify-content-around  gap-2">
            <div className="d-flex flex-column  align-items-center">
              <CircleUserRound color="green" />
              {user.email}
            </div>

            <LogOut color="red" onClick={logout} cursor="pointer" />
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
