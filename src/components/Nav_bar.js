import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Nav_bar = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">EventSnap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#browseevents">Browse Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav_bar