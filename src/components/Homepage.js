import NavBar from "./Nav_bar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Homepage = () => {
  return (
    <>
    <NavBar />
    <Container>
      <div className="homepage">
      <h1>Welcome to EventSnap</h1>
      <p>Explore upcoming events, manage RSVPs, and more.</p>
      <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Events"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
      </div>
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </div>

    </Container>
    </>
  );
};

export default Homepage;
