import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="navbar-custom mt-3" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid>
        <Navbar.Toggle 
          aria-controls="navbarSupportedContent"
          className="ms-auto" 
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link href="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="/myProjects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link href="/aboutMe" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link href="/contactMe" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;