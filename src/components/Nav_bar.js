import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { VscAccount, VscTerminalDebian  } from "react-icons/vsc";

const Nav_bar = () => {
  return (
    <div className="animate">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <VscTerminalDebian className="logo" />
          <Navbar.Brand href="#home">EventSnap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#browseevents">Browse Events</Nav.Link>
          </Nav>
        </Container>
        <VscAccount className="account-logo" />
      </Navbar>
    </div>
  )
}

export default Nav_bar