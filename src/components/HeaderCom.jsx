import React from "react";
import "../index.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function HeaderCom({ isLoggedIn, username }) {
  return (
    <div>
      {/* <Navbar bg="primary" variant="dark"> */}
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Airline Booking</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isLoggedIn ? (
              <Nav className="ms-auto">
                {/* <span
                  className="text-gray-dark"
                  style={{ marginRight: "1rem" }}
                >
                  Welcome,{" "}
                </span> */}
                <Nav.Link
                  to="/user"
                  className="text-gray-dark hover:text-primary"
                  style={{ marginRight: "1rem" }}
                >
                  {username}
                </Nav.Link>
                <Nav.Link href="/booking">Booking</Nav.Link>
                <Nav.Link href="/logout">logout</Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Nav.Link href="/login">Log in</Nav.Link>
                <Nav.Link href="/register">Resigter</Nav.Link>
              </Nav>
            )}
            {/* <Nav.Link href="/login">Log in</Nav.Link>
              <Nav.Link href="/registerPage">Resigter</Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default HeaderCom;
