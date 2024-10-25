import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { VscAccount, VscTerminalDebian  } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Nav_bar = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <VscTerminalDebian className="logo" />
        <Link to="/">
          <Navbar.Brand href="/home">EventSnap</Navbar.Brand>
        </Link>
          <Nav className="me-auto">
          <Link to="/eventspage">Browse Events</Link>
          </Nav>
        </Container>
        <VscAccount className="account-logo" />
      </Navbar>
    </div>
  )
}

export default Nav_bar