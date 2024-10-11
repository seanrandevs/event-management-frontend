import NavBar from "./Nav_bar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Homepage = () => {
  return (
    <>
    <NavBar />
    <Container>
      <div className="homepage">
      <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
        <h1>Welcome to EventSnap</h1>
        <p>Explore upcoming events, manage RSVPs, and more.</p>
      </div>
    </Container>
    </>
  );
};

export default Homepage;
